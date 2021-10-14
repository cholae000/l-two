const panels = document.querySelectorAll('.panel');

panels.forEach(panel=>{
    
    panel.addEventListener('click',()=>{
        
        removeactivepreclass();

        panel.classList.add('active');
    })
})

function removeactivepreclass(){

    panels.forEach(panel=>{
        panel.classList.remove('active');
    })
}