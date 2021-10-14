//UI
const textel = document.getElementById('text');
const speedel = document.getElementById('speed');
const pgh = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s';

let idx = 1;
let speed = 1000;

function autotext(){
    // console.log('hay');

    textel.innerText = pgh.slice(0,idx);
    idx++;

    if(idx > pgh.length){
        idx = 1;
    }

    setTimeout(autotext,speed);
}

autotext();

//Event Listener
speedel.addEventListener('input',()=>{
    // console.log('hay');
    // console.log(speedel.value);

     speed = 100 / speedel.value;
})