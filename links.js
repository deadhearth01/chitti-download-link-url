// Download links configuration - Update these URLs easily
const downloadLinks = {
  macos: "https://github.com/TheAnanta/chitti-app/releases/download/5.0.5/chitti-2025-5.0.5-mac.dmg",
  windows: "https://github.com/TheAnanta/chitti-app/releases/download/5.0.6/chitti.exe"
};

// Export for use in different environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = downloadLinks;
}
