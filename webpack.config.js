const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

module.exports={
    mode:'development',
    entry: './src/index.js',
    devtool:'inline-source-map',
    output:{
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js',
    },
    module:{
      rules:[
            {
                test: /\.js$/,
                loader: 'babel-loader',

            }
      ]
    },
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache:true,
          parallel:true,
          sourceMap:true
        }),
      ],
    },



}
