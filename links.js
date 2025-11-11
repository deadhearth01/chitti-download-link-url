// Download links configuration - Update these URLs easily
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

// Export for use in different environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = downloadLinks;
}
