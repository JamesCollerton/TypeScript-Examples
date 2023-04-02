module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["plugin:@typescript-eslint/recommended"], 
  env: {
    node: true,
  },
  rules: {
    'no-console': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
  },
}
