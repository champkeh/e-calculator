// 参考这里的rules: https://github.com/stylelint/stylelint/blob/main/docs/user-guide/rules/list.md
module.exports = {
    extends: [
        "stylelint-config-standard-scss",
        "stylelint-config-recommended-vue",
        "stylelint-config-recess-order",
        "stylelint-config-prettier",
    ],
    rules: {
        "selector-class-pattern": [
            "^([a-z][a-z0-9]*)((_|-)*([a-z0-9]+))*$",
            {
                message: "Expected class selector to be kebab-case",
            },
        ],
        "length-zero-no-unit": true,
        "alpha-value-notation": "number",
        "no-descending-specificity": null,
    },
}
