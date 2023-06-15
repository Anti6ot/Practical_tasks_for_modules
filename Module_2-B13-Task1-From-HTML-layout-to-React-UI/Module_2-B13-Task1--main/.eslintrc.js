module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ["plugin:react/recommended", "standard"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        // "no-unused-vars": "off",
        semi: [2, "always"],
        indent: [0, 4],
        "space-before-function-paren": ["error", { anonymous: "always", named: "never" }],
        quotes: [
            "error",
            "double",
            {
                allowTemplateLiterals: true
            }
        ],
        "multiline-ternary": ["off"]
    }
};