var titulo = document.querySelector('.titulo')
titulo.textContent = 'Lista de Encomenda'


/*-------------------------------------------*/

// Captura todos os clientes que fizeram encomendas
var clientes = document.querySelectorAll(".cliente");

// Passa por cada encomenda, calculando o valor total
for (var count = 0; count < clientes.length; count++) {

    // Captura a quantidade encomendada
    var qtde = clientes[count].querySelector(".quantidade").textContent;

    // Captura o valor unitário do produto
    var unitario = Number(clientes[count].querySelector(".valor-unitario").textContent);

    // Calcula o valor total da encomenda
    var total = calculaTotal(qtde, unitario);

    if(!validaQtde(qtde)){
        clientes[count].querySelector(".total").textContent = "Quantidade Inválida";
        clientes[count].classList.add("info-invalida");
    }else{
        clientes[count].querySelector(".total").textContent =  calculaTotal(qtde, unitario)
    }

    if(!validaUnit(unitario)){
        clientes[count].querySelector(".total").textContent = "Valor unitário é inválido";
    }
    
    // Formata valor unitário
    var uniFormat = formataValor(Number(unitario));
    clientes[count].querySelector(".valor-unitario").textContent = uniFormat;
}

// função para calcular o valor total da encomenda
function calculaTotal(qtde, unitario){
    var total = 0;
    total=qtde * unitario;
    return formataValor(total);
}

function validaQtde(qtde){
    if(!isNaN(qtde) && qtde > 0){
        return true;
    } else {
        return false;
    }
}

function validaUnit(unitario){
    if(!isNaN(unitario) && unitario > 0){
        return true;
    } else {
        return false;
    }
}

function formataValor(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
