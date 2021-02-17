module.exports = {
    root: true,
    extends: "airbnb", //npx install-peerdeps --dev eslint-config-airbnb //使用airbnb规则
    parser: "babel-eslint", // 指定一个paser，将源代码转换为抽象语法树
    parserOptions: {
        sourceType: "module",
        ecamVersion: 2015
    },
    env: {
        browser: true,
    },
    rules: {
        "indent": ["warn", 4],
        "no-console": "off",
        "no-param-reassign": "off",
        "no-debugger": "off",
        "no-undef": "off"
    }
}