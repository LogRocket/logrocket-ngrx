module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "env": {
    "browser": true,
    "mocha": true,
  },
  "globals": {
    "expect": true,
    "mochaAsync": true,
    "sinon": true,
  },
  "rules": {
    "mocha/no-exclusive-tests": "error",
    "mocha/handle-done-callback": "error",
    "mocha/no-global-tests": "error",
    "mocha/no-sibling-hooks": "error",
    "no-underscore-dangle": 0,
    "arrow-body-style": 0,
    "no-console": ["error", { allow: ["warn", "error", "info"] }],
    "global-require": 0,
    "import/no-unresolved": 0,
    "no-unused-expressions": ["error", { "allowShortCircuit": true }],
    "no-shadow": ["error", { "allow": ["err", "done", "resolve", "reject", "args"] }],
    "consistent-return": ["error", { "treatUndefinedAsUnspecified": true }],
    "no-return-assign": 0,
    "import/no-extraneous-dependencies": 0,
    "import/imports-first": 0,
    "no-mixed-operators": 0,
    "arrow-parens": 0,
    "no-plusplus": 0,
    "import/extensions": 0,
    "no-void": 0,
    "object-property-newline": 0,
    "no-continue": 0,
    "react/no-unescaped-entities": 0,
    "prefer-spread": 0,
    "import/prefer-default-export": 0,
    "class-methods-use-this": 0,
    "no-extra-boolean-cast": 0,
    "react/no-danger": 0,
    "no-prototype-builtins": 0,
    "valid-typeof": 0,
    "no-global-assign": 0,
    "import/newline-after-import": 0,
    "no-tabs": 0,
    "require-yield": 0,
    "react/jsx-indent": 0,
    "react/self-closing-comp": 0,
    "generator-star-spacing": 0,
    "no-undef-init": 0,
    "dot-location": 0,
    "space-unary-ops": 0,
  },
  "plugins": ["mocha"]
}