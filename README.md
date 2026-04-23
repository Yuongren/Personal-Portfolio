# 🖥️ Youngren Gitonga — Personal Portfolio Website

A clean, responsive personal portfolio website built with **HTML**, **CSS**, and **vanilla JavaScript**. It showcases skills, featured projects, work experience, and a contact form.

---

## 📸 Preview

> A single-page portfolio with smooth anchor navigation, a hero section, skills grid, project cards, experience timeline, and a contact form.

---

## 🚀 Features

- **Responsive Design** — Mobile-first layout that adapts across all screen sizes
- **Sticky Navbar** — Fixed top navigation with smooth scroll to each section
- **Hero Section** — Intro with a code-themed avatar, call-to-action buttons, and social links
- **Skills Grid** — Visual cards for each technology/stack
- **Project Showcase** — Cards for featured projects with tech tags and live/repo links
- **Experience Timeline** — Chronological work history and education
- **Contact Section** — Contact details and a message form with basic feedback simulation
- **Font Awesome Icons** — Used throughout for visual polish
- **Google Fonts** — Inter typeface for clean, modern typography

---

## 🗂️ Project Structure

```
portfolio/
├── index.html       # Main HTML structure
├── index.css        # All styles (layout, components, responsiveness)
└── index.js         # Form simulation & minor UI interactions
```

---

## 🛠️ Tech Stack

| Layer      | Technology                     |
|------------|-------------------------------|
| Markup     | HTML5                         |
| Styling    | CSS3 (custom properties, flexbox, grid) |
| Scripting  | Vanilla JavaScript            |
| Icons      | Font Awesome 6                |
| Fonts      | Google Fonts — Inter          |

---

## ⚙️ Getting Started

No build tools or dependencies required. Just open the project in a browser.

### 1. Clone the repository

```bash
git clone https://github.com/Yuongren/portfolio.git
cd portfolio
```

### 2. Open in browser

```bash
# Option A — Open directly
open index.html

# Option B — Use a local dev server (recommended)
npx serve .
# or
python3 -m http.server 3000
```

Then visit `http://localhost:3000` in your browser.

---

## ✏️ Customisation

To make this portfolio your own, update the following in `index.html`:

| Section       | What to change                                      |
|---------------|-----------------------------------------------------|
| **Hero**      | Name, tagline, years of experience, bio             |
| **Social links** | GitHub, LinkedIn, Twitter URLs                   |
| **Skills**    | Add/remove skill cards in the `#skills` section     |
| **Projects**  | Update project names, descriptions, tags, and links |
| **Experience**| Edit job titles, companies, dates, and descriptions |
| **Contact**   | Email address, phone number, location               |
| **Footer**    | Your name and year                                  |

For styling changes, edit the CSS variables at the top of `index.css`.

---

## 📬 Contact Form

The contact form currently uses a **simulated submission** handled in `index.js`. To make it functional, you can integrate:

- [Formspree](https://formspree.io) — update the `action` attribute on the `<form>` tag
- [EmailJS](https://www.emailjs.com) — send emails directly from the browser
- A custom backend endpoint

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙌 Acknowledgements

- [Font Awesome](https://fontawesome.com) for icons
- [Google Fonts](https://fonts.google.com) for the Inter typeface
- Inspired by the developer community and the craft of clean code
