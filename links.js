// Download links configuration - Update these URLs easily
const downloadLinks = {
  macos: "https://github.com/TheAnanta/chitti-app/releases/download/4.0.1/chitti-2025-4.0.1-mac.dmg",
  windows: "https://github.com/TheAnanta/chitti-app/releases/download/4.0.1/chitti.exe"
};

// Export for use in different environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = downloadLinks;
}
