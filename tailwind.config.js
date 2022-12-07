/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                color1: "#E60012", //更換主色
                color2: "#000", //更換副色
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        darkTheme: "light",
    },
}