# Download Links Website

Simple, static website for hosting macOS and Windows download links hosted on Vercel.

## Features

- ✅ No complex UI - clean and simple design
- ✅ Two separate pages for macOS and Windows downloads
- ✅ Centralized download links configuration (easy to update)
- ✅ Responsive design
- ✅ Ready to deploy on Vercel

## Project Structure

```
├── index.html          # Home page with OS selection
├── macos.html          # macOS download page
├── windows.html        # Windows download page
├── links.js            # Download links configuration (UPDATE THIS)
├── style.css           # Simple styling
├── vercel.json         # Vercel configuration
└── README.md           # This file
```

## How to Update Download Links

Edit the `links.js` file to update your download URLs:

```javascript
const downloadLinks = {
  macos: {
    name: "macOS",
    links: [
      {
        version: "Latest",
        url: "https://your-macos-download-link.com/download",
        size: "150 MB"
      }
    ]
  },
  windows: {
    name: "Windows",
    links: [
      {
        version: "Latest",
        url: "https://your-windows-download-link.com/download",
        size: "180 MB"
      }
    ]
  }
};
```

Simply update the URLs in `links.js`, then push to GitHub and Vercel will automatically deploy the changes.

## Deployment on Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Deploy"
6. Done! Your site will be live

Each push to GitHub will automatically trigger a new deployment.

## Pages

- **Home Page** (`/`) - Choose between macOS or Windows
- **macOS Download** (`/macos.html`) - macOS downloads
- **Windows Download** (`/windows.html`) - Windows downloads

## Notes

- All pages are static HTML/CSS/JS
- No build process needed
- Works perfectly with Vercel's static hosting
