export const supportedLanguages = [
  { id: 'hu', title: 'Magyar', isDefault: true },
  { id: 'en', title: 'English' }
];

export const baseLang = supportedLanguages.find(l => l.isDefault) ?? supportedLanguages[0];