# Royal House Design - Architecture Website

A modern, responsive architecture and interior design website built with HTML, CSS, and JavaScript.

## Features

- **Modern Design**: Clean, professional layout with elegant typography
- **Responsive**: Fully responsive design that works on all devices
- **Interactive Elements**: Smooth animations, hover effects, and form handling
- **SEO Optimized**: Semantic HTML structure for better search engine visibility
- **Fast Loading**: Optimized code and assets for quick page loads

## Sections

1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **About Section**: Company information with animated statistics
3. **Services Section**: Four main service offerings with icons
4. **Portfolio Section**: Showcase of completed projects
5. **Contact Section**: Contact form and company information
6. **Footer**: Social links, navigation, and newsletter signup

## Technologies Used

- HTML5
- CSS3 (with Flexbox and Grid)
- JavaScript (ES6+)
- Font Awesome Icons
- Google Fonts (Playfair Display & Inter)

## File Structure

```
Arch Website/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # Main stylesheet
├── js/
│   └── script.js      # JavaScript functionality
├── images/            # Image assets (to be added)
└── README.md          # This file
```

## How to Host on GitHub Pages

### Method 1: Direct Upload

1. **Create a new repository on GitHub**
   - Go to [GitHub](https://github.com)
   - Click "New repository"
   - Name it `royal-house-design` or similar
   - Make it public
   - Don't initialize with README (we already have one)

2. **Upload your files**
   - In your new repository, click "uploading an existing file"
   - Drag and drop all files from the `Arch Website` folder
   - Commit the changes

3. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll down to "GitHub Pages" section
   - Under "Source", select "main" branch
   - Click "Save"
   - Your site will be available at `https://yourusername.github.io/repository-name`

### Method 2: Using Git Commands

1. **Initialize Git repository**
   ```bash
   cd "Arch Website"
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Connect to GitHub**
   ```bash
   git remote add origin https://github.com/yourusername/repository-name.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages** (same as Method 1)

## Customization

### Colors
The website uses a sophisticated color palette:
- Primary: `#2c3e50` (Dark Blue)
- Secondary: `#34495e` (Lighter Blue)
- Background: `#f8f9fa` (Light Gray)
- Text: `#333` (Dark Gray)

### Fonts
- Headings: Playfair Display (Serif)
- Body: Inter (Sans-serif)

### Adding Real Images
Replace the placeholder icons with real images:
1. Add your images to the `images/` folder
2. Replace `<div class="image-placeholder">` elements with `<img>` tags
3. Update CSS to style the images appropriately

### Content Updates
- Edit `index.html` to update text content
- Modify `css/style.css` for styling changes
- Update `js/script.js` for functionality changes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Tips

1. **Optimize Images**: Compress images before uploading
2. **Minimize HTTP Requests**: Combine CSS/JS files if needed
3. **Use CDN**: Font Awesome and Google Fonts are already loaded via CDN
4. **Enable Caching**: GitHub Pages automatically handles this

## Contact Form

The contact form currently shows a success message. To make it functional:

1. **Use a form service** like Formspree, Netlify Forms, or Google Forms
2. **Add server-side processing** if you have backend capabilities
3. **Use email.js** for client-side email sending

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For questions or issues, please open an issue on the GitHub repository.

---

**Note**: This is a static website template. For production use, consider adding:
- Real images and content
- Domain name
- SSL certificate
- Analytics tracking
- SEO meta tags
- Social media integration # Arch-Web
