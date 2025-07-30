function comprarProduto(nome, preco, imagem, idQuantidade) {
    const selectElement = document.getElementById(idQuantidade);
    if (!selectElement) {
        console.error("Elemento de quantidade não encontrado:", idQuantidade);
        return;
    }
    const quantidade = parseInt(selectElement.value);

    const produto = {
        nome: nome,
        precoUnitario: preco,
        imagem: imagem,
        quantidade: quantidade,
        total: preco * quantidade
    };

    localStorage.setItem('produtoParaPagamento', JSON.stringify(produto));

    window.location.href = 'pagamento.html'; 
}

function carregarDadosDoPagamento() {
    const produtoJSON = localStorage.getItem('produtoParaPagamento');

    if (!produtoJSON) {
        console.log("Nenhum produto selecionado para pagamento.");
        return;
    }

    const produto = JSON.parse(produtoJSON);

    const totalPedidoInput = document.getElementById('total-pedido');
    if (totalPedidoInput) {
        totalPedidoInput.value = produto.total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
    
    const resumoDiv = document.getElementById('resumo-pedido');
    if (resumoDiv) {
        resumoDiv.innerHTML = `
            <h2>Resumo do Pedido</h2>
            <div class="order-summary">
                <img src="${produto.imagem}" alt="${produto.nome}" class="summary-image" style="width: 12vw; height: 10vw;>
                <div class="summary-details">
                    <p>${produto.nome}</p>
                    <p>Quantidade: ${produto.quantidade}</p>
                    <strong>Total: ${produto.total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>
                </div>
            </div>
        `;
    }

    for (let i = 1; i <= 12; i++) {
        const labelParcela = document.getElementById(`label-j${i}`);
        if (labelParcela) {
            let valorTotalComJuros = produto.total;
            let textoJuros = " sem juros";
            
            if (i >= 6 && i <= 10) { 
                valorTotalComJuros = produto.total * 1.10;
                textoJuros = " c/ juros (10%)";
            } else if (i > 10) {
                valorTotalComJuros = produto.total * Math.pow(1.02, i);
                textoJuros = " c/ juros (2% a.m.)";
            }

            const valorParcela = valorTotalComJuros / i;
            labelParcela.textContent = `${i}x de ${valorParcela.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}${textoJuros}`;
        }
    }
}