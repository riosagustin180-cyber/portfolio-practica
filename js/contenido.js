/* ==========================================================================
   CONTENIDO DEL SITIO  —  ACÁ SE EDITA TODO EL TEXTO Y LAS FOTOS
   --------------------------------------------------------------------------
   Cómo editar (más detalles en LEEME.md):
   • Cambiar un texto: modificá lo que está entre comillas "...".
   • Negrita dentro de un texto: **así**.   Enlace: [texto](https://...)
   • Agregar una foto a una actividad: copiá la imagen a la carpeta /img y
     sumá su nombre a la lista  fotos: [ ... ]  de esa actividad.
   • Agregar una actividad: copiá un bloque { ... }, pegalo y cambiá los datos.
     El sitio las ordena solo por el campo  orden  (AAAA-MM-DD).
   • Cuidado con las comas "," al final de cada línea y con las comillas.
   ========================================================================== */

window.SITIO = {

  /* ----------------------------- AJUSTES ----------------------------- */
  ajustes: {
    /* true  = muestra el recuadro "+ Agregar fotografía" en las galerías generales vacías
       false = lo oculta hasta que cargues fotos en  galeria: [ ... ]  de cada institución */
    mostrarEspaciosVacios: false
  },

  /* ---------------------------- PORTADA ---------------------------- */
  portada: {
    institucionCorta: "ISFD SAN MIGUEL",
    etiqueta: "PORTFOLIO ACADÉMICO · 2026",
    titulo: "Proyecto final de Práctica Profesionalizante",
    subtitulo: "Mi experiencia de pasantía",
    carrera: "Tecnicatura Superior en Infraestructura Informática",
    institucion: "Instituto Superior de Formación Docente San Miguel (Corrientes)",
    escudo: "img/escudo-isfd.png",
    datos: [
      ["Alumno", "Agustín Nicolás Ríos"],
      ["Docente", "Yesica Gómez"],
      ["Rector", "Miguel Ángel Arbo"],
      ["Cohorte", "2024 · Unidad curricular: Práctica Profesionalizante"]
    ],
    frase: "Mis experiencias, actividades y aprendizajes durante mi formación profesional.",
    boton: "Conocer mi experiencia"
  },

  pie: "Portfolio académico · Práctica Profesionalizante · 2026",

  /* ---------------------- INTRODUCCIÓN Y OBJETIVOS ---------------------- */
  intro: {
    titulo: "Introducción",
    parrafos: [
      "Durante mi formación en la Tecnicatura Superior en Infraestructura Informática del Instituto Superior de Formación Docente San Miguel, en la provincia de Corrientes, tuve la oportunidad de realizar mi Práctica Profesionalizante en situaciones de trabajo real. La pasantía se desarrolló en el propio Instituto y en otras instituciones de la zona: el Colegio Secundario Doctor Montaña, la Municipalidad de El Caimán, la Escuela N.º 130 “Rosario Vera Peñaloza”, el Jardín N.º 23 y espacios vinculados a Conecto. Trabajar en edificios y contextos tan distintos —educativos, municipales y rurales— me permitió enfrentar necesidades tecnológicas reales y muy variadas.",
      "Durante este recorrido participé en tareas de redes y conectividad (análisis del entorno, instalación de antenas y cableado, configuración de routers, de NanoStation y de un enlace punto a punto con antenas UBNT), en el armado de conectores de fibra óptica SC/APC y SC/UPC, en el mantenimiento, desbloqueo y reparación de equipos, en la instalación de sistemas operativos, drivers y programas, y en la creación de un inventario del equipamiento informático. También pude desarrollar habilidades personales, como la responsabilidad, la comunicación y el trabajo en equipo.",
      "En este sitio voy a compartir las actividades que realicé en cada institución, acompañadas por fotografías y una breve explicación de lo que hice y de lo que aprendí. Mi objetivo es dejar registrado mi proceso de aprendizaje y mostrar cómo cada experiencia contribuyó a mi formación como futuro técnico en Infraestructura Informática."
    ],
    /* Los números "instituciones" y "actividades" se calculan solos. */
    horas: 162,
    periodo: "28/04/2026 al 29/10/2026"
  },

  objetivos: {
    titulo: "Objetivos y organización",
    general: {
      titulo: "Objetivo general",
      texto: "Registrar y presentar mi experiencia de Práctica Profesionalizante, mostrando las actividades realizadas, los conocimientos técnicos adquiridos y las habilidades personales desarrolladas durante la pasantía."
    },
    especificos: {
      titulo: "Objetivos específicos",
      lista: [
        "Fortalecer los conocimientos tecnológicos sobre redes, cableado y fibra óptica.",
        "Desarrollar la capacidad de diagnosticar y resolver problemas en equipos de distinto tipo.",
        "Adquirir práctica en el mantenimiento, el uso y la gestión de los recursos informáticos de las instituciones.",
        "Construir habilidades blandas, como el trabajo en equipo y la comunicación, en un entorno laboral real.",
        "Organizar las experiencias con fechas, descripciones y fotografías."
      ]
    },
    importancia: {
      titulo: "Importancia de la pasantía",
      texto: "La pasantía es importante porque permite aplicar en situaciones concretas los conocimientos teóricos vistos en el aula: configurar y poner en funcionamiento una red, diagnosticar una falla, recuperar un equipo que estaba bloqueado o dejar documentado lo que se tiene mediante un inventario. Además de las habilidades técnicas, fortalece la responsabilidad, la comunicación y el trabajo en equipo, que son competencias centrales para el desempeño profesional de un técnico en infraestructura informática. También tiene un valor social: buena parte del trabajo se hizo en escuelas y organismos de una zona de esteros y colonias rurales, donde contar con equipos funcionando y conexión a internet marca una diferencia concreta para docentes, estudiantes y vecinos."
    }
  },

  /* ------------------ LAS SEIS INSTITUCIONES (en este orden) ------------------ */
  instituciones: [

    /* ============================ 1. INSTITUTO ============================ */
    {
      id: "instituto",
      menu: "Instituto (ISFD San Miguel)",
      titulo: "Instituto (ISFD San Miguel)",
      bajada: "Durante mis prácticas en el Instituto trabajé en el área de Informática, sobre su infraestructura y equipamiento. Participé en tareas de conectividad, fibra óptica, mantenimiento de equipos, gestión y formación. En todos los casos trabajé en equipo y con el acompañamiento de los docentes.",
      presentacion: [
        "El Instituto Superior de Formación Docente San Miguel es el instituto de educación superior de gestión estatal en el que curso la tecnicatura. Su oferta incluye profesorados de educación secundaria (por ejemplo, en Historia y Geografía) y dos tecnicaturas superiores: en Desarrollo de Software y en Infraestructura Informática, esta última la carrera en la que se enmarca mi pasantía. Cumple un rol clave para la comunidad porque acerca la formación docente y técnica de nivel superior a una región alejada de la capital provincial.",
        "**Contexto territorial:** San Miguel es una localidad y municipio de la provincia de Corrientes, cabecera del departamento homónimo, ubicada en el centro-norte provincial a unos 165 km de la capital. Su origen se remonta a un antiguo puesto jesuítico dependiente de la Reducción de San Carlos, y el 9 de octubre de 1827 pasó a formar parte oficialmente de la Provincia de Corrientes. Su territorio está en gran parte cubierto por esteros y terrenos inundables, con lomadas de palmeras, y cuenta con colonias rurales como El Caimán."
      ],
      datos: [
        ["Ubicación", "Libertad 1435, W3485 San Miguel, Corrientes"]
      ],
      mapa: "https://maps.app.goo.gl/uJbQQz73u8ZiHbKB9",
      actividades: [
        {
          orden: "2026-04-28-a", fecha: "28/04/2026",
          titulo: "Análisis del entorno antes de instalar la antena",
          resumen: "Recorrimos el Instituto para analizar la ubicación de los equipos, el recorrido del cableado y el lugar donde colocar la antena. Aprendí que antes de intervenir conviene conocer bien el entorno.",
          texto: [
            "Antes de realizar cualquier instalación, recorrimos y observamos los espacios del Instituto. Analizamos dónde estaban los equipos, por dónde podía pasar el cableado y cuál era el mejor lugar para la antena. Esta instancia fue importante porque permitió evaluar las condiciones del lugar antes de avanzar, en lugar de instalar sin una revisión previa. Comprendí que la planificación forma parte del trabajo técnico y que una buena decisión inicial evita problemas después. Es importante planificar antes de ejecutar cualquier acción."
          ],
          fotos: []
        },
        {
          orden: "2026-04-28-b", fecha: "28/04/2026",
          titulo: "Instalación de antena y cableado",
          resumen: "Participé en la instalación de una antena (Starlink Mini) y en las tareas de cableado asociadas en el Instituto.",
          texto: [
            "Participé en la instalación de una antena y en el tendido y la conexión del cableado. Colaboré en el trabajo y observé cómo se relacionan los distintos elementos para establecer la conectividad. Comprendí que las instalaciones en exteriores y en edificios ya construidos exigen cuidado, y que el cableado debe quedar bien conectado y organizado para que el servicio funcione correctamente.",
            "El tipo de antena era de la empresa Starlink. Los materiales fueron: crimpeadora, taladro, pelacables, llaves, pinzas, medidores de señal, etc."
          ],
          fotos: ["antena-1.jpg", "antena-2.jpg", "antena-3.jpg"]
        },
        {
          orden: "2026-04-29", fecha: "29/04/2026",
          titulo: "Instalación y configuración del router de rectoría",
          resumen: "Participé en la instalación del router de rectoría, en su configuración y en el cambio de la contraseña de acceso.",
          texto: [
            "Participé en la instalación del router en la oficina de rectoría y en su configuración, y realicé el cambio de contraseña del equipo. Esta actividad me permitió comprender la importancia de ubicar e instalar los dispositivos según la necesidad del lugar y de proteger el acceso a la red, ya que una contraseña permite controlar quién puede conectarse. Aprendí que los equipos de comunicación se administran desde su interfaz de configuración y que cambiar las contraseñas es una medida básica de seguridad. La configuración se realizó a través de una app móvil completa e interactiva llamada “Starlink”."
          ],
          fotos: ["router-1.jpg", "router-2.jpg", "router-3.jpg", "router-4.jpg", "router-5.jpg"]
        },
        {
          orden: "2026-05-22", fecha: "22/05/2026",
          titulo: "Armado de conectores de fibra óptica SC/APC",
          resumen: "Realicé prácticas de armado de conectores de fibra óptica de tipo SC/APC.",
          texto: [
            "Realicé prácticas guiadas de armado de conectores de fibra óptica de tipo SC/APC. La actividad me permitió crear el tipo de conector, que sirve para la transferencia de datos a través del conductor eléctrico. Trabajé con mucha precisión, porque un error en el armado afecta la señal, y verifiqué el resultado antes de dar por terminado el trabajo."
          ],
          fotos: ["fibra-apc-1.jpg", "fibra-apc-2.jpg", "fibra-apc-3.jpg"]
        },
        {
          orden: "2026-05-26", fecha: "26/05/2026",
          titulo: "Desbloqueo de notebooks de CAA CATI",
          resumen: "Participé en el desbloqueo de notebooks provenientes de CAA CATI.",
          texto: [
            "Participé en el desbloqueo de notebooks de CAA CATI que no podían utilizarse hasta ser desbloqueadas. Esta actividad dio continuidad al trabajo de recuperación de equipos y me permitió seguir practicando y reforzar lo aprendido. Comprendí que, cuando se trabaja con varios dispositivos, es necesario mantener la organización y la atención para avanzar de manera ordenada."
          ],
          fotos: ["caa-cati-1.jpg", "caa-cati-2.jpg", "caa-cati-3.jpg"]
        },
        {
          orden: "2026-05-28", fecha: "28/05/2026",
          titulo: "Cambio de disco e instalación de sistemas operativos, drivers y programas",
          resumen: "Participé en el cambio de disco de equipos y en la instalación de sistemas operativos, drivers y programas.",
          texto: [
            "Algunos equipos tenían discos en mal estado, sistemas desactualizados o no tenían drivers instalados, por lo que fue necesario reinstalar todo para recuperarlos; para eso se utilizaron unidades de arranque. Comprendí que el sistema operativo es el software principal que permite iniciar y utilizar la computadora, administrar sus recursos y ejecutar programas, y que su instalación forma parte de la preparación de un equipo para su uso. Se instaló Windows 10 Home en una notebook."
          ],
          fotos: ["so-drivers-1.jpg", "so-drivers-2.jpg", "so-drivers-3.jpg"]
        },
        {
          orden: "2026-05-29", fecha: "29/05/2026",
          titulo: "Desarmado de computadora y armado de G1",
          resumen: "Realicé el desarmado de una computadora y el armado de un equipo G1.",
          texto: [
            "Realicé tareas de desarmado de una computadora y de armado de un equipo G1. La práctica me permitió acercarme a la estructura interna de los equipos y familiarizarme con sus componentes. Este trabajo requiere atención y cuidado para reconocer las partes y volver a colocarlas correctamente, y reforcé la importancia de trabajar de forma ordenada y responsable al manipular computadoras."
          ],
          fotos: ["g1-1.jpg", "g1-2.jpg"]
        },
        {
          orden: "2026-06-01", fecha: "01/06/2026",
          titulo: "Desbloqueo de notebooks G5",
          resumen: "Participé en el desbloqueo de notebooks G5 que no podían utilizarse.",
          texto: [
            "Participé en el desbloqueo de notebooks G5 que no podían usarse hasta ser desbloqueadas. La tarea estuvo orientada a recuperar los equipos para que pudieran volver a estar disponibles. La experiencia me permitió comprender la importancia del soporte técnico en el ámbito educativo y desarrollar paciencia, atención y responsabilidad al trabajar con equipos."
          ],
          fotos: ["g5-1.jpg", "g5-2.jpg", "g5-3.jpg"]
        },
        {
          orden: "2026-06-05", fecha: "05/06/2026",
          titulo: "Reparación de red, cableado y pintura",
          resumen: "Participé en la reparación de la red del Instituto y en trabajos de cableado, que incluyeron tareas de pintura.",
          texto: [
            "Aprendí que, frente a una falla de red, es importante revisar la instalación y buscar el origen del problema antes de intentar restablecer el servicio. También comprendí que las actividades en una institución pueden combinar tareas técnicas con acciones de mantenimiento de los espacios de uso común."
          ],
          fotos: ["red-pintura-1.jpg", "red-pintura-2.jpg", "red-pintura-3.jpg", "red-pintura-4.jpg"]
        },
        {
          orden: "2026-06-06", fecha: "06/06/2026",
          titulo: "Configuración de NanoStation",
          resumen: "Participé en la configuración de un equipo NanoStation, utilizado para establecer enlaces de conectividad inalámbrica.",
          texto: [
            "Esta práctica me permitió conocer otro tipo de dispositivo de red y comprender su función dentro de una solución de comunicación entre puntos. Me familiaricé con la importancia de configurar correctamente los equipos para que puedan cumplir el propósito de enlazar redes o sectores."
          ],
          fotos: ["nanostation-1.jpg", "nanostation-2.jpg", "nanostation-3.jpg"]
        },
        {
          orden: "2026-06-08", fecha: "08/06/2026",
          titulo: "Configuración de antena UBNT en enlace punto a punto",
          resumen: "Participé en la configuración de una antena UBNT para un enlace punto a punto.",
          texto: [
            "Un enlace punto a punto conecta de forma inalámbrica dos lugares mediante dos antenas enfrentadas. Participé en la configuración de una antena UBNT para este tipo de enlace. Aprendí que requiere buena línea de vista entre las antenas y que la configuración debe ser coherente en ambos extremos para que la comunicación funcione."
          ],
          fotos: ["ubnt-1.jpg", "ubnt-2.jpg", "ubnt-3.jpg"]
        },
        {
          orden: "2026-06-19", fecha: "19/06/2026",
          titulo: "Habilidades blandas y trabajo en equipo",
          resumen: "Participé en talleres de habilidades blandas y trabajo en equipo.",
          texto: [
            "Reflexionamos sobre la importancia de la comunicación, la responsabilidad y la colaboración cuando se comparte una tarea con otras personas. Esta experiencia me permitió reconocer que las habilidades blandas son tan importantes como los conocimientos técnicos, porque ayudan a organizarse, escuchar distintas opiniones y cumplir responsabilidades de manera conjunta."
          ],
          fotos: ["habilidades-1.jpg", "habilidades-2.jpg"]
        },
        {
          orden: "2026-06-22", fecha: "22/06/2026",
          titulo: "Mantenimiento de las notebooks del carro",
          resumen: "Participé en el mantenimiento de las notebooks del carro.",
          texto: [
            "El objetivo era que los equipos se mantengan en condiciones de uso. Aprendí que el mantenimiento no consiste solo en reparar cuando algo falla, sino también en revisar y cuidar los equipos de manera periódica. Se realizó mantenimiento básico: liberación de memoria, instalación de drivers y, en algunos casos, instalación del sistema operativo, entre otras tareas."
          ],
          fotos: ["carro-1.jpg", "carro-2.jpg"]
        },
        {
          orden: "2026-08-25", fecha: "25/08/2026",
          titulo: "Creación de un inventario del equipamiento informático",
          resumen: "Creé un inventario del equipamiento informático del Instituto.",
          texto: [
            "Participé en la creación de un inventario del equipamiento informático, con el objetivo de saber qué equipos hay, en qué estado están y dónde se encuentran. Aprendí que documentar el trabajo es una parte importante del rol técnico, porque permite organizar los recursos, planificar mantenimientos y detectar qué equipos necesitan atención. El inventario se incluye como [Anexo 3](#anexos)."
          ],
          fotos: ["inventario-1.jpg", "inventario-2.jpg"]
        },
        {
          orden: "2026-09-13", fecha: "13/09/2026",
          titulo: "Venta de numeritos",
          resumen: "Participé en la venta de numeritos.",
          texto: [
            "Participé en la venta de numeritos como una actividad de la vida institucional. Esta experiencia me permitió valorar el trabajo en equipo más allá de las tareas técnicas y reconocer que la organización y la participación de cada integrante contribuyen al logro de una actividad común. En esta ocasión no se tomaron fotografías: solamente se hizo un póster en Canva, lo subimos a nuestros estados y desde allí la gente nos compraba los numeritos para nuestro viaje."
          ],
          fotos: []
        },
        {
          orden: "2026-09-17", fecha: "17/09/2026",
          titulo: "Viaje educativo: Copa Robótica y Parque Tecnológico de la UNNE",
          resumen: "Realizamos un viaje educativo a la Copa Robótica y al Parque Tecnológico de la UNNE. Fue una oportunidad para conocer espacios relacionados con la tecnología y la robótica.",
          texto: [
            "Realizamos un viaje educativo para participar de la Copa Robótica y visitar el Parque Tecnológico de la UNNE. La Copa Robótica es un certamen nacional de robótica, programación e inteligencia artificial para jóvenes de 15 a 18 años de escuelas públicas y privadas. La salida nos permitió conocer espacios vinculados con la tecnología, la innovación y la robótica fuera del ámbito habitual de cursado, y relacionar la formación en infraestructura informática con otras áreas en las que interviene la tecnología.",
            "La Copa Robótica se realizó en el nuevo centro comercial de la antigua Unidad Penal N.º 1 de Corrientes. **La Unidad** es un complejo urbano multifuncional ubicado en la ciudad de Corrientes, Argentina, que funciona donde antes estaba la histórica Unidad Penal N.º 1. El predio fue reciclado para ofrecer en un mismo lugar el centro comercial **UniPlaza Shopping**, un polo gastronómico, un museo histórico en su antiguo edificio panóptico y un espacio de innovación tecnológica.",
            "**Ubicación:** Av. 3 de Abril 57, Corrientes Capital."
          ],
          fotos: ["viaje-1.jpg", "viaje-2.jpg", "viaje-3.jpg", "viaje-4.jpg", "viaje-5.jpg", "viaje-6.jpg"],
          extras: [
            {
              titulo: "Parque Tecnológico de la UNNE — presentación y ubicación",
              texto: [
                "El [Parque Tecnológico Corrientes](https://parquetecnologicocorrientes.unne.edu.ar/) es un ecosistema de innovación impulsado de manera conjunta por la [Universidad Nacional del Nordeste (UNNE)](https://www.unne.edu.ar/comunidad/vinculacionytransferencia/) y el Gobierno de la Provincia de Corrientes."
              ],
              lista: [
                "**Inauguración:** fue inaugurado oficialmente el 21 de agosto de 2025.",
                "**Ubicación:** se encuentra sobre la Ruta Nacional 12 (W3400), en la provincia de Corrientes.",
                "**Superficie:** cuenta con un predio de tres hectáreas.",
                "**Objetivo:** articular la ciencia, la tecnología y el sector productivo para fomentar la economía del conocimiento, el emprendedurismo y la radicación de empresas de base tecnológica.",
                "**Laboratorios y co-working:** dispone de espacios de trabajo colaborativo para emprendedores y laboratorios especializados.",
                "**Incubadora de empresas:** funciona la incubadora de empresas de base tecnológica UNNETEC-INNOVAR.",
                "**Instituciones y oficinas:** aloja oficinas de start-ups, spin-offs universitarios, de la empresa Telco y organismos provinciales.",
                "**Energía sustentable:** el predio cuenta con paneles solares para el abastecimiento de energía limpia y renovable."
              ],
              texto2: [
                "Durante la visita al Parque Tecnológico de la UNNE tuvimos la oportunidad de conocer un espacio dedicado a la innovación, el desarrollo y la creación de proyectos. Allí aprendimos la importancia de ser creativos, ingeniosos y proactivos a la hora de llevar adelante nuestras propias ideas. Nos brindaron conocimientos y herramientas que nos motivan a ser más independientes, confiar en nuestras capacidades y perder el miedo a planificar, desarrollar y ejecutar nuevos proyectos. Además, realizamos recorridos por distintos espacios donde se llevan adelante iniciativas tecnológicas y trabajos de gran interés para empresas e instituciones externas. Esta experiencia nos permitió conocer de cerca cómo se transforman las ideas en proyectos concretos y comprender la importancia de la innovación, el trabajo en equipo y el espíritu emprendedor."
              ],
              fotos: ["parque-unne-1.jpg", "parque-unne-2.jpg", "parque-unne-3.jpg", "parque-unne-4.jpg"]
            }
          ]
        }
      ],
      /* Fotos extra del Instituto (galería general). Si queda vacía se muestra un espacio reservado. */
      galeria: []
    },

    /* ======================= 2. COLEGIO DOCTOR MONTAÑA ======================= */
    {
      id: "colegio-montana",
      menu: "Colegio Doctor Montaña",
      titulo: "Colegio Doctor Montaña",
      bajada: "En el Colegio Secundario Doctor Montaña participé en el diagnóstico y la reparación de equipos informáticos.",
      presentacion: [
        "El Colegio Secundario en el Paraje Dr. Montaña es una institución educativa pública de gestión estatal situada en el Paraje Dr. Montaña, perteneciente al Departamento de San Miguel, en la Provincia de Corrientes."
      ],
      datos: [
        ["Nombre oficial", "Colegio Secundario en el Paraje Dr. Montaña"],
        ["Código CUE", "180191300"],
        ["Ubicación", "Paraje Dr. Montaña, Departamento San Miguel, Corrientes"],
        ["Gestión", "Estatal / Pública"],
        ["Modalidad", "Educación común (nivel secundario)"],
        ["Sectores", "Salón SUM"]
      ],
      mapa: "",   /* ← pegá acá el enlace de Google Maps cuando lo tengas */
      actividades: [
        {
          orden: "2026-06-03", fecha: "03/06/2026",
          titulo: "Diagnóstico y reparación de equipos informáticos",
          resumen: "Realicé el diagnóstico y la reparación de equipos informáticos, identificando si cada falla era de hardware o de software y dejando las máquinas operativas.",
          texto: [
            "Participé en el diagnóstico y la reparación de equipos informáticos del colegio. En cada caso, lo primero fue identificar si la falla era de hardware o de software, descartando una posibilidad antes de pasar a la otra y probando los componentes uno a uno. La actividad me acercó a una situación real de atención técnica: cada equipo podía presentar un problema distinto y era necesario observar y diagnosticar antes de pensar en una solución. Al final, las máquinas quedaron operativas.",
            "Las fallas que presentaban eran, sobre todo, problemas de hardware: display dañado, cables cortados, protectores rotos, etc."
          ],
          fotos: ["montana-1.jpg", "montana-2.jpg"]
        }
      ],
      galeria: []
    },

    /* ===================== 3. MUNICIPALIDAD DE EL CAIMÁN ===================== */
    {
      id: "municipalidad",
      menu: "Municipalidad de El Caimán",
      titulo: "Municipalidad de El Caimán",
      bajada: "En la Municipalidad de El Caimán participé en una actividad de cableado de red.",
      presentacion: [
        "La Municipalidad de El Caimán es el organismo de gobierno local, encargado de brindar servicios y atender trámites de los vecinos. Para su funcionamiento cotidiano (comunicación, gestión administrativa y acceso a internet) depende de una red de datos ordenada y confiable."
      ],
      datos: [
        ["Sectores", "Oficina del municipio y Radio local"],
        ["Ubicación", "Ruta Nacional N.º 118, km 118"]
      ],
      mapa: "",
      actividades: [
        {
          orden: "2026-07-03", fecha: "03/07/2026",
          titulo: "Cableado de red hasta la radio local",
          resumen: "Trabajé en el cableado de red del edificio hasta la radio local, para brindar una conexión más estable.",
          texto: [
            "En esta actividad trabajamos en el cableado de red del edificio de la Municipalidad hasta la radio local, con el propósito de brindar una conexión más estable. Participé en las tareas de cableado y pude relacionar esta experiencia con los contenidos de redes vistos en la carrera. También comprendí que una instalación ordenada y correctamente conectada es importante para que los equipos puedan comunicarse y compartir información. Se utilizó cable de red RJ45, herramientas de corte, medidores de señal, postes, pala, engrapadoras, etc."
          ],
          fotos: ["municipalidad-1.jpg", "municipalidad-2.jpg", "municipalidad-3.jpg", "municipalidad-4.jpg"]
        }
      ],
      galeria: []
    },

    /* ================================ 4. CONECTO ================================ */
    {
      id: "conecto",
      menu: "Conecto",
      titulo: "Conecto",
      bajada: "En Conecto me acerqué al trabajo de los técnicos en instalaciones de fibra óptica y a su entorno laboral real.",
      presentacion: [
        "Conecto es la empresa encargada de proveer señal de fibra óptica a la localidad de San Miguel. Ofrece distintos planes de internet por fibra y cuenta con una infraestructura a nivel local, en la cual se aloja el servidor central, que distribuye la conexión por todo el pueblo."
      ],
      datos: [
        ["Ubicación", "Sarmiento 712, San Miguel – Corrientes"]
      ],
      mapa: "",
      actividades: [
        {
          orden: "2026-08-04", fecha: "04/08/2026",
          titulo: "Taller teórico-práctico",
          resumen: "Participé en un taller teórico-práctico en el que adquirí conocimientos fundamentales sobre las tareas y responsabilidades de un técnico en instalaciones de fibra óptica.",
          texto: [
            "Durante la actividad, el director de la empresa Conecto, de San Miguel, nos brindó una charla introductoria en la que explicó los principios básicos de la fibra óptica, su funcionamiento, los componentes que conforman la instalación y las herramientas utilizadas por los técnicos para realizar los distintos trabajos.",
            "Además, nos explicó cómo se encuentra distribuida la red de fibra óptica en la localidad, permitiéndonos comprender su organización y funcionamiento. Esta primera instancia de formación fue muy importante, ya que nos proporcionó una base teórica y técnica para comenzar con las salidas a terreno, donde pudimos relacionar los conocimientos adquiridos con las tareas prácticas que se realizan en instalaciones reales."
          ],
          fotos: ["conecto-taller-1.jpg", "conecto-taller-2.jpg", "conecto-taller-3.jpg", "conecto-taller-4.jpg"]
        },
        {
          orden: "2026-08-06", fecha: "06/08/2026",
          titulo: "Observación",
          resumen: "Participé de una jornada de observación del mantenimiento de la red de fibra óptica, a cargo de técnicos de Mburucuyá.",
          texto: [
            "Participé de una jornada de observación en la que técnicos provenientes de la localidad de Mburucuyá realizaron tareas de mantenimiento de la red de fibra óptica en distintas manzanas del pueblo. Durante esta actividad pudimos conocer de cerca algunos de los procedimientos que se llevan a cabo para garantizar el correcto funcionamiento del servicio, entre ellos, el reemplazo de óvalos y la medición de la potencia de la señal mediante un instrumento denominado *Power Meter*, utilizado para comprobar los niveles de señal óptica.",
            "Posteriormente, luego de las explicaciones y demostraciones prácticas brindadas por los técnicos, uno de ellos nos enseñó el procedimiento de fusión de los hilos de fibra óptica. Para ello utilizó una máquina de fusión que, mediante un sistema de alineación y precisión electromecánica, permite unir los extremos de las fibras para lograr una conexión adecuada y minimizar las pérdidas de señal.",
            "Esta experiencia nos permitió observar y comprender mejor los trabajos de mantenimiento, medición y reparación que se realizan en una red de fibra óptica, acercándonos a las actividades propias del ámbito laboral."
          ],
          fotos: ["conecto-obs-1.jpg", "conecto-obs-2.jpg", "conecto-obs-3.jpg", "conecto-obs-4.jpg"]
        },
        {
          orden: "2026-08-27", fecha: "27/08/2026",
          titulo: "Observación y práctica",
          resumen: "Primera salida a terreno como grupo, junto a dos técnicos de Conecto.",
          texto: [
            "Esta fue una experiencia única, ya que fue la primera vez que salimos a terreno como grupo. Estuvo lindo: el director de Conecto, muy amablemente, nos explicó de nuevo las bases teóricas sobre la fibra y, una vez concluida la mini charla introductoria, salimos a terreno con 2 técnicos.",
            "Esa vez armamos fichas y fuimos a observar cómo trabajan los profesionales; nosotros estábamos atentos por si necesitaban algo."
          ],
          fotos: ["conecto-practica-1.jpg", "conecto-practica-2.jpg", "conecto-practica-3.jpg", "conecto-practica-4.jpg", "conecto-practica-5.jpg"]
        },
        {
          orden: "2026-10-29", fecha: "29/10/2026",
          titulo: "Defensa de Conecto",
          resumen: "Realicé una defensa de los conocimientos y habilidades que fui adquiriendo durante las distintas salidas a terreno junto a los técnicos.",
          texto: [
            "La actividad estuvo dividida en dos partes. La primera consistió en una evaluación teórica, en la que el director de Conecto, junto con la profesora, nos realizaron preguntas relacionadas con la fibra óptica, su funcionamiento, sus componentes, las herramientas utilizadas y los procedimientos de instalación y mantenimiento. Considero que nuestro desempeño fue satisfactorio, ya que pudimos responder correctamente a gran parte de las preguntas planteadas.",
            "La segunda parte fue de carácter práctico y consistió en el armado de conectores mecánicos de fibra óptica y la posterior comprobación de la señal. Durante esta instancia trabajamos con conectores de tipo SC/APC (color verde) y SC/UPC (color azul), realizando su preparación, montaje y prueba para verificar que la conexión transmitiera correctamente la señal óptica. También obtuvimos buenos resultados en esta actividad.",
            "En conclusión, fue una experiencia muy enriquecedora, tanto por los conocimientos técnicos adquiridos como por la posibilidad de llevarlos a la práctica. Nos permitió descubrir y aprender sobre tareas y procedimientos que quizás nunca hubiéramos imaginado desarrollar dentro de nuestra formación, ampliando así nuestra visión sobre las posibilidades que ofrece nuestra carrera."
          ],
          fotos: ["conecto-defensa-1.jpg", "conecto-defensa-2.jpg", "conecto-defensa-3.jpg", "conecto-defensa-4.jpg"]
        }
      ],
      galeria: []
    },

    /* ======================= 5. ESCUELA N.º 130 ======================= */
    {
      id: "escuela-130",
      menu: "Escuela N.º 130",
      titulo: "Escuela N.º 130 “Rosario Vera Peñaloza”",
      bajada: "En la Escuela N.º 130 realicé el diagnóstico y la reparación de equipos para que puedan seguir usándose en las actividades pedagógicas.",
      presentacion: [
        "Es una escuela primaria estatal de ámbito rural, ubicada sobre la Ruta Nacional 118, en Colonia El Caimán (San Miguel). Comparte denominación con el Jardín de Infantes Nucleado N.º 23. Su nombre homenajea a la maestra y pedagoga argentina Rosario Vera Peñaloza. Es el centro educativo de referencia para las familias de la colonia."
      ],
      datos: [
        ["Sectores", "SUM (Salón de Usos Múltiples)"]
      ],
      mapa: "https://maps.app.goo.gl/xdW3zg1LA6Ra33uF6",
      actividades: [
        {
          orden: "2026-08-28", fecha: "28/08/2026",
          titulo: "Diagnóstico y reparación de equipos de la escuela",
          resumen: "Realicé el diagnóstico y la reparación de los equipos de la escuela para que puedan seguir usándose en las actividades pedagógicas.",
          texto: [
            "Participé en el diagnóstico y la reparación de los equipos de la escuela, con el objetivo de que pudieran seguir usándose en las actividades pedagógicas. Primero se identificaba el origen de cada falla y luego se aplicaba la solución correspondiente. Esta experiencia me permitió reconocer el valor que tiene el soporte técnico en una escuela rural, donde contar con equipos funcionando marca una diferencia concreta para docentes y estudiantes.",
            "Fue una linda experiencia ya que pudimos resolver algunas de las notebooks que nos traían tanto los maestros como los alumnos, además de que me divertí con amigos y profesores mientras ejecutábamos los trabajos correspondientes."
          ],
          fotos: ["escuela130-1.jpg", "escuela130-2.jpg", "escuela130-3.jpg", "escuela130-4.jpg"]
        }
      ],
      galeria: []
    },

    /* ========================== 6. JARDÍN N.º 23 ========================== */
    {
      id: "jardin-23",
      menu: "Jardín N.º 23",
      titulo: "Jardín N.º 23 (483)",
      bajada: "En el Jardín N.º 23 realicé la revisión técnica, la actualización y el mantenimiento de tablets y notebooks, dejando el equipamiento listo para el trabajo con los alumnos.",
      presentacion: [
        "El Jardín de Infantes Nucleado (J.I.N.) N.º 23 “Arco Iris” (Sede Escuela N.º 483) es una institución educativa pública de nivel inicial ubicada en la localidad de San Miguel, Provincia de Corrientes, Argentina."
      ],
      datos: [
        ["Dirección", "Libertad S/N (esquina Libertad 1485), San Miguel, Corrientes"],
        ["Dependencia", "Estatal (público urbano)"],
        ["Turnos y oferta", "Funciona en los turnos mañana y tarde, con salas obligatorias de 4 y 5 años"],
        ["Vínculo institucional", "Como jardín nucleado, comparte sede física y articulación pedagógica con la Escuela Primaria N.º 483"]
      ],
      mapa: "https://www.google.com/maps/search/?api=1&query=Libertad+1485+San+Miguel+Corrientes",
      actividades: [
        {
          orden: "2026-09-25", fecha: "25/09/2026 al 30/09/2026",
          titulo: "Revisión técnica, actualización y mantenimiento de tablets y notebooks",
          resumen: "Participé en la revisión técnica, la actualización y el mantenimiento de tablets y notebooks, dejando el equipamiento listo para el trabajo con los alumnos.",
          texto: [
            "Durante la jornada colaboré en la puesta a punto de los dispositivos, para dejar el equipamiento listo para el trabajo con los alumnos. Esta experiencia me permitió ampliar mi práctica de soporte técnico más allá de las computadoras de escritorio y reconocer la importancia de mantener actualizados y en buenas condiciones los dispositivos que se utilizan en las instituciones.",
            "Se procedió al mantenimiento básico de las tablets del jardín, ejecutando varias tareas, como liberación de espacio en memoria, desinstalación de aplicaciones innecesarias y creación y acople de cuentas de Google."
          ],
          fotos: ["jardin23-1.jpg", "jardin23-2.jpg", "jardin23-3.jpg", "jardin23-4.jpg"]
        }
      ],
      galeria: []
    }
  ],

  /* ------------------------ DIFICULTADES Y SOLUCIONES ------------------------ */
  dificultades: {
    titulo: "Dificultades y soluciones",
    bajada: "Durante la pasantía aparecieron obstáculos, imprevistos y limitaciones. En esta sección cuento cuáles fueron y qué hice para resolverlos.",
    problemas: {
      titulo: "Dificultades encontradas",
      lista: [
        "Equipos bloqueados (notebooks G5 y de CAA CATI) que no podían usarse hasta ser desbloqueados; algunos eran difíciles de desarmar porque presentaban un gran deterioro por el desuso.",
        "Trabajo en distintos edificios y localidades, que exigió organizar traslados, tiempos y herramientas.",
        "Instalaciones exigentes: antenas en exteriores, cableado en edificios ya construidos y necesidad de buena línea de vista en el enlace punto a punto. En el enlace punto a punto nunca nos salía bien: siempre en la última parte nos saltaba un error.",
        "Precisión requerida en el armado de conectores de fibra óptica (SC/APC y SC/UPC), donde un error afecta la señal. En esta parte me costó mucho armar las fichas: por un lado, porque jamás lo había hecho y, por otro, porque me temblaba todo.",
        "Equipos con discos en mal estado, sistemas desactualizados o sin drivers."
      ]
    },
    soluciones: {
      titulo: "Soluciones aplicadas",
      lista: [
        "Análisis previo del entorno y planificación de cada instalación antes de empezar.",
        "Diagnóstico ordenado: descartar primero si la falla es de hardware o de software, y probar los componentes uno a uno.",
        "Cambio de disco, reinstalación del sistema operativo, drivers y programas para recuperar los equipos.",
        "Prácticas guiadas de armado de conectores de fibra óptica y verificación del resultado antes de dar por terminado el trabajo.",
        "Configuración de routers y antenas (NanoStation, UBNT) mediante sus interfaces de administración y cambio de contraseñas por seguridad.",
        "Creación de un inventario para saber qué equipos hay, en qué estado están y dónde se encuentran.",
        "Trabajo en equipo y consulta con los docentes cuando surgía una duda."
      ]
    },
    herramientasTitulo: "Herramientas utilizadas",
    herramientasBajada: "Herramientas de crimpado y pelado de cable, probador de cableado, kit de armado de conectores de fibra óptica, destornilladores y herramientas de desarmado, y unidades de arranque para instalar sistemas operativos.",
    herramientas: [
      { img: "herr-pinzas-1.jpg", titulo: "Pinzas de corte y pelado", texto: "Pinzas especiales utilizadas en telecomunicaciones. La de la izquierda es una herramienta de corte y pelado de cables de acometida, mientras que la de la derecha (amarilla) es una pinza pelacables de precisión (tipo CFS-3) con múltiples orificios para remover las distintas capas de protección de la fibra óptica sin dañarla." },
      { img: "herr-crimpeadora-1.jpg", titulo: "Crimpeadora de conectores", texto: "Herramienta manual indispensable para redes. Permite fijar con presión los conectores modulares (como RJ45 o RJ11) en los extremos de los cables de red UTP o telefónicos, asegurando el contacto eléctrico correcto." },
      { img: "herr-probador-1.jpg", titulo: "Probador de cableado (JS-468)", texto: "Dispositivo electrónico (modelo JS-468) utilizado para comprobar la continuidad y el correcto armado de cables de red con fichas RJ45 o RJ11, indicando mediante luces LED si hay cables cortados, cruzados o mal crimpados." },
      { img: "herr-laser-1.jpg", titulo: "Lápiz de luz láser roja", texto: "Instrumento en forma de lápiz que emite un haz de luz láser roja visible. Se utiliza para identificar roturas, dobleces excesivos o pérdidas de señal a lo largo de un tramo de fibra óptica." },
      { img: "herr-programador-1.jpg", titulo: "Programador USB (EZP2019+)", texto: "Dispositivo electrónico de alta velocidad conectado por USB que incluye una pinza de prueba (SOIC8). Se utiliza en electrónica e informática para leer, flashear o reprogramar chips de memoria EEPROM/SPI (como los de la BIOS de placas madre)." },
      { img: "herr-guia-1.jpg", titulo: "Guía de pelado o regleta de medición para fibra", texto: "Pequeña regla o plantilla plástica azul graduada que sirve para medir con exactitud las longitudes de corte y desforre de los hilos de fibra óptica antes de realizar empalmes o conectorizaciones." },
      { img: "herr-cleaver-1.jpg", titulo: "Cortadora de alta precisión (Cleaver FC-6S)", texto: "Herramienta de alta precisión (modelo FC-6S) diseñada para realizar cortes limpios y perpendiculares en la fibra óptica, un paso fundamental antes de proceder a fusionar los hilos." },
      { img: "herr-limpiador-1.jpg", titulo: "Lápiz limpiador de conectores", texto: "Herramienta de limpieza tipo bastoncillo retráctil diseñada para eliminar polvo, grasa y suciedad en el interior de adaptadores y férulas de conectores de fibra óptica (como SC, ST o FC)." }
    ]
  },

  /* ----------------------------- GLOSARIO TÉCNICO ----------------------------- */
  glosario: {
    titulo: "Glosario técnico",
    bajada: "Definiciones breves de los términos técnicos que aparecen en el sitio.",
    terminos: [
      ["SC/APC", "Conector de fibra óptica de tipo SC cuyo pulido de la punta es angulado, lo que reduce las reflexiones de la señal."],
      ["SC/UPC", "Conector de fibra óptica de tipo SC con pulido ultra físico, es decir, sin ángulo."],
      ["Enlace punto a punto", "Conexión inalámbrica entre dos lugares mediante dos antenas enfrentadas, que requiere buena línea de vista."],
      ["NanoStation", "Equipo de comunicación inalámbrica utilizado para establecer enlaces de conectividad entre puntos."],
      ["Router", "Dispositivo que conecta redes y distribuye la conexión a internet a otros equipos."]
    ]
  },

  /* ------------------------------- CONCLUSIÓN ------------------------------- */
  conclusion: {
    titulo: "Conclusión y reflexión final",
    parrafos: [
      "La pasantía fue una experiencia muy valiosa. Pasar del aula a instalaciones reales —un router en rectoría, una antena en un enlace punto a punto, un conector de fibra óptica, una notebook bloqueada que volvía a funcionar— me permitió ver el resultado concreto de mi trabajo y su utilidad para otras personas. Trabajar en el Instituto, en escuelas rurales, en un jardín y en la Municipalidad me mostró que la tecnología cumple un rol distinto en cada lugar, y que el técnico debe adaptarse a cada contexto.",
      "En lo técnico, fortalecí mis conocimientos de redes y cableado, de configuración de equipos de comunicación, de armado de conectores de fibra óptica, de diagnóstico y reparación de hardware, y de instalación de sistemas operativos, drivers y programas. También aprendí a documentar el trabajo mediante la creación de un inventario.",
      "Además de lo técnico, la práctica fortaleció mi trabajo en equipo, mi responsabilidad, la comunicación con docentes y personal de cada institución, la organización del tiempo y la autoevaluación para reconocer qué hice bien y qué puedo mejorar. Las actividades de habilidades blandas, la charla de taller y la práctica de la defensa de Conecto me ayudaron a ganar seguridad al exponer.",
      "Lo que vimos en clase sobre redes, hardware y sistemas cobró sentido al enfrentarme a situaciones reales, donde aparecen imprevistos, falta de herramientas o equipos distintos a los de los ejemplos. Aprender a resolverlos me aportó confianza y criterio profesional.",
      "Agradezco al Instituto, a los docentes y a las instituciones que abrieron sus puertas, y deseo seguir mejorando estas experiencias mediante los proyectos futuros que propongo."
    ],
    fin: "FIN DE MI RECORRIDO DE PRÁCTICAS"
  },

  /* ----------------------------- PROYECTOS FUTUROS -----------------------------
     Por ahora queda solo el espacio reservado (como pediste). Cuando tengas las
     ideas, agregalas en la lista "proyectos". Cada una admite:
       titulo, presentacion, objetivo, observacion, desarrollo, utilidad          */
  futuros: {
    titulo: "Proyectos futuros",
    reservado: "Espacio reservado para «Proyectos futuros»",
    proyectos: [
      /* {
        titulo: "Nombre de la idea",
        presentacion: "Descripción de la idea o proyecto.",
        objetivo: "Qué se busca lograr.",
        observacion: "Qué observé durante la pasantía que lo motivó.",
        desarrollo: "Cómo se podría desarrollar y qué herramientas o materiales harían falta.",
        utilidad: "Utilidad y resultado esperado."
      } */
    ]
  },

  /* -------------------------------- ANEXOS --------------------------------
     fotos: imágenes de /img.   archivo: nombre de un archivo dentro de /archivos
     (por ejemplo el Excel del inventario).  oculta:true = no se muestra.      */
  anexos: {
    titulo: "Anexos",
    bajada: "Documentación y evidencias que complementan el proyecto y respaldan las actividades realizadas durante la pasantía.",
    items: [
      {
        titulo: "Anexo 2 — Planilla de asistencia y cómputo de horas",
        texto: "Planilla de asistencia y cómputo de horas (28/04/2026 al 29/10/2026).",
        fotos: [
          { src: "anexo-planilla-1.jpg", alt: "Planilla de asistencia y cómputo de horas, hoja 1" },
          { src: "anexo-planilla-2.jpg", alt: "Planilla de asistencia y cómputo de horas, hoja 2" },
          /* Esta hoja muestra la firma, el sello y el número de DNI de una persona.
             Quedó OCULTA a propósito: ponele  oculta: false  solo si tenés autorización. */
          { src: "anexo-planilla-3.jpg", alt: "Planilla de asistencia y cómputo de horas, hoja 3", oculta: true }
        ]
      },
      {
        titulo: "Anexo 3 — Inventario de equipamiento informático",
        texto: "Inventario del equipamiento informático creado durante la pasantía.",
        archivo: "",                         /* ej.: "Inventario Productos informaticos.xlsx" (copialo en /archivos) */
        archivoEtiqueta: "Inventario Productos informáticos.xlsx",
        fotos: []
      },
      {
        titulo: "Anexo 5 — Evaluación institucional",
        texto: "Evaluación institucional firmada por el tutor, si corresponde.",
        archivo: "",
        archivoEtiqueta: "",
        fotos: []
      }
    ]
  }
};
