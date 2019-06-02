const sub1 = document.querySelector('p.firstLine');
const sub2 = document.querySelector('p.secondLine');
const showSubtitles = () => {
  // sub1.style.left = "30%";
  sub1.style.left = "50%";
   sub1.style.transform = "translate(-50%, 0)";
    sub2.style.left = "50%";
   sub2.style.transform = "translate(-50%, 0)";
}

const f = () => {
  console.log("Hello World");
}