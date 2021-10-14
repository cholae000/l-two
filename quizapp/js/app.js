const quizdatas = [
    {
        question:'What does CSS stand for ?',
        a:'Central Style Sheet',
        b:'Cascading Style Sheets',
        c:'Cascading Simple Sheets',
        d:'Century System Software',
        e:'Control Style Sheet',
        correct:'b'
    },
    {
        question:"What does HTML stand for ?",
        a:"Hypertext Markup Language",
        b:"Hypertext Markdown Language",
        c:"Hyperloop Machine Language",
        d:"Hyper Technology Modern Language",
        e:"Higher Market Language",
        correct:"a"
    },
    {
        question:"What year was Javascript Launched ?",
        a:"1996",
        b:"1995",
        c:"1994",
        d:"1991",
        e:"None of the above",
        correct:"b"
    },
    {
        question:"Which language runs in a web browser ?",
        a:"Java",
        b:"C",
        c:"Python",
        d:"JavaScript",
        e:"Php",
        correct:"d"
    }
];

//UI
const quiz = document.getElementById('quiz');
const questionel = document.getElementById('question');
const answerels = document.querySelectorAll('.answer');

const a_text = document.getElementById('a_text'),
    b_text = document.getElementById('b_text'),
    c_text = document.getElementById('c_text'),
    d_text = document.getElementById('d_text'),
    e_text = document.getElementById('e_text');

const submitbtn = document.getElementById('submit');

let currentquiz = 0;
let score = 0;

function loadquiz(){
    deselectanswer();

    const currentquizdata = quizdatas[currentquiz];

    questionel.textContent = currentquizdata.question;
    a_text.textContent = currentquizdata.a;
    b_text.textContent = currentquizdata.b;
    c_text.textContent = currentquizdata.c;  
    d_text.textContent = currentquizdata.d;
    e_text.textContent = currentquizdata.e;

};

loadquiz();

function getselected(){
    let answer;

    answerels.forEach(answerel=>{
        if(answerel.checked){
            answer = answerel.id;
        }
    });

    return answer;
}

//uncheck
function deselectanswer(){
    answerels.forEach(answerel=> answerel.checked = false);
}

submitbtn.addEventListener('click',()=>{
    const answer = getselected();

    if(answer){

        if(answer === quizdatas[currentquiz].correct){
            score++;
        }

        currentquiz++;
        
        if(currentquiz < quizdatas.length){
            loadquiz();
        }else{
            quiz.innerHTML = `
                <h2>You answered correctly at ${score} / ${quizdatas.length}</h2>
                <button class='btn' onclick='location.reload()'>Reload</button>
            `;
        }
    }
})

