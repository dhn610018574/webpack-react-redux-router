const merge = require('webpack-merge')
const base = require('./webpack-base-config')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const config = merge(
  base, {
    devtool: false, //生成Source Maps,这里选择eval-source-map 打包后输出的JS文件的执行具有性能和安全的隐患,生产使用source-map
    module: {
      rules: [{
          test: /\.(js|jsx)?$/,
          exclude: /node_modules/,
          use: [{
            loader: "babel-loader"
          }]

        },
        {
          test: /\.(sass|scss|css)/,
          use: [
            "style-loader",
            "css-loader",
            "resolve-url-loader",
            "sass-loader?sourceMap"
          ]
        },
        {
          test: /\.(png|jpg|svg|gif)/,
          use: [
            "url-loader"
          ]
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(['./dist']),
      new UglifyJSPlugin()
    ]
  }
)
module.exports = config;