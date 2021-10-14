//UI
const filterel = document.getElementById('search');
const resultel = document.getElementById('result');

const totalusers = 50;

const listitems = [];

async function getdata(){

    const res = await fetch(`https://randomuser.me/api/?results=${totalusers}`);

    const {results} = await res.json();

    resultel.innerText = '';

    results.forEach(user=>{
        const li = document.createElement('li');

        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.title} ${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city},${user.location.country}</p>
            </div>
        `;

        resultel.appendChild(li);

        listitems.push(li);
    });

    

}

getdata();

filterel.addEventListener('input',(e)=>filterdata(e.target.value));

function filterdata(search){

    listitems.forEach(listitem=>{
        if(listitem.innerText.toLowerCase().includes(search.toLowerCase())){
            listitem.classList.remove('hide');
        }else{
            listitem.classList.add('hide');
        }
    })
}