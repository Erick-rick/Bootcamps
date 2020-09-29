function fn(){
    console.log(text);

    //Hoisting - declaração de variavel e função sem ocorrer 'referece erro' 
    //hoist - as declarações não as inicilizações,se uma variavel for declarada e inicializada após usa-la o valor ser undefined
    var text = 'Exemplo';

    console.log(text);
}

fn();

//
/*
function fn(){
    var text;
    console.log(text);

    text = 'Exemplo';

    console.log;
} */