const colorScheme = window.matchMedia('(prefers-color-scheme: dark)')
const toggleSwitch = document.querySelector('.inputToggle')
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null
const icon = document.querySelector('.fa-bars')
const icon2 = document.querySelector('.fa-times')
const menu = document.querySelector('header ul')

const isChecked = () => {
    if (toggleSwitch.checked) {
        document.documentElement.setAttribute('data-theme', 'dark')
        localStorage.setItem('theme', 'dark')
    } else {
        document.documentElement.setAttribute('data-theme', 'light')
        localStorage.setItem('theme', 'light')
    }
}

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme)

    if (currentTheme == 'dark') {
        toggleSwitch.checked = true
    }
} else {
    if (colorScheme.matches) {
        document.documentElement.setAttribute('data-theme', 'dark')
        toggleSwitch.checked = true
    }
}

const responsive = () => {
    if (window.innerWidth <= 800) {
        icon.style.pointerEvents = 'all'
    } else {
        icon.style.pointerEvents = 'none'
    }
}

responsive()

const menuToggle = () => {
    if (menu.classList.contains('active')) {
        menu.classList.remove('active')
    } else {
        menu.classList.add('active')
    }
}

window.addEventListener('load', () => {
    document.querySelector('.loader').style.opacity = 0
    document.querySelector('.loader').style.visibility = 'hidden'
})

toggleSwitch.addEventListener('change', isChecked)
icon.addEventListener('click', menuToggle)
icon2.addEventListener('click', menuToggle)
window.addEventListener('resize', responsive)