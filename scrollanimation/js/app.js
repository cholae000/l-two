const boxes = document.querySelectorAll('.box');

checkboxes();

window.addEventListener('scroll',checkboxes);

function checkboxes(){
    let innerheight = window.innerHeight / 1.3 ;

    boxes.forEach(box=>{

        const boxtop = box.getBoundingClientRect().top;

        if(boxtop < innerheight){
            box.classList.add('show');
        }else{
            box.classList.remove('show');
        }
    })
}