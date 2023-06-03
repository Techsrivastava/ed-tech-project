const settingsService = require('../services/settings.servic');

const getSettings = (req, res) => {
  const currentSettings = settingsService.getCurrentSettings();
  res.json(currentSettings);
};

const updateSettings = (req, res) => {
  const { newLogo, newColorTheme } = req.body;
  settingsService.updateSettings(newLogo, newColorTheme);
  res.json({ message: 'Settings updated successfully.' });
};

module.exports = {
  getSettings,
  updateSettings,
};
