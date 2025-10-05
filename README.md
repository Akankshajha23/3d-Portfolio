# 🌟 3D Portfolio Website

A stunning, interactive 3D portfolio built with React, Three.js, and React Three Fiber. This portfolio features immersive 3D environments, smooth animations, and a modern dark theme design.

![Portfolio Preview](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## ✨ Features

- 🎨 **Interactive 3D Environment** - Explore a beautifully crafted 3D island scene
- 🌙 **Modern Dark Theme** - Sleek, professional design with smooth transitions
- 📱 **Fully Responsive** - Seamless experience across all devices
- ⚡ **Smooth Animations** - Engaging scroll-triggered and hover animations
- 🦊 **Interactive 3D Models** - Animated fox character that responds to user interactions
- 📧 **Contact Form** - Integrated EmailJS for direct communication
- 🎯 **Project Showcase** - Beautiful grid layout with hover effects
- 💼 **Experience Timeline** - Animated vertical timeline with company details
- 🛠️ **Skills Display** - Interactive skill cards with modern styling

## 🚀 Demo

[Live Demo](your-live-demo-link-here)

## 📸 Screenshots

### Home Page
*Interactive 3D island with floating info cards*

### About Page
*Skills showcase and experience timeline*

### Projects Page
*Modern project cards with live links*

### Contact Page
*3D animated contact form with fox character*

## 🛠️ Built With

- **React** - Frontend framework
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for React Three Fiber
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Navigation and routing
- **EmailJS** - Email service integration
- **Vite** - Build tool and dev server

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn

## 💻 Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/3d-portfolio.git
cd 3d-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory and add your EmailJS credentials:
```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Start the development server
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

## 🎯 Usage

### Navigation
- Use the navbar to navigate between different sections
- Explore the 3D island on the home page by dragging/rotating
- Click on the floating info cards to navigate to different pages

### Contact Form
- The fox character animates based on form interactions
- Form submissions are handled via EmailJS

## 📁 Project Structure

```
3d-portfolio/
├── public/
│   └── assets/
│       ├── icons/
│       └── images/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── HomeInfo.jsx
│   │   ├── CTA.jsx
│   │   ├── Alert.jsx
│   │   └── Loader.jsx
│   ├── models/
│   │   ├── Island.jsx
│   │   ├── Fox.jsx
│   │   ├── Plane.jsx
│   │   ├── Bird.jsx
│   │   └── Sky.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── constants/
│   │   └── index.js
│   ├── hooks/
│   │   └── useAlert.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env
├── package.json
└── README.md
```

## 🎨 Customization

### Colors
The project uses a dark theme with customizable accent colors. Main colors can be modified in `index.css`:
- Primary: Blue (customizable via Tailwind)
- Background: Gray-900
- Text: Gray-100 to Gray-400

### 3D Models
Replace models in the `/public/assets/` directory and update imports in the respective component files.

### Content
Update your personal information in `src/constants/index.js`:
- Skills
- Experience
- Projects
- Social links

## 📦 Build

To create a production build:

```bash
npm run build
```

The build files will be in the `dist` directory.

## 🚀 Deployment

### Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables in Netlify dashboard

### Vercel
1. Import your GitHub repository
2. Framework preset: Vite
3. Add environment variables
4. Deploy

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is [MIT](LICENSE) licensed.

## 👏 Acknowledgments

- Tutorial by [JavaScript Mastery](https://www.youtube.com/watch?v=FkowOdMjvYo) - Excellent guide for building 3D portfolios
- 3D models from various sources
- Icons from [Icons8](https://icons8.com)
- Inspiration from the Three.js community

## 📧 Contact

Akanksha - [@yourtwitter](https://twitter.com/yourtwitter)

Project Link: [https://github.com/yourusername/3d-portfolio](https://github.com/yourusername/3d-portfolio)

---

⭐️ If you found this project helpful, please consider giving it a sta
