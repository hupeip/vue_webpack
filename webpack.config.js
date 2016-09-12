var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        main: './src/main.js',
        vendors: ['vue', 'vue-router']
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    module: {
        loaders: [
            { test: /\.vue$/, loader: 'vue' },
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader' ) },
            { test: /\.(jpe?g|png|gif)$/i,loaders: [
                'url?limit=10000&name=images/[hash:8].[name].[ext]',
                'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
            ]},
        ]
    },
    //.vue的配置，需要单独出来
    vue: {
       loaders: {
          css: 'style!css!autoprefixer',
          html: 'html-loader'
       }
    },
    //转化es6
    babel: {
       presets: ['es2015'],
       plugins: ['transform-runtime']
    },
   plugins: [
     new HtmlWebpackPlugin({
         template: path.join(__dirname,'./src/index.html'),
         hash:false
       }),
     new ExtractTextPlugin('[hash:8].style.css', { allChunks: true }),
   ],
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.js', '.vue'],
        // 别名，可以直接使用别名来代表设定的路径以及其他
        alias: {
            filter: path.join(__dirname, './src/filters'),
            components: path.join(__dirname, './src/components')
        }
    },
    // 开启source-map，webpack有多种source-map，在官网文档可以查到
    devtool: 'eval-source-map'

}
