let text1 = document.querySelector('.headerOne')
let text2 = document.querySelector('.headerTwo')

const textContent1 = text1.textContent
const textContent2 = text2.textContent

let splitText1 = textContent1.split('')
let splitText2 = textContent2.split('')
// console.log(splitText2)
text1.textContent = ""
text2.textContent = ""

for (let i = 0; i < splitText1.length; i++){
    text1.innerHTML += `<span>${splitText1[i]}</span>`
}

for (let j = 0; j < splitText2.length; j++){
    text2.innerHTML += `<span>${splitText2[j]}</span>`
}

let char = 0

let timer = setInterval(onTick, 50)

function onTick () {
    const span = text1.querySelectorAll('span')[char]
    const span2 = text2.querySelectorAll('span')[char]
    span.classList.add('fadee')
    span2.classList.add('fadee')
    char++

    if (char === splitText1.length){
        complete()
        return
    }
    if (char === splitText2.length){
        complete()
        return
    }
    
}

function complete () {
    clearInterval(timer)
    timer = null
}