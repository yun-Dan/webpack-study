/*
 * @Author: liang.xuemei
 * @Date: 2021-10-26 14:51:39
 * @LastEditTime: 2021-10-27 19:02:27
 * @LastEditors: liang.xuemei
 * @Description: 
 * @FilePath: \MyWebView\webpack.common.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
const path = require('path');

const HtmlWebpackPlugin  =require("html-webpack-plugin"); // 自动生成html文件
const webpack  = require('webpack');

module.exports={
    entry:{
        app:'./src/index.js',
        print:'./src/print.js'
    },
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist'),
        clean: true,
        publicPath:'/',
        chunkFilename:'[name].chunk.js'
    },
    module:{
        rules:[
            {
                test:/\.css$/i,
                use:['style-loader','css-loader']
            },
            {
                test:/\.(png|jpg|svg)$/i,
                type:'asset/resource'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({title:'Development'}),
        new webpack.HotModuleReplacementPlugin({
            hot:true
        }),
    ],
    devServer:{
        hot:true,
        port:'9527',
    },

}