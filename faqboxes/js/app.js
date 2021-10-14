//UI
const togglebtns = document.querySelectorAll('.faq-toggle');

togglebtns.forEach(togglebtn=>{
    togglebtn.addEventListener('click',()=>{
        togglebtn.parentElement.classList.toggle('active');
    })
})