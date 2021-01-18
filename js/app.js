const form = document.querySelector("#form");
const input = document.querySelector('#input')
const resultado = document.querySelector('#resultado')

const verification = (e)=>{
  e.preventDefault()
  const search = input.value;
  return search ? consultAPI(search) : showMessages('Está Vacío'); 
}

const consultAPI = (search)=>{
  const githubUrl = `https://jobs.github.com/positions.json?search=${search}`
  const url = `https://api.allorigins.win/get?url=${githubUrl}`;

  axios.get(url)
    .then(response=> showVacants(JSON.parse(response.data.contents)))
}

const showMessages =(msg)=>{
  const prevAlert= document.querySelector('.alert')
  if(!prevAlert){
    const alert= document.createElement('div');
  
    alert.classList.add('bg-gray-100', 'p-3', 'mt-3', 'text-center','rounded', 'alert');
  
    alert.textContent = msg;
  
    form.appendChild(alert)
  
    setTimeout(() => {
      alert.remove()
    }, 3000);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", verification);
});
