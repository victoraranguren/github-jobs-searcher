const form = document.querySelector("#form");
const input = document.querySelector('#input')
const resultado = document.querySelector('#resultado')

const verification = (e)=>{
  e.preventDefault()
  return input.value ? console.log(`El valor existe y es: ${input.value}`) : resultado.innerHTML = 'Está Vacío' 
}

document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", verification);
});
