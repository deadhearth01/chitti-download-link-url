// Download links configuration - Update these URLs easily
const downloadLinks = {
  macos: {
    name: "macOS",
    links: [
      {
        version: "3.06",
        url: "https://github.com/TheAnanta/chitti-app/releases/download/3.0.6/chitti-2025-3.0.6-mac.dmg",
        size: "60.4 MB"
      }
    ]
  },
  windows: {
    name: "Windows",
    links: [
      {
        version: "Latest",
        url: "https://github.com/TheAnanta/chitti-app/releases/download/3.0.6/chitti.exe",
        size: "45.4 MB"
      }
    ]
  }
};

// Export for use in different environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = downloadLinks;
}
