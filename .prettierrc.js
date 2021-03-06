module.exports = {
  singleQuote: true,
  arrowParens: 'avoid',
  quoteProps: 'consistent',
  endOfLine: 'auto',
  overrides: [
    {
      files: '*.scss',
      options: {
        trailingComma: 'none',
      },
    },
  ],
};
