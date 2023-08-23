const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Image toggle mode
const imageMode = (mode) => {
    image1.src = `./assets/img/undraw_proud_coder_${mode}.svg`
    image2.src = `./assets/img/undraw_feeling_proud_${mode}.svg`
    image3.src = `./assets/img/undraw_conceptual_idea_${mode}.svg`
}

const toggleLightDarkMode = (isDark) => {
    nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 / 65%)' : 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = isDark ? 'Dark Light' : 'Light Mode';
    toggleIcon.children[1].className = isDark ? 'fas fa-moon' : 'fas fa-sun';
    isDark ? imageMode('dark') : imageMode('light');
    isDark ? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light');
}

const switchTheme = (e) => {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleLightDarkMode(true);
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        toggleLightDarkMode(false);
    }
}

toggleSwitch.addEventListener('change', switchTheme);

const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        toggleLightDarkMode(true);
    }
}

/** 
const darkMode = () => {
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 65%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    imageMode('dark');
    localStorage.setItem('theme', 'dark');
    // toggleIcon.children[1].classList.remove('fa-sun');
    // toggleIcon.children[1].classList.add('fa-moon');
    // image1.src = './assets/img/undraw_proud_coder_dark.svg'
    // image2.src = './assets/img/undraw_feeling_proud_dark.svg'
    // image3.src = './assets/img/undraw_conceptual_idea_dark.svg'
}



const lightMode = () => {
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    imageMode('light');
    localStorage.setItem('theme', 'light');
    // toggleIcon.children[1].classList.remove('fa-moon');
    // toggleIcon.children[1].classList.add('fa-sun');
    // image1.src = './assets/img/undraw_proud_coder_light.svg'
    // image2.src = './assets/img/undraw_feeling_proud_light.svg'
    // image3.src = './assets/img/undraw_conceptual_idea_light.svg'
}
**/