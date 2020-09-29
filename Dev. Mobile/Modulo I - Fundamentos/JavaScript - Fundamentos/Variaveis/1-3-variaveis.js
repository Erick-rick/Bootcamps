const name = "Ana";

//não podemos alterar o valor
name = 'Ana';

const user ={
    name: 'Ana'
};

//Mas se for um objeto, podemos trocar suas propriedades
user.name = 'Fulano';

//Não podemos fazer o objeto 'Apontar' para outro lugar
user= {
    name:'Ana'
};

//____________________________________________________________________________
const persons = ['Ana', 'Pedro', 'Jennifer'];

//podemos adicionar novos itens
persons.push('Joao');

//remover algum item
persons.shift();

//podemos alterar diretamente
persons[1] = 'James'

console.log('\n Array após as alterações: ', persons);
