//UI
const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftbtn = document.getElementById('left'),
    rightbtn = document.getElementById('right');

let activeslice = 0;

function setbgbody(){
    body.style.backgroundImage = slides[activeslice].style.backgroundImage;
}

setbgbody();

function setactiveslide(){
    slides.forEach(slide=> slide.classList.remove('active'));

    slides[activeslice].classList.add('active');
}

rightbtn.addEventListener('click',()=>{

    activeslice++;

    if(activeslice > slides.length - 1){
        activeslice = 0;
    }

    setbgbody();
    setactiveslide();
});

leftbtn.addEventListener('click',()=>{
    activeslice--;
    
    if(activeslice < 0){
        activeslice = slides.length - 1;
    }

    setbgbody();
    setactiveslide();
});