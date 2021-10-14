//UI
const range = document.getElementById('range');
// const label = document.querySelector('label');

range.addEventListener('input',(e)=>{
    const getvalue = +e.target.value;
    const label = e.target.nextElementSibling;

    label.innerText = getvalue;


    const rangewidth = getComputedStyle(e.target).getPropertyValue('width');
    const labelwidth = getComputedStyle(label).getPropertyValue('width');

    const numrangewidth  = rangewidth.substring(0,rangewidth.length-2);
    const numlabelwidth = labelwidth.substring(0,labelwidth.length-2);

    const min = e.target.min;
    const max = e.target.max;

    const left = getvalue * (numrangewidth / max) - numlabelwidth / 2 + scale(getvalue,min,max,10,-10);

    label.style.left = `${left}px`;

   
})

const scale = (num,inmin,inmax,outmin,outmax)=>{
    return (num - inmin) * (outmax - outmin) / (inmax - inmin) + outmin;
}