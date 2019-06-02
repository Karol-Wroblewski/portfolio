const nav = document.getElementById('horizont');
/*const dist =  nav.offsetTop; */
const dist =  document.querySelector('.photo').offsetHeight;
/*document.documentElement.clientHeight */
document.addEventListener("scroll", () => {
    if(window.pageYOffset > dist)
    {
        nav.classList.remove('menu_horizontal');
        nav.classList.add('nav-after');
    }
    else
    {
        nav.classList.remove('nav-after');
        nav.classList.add('menu_horizontal'); 
    }
        
})