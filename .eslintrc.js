module.exports = {
  extends: ['airbnb'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js'],
      },
    },
  },
  rules: {
    quotes: [1, 'single', { avoidEscape: true }],
    'linebreak-style': 0,
    'no-console': 0,
  },
};
