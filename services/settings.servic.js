const Settings = require('../model/settings.model');

let currentSettings = new Settings('default_logo.png', 'default_theme');

const getCurrentSettings = () => {
  return currentSettings;
};

const updateSettings = (newLogo, newColorTheme) => {
  currentSettings.logo = newLogo;
  currentSettings.colorTheme = newColorTheme;
};

module.exports = {
  getCurrentSettings,
  updateSettings,
};
