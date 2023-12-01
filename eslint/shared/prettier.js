const enablePrettierIntegration = process.env.CI === 'true';

// By default `eslint-config-prettier` turns off some 'special rules', that only work with Prettier
// under certain circumstances. We don't want to override these in this config.
// https://github.com/prettier/eslint-config-prettier#special-rules
const prettierRuleOverrides = Object.fromEntries(
  Object.entries(require('eslint-config-prettier').rules).filter(([, value]) => value !== 0),
);

module.exports = {
  plugins: ['prettier'],
  rules: {
    // Subset of `eslint-config-prettier` to turn off rules that are never needed when using Prettier.
    ...prettierRuleOverrides,

    ...(enablePrettierIntegration && {
      'prettier/prettier': 'warn', // There is no need to disable the `arrow-body-style` and `prefer-arrow-callback` rules, because // we don't run `eslint --fix` in CI pipelines. // https://github.com/prettier/eslint-plugin-prettier#arrow-body-style-and-prefer-arrow-callback-issue
    }),
  },
};
