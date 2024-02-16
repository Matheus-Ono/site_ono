var titulo = document.querySelector('.titulo')
titulo.textContent = 'Lista de Encomenda'


/*-------------------------------------------*/

var qtdElement = document.querySelectorAll('.qtd');
var uniElement = document.querySelectorAll('.uni');
//Captura do elemento
//qtd
var qtdElement1 = document.querySelector('.qtd1');
var qtdElement2 = document.querySelector('.qtd2');
var qtdElement3 = document.querySelector('.qtd3');
var qtdElement4 = document.querySelector('.qtd4');

//uni
var uniElement1 = document.querySelector('.uni1');
var uniElement2 = document.querySelector('.uni2');
var uniElement3 = document.querySelector('.uni3');
var uniElement4 = document.querySelector('.uni4');

//total
var totalElement1 = document.querySelector('.total1');
var totalElement2 = document.querySelector('.total2');
var totalElement3 = document.querySelector('.total3');
var totalElement4 = document.querySelector('.total4');

//Transformando ele em número
//qtd
var qtdElement1num = Number(qtdElement1.textContent);
var qtdElement2num = Number(qtdElement2.textContent);
var qtdElement3num = Number(qtdElement3.textContent);
var qtdElement4num = Number(qtdElement4.textContent);

//uni
var uniElement1num = Number(uniElement1.textContent);
var uniElement2num = Number(uniElement2.textContent);
var uniElement3num = Number(uniElement3.textContent);
var uniElement4num = Number(uniElement4.textContent);

//calculando o total
totalElement1.textContent = Number(qtdElement1num*uniElement1num)
totalElement2.textContent = Number(qtdElement2num*uniElement2num)
totalElement3.textContent = Number(qtdElement3num*uniElement3num)
totalElement4.textContent = Number(qtdElement4num*uniElement4num)

//Transformando o total em numero
var totalElement1num = Number(totalElement1.textContent)
var totalElement2num = Number(totalElement2.textContent)
var totalElement3num = Number(totalElement3.textContent)
var totalElement4num = Number(totalElement4.textContent)

//Tranformando em moeda
//uni
uniElement1.textContent = uniElement1num.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'});
uniElement2.textContent = uniElement2num.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'});
uniElement3.textContent = uniElement3num.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'});
uniElement4.textContent = uniElement4num.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'});


//total
totalElement1.textContent = totalElement1num.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'});
totalElement2.textContent = totalElement2num.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'});
totalElement3.textContent = totalElement3num.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'});
totalElement4.textContent = totalElement4num.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'});