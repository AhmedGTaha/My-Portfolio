# Ahmed Taha Ghodhbani — Portfolio

A responsive personal portfolio showcasing my software engineering experience, selected projects, technical skills, education, and certifications.

[View the live portfolio](https://ahmedgtaha.github.io/My-Portfolio/)

## Highlights

- Responsive, single-page layout built with semantic HTML, CSS, and vanilla JavaScript
- Professional experience and production-style project case studies
- Interactive galleries for project screenshots and credentials
- System, light, and dark themes with the preference saved locally
- Keyboard-friendly navigation and dialogs
- Reduced-motion support and accessible labels
- Open Graph, Twitter Card, favicon, and web app manifest metadata

## Featured work

- **Flawless Interviews** — a multi-organization AI recruitment SaaS
- **Canvas** — an AI-assisted website builder
- **Alsaeh** — a bilingual AI tourism recommender for Bahrain
- **Real-Time Forum** — a Go and WebSocket-based community platform
- **Care Center** — a Flutter medical-equipment rental and donation app
- **Rentivo** — a multi-agency car rental platform

## Built with

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts
- GitHub Pages

The site has no framework, package manager, or build step.

## Run locally

Clone the repository and start any static file server:

```bash
git clone https://github.com/AhmedGTaha/My-Portfolio.git
cd My-Portfolio
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

You can also open `index.html` directly, but a local server more closely matches the deployed environment.

## Project structure

```text
.
├── index.html          # Page content, styles, and interactions
├── site.webmanifest    # Installable web app metadata
└── images/
    ├── branding/       # Icons and favicons
    ├── profile/        # Profile and social sharing images
    ├── education-credentials/
    └── <project>/      # Project gallery screenshots
```

## Customize

- Update page content, links, theme styles, and gallery data in `index.html`.
- Add project screenshots under `images/<project-name>/` and reference them in the gallery configuration near the bottom of `index.html`.
- Update icons and metadata in `site.webmanifest` and the `<head>` of `index.html`.
- Keep image paths relative so the site continues to work on GitHub Pages.

## Deployment

The repository is designed for static hosting. For GitHub Pages, publish the repository root from the default branch; no build command or output directory is required.

## Contact

- [GitHub](https://github.com/AhmedGTaha)
- [LinkedIn](https://www.linkedin.com/in/ahmedtaha-g)
- [Email](mailto:ahmedtahaghodhbani@gmail.com)

## License

No license has been specified. All rights are reserved by the repository owner.
