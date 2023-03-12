const colorBtn = document.querySelector('.color-change')
const colorDiv = document.querySelectorAll('#color')
const span = document.querySelectorAll('span')
const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
colorBtn.addEventListener('click',() => {
  colorDiv.forEach(e => {
    let hexColor = '#'
    for(let i = 0; i < 6; i++) {
     hexColor += hex[getRandomColor()]
    }
    e.style.backgroundColor = hexColor
  })
  span.forEach(e => {
    let hexColor = '#'
    for(let i = 0; i < 6; i++) {
     hexColor += hex[getRandomColor()]
    }
  e.textContent = hexColor
  })
})
function getRandomColor() {
  return Math.floor(Math.random() * hex.length)
}