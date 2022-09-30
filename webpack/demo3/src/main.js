import $ from 'jquery'

$('#myUL>li:odd').css('color', 'red')
$('#myUL>li:even').css('color', 'pink')

import './css/index.css'

import './less/index.less'

import imgObj from './assets/1.gif'

let theimg = document.createElement('img')

theimg.src = imgObj

document.body.appendChild(theimg)

import './assets/fonts/iconfont.css'

let theI = document.createElement('i')

theI.className = 'iconfont icon-qq'

document.body.appendChild(theI)

const fn = () => { console.log('>>>>>>>>>>'); }
console.log(fn);