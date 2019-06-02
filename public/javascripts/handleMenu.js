let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let b3 = document.getElementById('b3');
let b4 = document.getElementById('b4');

let ba = document.getElementById('ba');
let bb = document.getElementById('bb');
let bc = document.getElementById('bc');
let bd = document.getElementById('bd');

let section2 = document.querySelector('header').clientHeight;
let section3 = section2 + document.querySelector('.about-me').clientHeight + document.querySelector('.technologies').clientHeight;
let section4 = section3 + document.querySelector('.projects').clientHeight;

ba.addEventListener("click", () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
})

bb.addEventListener("click",  () => {
    window.scrollTo({top: section2, behavior: 'smooth'});
})

bc.addEventListener("click",  () => {
    window.scrollTo({top: section3, behavior: 'smooth'});
})

bd.addEventListener("click",  () => {
    window.scrollTo({top: section4, behavior: 'smooth'});
})

b1.addEventListener("click", () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
})

b2.addEventListener("click",  () => {
    window.scrollTo({top: section2, behavior: 'smooth'});
})

b3.addEventListener("click",  () => {
    window.scrollTo({top: section3, behavior: 'smooth'});
})

b4.addEventListener("click",  () => {
    window.scrollTo({top: section4, behavior: 'smooth'});
}) 


document.addEventListener("scroll", () => {
    if(window.scrollY < section2) {
        ba.classList.add('blue-font');
        bb.classList.remove('blue-font');
        bc.classList.remove('blue-font');
        bd.classList.remove('blue-font');

        b1.classList.add('blue-font');
        b2.classList.remove('blue-font');
        b3.classList.remove('blue-font');
        b4.classList.remove('blue-font'); 
    }
    else if(window.scrollY >= section2 && window.scrollY < section3) {
        ba.classList.remove('blue-font');
        bb.classList.add('blue-font');
        bc.classList.remove('blue-font');
        bd.classList.remove('blue-font');

        b1.classList.remove('blue-font');
        b2.classList.add('blue-font');
        b3.classList.remove('blue-font');
        b4.classList.remove('blue-font');
    }
    else if(window.scrollY >= section3  && window.scrollY < section4) {
        ba.classList.remove('blue-font');
        bb.classList.remove('blue-font');
        bc.classList.add('blue-font');
        bd.classList.remove('blue-font');

        b1.classList.remove('blue-font');
        b2.classList.remove('blue-font');
        b3.classList.add('blue-font');
        b4.classList.remove('blue-font');
    }
    else {
        ba.classList.remove('blue-font');
        bb.classList.remove('blue-font');
        bc.classList.remove('blue-font');
        bd.classList.add('blue-font');

        b1.classList.remove('blue-font');
        b2.classList.remove('blue-font');
        b3.classList.remove('blue-font');
        b4.classList.add('blue-font');
    }
}) 
