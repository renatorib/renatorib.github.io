const rangeParser = require("parse-numeric-range");

export default language => {
  let lang = language;
  let props = {};
  let highlightLines = [];

  if (!lang) {
    return { lang: "none", props, highlightLines };
  }

  if (language.split("{").length > 1) {
    let [_lang, ...options] = language.split("{");
    lang = _lang;

    options.forEach(option => {
      option = option.slice(0, -1);
      if (rangeParser.parse(option).length > 0) {
        highlightLines = rangeParser.parse(option).filter(n => n > 0);
      } else {
        option = option.split(":");
        props[option[0]] = option[1] !== undefined ? option[1] : true;
      }
    });
  }

  return { lang, props, highlightLines };
};
