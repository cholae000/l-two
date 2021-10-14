//UI
const addbtn = document.getElementById('add');

addbtn.addEventListener('click',()=>addnewnote());

function addnewnote(text=''){
    
    const note = document.createElement('div');
    note.classList.add('note');

    note.innerHTML = `
        <div class="tools">
        <button class='edit'><i class="fas fa-edit"></i></button>
        <button class='delete'><i class="fas fa-trash-alt"></i></button>
        </div>

        <div class="main ${text ? '' : 'hidden'}"></div>
        <textarea class='${text ? 'hidden' : ''}'></textarea>
        `;

    const editbtn = note.querySelector('.edit');
    const deletebtn = note.querySelector('.delete');
    const main = note.querySelector('.main');
    const textarea = note.querySelector('textarea');

    document.body.appendChild(note);

    editbtn.addEventListener('click',()=>{
        main.classList.toggle('hidden');
        textarea.classList.toggle('hidden');

        updatelocalstorage();
    });

    deletebtn.addEventListener('click',()=>{
        note.remove();
    });

    textarea.addEventListener('keyup',(e)=>{
        // main.textContent = e.target.value;

        const {value} = e.target;
        main.textContent = value;

        updatelocalstorage();
    });

    // show text from localStorage
    textarea.value = text;
    main.textContent = text;
}

function updatelocalstorage(){

    const notetexts = document.querySelectorAll('textarea');

    let notes = [];

    notetexts.forEach(notetext=> notes.push(notetext.value));

    localStorage.setItem('notes',JSON.stringify(notes));
}

const getnotes = JSON.parse(localStorage.getItem('notes'));

if(getnotes){
    getnotes.forEach(getnote=>addnewnote(getnote));
}


