const user={
    name: 'Mr',
    lastName:'Robot'

};

//Recupera as chaves do objeto
console.log('Propriedade do objeto user', Object.keys(user));

//Recuperar os valores das chaves do objeto
console.log('\nValores das propriedades do objeto user: ', Object.value(user));

//Retorna uma array de arrays conteado ['nome_prop, valor_prop]
console.log('\nLista de propriedades e valores', Object.defineProperties(user));

//Mergear propriedades de objetos
Object.assign(user, {fullName: 'MR Robot'})

console.log('\nAdiciona a propriedade fullName no objeto user', user);
console.log('\nRetorna um novo objeto mergeando dois ou mais objetos', Object.assign({}, user, {age: 25}));

//Previne todas as alterações em um objeto
const newObj = {foo: 'bar'};
Object.freeze(newObj);

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo';

console.log('\nVariavel newObj apos as alterações :', newObj);

//permite apenas a alterações de propriedade existentes em um objeto
const person = {name: 'TesTe'};
Object.seal(person);

person.name = 'Teste testando..';
person.age = 25;

console.log('\nVariavle person apos as alterações', person);

