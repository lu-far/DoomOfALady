# Personal Website Starter

A modular multi-page static website ready for GitHub Pages.

## Structure

- `index.html` - Home page
- `about.html` - About me page
- `publications.html` - Publications page
- `publications-web.html` - Web publications page
- `publications-print.html` - Print publications page
- `blog.html` - Blog page
- `assets/css/variables.css` - Theme variables (light and dark)
- `assets/css/base.css` - Global/reset/layout styles
- `assets/css/components.css` - Header, cards, and section components
- `assets/js/theme.js` - Dark/Bright mode toggle and persistence
- `assets/js/contact.js` - Obfuscated email link builder
- `assets/js/publication-menu.js` - Publications dropdown navigation
- `.nojekyll` - Ensures GitHub serves files/folders as-is

## Publish On GitHub Pages

1. Push this repository to GitHub.
2. Open repository settings on GitHub.
3. Go to `Pages`.
4. Under `Build and deployment`, set:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main` and `/ (root)`
5. Save and wait for deployment.

GitHub will provide your live URL after deployment is complete.
