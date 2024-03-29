module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  extends: ["airbnb-base", "plugin:node/recommended", "prettier"],
  plugins: ['prettier'],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    "no-unused-vars": 1,
    "import/no-unresolved": 1,
    "node/exports-style": ["error", "module.exports"],
    "node/no-missing-require": 1,
    "node/prefer-global/buffer": ["error", "always"],
    "node/prefer-global/console": ["error", "always"],
    "node/prefer-global/process": ["error", "always"],
    "node/prefer-global/url-search-params": ["error", "always"],
    "node/prefer-global/url": ["error", "always"],
    "node/prefer-promises/dns": "error",
    "node/prefer-promises/fs": "error"
  }
};
