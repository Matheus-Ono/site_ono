// Adiciona um evento de clique ao botão de envio
document.getElementById('enviar').addEventListener('click', function() {
    // Captura os valores dos elementos do formulário
    var incnome = document.querySelector('#nomesobrenome').value;
    var incprod = document.querySelector('#incprod').value;
    var incquantidade = document.querySelector('#incquantidade').value;
    var incunitario = document.querySelector('#incunitario').value;
    var unitValor = formataValor(Number(incunitario));


    

    // Cria uma nova linha
    var linha = document.createElement('tr');

    // Cria células (colunas) para a linha
    var colunaNome = document.createElement('td');
    var colunaProduto = document.createElement('td');
    var colunaQuantidade = document.createElement('td');
    var colunaUnitario = document.createElement('td');
    var colunaTotal = document.createElement('td');
  

    // Define o conteúdo das células
    colunaNome.textContent = incnome;
    colunaProduto.textContent = incprod;
    colunaQuantidade.textContent = incquantidade;
    colunaUnitario.textContent = unitValor;
    colunaTotal.textContent = calculaTotal(incunitario, incquantidade);
   

    // Adiciona as células à linha
    linha.appendChild(colunaNome);
    linha.appendChild(colunaProduto);
    linha.appendChild(colunaQuantidade);
    linha.appendChild(colunaUnitario);
    linha.appendChild(colunaTotal);
 

    // Encontra a tabela existente com o ID 'table'
    var tabela = document.getElementById('table');

    // Adiciona a linha à tabela
    tabela.appendChild(linha);
});


