/*
 * @Author: liang.xuemei
 * @Date: 2021-10-27 15:12:59
 * @LastEditTime: 2021-10-27 15:31:15
 * @LastEditors: liang.xuemei
 * @Description: 
 * @FilePath: \MyWebView\webpack.dev.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
const { merge } = require('webpack-merge');
console.log(merge)
const common =  require('./webpack.common.js');

module.exports = merge(common,{
    mode:'development',
    devtool:'inline-source-map', //souce-map
})