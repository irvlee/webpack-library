const path = require('path');
const name = 'mylib';
const config = {
    devtool: 'eval-source-map',
    mode:'development',
    entry:{
        mylib:'./src/library/mylib.js',
    },
    output:{
        path:path.resolve(__dirname,'./lib'),
        filename:'[name].js',
        library: name,
        libraryTarget: 'umd',
        umdNamedDefine: true,
        globalObject: 'typeof self !== "undefined" ? self : this',
    },
    module:{
        rules:[
            // js 转换
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader'
                }
            },
        ]
    }

};
module.exports = config;