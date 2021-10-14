//UI
const searchel = document.querySelector('.search'),
        inputel = document.querySelector('.input'),
        btnel = document.querySelector('.btn');

//Event Listener
btnel.addEventListener('click',()=>{
    searchel.classList.toggle('active');

    //for ready cursor
    inputel.focus();
})
