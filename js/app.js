/* ==========================================================================
   app.js — arma la página a partir de js/contenido.js
   (No hace falta tocar este archivo para editar textos o fotos.)
   ========================================================================== */
(function () {
  "use strict";
  var C = window.SITIO;
  var $ = function (s, el) { return (el || document).querySelector(s); };
  var $$ = function (s, el) { return Array.prototype.slice.call((el || document).querySelectorAll(s)); };
  var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- utilidades de texto ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  /* mini-formato: **negrita**, *cursiva*, [texto](enlace) */
  function md(s) {
    return esc(s)
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      .replace(/\[([^\]]+)\]\((https?:[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
      .replace(/\[([^\]]+)\]\((#[^)\s]+)\)/g, '<a href="$2">$1</a>');
  }
  function parrafos(arr) { return (arr || []).map(function (t) { return "<p>" + md(t) + "</p>"; }).join(""); }
  function lista(arr) { return arr && arr.length ? '<ul class="lista">' + arr.map(function (t) { return "<li>" + md(t) + "</li>"; }).join("") + "</ul>" : ""; }
  function ruta(n) { return /^(https?:)?\/\//.test(n) || n.indexOf("/") === 0 ? n : "img/" + n; }
  function d(i) { return ' style="--d:' + (Math.min(i, 6) * 0.08).toFixed(2) + 's"'; }

  /* ---------- carrusel ---------- */
  function carrusel(fotos, alt) {
    if (!fotos || !fotos.length) return "";
    var n = fotos.length;
    var slides = fotos.map(function (f, i) {
      var src = ruta(f);
      return '<figure class="c-slide" aria-roledescription="diapositiva" aria-label="' + (i + 1) + " de " + n + '">' +
        '<div class="c-fondo" style="background-image:url(\'' + esc(src) + '\')"></div>' +
        '<img src="' + esc(src) + '" alt="' + esc(alt + " — foto " + (i + 1)) + '" loading="lazy" draggable="false"></figure>';
    }).join("");
    var puntos = fotos.map(function (_, i) {
      return '<button class="c-punto' + (i === 0 ? " on" : "") + '" aria-label="Ir a la foto ' + (i + 1) + '"></button>';
    }).join("");
    return '<div class="carrusel' + (n === 1 ? " una" : "") + '" tabindex="0" role="group" aria-roledescription="carrusel" aria-label="Fotografías: ' + esc(alt) + '">' +
      '<div class="c-pista">' + slides + "</div>" +
      '<button class="c-btn c-prev" aria-label="Foto anterior">‹</button>' +
      '<button class="c-btn c-next" aria-label="Foto siguiente">›</button>' +
      '<div class="c-puntos">' + puntos + "</div>" +
      '<div class="c-cont" aria-live="polite">1 / ' + n + "</div></div>";
  }

  function initCarrusel(el) {
    var pista = $(".c-pista", el), slides = $$(".c-slide", el), puntos = $$(".c-punto", el), cont = $(".c-cont", el);
    var n = slides.length, i = 0;
    function ir(k) {
      i = (k + n) % n;
      pista.style.transform = "translateX(" + (-100 * i) + "%)";
      puntos.forEach(function (p, j) { p.classList.toggle("on", j === i); });
      if (cont) cont.textContent = (i + 1) + " / " + n;
    }
    if (n < 2) return;
    $(".c-prev", el).addEventListener("click", function () { ir(i - 1); });
    $(".c-next", el).addEventListener("click", function () { ir(i + 1); });
    puntos.forEach(function (p, j) { p.addEventListener("click", function () { ir(j); }); });
    el.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") { ir(i - 1); e.preventDefault(); }
      if (e.key === "ArrowRight") { ir(i + 1); e.preventDefault(); }
    });
    /* deslizar con el dedo / mouse */
    var x0 = null, mov = false;
    pista.addEventListener("pointerdown", function (e) { x0 = e.clientX; mov = false; });
    pista.addEventListener("pointermove", function (e) { if (x0 !== null && Math.abs(e.clientX - x0) > 8) mov = true; });
    pista.addEventListener("pointerup", function (e) {
      if (x0 === null) return;
      var dx = e.clientX - x0; x0 = null;
      if (Math.abs(dx) > 45) { ir(i + (dx < 0 ? 1 : -1)); }
    });
    pista.addEventListener("pointercancel", function () { x0 = null; });
    pista.addEventListener("click", function (e) {
      if (mov) { e.stopPropagation(); mov = false; return; }
      if (e.target.tagName === "IMG") abrirVisor($$("img", el).map(function (m) { return { src: m.currentSrc || m.src, alt: m.alt }; }), i);
    }, true);
  }

  /* ---------- visor ampliado (lightbox) ---------- */
  var visor, vLista = [], vI = 0, vPrev = null;
  function crearVisor() {
    visor = document.createElement("div");
    visor.className = "lb";
    visor.setAttribute("role", "dialog");
    visor.setAttribute("aria-modal", "true");
    visor.setAttribute("aria-label", "Foto ampliada");
    visor.innerHTML = '<button class="x" aria-label="Cerrar">×</button><button class="p" aria-label="Anterior">‹</button>' +
      '<figure><img alt=""><figcaption></figcaption></figure><button class="n" aria-label="Siguiente">›</button>';
    document.body.appendChild(visor);
    $(".x", visor).addEventListener("click", cerrarVisor);
    $(".p", visor).addEventListener("click", function () { verVisor(vI - 1); });
    $(".n", visor).addEventListener("click", function () { verVisor(vI + 1); });
    visor.addEventListener("click", function (e) { if (e.target === visor || e.target.tagName === "FIGURE") cerrarVisor(); });
    document.addEventListener("keydown", function (e) {
      if (!visor.classList.contains("on")) return;
      if (e.key === "Escape") cerrarVisor();
      if (e.key === "ArrowLeft") verVisor(vI - 1);
      if (e.key === "ArrowRight") verVisor(vI + 1);
    });
  }
  function verVisor(k) {
    vI = (k + vLista.length) % vLista.length;
    var it = vLista[vI];
    $("img", visor).src = it.src; $("img", visor).alt = it.alt;
    $("figcaption", visor).textContent = it.alt + (vLista.length > 1 ? "  ·  " + (vI + 1) + " / " + vLista.length : "");
  }
  function abrirVisor(lista, k) {
    if (!visor) crearVisor();
    vLista = lista; vPrev = document.activeElement;
    visor.classList.toggle("una", lista.length < 2);
    visor.classList.add("on"); document.body.style.overflow = "hidden";
    verVisor(k); $(".x", visor).focus();
  }
  function cerrarVisor() {
    visor.classList.remove("on"); document.body.style.overflow = "";
    if (vPrev) vPrev.focus();
  }

  /* ---------- bloques de contenido ---------- */
  function cab(num, titulo, bajada) {
    return '<div class="cab rev">' + (num ? '<span class="num">' + num + "</span>" : "") + "<h2>" + esc(titulo) + "</h2>" +
      (bajada ? '<p class="bajada">' + md(bajada) + "</p>" : "") + "</div>";
  }

  function contarFotos() {
    var t = 0;
    C.instituciones.forEach(function (ins) {
      ins.actividades.forEach(function (a) {
        t += (a.fotos || []).length;
        (a.extras || []).forEach(function (x) { t += (x.fotos || []).length; });
      });
      t += (ins.galeria || []).length;
    });
    return t;
  }
  function contarActividades() {
    return C.instituciones.reduce(function (s, i) { return s + i.actividades.length; }, 0);
  }

  function portadaHTML() {
    var p = C.portada;
    return '<section class="portada" id="inicio" aria-label="Portada">' +
      '<canvas id="red" aria-hidden="true"></canvas><span class="mancha a"></span><span class="mancha b"></span>' +
      '<div class="portada-in">' +
      '<img class="escudo" src="' + esc(p.escudo) + '" alt="Escudo del ISFD San Miguel" width="168" height="170">' +
      '<div class="inst-corta">' + esc(p.institucionCorta) + "</div>" +
      '<div class="etiqueta">' + esc(p.etiqueta) + "</div>" +
      "<h1><em>" + esc(p.titulo) + "</em></h1>" +
      '<p class="subtitulo">' + esc(p.subtitulo) + "</p>" +
      '<p class="carrera">' + esc(p.carrera) + "</p>" +
      '<p class="institucion">' + esc(p.institucion) + "</p>" +
      '<div class="ficha">' + p.datos.map(function (x) { return "<div><b>" + esc(x[0]) + "</b><span>" + esc(x[1]) + "</span></div>"; }).join("") + "</div>" +
      '<p class="frase">' + esc(p.frase) + "</p>" +
      '<a class="btn" href="#introduccion">' + esc(p.boton) + ' <span class="flecha" aria-hidden="true">↓</span></a>' +
      "</div></section>";
  }

  function introHTML() {
    var I = C.intro, O = C.objetivos;
    var cifras = [
      [I.horas, "horas de práctica"],
      [C.instituciones.length, "instituciones"],
      [contarActividades(), "actividades registradas"],
      [contarFotos(), "fotografías"]
    ].map(function (c, k) {
      return '<div class="cifra rev"' + d(k) + '><b data-cuenta="' + c[0] + '">0</b><span>' + c[1] + "</span></div>";
    }).join("");
    return '<section class="seccion" id="introduccion"><div class="contenedor">' +
      cab("INTRODUCCIÓN", I.titulo) +
      '<div class="cols"><div class="rev">' + parrafos(I.parrafos) + "</div>" +
      '<div class="cifras">' + cifras + '<div class="periodo rev">Período: ' + esc(I.periodo) + "</div></div></div></div></section>" +

      '<section class="seccion alt" id="objetivos"><div class="contenedor">' +
      cab("OBJETIVOS", O.titulo) +
      '<div class="destacado rev"><h3>' + esc(O.general.titulo) + "</h3><p>" + md(O.general.texto) + "</p></div>" +
      '<h3 class="rev" style="margin:2.2rem 0 .2rem;font-size:1.3rem">' + esc(O.especificos.titulo) + "</h3>" +
      '<div class="objs">' + O.especificos.lista.map(function (t, k) {
        return '<div class="obj rev"' + d(k) + "><i>0" + (k + 1) + "</i>" + md(t) + "</div>";
      }).join("") + "</div>" +
      '<div class="tarjeta rev" style="margin-top:2rem"><h3>' + esc(O.importancia.titulo) + "</h3><p style=\"margin:0\">" + md(O.importancia.texto) + "</p></div>" +
      "</div></section>";
  }

  function actividadHTML(a) {
    var extras = (a.extras || []).map(function (x) {
      return '<div class="extra"><h5>' + md(x.titulo) + "</h5>" + parrafos(x.texto) + lista(x.lista) + parrafos(x.texto2) +
        carrusel(x.fotos, x.titulo) + "</div>";
    }).join("");
    return '<article class="act rev"><div class="act-card">' +
      '<span class="fecha"><span aria-hidden="true">📅</span> ' + esc(a.fecha) + "</span>" +
      "<h4>" + md(a.titulo) + "</h4>" +
      (a.resumen ? '<p class="lead">' + md(a.resumen) + "</p>" : "") +
      parrafos(a.texto) + lista(a.lista) +
      carrusel(a.fotos, a.titulo) + extras +
      "</div></article>";
  }

  function institucionHTML(ins, k) {
    var acts = ins.actividades.slice().sort(function (a, b) { return a.orden < b.orden ? -1 : a.orden > b.orden ? 1 : 0; });
    var datos = ins.datos && ins.datos.length ? '<dl class="datos">' + ins.datos.map(function (x) {
      return "<div><dt>" + esc(x[0]) + "</dt><dd>" + md(x[1]) + "</dd></div>";
    }).join("") + "</dl>" : "";
    var mapa = ins.mapa ? '<a class="btn claro chico mapa-btn" href="' + esc(ins.mapa) + '" target="_blank" rel="noopener">📍 Ver en Google Maps</a>' : "";
    var galeria = "";
    if (ins.galeria && ins.galeria.length) {
      galeria = '<div class="sub rev"><h3>Galería de ' + esc(ins.menu) + "</h3></div>" + carrusel(ins.galeria, "Galería de " + ins.menu);
    } else if (C.ajustes && C.ajustes.mostrarEspaciosVacios) {
      galeria = '<div class="sub rev"><h3>Galería de ' + esc(ins.menu) + '</h3></div><div class="vacio">+ Agregar fotografía</div>';
    }
    var n = String(k + 1).padStart(2, "0");
    return '<section class="seccion inst' + (k % 2 ? "" : " alt") + '" id="' + ins.id + '" data-num="' + n + '"><div class="contenedor">' +
      cab("INSTITUCIÓN " + n, ins.titulo, ins.bajada) +
      '<div class="cols"><div class="rev"><h3 style="font-size:1.25rem;margin-bottom:.8rem">Presentación de la institución y ubicación</h3>' +
      parrafos(ins.presentacion) + "</div>" +
      '<aside class="tarjeta rev"' + d(2) + ">" + datos + mapa + "</aside></div>" +
      '<div class="sub rev"><h3>Actividades</h3><small>' + acts.length + (acts.length === 1 ? " registro" : " registros") + "</small></div>" +
      '<div class="linea">' + acts.map(actividadHTML).join("") + "</div>" + galeria +
      "</div></section>";
  }

  function dificultadesHTML() {
    var D = C.dificultades;
    return '<section class="seccion" id="dificultades"><div class="contenedor">' +
      cab("RECORRIDO", D.titulo, D.bajada) +
      '<div class="dos"><div class="tarjeta prob rev"><h3>' + esc(D.problemas.titulo) + "</h3><ul>" +
      D.problemas.lista.map(function (t) { return "<li>" + md(t) + "</li>"; }).join("") + "</ul></div>" +
      '<div class="tarjeta sol rev"' + d(2) + "><h3>" + esc(D.soluciones.titulo) + "</h3><ul>" +
      D.soluciones.lista.map(function (t) { return "<li>" + md(t) + "</li>"; }).join("") + "</ul></div></div>" +
      '<div class="sub rev"><h3>' + esc(D.herramientasTitulo) + "</h3></div>" +
      '<p class="rev" style="color:var(--suave)">' + md(D.herramientasBajada) + "</p>" +
      '<div class="herr-grid">' + D.herramientas.map(function (h, k) {
        return '<figure class="herr rev"' + d(k % 4) + ' style="margin:0"><button type="button" data-visor="' + esc(h.img) + '" data-alt="' + esc(h.titulo) + '" aria-label="Ampliar foto: ' + esc(h.titulo) + '">' +
          '<img src="' + esc(ruta(h.img)) + '" alt="' + esc(h.titulo) + '" loading="lazy"></button>' +
          "<div><h4>" + esc(h.titulo) + "</h4><p>" + md(h.texto) + "</p></div></figure>";
      }).join("") + "</div></div></section>";
  }

  function glosarioHTML() {
    var G = C.glosario;
    return '<section class="seccion alt" id="glosario"><div class="contenedor">' + cab("TÉRMINOS", G.titulo, G.bajada) +
      '<div class="glos">' + G.terminos.map(function (t, k) {
        return '<div class="termino rev"' + d(k) + "><b>" + esc(t[0]) + "</b><p>" + md(t[1]) + "</p></div>";
      }).join("") + "</div></div></section>";
  }

  function conclusionHTML() {
    var K = C.conclusion;
    return '<section class="seccion oscura" id="conclusion"><div class="contenedor">' + cab("CIERRE", K.titulo) +
      '<div class="rev">' + parrafos(K.parrafos) + "</div>" +
      '<div class="fin rev"><strong>' + esc(K.fin) + "</strong></div></div></section>";
  }

  function futurosHTML() {
    var F = C.futuros;
    var items = (F.proyectos || []).map(function (p) {
      return '<div class="tarjeta proy rev"><h3>' + md(p.titulo) + "</h3>" +
        (p.presentacion ? "<p>" + md(p.presentacion) + "</p>" : "") +
        (p.objetivo ? "<p><strong>Objetivo:</strong> " + md(p.objetivo) + "</p>" : "") +
        (p.observacion ? "<p><strong>Qué observé durante la pasantía:</strong> " + md(p.observacion) + "</p>" : "") +
        (p.desarrollo ? "<p><strong>Cómo se podría desarrollar:</strong> " + md(p.desarrollo) + "</p>" : "") +
        (p.utilidad ? "<p><strong>Utilidad y resultado esperado:</strong> " + md(p.utilidad) + "</p>" : "") + "</div>";
    }).join("");
    return '<section class="seccion" id="proyectos-futuros"><div class="contenedor">' + cab("PRÓXIMOS PASOS", F.titulo) +
      (items || '<div class="reservado rev">' + esc(F.reservado) + "</div>") + "</div></section>";
  }

  function anexosHTML() {
    var A = C.anexos;
    return '<section class="seccion alt" id="anexos"><div class="contenedor">' + cab("DOCUMENTACIÓN", A.titulo, A.bajada) +
      A.items.map(function (it) {
        var fotos = (it.fotos || []).filter(function (f) { return !f.oculta; });
        var cuerpo = "";
        if (fotos.length) {
          cuerpo += '<div class="mini">' + fotos.map(function (f) {
            return '<button type="button" data-visor="' + esc(f.src) + '" data-alt="' + esc(f.alt) + '" aria-label="Ampliar: ' + esc(f.alt) + '"><img src="' + esc(ruta(f.src)) + '" alt="' + esc(f.alt) + '" loading="lazy"></button>';
          }).join("") + "</div>";
        }
        if (it.archivo) {
          cuerpo += '<p style="margin-top:1rem"><a class="btn chico" href="archivos/' + encodeURI(it.archivo) + '" download>⬇ ' + esc(it.archivoEtiqueta || it.archivo) + "</a></p>";
        }
        if (!fotos.length && !it.archivo) cuerpo = '<div class="reservado" style="padding:1.2rem">Espacio reservado para agregar contenido</div>';
        return '<div class="tarjeta anexo rev"><h3>' + md(it.titulo) + "</h3><p>" + md(it.texto) + "</p>" + cuerpo + "</div>";
      }).join("") + "</div></section>";
  }

  /* ---------- menú ---------- */
  function menuHTML() {
    var ins = C.instituciones.map(function (i) { return '<a href="#' + i.id + '">' + esc(i.menu) + "</a>"; }).join("");
    return '<a href="#inicio">Inicio</a><a href="#introduccion">Introducción</a>' +
      '<div class="drop"><button class="drop-btn" type="button" aria-haspopup="true">Instituciones</button><div class="drop-lista">' + ins + "</div></div>" +
      '<a href="#dificultades">Dificultades y soluciones</a><a href="#glosario">Glosario técnico</a>' +
      '<a href="#conclusion">Conclusión</a><a href="#proyectos-futuros">Proyectos futuros</a><a href="#anexos">Anexos</a>';
  }

  /* ---------- animación de la portada: red de nodos ---------- */
  function animarRed() {
    var cv = $("#red"); if (!cv || reduce) return;
    var cx = cv.getContext("2d"), w = 0, h = 0, nodos = [], m = { x: -999, y: -999 }, visible = true, dpr = Math.min(window.devicePixelRatio || 1, 2);
    function medir() {
      var r = cv.getBoundingClientRect(); w = r.width; h = r.height;
      cv.width = w * dpr; cv.height = h * dpr; cx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var n = Math.max(18, Math.min(70, Math.floor(w * h / 17000)));
      nodos = [];
      for (var i = 0; i < n; i++) nodos.push({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35, r: Math.random() * 1.8 + 1.4 });
    }
    function cuadro() {
      requestAnimationFrame(cuadro);
      if (!visible || document.hidden) return;
      cx.clearRect(0, 0, w, h);
      var i, j, a, b, dx, dy, dist;
      for (i = 0; i < nodos.length; i++) {
        a = nodos[i]; a.x += a.vx; a.y += a.vy;
        if (a.x < 0 || a.x > w) a.vx *= -1; if (a.y < 0 || a.y > h) a.vy *= -1;
        for (j = i + 1; j < nodos.length; j++) {
          b = nodos[j]; dx = a.x - b.x; dy = a.y - b.y; dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) { cx.strokeStyle = "rgba(45,95,139," + (0.22 * (1 - dist / 140)).toFixed(3) + ")"; cx.lineWidth = 1; cx.beginPath(); cx.moveTo(a.x, a.y); cx.lineTo(b.x, b.y); cx.stroke(); }
        }
        dx = a.x - m.x; dy = a.y - m.y; dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 170) { cx.strokeStyle = "rgba(194,154,63," + (0.55 * (1 - dist / 170)).toFixed(3) + ")"; cx.lineWidth = 1.3; cx.beginPath(); cx.moveTo(a.x, a.y); cx.lineTo(m.x, m.y); cx.stroke(); }
        cx.fillStyle = "rgba(45,95,139,.55)"; cx.beginPath(); cx.arc(a.x, a.y, a.r, 0, 6.2832); cx.fill();
      }
    }
    var sec = cv.parentElement;
    sec.addEventListener("pointermove", function (e) { var r = cv.getBoundingClientRect(); m.x = e.clientX - r.left; m.y = e.clientY - r.top; });
    sec.addEventListener("pointerleave", function () { m.x = m.y = -999; });
    if ("IntersectionObserver" in window) new IntersectionObserver(function (en) { visible = en[0].isIntersecting; }).observe(sec);
    window.addEventListener("resize", medir);
    medir(); cuadro();
  }

  /* ---------- efectos al hacer scroll ---------- */
  function contar(el) {
    var meta = +el.getAttribute("data-cuenta"), t0 = null;
    if (reduce) { el.textContent = meta; return; }
    function paso(t) {
      if (t0 === null) t0 = t;
      var p = Math.min((t - t0) / 1400, 1), e = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(meta * e);
      if (p < 1) requestAnimationFrame(paso);
    }
    requestAnimationFrame(paso);
  }
  function efectos() {
    var revs = $$(".rev");
    if (!("IntersectionObserver" in window)) { revs.forEach(function (r) { r.classList.add("visto"); }); $$("[data-cuenta]").forEach(function (c) { c.textContent = c.getAttribute("data-cuenta"); }); return; }
    var io = new IntersectionObserver(function (en) {
      en.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add("visto"); io.unobserve(e.target);
        $$("[data-cuenta]", e.target).concat(e.target.hasAttribute("data-cuenta") ? [e.target] : []).forEach(contar);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    revs.forEach(function (r) { io.observe(r); });

    /* resaltar en el menú la sección actual */
    var links = $$(".menu a"), drop = $(".drop-btn");
    var ids = $$("main section[id]");
    var spy = new IntersectionObserver(function (en) {
      en.forEach(function (e) {
        if (!e.isIntersecting) return;
        var id = e.target.id;
        links.forEach(function (a) { a.classList.toggle("activo", a.getAttribute("href") === "#" + id); });
        drop.classList.toggle("activo", C.instituciones.some(function (i) { return i.id === id; }));
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    ids.forEach(function (s) { spy.observe(s); });
  }

  /* ---------- armado ---------- */
  function iniciar() {
    $("#app").innerHTML = portadaHTML() + introHTML() + C.instituciones.map(institucionHTML).join("") +
      dificultadesHTML() + glosarioHTML() + conclusionHTML() + futurosHTML() + anexosHTML();
    $("#menu").innerHTML = menuHTML();
    $("#pie").innerHTML = '<img src="' + esc(C.portada.escudo) + '" alt="" width="56" height="57"><p style="margin:0">' + esc(C.pie) + "</p>";

    $$(".carrusel").forEach(initCarrusel);
    $$("[data-visor]").forEach(function (b) {
      b.addEventListener("click", function () {
        var grupo = $$("[data-visor]", b.closest(".herr-grid,.mini"));
        var lista = grupo.map(function (x) { return { src: ruta(x.getAttribute("data-visor")), alt: x.getAttribute("data-alt") }; });
        abrirVisor(lista, grupo.indexOf(b));
      });
    });

    /* menú móvil */
    var burger = $("#burger"), menu = $("#menu");
    function cerrar() { menu.classList.remove("abierto"); burger.setAttribute("aria-expanded", "false"); burger.setAttribute("aria-label", "Abrir menú"); }
    burger.addEventListener("click", function () {
      var ab = menu.classList.toggle("abierto");
      burger.setAttribute("aria-expanded", ab); burger.setAttribute("aria-label", ab ? "Cerrar menú" : "Abrir menú");
    });
    menu.addEventListener("click", function (e) { if (e.target.tagName === "A") cerrar(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") cerrar(); });

    /* barra de progreso, sombra del menú y botón "arriba" */
    var barra = $("#progreso"), nav = $("#nav"), arriba = $("#arriba"), esperando = false;
    function scroll() {
      var y = window.scrollY, tot = document.documentElement.scrollHeight - window.innerHeight;
      barra.style.width = (tot > 0 ? (y / tot) * 100 : 0) + "%";
      nav.classList.toggle("scrolled", y > 10);
      arriba.classList.toggle("ver", y > 700);
      esperando = false;
    }
    window.addEventListener("scroll", function () { if (!esperando) { esperando = true; requestAnimationFrame(scroll); } }, { passive: true });
    arriba.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" }); });
    scroll();

    efectos();
    animarRed();
    if (location.hash) { var t = document.getElementById(location.hash.slice(1)); if (t) setTimeout(function () { t.scrollIntoView(); }, 60); }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", iniciar); else iniciar();
})();
