// Função para incrementar o contador de curtidas
function curtirPerfume(botao) {
    // Encontra o elemento que exibe a quantidade de curtidas
    const elementoCurtidas = botao.querySelector('.curtidas');
    
    // Obtém o valor atual e converte para número
    let quantidadeAtual = parseInt(elementoCurtidas.textContent);
    
    // Soma 1 ao total
    quantidadeAtual++;
    
    // Atualiza o texto na tela
    elementoCurtidas.textContent = quantidadeAtual;
}