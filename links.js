// Download links configuration - Update these URLs easily
const downloadLinks = {
  macos: "https://github.com/TheAnanta/chitti-app/releases/download/6.0.1/chitti-2026-6.0.1-mac.dmg",
  windows: "https://github.com/TheAnanta/chitti-app/releases/download/5.0.6/chitti.exe"
};

// Export for use in different environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = downloadLinks;
}
