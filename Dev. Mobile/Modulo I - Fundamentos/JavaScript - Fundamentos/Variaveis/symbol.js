const symbol1 = Symbol();
const symbol2 = Symbol();

//Symbols são únicos
console.log('symbol é igual a symbol2:', symbol1 === symbol2);

//previnir conflito entre names de propriedades 
const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');

const user = {
    [nameSymbol1]: 'Nome',
    [nameSymbol2]: 'Outro nome',
    lastName: 'Fulano da Silva'
}

console.log(user);

//Symbols criam propriedade que não são enumberables

for(const key in user){
    if(user.hasOwnProperty(key)){
        console.log(`\nValor da chave ${key}: ${user[key]}`);
    }
}

console.log('Propriedades do bojeto user: ', Object.keys(user));
console.log('Valores das propriedades do objeto user: ', Object.values(user));

//Exbir symbols de um objeto
console.log('Symbols registrados no objeto user: ', Object.getOwnPropertySymbols(user));

//Acessando todas as propriedades do objeto
console.log('Todas propriedade do objeto user: ', Reflect.ownKeys(user));

//Criar um enum
const directions = {
    UP  : Symbol( 'UP' ),
    DOWN: Symbol( 'DOWN' ),
    LEFT: Symbol( 'LEFT' ),
    RIGHT:Symbol( 'RIGHT' ), 
};