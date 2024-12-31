# Modern Developer Portfolio

![Portfolio Preview](/profile.png)

A modern, responsive developer portfolio built with React, TypeScript, and Tailwind CSS. Features smooth scrolling, interactive elements, and a clean, professional design.

## ✨ Features

- **Responsive Design** - Looks great on all devices
- **Interactive UI** - Smooth scrolling and engaging animations
- **Dark Theme** - Modern dark mode design with gradient accents
- **Progress Tracking** - Visual scroll progress indicator
- **Section Navigation** - Quick jump to different sections with dot navigation
- **Performance Optimized** - Debounced scroll handling and optimized animations

- **Clear Structure**: The code is well-organized with separate components for each section, making it maintainable.
- **Smooth Scrolling**: The scrollIntoView({ behavior: "smooth" }) provides a good user experience.
- **Active Section Highlighting**: The activeSection state and related logic correctly highlight the current section in the navigation.
- **Parallax Effect**: The mouse parallax effect on the hero section adds a nice visual touch.
- **Throttling**: The use of setTimeout and throttleTimeoutRef prevents excessive updates on mouse move, improving performance.
- **Cleanup**: The useEffect includes proper cleanup for event listeners and timeouts, preventing memory leaks.

## 🚀 Tech Stack

- React 18+
- TypeScript
- Tailwind CSS
- Lucide Icons
- Lodash

## 🛠️ Installation

1. Clone the repository:

```bash
git clone https://github.com/luillyfe/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

## 🏗️ Project Structure

```
src/
├── assets/        # Static assets (images, icons)
├── components/    # React components
├── App.tsx        # Main application component
├── Portfolio.tsx  # Portfolio implementation
└── App.css        # Global styles
```

## 🎨 Customization

### Modifying Sections

The portfolio consists of several main sections that can be easily customized in `Portfolio.tsx`:

- Hero
- Projects
- Experience
- Skills
- Publications

Each section is clearly marked with comments in the code and can be modified or extended as needed.

### Styling

The project uses Tailwind CSS for styling. The main theme colors can be customized in the `tailwind.config.js` file. The current color scheme uses:

- Primary gradient: `from-blue-400 to-purple-500`
- Background: Black and dark grays
- Accent colors: Blue and purple tones

### Adding Projects

New projects can be added by modifying the `projects` array in `Portfolio.tsx`:

```typescript
const projects = [
  {
    title: "Project Name",
    description: "Project description",
    metrics: "Key metrics or results",
    icon: <Icon />,
    color: "from-color-500 to-color-500",
  },
  // Add more projects...
];
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:

- Mobile: Default styles
- Tablet: `md:` prefix (768px)
- Desktop: `lg:` prefix (1024px)

## 🔧 Development

### Prerequisites

- Node.js 16+
- npm or yarn

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

Fermin Blanco - [@luillyfe](https://twitter.com/luillyfe) - luillyfe89@gmail.com

Project Link: [https://github.com/luillyfe/portfolio](https://github.com/luillyfe/portfolio)

---

Made with ❤️ by [Fermin Blanco](https://github.com/luillyfe)
