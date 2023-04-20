let spesa = [
    'mele',
    'carote',
];
const inputEle = document.querySelector(".i-ele")
const lista = document.querySelector(".main-list");
const invio = document.querySelector(".btn");
invio.addEventListener('click',
function(){
    let ele = inputEle.value;
    if(ele !== ''){
        spesa.push(ele);
        console.log('la mia spesa', spesa);
        lista.innerHTML += `<li>${ele}</li>`
    }
})
const mostra = document.querySelector(".btn-2");
mostra.addEventListener('click',
function(){
    let i=0;
    while(i<spesa.length){
        ele=spesa[i];
        lista.innerHTML+=`<li>${ele}</li>`;
        i++;
    }
})
const pulisci = document.querySelector(".btn-1");
pulisci.addEventListener('click',
function(){
    lista.innerHTML = ' ';
})