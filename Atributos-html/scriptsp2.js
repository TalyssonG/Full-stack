
let lista = document.getElementById('lista');

lista.dataset.num = 5 //Alterar no js
let id = lista.dataset.id;
console.log(id)
let num = parseInt(lista.dataset.num) //Data

let conteudo = ''

for (let i = 1; i <= num; i++) {
    conteudo += "<li>" + i + "</li>";

}
lista.innerHTML = conteudo;
