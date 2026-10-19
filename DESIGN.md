# Diseño — sitio profesional de Roger Guido

## Dirección

Flujos claros en azul: el sitio presenta el trabajo de Roger como la traducción de requerimientos y sistemas complejos hacia interfaces comprensibles. Evita fotografía conceptual y usa ilustraciones de interfaz creadas en código.

## Primera pantalla

Una declaración de rol junto a un diagrama SVG de requerimientos, análisis, interfaz, producto, QA e IA. Es una metáfora funcional del enfoque profesional, no una imagen de un proyecto real.

## Estudios de trabajo

- Syllabus: una simulación tipo navegador muestra el recorrido Ciclo académico → Plan analítico → Plan temático, usando como acentos el verde `#238937`, azul `#0C4975` y celeste `#0f5d96` verificados en su código público.
- Software de gestión de renta de vehículos: una simulación móvil con volumen y luz resume un producto de renta con vistas de clientes, rentas y autos; se rotula expresamente como representación editorial, no réplica.
- Colaboración freelance en México: un recorrido secuencial muestra acceso, cuestionario, resultado y contenido.
- Experiencia actual: un mapa de productos financieros digitales presenta trabajo dentro de un entorno empresarial del sector financiero —requerimientos, aplicaciones públicas, pruebas y componentes compartidos— sin identificar empresa ni exponer operaciones.

Las tres piezas son ilustrativas, no capturas ni afirmaciones de funcionalidades exactas. No enlazan a repositorios privados; los únicos enlaces externos públicos son GitHub y LinkedIn.

## Sistema

- Fondo claro, azul profundo, azul medio y cian; sin amarillo ni fotografía generada. Syllabus incorpora su paleta propia sólo dentro de su estudio.
- Chivo Variable es la única familia tipográfica.
- Profundidad limitada a los dispositivos ilustrativos; el resto se organiza con superficies planas y contraste tipográfico.
- Movimiento breve para entrada y trazos SVG, con alternativa completa para `prefers-reduced-motion`.
- El stack se presenta como un carril de marcas tipográficas con desplazamiento suave solicitado por el usuario; se pausa con hover/foco y se convierte en desplazamiento manual al reducir movimiento.
- La landing se publica de forma estática en español e inglés con el enrutamiento i18n nativo de Astro. El selector lleva a rutas reales y el copy, `lang` y metadata cambian juntos.

## Límites

- No afirmar métricas, entregas totales o resultados de clientes no verificados.
- Syllabus se presenta como software institucional desplegado; la participación se limita a frontend y trabajo de flujo/calidad documentados.
- El software de gestión de renta de vehículos se describe como avance parcial cuya comunicación con cliente se detuvo al cierre.
- Evaluación Digital y Digitalis Webinar se agrupan como colaboración freelance, sin atribuir resultados específicos.
- Space Apps Challenge permanece fuera del sitio hasta contar con un anuncio propio.
