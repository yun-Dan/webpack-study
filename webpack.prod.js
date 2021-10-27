/*
 * @Author: liang.xuemei
 * @Date: 2021-10-27 15:13:18
 * @LastEditTime: 2021-10-27 15:54:20
 * @LastEditors: liang.xuemei
 * @Description: 
 * @FilePath: \MyWebView\webpack.prod.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require( 'uglifyjs-webpack-plugin'); // 不支持es6;

module.exports = merge(common,{
    mode:'production',
    // plugin: [
    //     new UglifyJSPlugin(
    //         {
    //             sourceMap:true
    //         }
    //     )  // tree-shaking 优化
    // ]
})