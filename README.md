# Personal Website Starter

This website is ready for GitHub Pages and is designed so you can keep adding pages and blog posts in VSCode.

If you are brand new to coding, follow this file step-by-step in order.

## What Is In This Project

- `index.html`: Home page
- `about.html`: About page
- `publications.html`: Publications overview page
- `publications-web.html`: Web publications page
- `publications-print.html`: Print publications page
- `blog.html`: Blog listing page (this is automatically filled from `blogs/posts.json`)
- `blogs/`: Folder for individual blog post pages (`.html` files)
- `blogs/posts.json`: Blog list used by `blog.html`
- `scripts/generate_blog_manifest.py`: Script that scans the `blogs/` folder and rebuilds `blogs/posts.json`
- `assets/css/variables.css`: Theme colors
- `assets/css/base.css`: Global style rules
- `assets/css/components.css`: Header/cards/dropdowns/etc.
- `assets/js/theme.js`: Dark/bright mode toggle
- `assets/js/contact.js`: Email protection helper
- `assets/js/blog-list.js`: Loads the blog list into `blog.html`
- `.nojekyll`: Needed for GitHub Pages static file serving

## Before You Start (One-Time Setup)

1. Install these apps:
- VSCode
- Git
- Python 3

2. Open this project folder in VSCode.

3. Open VSCode terminal:
- Menu: `Terminal` -> `New Terminal`

4. Confirm tools are installed:

```bash
git --version
python3 --version
```

If these commands print versions, you are ready.

## First Publish To GitHub Pages (Beginner Steps)

1. Create a GitHub account (if you do not already have one):
- https://github.com

2. Create a new repository on GitHub.
- Name suggestion: `your-name-website`
- Keep it Public (recommended for GitHub Pages)

3. Connect your local folder to that repository from VSCode terminal:

```bash
git init
git add .
git commit -m "Initial website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your real values.

4. Turn on GitHub Pages:
- Open your repository on GitHub
- Click `Settings`
- Click `Pages` (left sidebar)
- Under `Build and deployment`:
- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/ (root)`
- Click `Save`

5. Wait 1-3 minutes. GitHub will show your public website URL.

## Publishing Updates After Any Change

Every time you update text/pages/blog posts, run these 3 commands in VSCode terminal:

```bash
git add .
git commit -m "Describe what you changed"
git push
```

After push, GitHub Pages updates automatically.

## How To Add A Brand New Webpage (Non-Technical Guide)

Use this when you want a new page such as `projects.html`, `contact.html`, or `events.html`.

1. In VSCode Explorer, right click project root -> `New File`
- Example file name: `projects.html`

2. Copy one existing page as your template:
- Open `about.html`
- Copy all content
- Paste into `projects.html`

3. Update your new page content:
- Change the `<title>` in `<head>`
- Change `<h1 class="page-title">`
- Replace placeholder text in sections

4. Add your new page to top navigation in all pages.
- In each page file (`index.html`, `about.html`, `blog.html`, etc.), add a new nav link inside `<nav class="site-nav">`:

```html
<a class="nav-link" href="projects.html">Projects</a>
```

5. Save files.

6. Publish update:

```bash
git add .
git commit -m "Add projects page"
git push
```

## Blog System (Now Uses Separate Folder)

Blog posts live in `blogs/` as separate HTML files.

Current example posts:
- `blogs/sketchbook-entry-review-feeling.html`
- `blogs/writing-in-public.html`
- `blogs/micro-review-weekend-book.html`

The blog list page (`blog.html`) reads `blogs/posts.json` automatically.

## How To Add A New Blog Post (Beginner Safe Workflow)

1. In VSCode Explorer, right click `blogs/` -> `New File`
- Example name: `my-new-post.html`

2. Copy one existing blog file as template.
- Open `blogs/writing-in-public.html`
- Copy all
- Paste into your new file

3. Update the metadata at the top of your new post file.
These lines are required because the auto-list script reads them:

```html
<meta name="post-title" content="My New Post Title" />
<meta name="post-date" content="2026-04-01" />
<meta name="post-read-time" content="5 min read" />
<meta name="post-summary" content="One sentence summary of the post." />
```

4. Write your post body content in the page.

5. Rebuild the blog index (automatic scan of `blogs/` folder):

```bash
python3 scripts/generate_blog_manifest.py
```

This updates `blogs/posts.json` for you.

6. Publish:

```bash
git add .
git commit -m "Add new blog post: My New Post Title"
git push
```

## Important: Why This Is "Automatic"

Static websites cannot truly detect folder file lists in the browser by default.

This project solves it with a beginner-friendly generator script:
- You add post files into `blogs/`
- Run `python3 scripts/generate_blog_manifest.py`
- The blog list updates itself from the folder

This is the safest and most reliable approach for GitHub Pages.

## Quick Checklist For New Blog Posts

1. Create file in `blogs/`
2. Update post metadata tags
3. Run `python3 scripts/generate_blog_manifest.py`
4. Run `git add . && git commit -m "..." && git push`

## Troubleshooting

### My website did not update
- Wait 1-3 minutes after push
- Confirm Pages is enabled on `main` branch root
- Check `Actions` tab on GitHub for deployment status

### Blog list did not show my new post
- Confirm your new file is inside `blogs/`
- Confirm it has all four meta tags (`post-title`, `post-date`, `post-read-time`, `post-summary`)
- Run `python3 scripts/generate_blog_manifest.py` again
- Commit and push both the new post file and `blogs/posts.json`

### `python3` command not found
- Install Python 3, then restart VSCode terminal

### I edited files but forgot to publish
- Run:

```bash
git add .
git commit -m "Save latest website changes"
git push
```

## Optional Nice Habit

Whenever you create a new blog post, open `blog.html` in a browser locally first to confirm the post appears before pushing.
