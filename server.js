/*
 * @Author: liang.xuemei
 * @Date: 2021-10-26 18:45:11
 * @LastEditTime: 2021-10-27 14:49:29
 * @LastEditors: liang.xuemei
 * @Description: 
 * @FilePath: \MyWebView\server.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");

const app = express();
const config =  require('./webpack.config.js');

const complier = webpack(config);

app.use(
    webpackDevMiddleware(complier,{
        publicPath:config.output.publicPath
    })
)
app.listen(1314,()=>{
    console.log(`I'm running`);
})

