export const themeExtend = theme => (selectors, style = {}) => {
  if (!Array.isArray(selectors)) {
    selectors = [selectors];
  }

  return selectors.reduce(
    (acc, selector) => ({
      ...acc,
      [selector]: { ...theme[selector], ...style }
    }),
    {}
  );
};
