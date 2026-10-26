# Diseño — Roger Guido

La referencia es Auros (https://styles.refero.design/style/21cfe0c1-778d-4613-9f47-a5718eb929b3): profundidad oscura, luz concentrada y tipografía amplia. Se conserva la identidad propia: Chivo Variable, azul #256dd3, azul profundo #124caa, cian #62b8ed y blanco frío #f6f9ff. El fondo nocturno #071426 y las superficies #0c203a y #112b52 adaptan esa paleta al contraste oscuro.

El nombre funciona como pieza principal. Debajo, una composición de código e interfaz en perspectiva representa el proceso de convertir requerimientos en experiencias claras. Es una ilustración, no código de cliente ni captura de un producto. Se construye con HTML, SVG y transformaciones CSS 3D, sin WebGL ni dependencias nuevas. Los paneles se disuelven en partículas y vuelven a formarse en ciclos de 12 segundos, con dos segundos de desfase; la malla del núcleo gira lentamente. CSS anima transformaciones, opacidad y el recorte de las superficies, sin un bucle JavaScript por fotograma. El usuario puede pausar el efecto, que también se detiene fuera de pantalla o con la pestaña oculta. Movimiento reducido y ausencia de JavaScript conservan los paneles estáticos.

Los estudios conservan su contexto real: Syllabus institucional, gestión de rentas con avance parcial y colaboración freelance en México. Sus interfaces siguen siendo representaciones ilustrativas. La experiencia financiera se describe sin identificar empresa ni sistemas internos.

Los gradientes se limitan al volumen de los dos núcleos luminosos; los paneles en perspectiva usan sombra para expresar distancia. Las etiquetas de contexto mantienen información profesional. Son excepciones deliberadas a las reglas generales de la skill de diseño para seguir la referencia solicitada. Se omiten fotografía y video porque no hay material propio verificado. Las ilustraciones explican el trabajo sin aparentar capturas reales.

La página conserva español e inglés, navegación por anclas, enlaces públicos, metadata y datos estructurados. La navegación permanece disponible en móvil. El contenido principal usa 16px; las simulaciones tienen su escala ilustrativa. Hay foco visible, salto al contenido, movimiento reducido y contenido legible sin JavaScript. El carril de tecnologías se pausa con foco o hover y permite desplazamiento manual con movimiento reducido.

Validación reproducible: npm ci, npm test. Para comprobar los enlaces de GitHub Pages, ejecutar con GITHUB_ACTIONS=true. Revisión visual a 1440, 768 y 390px; comprobación adicional a 320px.
