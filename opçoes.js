var preco = document.querySelectorAll(".preco1")
var preconum = Number(preco.textContent);
preconum.textContent = preco.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'});