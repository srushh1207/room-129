# ROOM 129

A small, static creative portfolio with a scroll-led vinyl archive. It uses plain HTML, CSS and JavaScript, so there is no package installation, build step or environment variable to configure.

## Run it on your computer

1. Open this folder in VS Code.
2. Open `index.html` in a browser to preview the site.
3. For a local web-server preview, install the **Live Server** extension in VS Code, right-click `index.html`, then choose **Open with Live Server**. The browser will refresh when you save a change.

`main.html` is kept as a small redirect for the original starter-page address. `index.html` is the website entry point.

## Edit the content

- **Creative worlds and projects:** edit `content.js`. Each world has its own title, short description and color. Each project has a title, type, year, description, image URL, alt text and tags. Add or remove project entries in the `projects` array; the world previews and archive update from that list.
- **Images:** replace a project's `image` URL with your own image URL. For images stored in this repository, create an `assets` folder and use a relative path such as `assets/my-photo.jpg`. Keep images reasonably small (ideally under 500 KB), use descriptive `alt` text, and retain lazy loading. The About portrait is currently in `index.html`; replace its image URL and caption there.
- **About text:** update the About heading, paragraphs and sample-copy note in `index.html`.
- **Contact details:** replace `hello@example.com` and `+00 0000 000000` in `index.html`. Also change the `mailto:hello@example.com` destination in `app.js`, so the contact form opens a message to your real address. The form opens the visitor's email app; it does not store or send messages itself.
- **Colors and layout:** edit the CSS variables at the top of `styles.css`, then adjust the component styles below them.

Project entries are illustrative placeholders, not claims about a real portfolio. The supplied reference files are in `design-reference/`.

## Features

- Six linked creative worlds with scroll-synced category labels and a vinyl record that rotates with scroll on motion-enabled devices.
- Clickable category navigation, project preview dialogs, a searchable and filterable archive, and a random-project button.
- Responsive layouts, keyboard-visible focus states, image alt text, reduced-motion support, and no autoplaying media.
- A custom pointer detail on fine-pointer devices; it is disabled for touch and reduced-motion preferences.

Project photos and the web fonts currently load from third-party CDNs. Replace them with local files if you want the site to work fully offline or avoid external requests.

