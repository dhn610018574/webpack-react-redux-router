const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ROOT_PATH = path.resolve(__dirname)
const DEV_PATH = path.resolve(ROOT_PATH, 'src/index.js')
const BUILD_PATH = path.resolve(ROOT_PATH, 'dist/index.js')
const WebpackMd5Hash = require('webpack-md5-hash');

const config = {
  entry:{
    app:"./src/index.js",
    vendors:[
      "react",
      "react-dom",
      "react-router"
    ]
  },
  output: {
    path: path.resolve(ROOT_PATH, 'dist'),
    filename: '[name].[hash:8].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new WebpackMd5Hash()
  ]
}

module.exports = config;