const form = document.querySelector("#form");
const input = document.querySelector('#input')

const verification = (e)=>{
  e.preventDefault()
  return input.value ? console.log(`El valor existe y es: ${input.value}`) : console.log('Undefined') 
}

document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", verification);
});
