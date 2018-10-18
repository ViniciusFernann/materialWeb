window.onload = function(){
    let zebrar = document.querySelectorAll('.zebra tbody tr');
    for (let i = 0; i < zebrar.length; i+=2){
        zebrar[i].className = 'zebrada';
    }
}

// Irá buscar sempre o URL da página atual
console.log(window.location.href);

// Realiza a manipulação do histórico do navegador
