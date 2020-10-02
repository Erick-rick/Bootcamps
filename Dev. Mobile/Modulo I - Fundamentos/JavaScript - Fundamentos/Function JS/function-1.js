function fn(){
    return 'Code here';
}

const arrowFn = () => 'Code here';
const arrowFn2 =() => {
    //Mais de um expressão
    return 'Code Here';
}

//Funções tbm são objetos

fn.prop = 'Posso criar Propriedades';
console.log(fn());
console.log(fn.prop);

//Receber Parametros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

//Receber e retornar funções
const controlFnExec = fnParam => allowed =>{
    if(allowed){
        fnParam();
    }
}
const handleFnExecution = controlFnExec(fn);

handleFnExecution(true);
handleFnExecution();

//controlFnExec como função
function controlFnExec(fnParam){
    return function(allowed){
       if(allowed){
           fnParam();
       } 
    }
}

