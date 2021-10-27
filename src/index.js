/*
 * @Author: liang.xuemei
 * @Date: 2021-10-26 14:27:12
 * @LastEditTime: 2021-10-27 19:07:06
 * @LastEditors: liang.xuemei
 * @Description: 
 * @FilePath: \MyWebView\src\index.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
console.log("hello word");
import style from './style.css';
console.log(style)


import Icon from './icon.jpg'
import printMe from './print'

import _ from 'lodash';
console.log(_,'lodash')

import(/* webpackChunkName: "lodash" */ 'lodash').then(res => {
    console.log("I am loadsh");
})


console.log(process.env.NODE_ENV);

const addIcon = () => {
    const MyIcon = new Image();
    MyIcon.src = Icon;
     const ele = document.createElement('p');
     ele.appendChild(MyIcon);
    return ele
}

function component () {
    const btn = document.createElement('button');
    btn.innerHTML = '围殴测完给 2222422444';
    btn.onclick = printMe
    console.error('333')
    return btn
}
document.body.appendChild(component());