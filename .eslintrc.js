module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "amd": true,
        node: true ,
        "jquery":true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "Cesium": "readonly",
        "ViaSpace":"readonly",
        "describe":true,
        "it":true,
        "expect":true


    },
    "parserOptions": {
        "ecmaVersion": 2018,
        sourceType: "module"
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            0,
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-path-concat": 0
        }
};