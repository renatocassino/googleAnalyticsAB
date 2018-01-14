module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "node": true
  },
  "globals": {
    "ga": true,
    "console": true,
  },
  "extends": "eslint:recommended",
  "rules": {
    "no-console": 0,
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ]
  }
};
