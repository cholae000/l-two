//UI
const buttons = document.querySelectorAll('.btnripple');

buttons.forEach(button => {
    button.addEventListener('click',(e)=>{
        const cx = e.clientX;
        const cy = e.clientY;

        const btntop = e.target.offsetTop;
        const btnleft = e.target.offsetLeft;

        const xinside = cx - btnleft;
        const yinside = cy - btntop;

        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = yinside+'px';
        circle.style.left = xinside+'px';

        e.target.appendChild(circle);

        setTimeout(()=>circle.remove(),600);
    })
});