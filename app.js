//Incorporar arrays

let entrada = +prompt("simulador de elementos quimicos, cuantos elementos quiere ver? ");

let elementos = [];

for(let i = 1; i <= entrada; i++){
    alert("elemento "+i);
    elementos.push(i);
    alert(`viste ${elementos.length} elementos`);
}