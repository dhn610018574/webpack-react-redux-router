const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack-base-config');


const config = merge(
  base, {
    devtool: 'eval-source-map', //生成Source Maps,这里选择eval-source-map 打包后输出的JS文件的执行具有性能和安全的隐患,生产使用source-map
    module: {
      rules: [{
          test: /\.(js|jsx)?$/,
          exclude: /node_modules/,
          use: [{
            loader: "babel-loader"
          }]

        },
        {
          test: /\.(sass|scss|css)?$/,
          use: [
            "style-loader",
            "css-loader",
            "resolve-url-loader",
            "sass-loader?sourceMap"
          ]
        },
        {
          test: /\.(png|jpg|svg|gif)?$/,
          use: [
            "url-loader?limit=15000&name=images/[hash:8].[name].[ext]"
          ]
        }
      ]
    },
    //webpack-dev-server配置
    devServer: {
      contentBase: './dist', //默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到"dist"目录）
      // colors: true, //在cmd终端中输出彩色日志
      historyApiFallback: true, //在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
      host: 'localhost',
      port: 81, //设置默认监听端口，如果省略，默认为"8080"
      hot: true, //是否启动热更新
      open: true, //是否支持自动打开浏览器
      // inline: true, //设置为true，当源文件改变时会自动刷新页面
      // process: true, //显示合并代码进度
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin() //热模块替换插件
    ]
  }
)
module.exports = config;
