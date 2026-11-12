---
company: Daylú Dulce
title: Punto de Venta para Paletería
description: Proyecto personal para Daylú Dulce, una paletería familiar. Desarrollé una aplicación web con punto de venta, control de inventario, historial de ventas y administración de accesos, conectada a Supabase.
logo: "../../assets/projects/daylu-dulce/daylu-dulce-logo.webp"
imgs:
  main: "../../assets/projects/daylu-dulce/pdv/daylu-dulce-pdv-landing.webp"
links:
  github: "https://github.com/javiermp0411-glitch/ddulce-pdv"
techstack: ["Astro", "React", "TypeScript", "Tailwind", "Supabase"]
personal: true
approach: "Daylú Dulce es un proyecto personal creado para apoyar la operación diaria de una paletería familiar. Mi enfoque fue construir algo más que una pantalla de cobro: un sistema donde el catálogo, las existencias y las ventas compartieran la misma información. Por eso, cada cobro actualiza el almacén y el PDV impide vender más unidades de las disponibles. También incorporé reglas particulares del negocio, como productos con distintos sabores, paletas preparadas, promociones que descuentan varias unidades y ropa vendida con precio capturado al momento. Separé la landing pública, construida con Astro, de la aplicación operativa, desarrollada como una isla interactiva de React. Supabase concentra la autenticación, la persistencia y las funciones de administración de usuarios. La identidad visual utiliza rosa pastel mexicano, superficies color crema y textos en español para crear una experiencia cercana y fácil de consultar."
pubDate: 2026-11-05
active: true
deliverables:
  - title: "Punto de Venta Integrado con Inventario"
    description: "Flujo de cobro conectado con las existencias reales del almacén, con catálogo por categorías, selección de sabores, carrito y confirmación de pago."
    img: "../../assets/projects/daylu-dulce/pdv/daylu-dulce-pdv-punto-de-venta.webp"
    features:
      - title: "Catálogo agrupado por productos y sabores"
        description: "Búsqueda y filtros por categoría, con variantes independientes, precios visibles y cantidades disponibles calculadas según las unidades que descuenta cada venta."
      - title: "Carrito adaptado a las reglas del negocio"
        description: "Permite seleccionar paletas preparadas, manejar promociones y agregar ropa con un precio personalizado sin asociarla a existencias."
      - title: "Cobro y cálculo de cambio"
        description: "Confirmación de pagos en efectivo, tarjeta o transferencia, con teclado numérico, validación del importe recibido y cálculo del cambio para pagos en efectivo."
      - title: "Validación y actualización de existencias"
        description: "El carrito limita las cantidades según el stock disponible y, al completar el cobro, registra la venta y actualiza el inventario antes de refrescar el catálogo."
    metrics:
      - label: "Métodos de pago"
        value: "3"
      - label: "Control de stock"
        value: "Antes de cobrar"
      - label: "Descuento de inventario"
        value: "Automático"
  - title: "Gestión de Almacén y Catálogo"
    description: "Administración de productos, sabores, insumos y existencias, con movimientos trazables y alertas para identificar artículos con stock bajo."
    img: "../../assets/projects/daylu-dulce/pdv/daylu-dulce-pdv-almacen.webp"
    features:
      - title: "Alta de productos y variantes"
        description: "Formulario para crear productos o nuevos sabores con categoría, unidad, costo, presentación de compra, precio de venta y existencia inicial."
      - title: "Entradas, mermas y ajustes"
        description: "Registro de movimientos con cantidad y nota; los ajustes comparan la existencia contada con la registrada y las validaciones impiden saldos negativos."
      - title: "Alertas y filtros de inventario"
        description: "Resumen de productos en nivel bajo, filtros por categoría y umbrales configurables para facilitar la revisión de existencias."
      - title: "Historial de movimientos"
        description: "Consulta de los movimientos recientes, incluidas las ventas, con fecha, producto, tipo de movimiento, cambio de existencias y observaciones."
    metrics:
      - label: "Tipos de movimiento"
        value: "4"
      - label: "Movimientos recientes"
        value: "30"
      - label: "Existencias negativas"
        value: "Bloqueadas"
  - title: "Historial y Corrección de Ventas"
    description: "Consulta de las ventas registradas en caja y herramientas administrativas para corregir o cancelar operaciones sin perder su trazabilidad."
    img: "../../assets/projects/daylu-dulce/pdv/daylu-dulce-pdv-ventas.webp"
    features:
      - title: "Detalle de cada operación"
        description: "El historial muestra folio, fecha y hora, productos, método de pago, estado y total, además del motivo cuando una venta fue cancelada."
      - title: "Edición administrada de ventas"
        description: "Los usuarios autorizados pueden cambiar productos, cantidades y método de pago, agregar líneas y registrar obligatoriamente el motivo de la corrección."
      - title: "Cancelación con devolución de stock"
        description: "La cancelación conserva la venta en el historial, registra su motivo y devuelve al almacén las existencias descontadas."
      - title: "Totales actualizados"
        description: "Las correcciones recalculan el total según los productos seleccionados y sincronizan las diferencias de inventario asociadas a la venta."
    metrics:
      - label: "Historial consultable"
        value: "100 ventas recientes"
      - label: "Acciones administrativas"
        value: "Editar y cancelar"
      - label: "Motivos de cambio"
        value: "Obligatorios"
  - title: "Autenticación, Usuarios y Permisos"
    description: "Acceso mediante correo y contraseña, invitaciones para nuevos integrantes y permisos independientes para cada módulo operativo."
    img: "../../assets/projects/daylu-dulce/pdv/daylu-dulce-pdv-usuarios.webp"
    features:
      - title: "Roles con responsabilidades diferenciadas"
        description: "Los perfiles owner, administrador y personal delimitan el acceso; únicamente un owner puede consultar y administrar la sección de usuarios."
      - title: "Permisos por módulo"
        description: "El personal puede recibir permisos específicos para dashboard, ventas, punto de venta, almacén y gastos; la navegación se adapta a los permisos disponibles."
      - title: "Invitaciones por correo"
        description: "Una Edge Function de Supabase crea la invitación y cada persona configura su contraseña desde el enlace recibido, sin necesidad de registrarse previamente."
      - title: "Estados y validación de acceso"
        description: "Las cuentas pendientes o desactivadas no pueden operar el sistema; también se gestionan la configuración y recuperación de contraseñas y el cierre de sesión."
    metrics:
      - label: "Niveles de acceso"
        value: "3 roles"
      - label: "Permisos operativos"
        value: "8"
      - label: "Administración de usuarios"
        value: "Solo owner"
  - title: "Identidad Visual y Sitio Público"
    description: "Una presentación cálida y cercana para la paletería, con una landing pública que presenta el menú y dirige al personal hacia el punto de venta."
    img: "../../assets/projects/daylu-dulce/pdv/daylu-dulce-pdv-identidad.webp"
    features:
      - title: "Landing desarrollada con Astro"
        description: "Página pública con presentación de la marca, productos destacados, precios de referencia, horario y accesos directos a la aplicación."
      - title: "Sistema visual personalizado"
        description: "Paleta de rosa pastel mexicano y tonos crema, tipografía Nunito Sans, tarjetas redondeadas y acentos de frutas para reforzar la identidad del negocio."
      - title: "Navegación orientada a la operación"
        description: "La aplicación organiza sus módulos en una barra lateral y mantiene acciones, importes, existencias y estados visibles para agilizar la consulta."
      - title: "Contenido localizado"
        description: "Interfaz en español de México y formatos regionales para moneda, fechas y horas, manteniendo una experiencia consistente entre los módulos."
    metrics:
      - label: "Rutas principales"
        value: "2"
      - label: "Formato de moneda"
        value: "MXN"
      - label: "Idioma de la interfaz"
        value: "Español (MX)"
---

## Estado actual

El punto de venta, el almacén, el historial de ventas y la administración de usuarios ya utilizan Supabase. El dashboard y los gastos conservan datos de demostración claramente identificados; no se presentan como registros reales del negocio. El proyecto continúa en desarrollo activo.
