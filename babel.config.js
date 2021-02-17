module.exports = {
    presets: [
        ["@babel/preset-env", {
            useBuiltIns: false,
            corejs: {version: 3},
            targets: ">0.25%"
        }],
        "@babel/preset-react",
    ],
    plugins: [],
}