# Blog Site

A personal blog site built with React and Vite. The app displays a blog title, author profile, navigation links, and a list of car articles using reusable components and props.

## Project Structure

```text
src/
  App.jsx
  components/
    Home.jsx
    Header.jsx
    About.jsx
    Links.jsx
    ArticleList.jsx
    Article.jsx
  _test_/
    App.test.jsx
```

## Component Connections

- `App.jsx` stores the blog data and passes it to `Home`.
- `Home.jsx` organizes the page and connects `Header`, `About`, `Links`, and `ArticleList`.
- `Header.jsx` displays the blog title from `Home`.
- `About.jsx` displays the author image, name, and description from `Home`.
- `Links.jsx` displays navigation links from `Home`.
- `ArticleList.jsx` receives posts from `Home` and renders one `Article` for each post.
- `Article.jsx` displays a single article title, date, and preview.

## Prerequisites

- Node.js 18 or newer
- npm
- Git

## Run Locally

1. Clone the repository:

   ```bash
   git clone git@github.com:Enoch-Wanjala/blog-site.git
   cd blog-site
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the local site in your browser:

   ```text
   http://localhost:5173
   ```

## Available Scripts

```bash
npm run dev      # Start the Vite development server
npm run build    # Build the project for production
npm run preview  # Preview the production build locally
npm run lint     # Check code style with ESLint
npm test         # Run the Jest test suite
```

## Screenshot

![Blog site screenshot](https://github.com/user-attachments/assets/a4fbd88e-51a7-426d-a6b5-4b534164f744)
