---
title: "Lotería mexicana"
description: "Juego digital inspirado en la tradicional Lotería Mexicana, desarrollado en Java con conexión a base de datos, sistema de usuarios y lógica de juego dinámica."
imgs:
  main: "../../assets/projects/loteria/loteria-mexicana-render-1.webp"
links:
  github: "https://github.com/JavierMNew/loteria"
techstack: ["Java", "Maven", "JDBC", "SQL Server"]
personal: true
pubDate: 2025-01-01
active: false
deliverables:
  - title: "Pantalla de Login"
    description: "Interfaz para el inicio de sesión de usuarios registrados. Incluye validación de credenciales y conexión a la base de datos mediante JDBC."
    img: "../../assets/projects/loteria/loteria-mexicana-vista-login.webp"
    features:
      - title: "Validación de usuario"
        description: "Verifica credenciales y muestra mensajes de error claros."
      - title: "Conexión a base de datos"
        description: "Utiliza JDBC para autenticar usuarios almacenados en SQL Server."
  - title: "Pantalla de Registro"
    description: "Formulario de creación de cuenta para nuevos jugadores con validaciones básicas y almacenamiento de datos en la base de datos."
    img: "../../assets/projects/loteria/loteria-mexicana-vista-register.webp"
    features:
      - title: "Registro de nuevos usuarios"
        description: "Inserta información en la tabla de usuarios con JDBC."
      - title: "Validación de campos"
        description: "Previene datos incompletos o duplicados."
  - title: "Pantalla Principal"
    description: "Menú central de la aplicación que permite iniciar una partida, acceder a la ayuda, consultar instrucciones o cerrar sesión."
    img: "../../assets/projects/loteria/loteria-mexicana-vista-principal.webp"
    features:
      - title: "Inicio de juego"
        description: "Botón que redirige al tablero principal de la Lotería."
      - title: "Menú de ayuda e instrucciones"
        description: "Explica las reglas y mecánicas del juego."
  - title: "Pantalla de Juego"
    description: "Interfaz donde se desarrolla la partida de Lotería Mexicana. Muestra cartas aleatorias, tablero del jugador y control de progreso."
    img: "../../assets/projects/loteria/loteria-mexicana-vista-juego.webp"
    features:
      - title: "Generación aleatoria de cartas"
        description: "Simula el sorteo tradicional de la Lotería mexicana."
      - title: "Interactividad visual"
        description: "Permite marcar las cartas coincidentes y detectar el momento de '¡Lotería!'."
---

Lotería Mexicana es una aplicación académica desarrollada en Java, diseñada para digitalizar la experiencia del clásico juego de mesa mexicano.
El sistema incluye autenticación de usuarios, registro de jugadores, una pantalla principal con opciones de ayuda y una interfaz de juego completamente funcional.

Su desarrollo permitió aplicar los fundamentos de la Programación Orientada a Objetos, utilizando herencia, encapsulamiento y polimorfismo, además de integrar una base de datos SQL Server mediante JDBC para la gestión de información.

El resultado es un proyecto sólido, visualmente atractivo y estructurado con buenas prácticas de arquitectura de software, que demuestra habilidades tanto técnicas como de diseño lógico en entornos Java.
