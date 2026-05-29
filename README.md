# 🌌 Jishnu Vardhan — Professional Engineering Portfolio

[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![Docker](https://img.shields.io/badge/Docker-Enabled-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![GitHub Actions](https://img.shields.io/badge/CI%2FCD-Active-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/features/actions)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel%20%26%20Netlify-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![EmailJS](https://img.shields.io/badge/EmailJS-Integrated-F05032?style=for-the-badge&logo=git&logoColor=white)](https://www.emailjs.com/)

A modern, high-fidelity, and fully responsive personal portfolio designed for **Jishnu Vardhan**, an engineering student specializing in **Data Science & DevOps**. The application features an immersive cosmic dark theme with glassmorphic cards, smooth background mesh glow animations, dynamic project catalogues, interactive skillset progress charts, and direct secure contact form handling via EmailJS.

---

## 🎨 Design & Aesthetic Excellence

* **Immersive Glassmorphism:** Translucent visual elements featuring high-radius frosted blurs (`backdrop-filter: blur(16px)`), extremely fine glowing borders (`rgba(255, 255, 255, 0.05)`), and soft layered shadows.
* **Unified Premium Glass Navbar:** Fully responsive navigation that floats over the content. It transitions seamlessly into a frosted dropdown drawer on mobile viewports with a customized 3-line hamburger toggle.
* **Aurora & Cosmic Gradients:** Custom ambient backdrop spheres floating via keyframe animations, casting beautiful, interactive aura shapes behind structural content cards.
* **Micro-Animations:** Fluid scaling hover effects, slide-ins, real-time input error indicators, and pulse loading animations for a highly responsive user experience.

---

## 🛠️ Technological Architecture

| Component | Technology | Role / Integration |
| :--- | :--- | :--- |
| **Core Framework** | React 19 & Vite | High-performance Single Page Application (SPA) development with Hot Module Replacement (HMR). |
| **Styling Engine** | Vanilla CSS3 | Custom variables, layout flexbox/grid models, scrollbars, and keyframe animations. |
| **Routing Layer** | React Router v7 | Declarative SPA path management (`/`, `/about`, `/skills`, `/projects`, `/contact`). |
| **Form Dispatch** | EmailJS Browser | Direct-to-inbox social message submission without requiring a custom backend. |
| **Containerization** | Docker | Multi-stage production container compiling static React files into a lightweight Nginx web server. |
| **Pipeline Automation** | GitHub Actions | Continuous Integration verification compiling build bundles on every commit pushes. |

---

## 📁 Repository Directory Structure

```text
c:\Users\jishn\Documents\My WebSite\
├── package.json               # Modular dependencies & build scripts
├── index.html                 # Single page entry with SEO headers & Google Fonts
├── vercel.json                # SPA rewrite routing configurations for Vercel
├── nginx.conf                 # SPA rewrite routing configurations for Docker Nginx
├── Dockerfile                 # Production multi-stage Docker build pipeline
├── README.md                  # Detailed professional repository manual
├── .github/
│   └── workflows/
│       └── deploy.yml         # CI/CD pipeline automation setup
├── public/
│   ├── _redirects             # Netlify rewrite fallback configurations
│   └── favicon.svg            # Site vector favicon
└── src/
    ├── main.jsx               # React core bootstrap mount
    ├── App.jsx                # Router assembly and pathways
    ├── index.css              # Central design tokens, custom glass variables, & animations
    ├── components/
    │   ├── AnimatedBg.jsx     # Floating background mesh glow bubbles
    │   ├── Navbar.jsx         # Frosted glass navigation with single-list mobile toggle
    │   ├── Footer.jsx         # Connection icons & details
    │   ├── ProjectCard.jsx    # Projects display card with tags & links
    │   └── SocialIcons.jsx    # Vector svg social icons (GitHub, LinkedIn, etc.)
    └── pages/
        ├── Home.jsx           # Hero, core focus metrics, and call-to-actions
        ├── About.jsx          # Professional journey timeline and academic profiles
        ├── Skills.jsx         # Data Science & DevOps skill level progress meters
        ├── Projects.jsx       # Interactive catalog search & category filters
        └── Contact.jsx        # Social links & validated EmailJS message form
```

---

## ⚙️ Local Development Guide

### Prerequisites
* **Node.js:** `v20.x` or higher installed
* **npm:** `v10.x` or higher installed

### 1. Clone & Install Dependencies
Navigate into your workspace directory and install all node modules:
```bash
npm install
```

### 2. Configure Environment Variables
To enable the Contact Form to send emails directly to your Gmail inbox, create a `.env` file in the root directory and paste your EmailJS API keys:
```env
VITE_EMAILJS_SERVICE_ID=service_1af589t
VITE_EMAILJS_TEMPLATE_ID=template_g8jrn0s
VITE_EMAILJS_PUBLIC_KEY=JfIPUX5ylfCJzV7ux
```
*If these variables are omitted, the form automatically falls back to an integrated, prefilled `mailto:` client dispatch model.*

### 3. Launch Development Server
Boot up Vite's high-speed local development platform:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the live site.

### 4. Compile Production-Ready Code
Build the optimized static bundle into the `dist/` directory:
```bash
npm run build
```

---

## 🐳 Docker Deployment Guide

The workspace is fully containerized, packaging the static React site into a secure, high-performance **Nginx** server block.

### 1. Build Docker Image
Compile the production-optimized multi-stage Docker container:
```bash
docker build -t portfolio-website .
```

### 2. Spin Up Container
Launch the container mapping it to port `8080` (routes internal Nginx standard `80` port):
```bash
docker run -d -p 8080:80 --name jishnu-portfolio portfolio-website
```
Open your browser and navigate to [http://localhost:8080](http://localhost:8080) to view your containerized portfolio!

---

## 🚀 Cloud Hosting Integrations

### Vercel
Deployment on Vercel is streamlined and pre-configured via [vercel.json](file:///c:/Users/jishn/Documents/My%20WebSite/vercel.json):
1. Connect your GitHub repository directly to Vercel.
2. The framework preset will automatically recognize **Vite**.
3. Keep default settings (`npm run build` command, `dist` output directory) and click **Deploy**.

### Netlify
Deployment on Netlify is fully supported via the `public/_redirects` rewrite rule. When creating your Netlify site, set the publish directory to `dist` and build command to `npm run build`.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE). Made with ⚡ by Jishnu Vardhan.
