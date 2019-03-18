const rangeParser = require("parse-numeric-range");

export default language => {
  if (!language) {
    return "";
  }

  let lang = language;
  let props = {};
  let highlightLines = [];

  if (language.split("{").length > 1) {
    let [_lang, ...options] = language.split("{");
    lang = _lang;

    options.forEach(option => {
      option = option.slice(0, -1);
      if (rangeParser.parse(option).length > 0) {
        highlightLines = rangeParser.parse(option).filter(n => n > 0);
      } else {
        option = option.split(":");
        props[option[0]] = option[1];
      }
    });
  }

  return { lang, props, highlightLines };
};
