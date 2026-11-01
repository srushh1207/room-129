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

## Publish with GitHub Pages

This is a static website. **Build command:** none. **Output folder:** repository root (`/`). **Environment variables:** none. GitHub Pages serves `index.html` directly.

### 1. Put the folder on GitHub

1. Sign in at [github.com](https://github.com/) and create a new repository. Choose a name such as `room-129`; for a personal portfolio, a public repository is the simplest option. Do not select a template that adds starter files.
2. In VS Code, open **Terminal → New Terminal**. Check that the terminal is in this project folder. Run these commands one at a time:

   ```powershell
   git init
   git add .
   git commit -m "Build ROOM 129 portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/room-129.git
   git push -u origin main
   ```

3. Replace `YOUR-USERNAME` and `room-129` with your GitHub username and repository name. GitHub will prompt you to sign in if needed. If Git says the remote name `origin` already exists, use `git remote set-url origin https://github.com/YOUR-USERNAME/room-129.git` instead of the `git remote add` command.
4. If `git` is not recognized in the VS Code terminal, install **Git for Windows**, restart VS Code, and try again. If the `git commit` command asks you to identify yourself, configure your name and email with `git config --global user.name "Your Name"` and `git config --global user.email "you@example.com"`, then repeat the commit.

### 2. Turn on GitHub Pages

1. Open the repository on GitHub and select **Settings**.
2. In the left menu, open **Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Choose branch **`main`** and folder **`/ (root)`**, then select **Save**.
5. Wait a minute or two. Return to **Settings → Pages**; the page shows the published link. It will look like `https://YOUR-USERNAME.github.io/room-129/`.
6. Open that link on a phone and computer. Try the category links, archive filters, and a project preview.

There are no build settings or secrets to enter. Do not add a trailing `/index.html` to image links; use the relative asset paths described above so images work under the repository's URL prefix.

### 3. Publish later edits

After editing and previewing the site, save the files and run:

```powershell
git add .
git commit -m "Update ROOM 129 content"
git push
```

GitHub Pages publishes the update automatically, usually within a few minutes. Refresh the live page if the browser is still showing an older cached version.

### Optional: use your own domain

Buy a domain from a domain registrar, then go to **repository Settings → Pages → Custom domain** and enter it. GitHub shows the DNS records to add at your registrar; follow those values exactly (they depend on whether you use a root domain like `example.com` or a subdomain like `www.example.com`). After DNS finishes updating, enable **Enforce HTTPS** in the Pages settings. DNS changes can take up to 24–48 hours.

### Quick troubleshooting

- **The Pages link shows a 404:** confirm Pages is set to branch `main`, folder `/ (root)`, and that the repository contains `index.html` at its top level.
- **The page loads without its styling or images:** check that `styles.css`, `app.js`, and `content.js` are committed and that local asset paths match their file names and capitalization exactly.
- **A photo is missing:** check the image URL or relative path and try opening it directly. The sample photo URLs need an internet connection.
- **A change is not visible yet:** check the repository's **Actions** tab for a Pages deployment, wait briefly, and refresh the browser.
- **The contact form does not open:** it relies on the visitor having an email app configured. The visible address remains clickable as an alternative.
