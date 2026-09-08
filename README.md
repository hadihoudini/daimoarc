# DAIMOARC

DAIMOARC is a static company website for websites, software, online stores, cloud systems, automation, and ongoing technical support.

## Site structure

- `index.html` - homepage
- `services.html` - services overview
- `contact.html` - project brief form
- `about.html` - company information
- `reviews.html` - reviews
- Service pages - detailed service information
- `styles.css` - shared design and responsive styles
- `script.js` - shared navigation and scroll behaviour
- `images/` - website artwork and service imagery

## Run locally

This is a static site with no build step or package installation required. Open `index.html` in a browser, or serve the folder with any static file server.

## Contact form

The project brief form sends submissions to the Google Apps Script Web App configured in `contact.html`. The Apps Script writes leads to the `Leads` worksheet and can notify `diamoarc@gmail.com`.

If the Apps Script deployment or spreadsheet changes, update the endpoint or deployment separately from the website files.

## GitHub Pages

The site is published from the `main` branch root using GitHub Pages:

<https://hadihoudini.github.io/daimoarc/>

Changes pushed to `main` are published by GitHub Pages after deployment completes.
