var jogador = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');

var quadrado = document.getElementsByClassName('quadrado');

mudarJogador('X');

function escolherQuadrado(id){
    
    var quadrado = document.getElementById(id);
    if(quadrado.innerHTML !== '-'){
        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';

    if(jogador === 'X'){
        jogador = 'O';
    }else{
        jogador = 'X';
    }

    mudarJogador(jogador);
    checarVencedor();

}

function mudarJogador(valor){
    jogador = valor;
    jogadorSelecionado.innerHTML= jogador;
}

function checarVencedor(){
    var quadrado1 = document.getElementById(1);
    var quadrado2 = document.getElementById(2);
    var quadrado3 = document.getElementById(3);
    var quadrado4 = document.getElementById(4);
    var quadrado5 = document.getElementById(5);
    var quadrado6 = document.getElementById(6);
    var quadrado7 = document.getElementById(7);
    var quadrado8 = document.getElementById(8);
    var quadrado9 = document.getElementById(9);

    if(checarSequencia(quadrado1, quadrado2, quadrado3)){
        mudaCorQuadrado(quadrado1, quadrado2, quadrado3);
        mudarVencedor(quadrado1);
        return;
    }

    if(checarSequencia(quadrado4, quadrado5, quadrado6)){
        mudaCorQuadrado(quadrado4, quadrado5, quadrado6);
        mudarVencedor(quadrado4);
        return;
    }

    if(checarSequencia(quadrado7, quadrado8, quadrado9)){
        mudaCorQuadrado(quadrado7, quadrado8, quadrado9);
        mudarVencedor(quadrado7);
        return;
    }

}

function mudarVencedor(quadrado){
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function mudaCorQuadrado(quadrado1, quadrado2, quadrado3){
    quadrado1.style.background = '#0f9';
    quadrado2.style.background = '#0f9';
    quadrado3.style.background = '#0f9';
}

function checarSequencia(quadrado1, quadrado2, quadrado3){
    var igual = false;

    if(quadrado1.innerHTML !== '-' && quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML){
        igual =true;

    }

    return igual;
}

function reiniciar(){
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    for(var i= 1; i<=9; i++){
        var quadrado = document.getElementById(i);
        quadrado.style.background='#eee';
        quadrado.style.color = '#eee';
        quadrado.innerHTML = '-';
    }

    mudarJogador('X');
}