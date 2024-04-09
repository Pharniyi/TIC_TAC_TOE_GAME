let userText = document.getElementById('userText')
let rstartBtn = document.getElementById('rstartBtn')
let boxes = Array.from(document.getElementsByClassName('box'))

console.log(boxes)

const O_TEXT='0'
const X_TEXT='X'
let currentPlayer=X_TEXT
let spaces=Array(9).fill(null)

console.log(spaces)