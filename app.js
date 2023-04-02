// 1
const tdz = document.querySelectorAll('.tdz')

for (let i = 0; i < tdz.length; i++) {
    tdz[i].addEventListener('mouseover', function() {
        this.style.cssText = "background-color: orange;"
    })
    tdz[i].addEventListener('mouseout', function() {
        this.style.cssText = "background-color: white;"
    })
}

// 2
const str = document.querySelector('.str')
const but1 = document.querySelector('.but1')
const but2 = document.querySelector('.but2')
let size = 20

function plus() {
    size += 3
    str.style.fontSize = `${size}px`
}

function minus() {
    size -= 3
    str.style.fontSize = `${size}px`
}

but1.addEventListener('click', plus)
but2.addEventListener('click', minus)