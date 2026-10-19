# Roger Guido — sitio profesional

Landing estática en Astro para presentar el perfil de Roger Fernando Guido Cisneros: frontend, análisis funcional y flujos asistidos por IA.

## Desarrollo

```sh
npm install
npm run dev
```

La compilación de producción se valida con:

```sh
npm run build
```

## Idiomas

El enrutamiento i18n nativo de Astro genera dos versiones estáticas: español en `/` e inglés en `/en/`. El selector de idioma usa rutas reales y el contenido, el idioma del documento y los metadatos se renderizan en cada versión; las traducciones viven en `src/i18n/ui.ts`.

## SEO al publicar

La página ya incluye título, descripción, Open Graph, robots y datos estructurados de tipo `Person`. Para la compilación de publicación, pasa el dominio público real en `SITE_URL`; esto activa las etiquetas canónicas y `og:url` sin inventar una URL.

```powershell
$env:SITE_URL = "https://tu-dominio.com"
npm run build
```

Con el dominio confirmado, añade también ese mismo origen al sitemap.

## GitHub Pages

El flujo `.github/workflows/deploy.yml` compila y despliega automáticamente al hacer `push` a `main`. Para activarlo una sola vez, en el repositorio abre **Settings → Pages** y selecciona **GitHub Actions** como fuente. La URL prevista es `https://rogerg03.github.io/myrepo-mycareer/`; la configuración ya añade el subdirectorio necesario para enlaces, i18n y SEO.
