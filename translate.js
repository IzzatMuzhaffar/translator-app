const translations = {
  malay: {
    morning: 'pagi',
  },
  spanish: {
    morning: 'mañana',
  },
};

export function translate(language, inputText) {
  // export function translate("malay", "morning") {
  return translations[language][inputText];
}
