module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'prettier',
  ],
  plugins: ['vue'],
  rules: {
    "no-unused-vars": "off"
  },
  parserOptions: {
    parser: 'babel-eslint',
    babelOptions: {
      configFile: __dirname + "babel.config.js",
    }
  },
}