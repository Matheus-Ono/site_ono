var titulo = document.querySelector('.titulo')
titulo.textContent = 'Lista de Encomenda'


/*-------------------------------------------*/

// Captura todos os clientes que fizeram encomendas
var clientes = document.querySelectorAll(".cliente");

// Função para calcular o valor total da encomenda
function calculaTotal(qtde, unitario) {
    var total = qtde * unitario;
    return total;
}

// Passa por cada encomenda, calculando o valor total
for (var count = 0; count < clientes.length; count++) {

    // Captura a quantidade encomendada
    var qtde = clientes[count].querySelector(".quantidade").textContent;

    // Captura o valor unitário do produto
    var unitario = Number(clientes[count].querySelector(".valor-unitario").textContent);
    clientes[count].querySelector(".valor-unitario").textContent = unitario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    // Calcula o valor total da encomenda
    var total = calculaTotal(qtde, unitario);

    // Verifica se o total é maior que 1 ou não é um número
    if (total < 1 || isNaN(total)) {
        clientes[count].querySelector(".total").textContent = 'Qtd Invalida'
        clientes[count].style.backgroundColor = 'red';
    } else {
        clientes[count].querySelector(".total").textContent = total;
        clientes[count].querySelector(".total").textContent = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        
    }
    if (unitario < 1 || isNaN(unitario)) {
        clientes[count].querySelector(".valor-unitario").textContent = 'Qtd Invalida'
        clientes[count].querySelector(".valor-unitario").style.color = 'darkred';
    } else {
        clientes[count].querySelector(".valor-unitario").textContent = unitario;
        clientes[count].querySelector(".valor-unitario").textContent = unitario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
    
}


    //função para calcular o valor total da encomenda
    function calculaTotal(qtde, unitario){
        var total = 0;
        total=qtde*unitario;

        return total;
    }

