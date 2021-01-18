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

const showVacants = (vacants)=>{
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild)
  }

  if (vacants.length > 0) {
    vacants.forEach(vacant => {
      const {company, type, url, title} = vacant;
      resultado.innerHTML+= `
      <div class="cols-span-1 cols-start-1 md:row-span-1 md:col-span-2 md:cols-start-auto shadow bg-white mt-5 p-6 rounded">
        <h2 class="text-2xl font-light mb-4">${title}</h2>
        <p class="font-bold uppercase">Compañia:  <span class="font-light normal-case">${company} </span></p>
        <p class="font-bold uppercase">Tipo de Contrato:   <span class="font-light normal-case">${type} </span></p>
        <a class="bg-green-500 max-w-lg mx-auto mt-3 rounded p-2 block uppercase font-xl font-bold text-white text-center" href="${url}">Ver Vacante</a>
      </div>
      `
    });
  }else{
    const result = document.createElement('p')
    result.classList.add('text-center','mt-10','text-gray-600','w-full')
    result.textContent='No hay vacantes, o intenta con otro término de búsqueda'
    resultado.appendChild(result)
  }
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
