# Tommy Shelburne - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features dark mode, smooth animations, and a contact form.

## 🚀 Tech Stack

- **Framework:** React 18+ with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4
- **Routing:** React Router v6
- **Animations:** Framer Motion
- **Icons:** Heroicons
- **Deployment:** GitHub Pages

## 📋 Features

- ✨ Modern, clean design
- 🌓 Dark mode with localStorage persistence
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎨 Smooth animations and transitions
- 📧 Contact form with Formspree integration
- ⚡ Fast performance with Vite
- 🎯 SEO-friendly
- ♿ Accessible navigation

## 🛠️ Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/tommyshelburne/tommyshelburne.github.io.git
cd tommyshelburne.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 🎨 Customization

### Updating Projects

Edit `/src/data/projects.ts` to add, remove, or modify projects. Each project has:
- `id` - Unique identifier
- `title` - Project name
- `description` - Short description
- `longDescription` - Detailed description (optional)
- `technologies` - Array of tech stack items
- `imageUrl` - Project screenshot/image
- `demoUrl` - Live demo link (optional)
- `repoUrl` - GitHub repository link (optional)
- `featured` - Display on home page (boolean)

### Updating Personal Information

1. **Bio and Experience:** Edit `/src/pages/About.tsx`
2. **Contact Information:** Edit `/src/pages/Contact.tsx`
3. **Social Links:** Edit `/src/components/Footer.tsx`
4. **Site Title/Name:** Edit `/src/components/Navbar.tsx` and `/index.html`

### Setting Up Contact Form

1. Create a free account at [Formspree](https://formspree.io)
2. Create a new form and get your form ID
3. Update the form endpoint in `/src/pages/Contact.tsx`:
   ```typescript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```

### Customizing Colors

Primary colors are defined in `/src/index.css` using CSS custom properties in the `@theme` block. Modify the `--color-primary-*` values to change the color scheme.

## 🚀 Deployment

### Deploy to GitHub Pages

1. Create a GitHub repository named `tommyshelburne.github.io`

2. Initialize git and push your code:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/tommyshelburne/tommyshelburne.github.io.git
git push -u origin main
```

3. Deploy to GitHub Pages:
```bash
npm run deploy
```

Your site will be live at `https://tommyshelburne.github.io`

### Important Notes

- The repository must be named `username.github.io` for the user site
- The `base` path in `vite.config.ts` is set to `/` for user sites
- If using a project site (e.g., `username.github.io/portfolio`), update the base path

## 📁 Project Structure

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ProjectCard.tsx
│   │   └── AnimatedSection.tsx
│   ├── pages/          # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   ├── contexts/       # React contexts
│   │   └── ThemeContext.tsx
│   ├── types/          # TypeScript types
│   │   └── index.ts
│   ├── data/           # Data files
│   │   └── projects.ts
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome! Feel free to open an issue or submit a pull request.

## 📧 Contact

- Email: tommy.shelburne@example.com
- GitHub: [@tommyshelburne](https://github.com/tommyshelburne)
- LinkedIn: [tommyshelburne](https://linkedin.com/in/tommyshelburne)

---

Built with ❤️ using React and Tailwind CSS
