const bars = document.querySelector('.fa-bars');
const addMenu = document.querySelector('.right-Menu');
const sharp = document.querySelector('.fa-times-circle');
let active = false;

bars.addEventListener("click", () => {
    if(!(window.scrollY < document.documentElement.clientHeight))
    {
        if(active === false){
            addMenu.style.top = nav.getBoundingClientRect().top + nav.clientHeight + "px";
            addMenu.style.display = "block";
            active = true;
        }
        else{
            addMenu.style.display = "none";
            active = false;
        }
    }
    else
    {
        if(active === false){
            addMenu.style.top = nav.clientHeight + "px";
            addMenu.style.display = "block";
            active = true;
        }
        else{
            addMenu.style.display = "none";
            active = false;
        }
    }
})

sharp.addEventListener("click", () => {
    addMenu.style.display = "none";
        active = false;
})


document.addEventListener("scroll", () => {
    if(window.scrollY < document.documentElement.clientHeight){
        addMenu.style.top =  nav.clientHeight + "px";
        bars.style.top = "30px";
    }
    else{
        bars.style.top = (nav.clientHeight * 0.5) + "px";
        addMenu.style.top = nav.getBoundingClientRect().top + nav.clientHeight + "px"; 
        addMenu.style.position = "absolue";
    }
}) 

if(active === true)
{
    bars.addEventListener("click", () => {
        addMenu.style.display = "none";
        active = false;
    })
}
