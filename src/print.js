/*
 * @Author: liang.xuemei
 * @Date: 2021-10-26 16:01:02
 * @LastEditTime: 2021-10-27 17:25:08
 * @LastEditors: liang.xuemei
 * @Description: 
 * @FilePath: \MyWebView\src\print.js
 * 可以输入预定的版权声明、个性签名、空行等
 */

import _ from 'lodash';
console.log( _.join(['Another', 'module', 'loaded!'], ' '));
export default function printMe(){
    alert("我要开始打印了啊")
    console.log('print')
}
console.log('你在干啥啊')