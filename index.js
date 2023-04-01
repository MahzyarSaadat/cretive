let navBar = document.getElementById('navigation-bar');
let allAtag = navBar.querySelectorAll('nav ul li a');
const menu = document.getElementById('menu');

window.onscroll = function() {scrollfunction()}

function scrollfunction() {
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        navBar.style.backgroundColor = "#fff";
        navBar.querySelector('h2').classList.remove('text-white-50')
        allAtag.forEach(item => item.classList.add('active'))
        menu.style.color = "#000"
        menu.style.borderColor = "#000"

    }else{
        navBar.style.background = "none"
        navBar.querySelector('h2').classList.add('text-white-50')
        allAtag.forEach(item => item.classList.remove('active'))
        menu.style.color = "#eee"
        menu.style.borderColor = "#eee"
    }
}


menu.addEventListener('click' , e => {
    navBar.querySelector('.inside-nav').classList.toggle('active');
    navBar.querySelector('.inside-nav ul').classList.toggle('active');
})


