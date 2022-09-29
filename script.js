const menu = document.querySelector('.menu')
const navbar = document.querySelector('.section-1')

menu.addEventListener('click', () => {
    navbar.classList.toggle('change')
    menu.classList.toggle('change')
})

const slideshowDivs = () => {
    for (let i = 1; i <= 4; i++) {
        const div = document.createElement('div')
        div.style.backgroundImage = `url(images/landing/twisted-tattoo-office-${i}.jpg)`
        i === 1 && div.classList.add('change')
        document.querySelector('.slideshow').appendChild(div)
    }
}

slideshowDivs()

const divs = document.querySelectorAll('.slideshow div')
let a = 1

const slideshow = () => {
    setInterval(() => {
        a++
        const div = document.querySelector('.slideshow .change')
        div.classList.remove('change')
        if (a < divs.length) {
            div.nextElementSibling.classList.add('change')
        } else {
            divs[0].classList.add('change')
            a = 1
        }
    }, 5000)
}

slideshow()