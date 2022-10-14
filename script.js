const h1 = document.querySelector('h1');
const form = document.getElementById('form');
const calculo1 = document.getElementById('calculo1')
const calculo2= document.getElementById('calculo2')
const btn = document.getElementById('btnCalcular');
const result = document.getElementById('result')
form.addEventListener('click',sumarInputValues);


function sumarInputValues(event){
    // console.log({event});
    // event.preventDefault();
    const sumaInputs = parseInt(calculo1.value)  +parseInt(calculo2.value) ; 
    result.innerHTML='resultado= '+ sumaInputs;
}
