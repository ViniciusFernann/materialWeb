function verificar(){
    let x = document.getElementById('numero').value;
    
    try {
        if (x == '') throw 'Informe um valor';
        if (isNaN(x)) throw 'Você precisa informar um numero';
        x = Number(x);
        if (x < 10 || x > 20) throw 'informe um numero entre 10 e 20';

        document.getElementById('msg').innerHTML = 'Perfeito, o valor está correto';
    } catch (erro){
        document.getElementById('msg').innerHTML = 'Erro: ' + erro;
    // O comando finally irá executar mesmo com erro ou sucesso    
    } finally {
        // Limpa o campo mesmo se deu erro ou sucesso
        document.getElementById('numero').value = '';
    }
}
