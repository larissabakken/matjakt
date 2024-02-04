/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
    plugins: ["prettier-plugin-tailwindcss"],
    arrowParens: "always",
    endOfLine: "auto",
    semi: true,
    singleQuote: true,
    trailingComma: "all",
};

export default config;