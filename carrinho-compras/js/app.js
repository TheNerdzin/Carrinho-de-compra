//a lista vai começar vazia
let totalGeral;
limpar();

function adicionar() {
    // recuperar valores nome do produto, quantidades e valores
    let produto = document.getElementById('produto').value;//.valuepega um valor escolhido(porque é um formulario)
    let nomeProduto = produto.split('-')[0]; //split(usado para separar palvras em um array)
    let valorUnitario = produto.split('R$')[1]; //split(usado para separar palvras em um array)
    let quantidade = document.getElementById('quantidade').value;

    //verificar se o produto é válido
    if (!produto || produto.trim() === " ") { //.trim Remove espaços extras do início e do fim
        alert('Selecione um produto válido.')
        return;
    }

    //verifica se a quantidade é válida
    if (isNaN(quantidade) || quantidade <= 0) { //isNaN() Verifica se um valor não é um número;
        alert('Insira uma quantidade válida.')
        return;// interrompe a execução do código
    }
    //calcular um preço, o subtotal
    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');
    //adicionar no carrinho
    //.innerHTML usa o que está dentro do html para alterar
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto"> 
    <span class= "texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
    </section>`; //teve o HTML + uma section de produto

    //atualizar o valor total
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`; //.textContet = muda o campo do paragrafo
    document.getElementById('quantidade').value = o; // o campo quantidade 0 para poder adicionar outro numero;

}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}