// Download links configuration - Update these URLs easily
const downloadLinks = {
  macos: "https://github.com/TheAnanta/chitti-app/releases/download/3.0.6/chitti-2025-3.0.6-mac.dmg",
  windows: "https://github.com/TheAnanta/chitti-app/releases/download/3.0.6/chitti.exe"
};

// Export for use in different environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = downloadLinks;
}
