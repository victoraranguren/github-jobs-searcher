const form = document.querySelector("#form");
const input = document.querySelector('#input')
const resultado = document.querySelector('#resultado')

const verification = (e)=>{
  e.preventDefault()
  return input.value ? console.log(`El valor existe y es: ${input.value}`) : showMessages('Está Vacío') 
}

const showMessages =(msg)=>{
  const alert= document.createElement('div');

  alert.classList.add('bg-bray-100', 'p-3', 'mt-3', 'text-center', 'alert');

  alert.textContent = msg;

  form.appendChild(alert)

  setTimeout(() => {
    alert.remove()
  }, 3000);
}

document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", verification);
});
