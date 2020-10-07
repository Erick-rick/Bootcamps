const user = ['Ana', 'Pedro', 'Jennifer' ];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W'),
}

const persons =[
{
    name = 'Ana',
    age: 26,
    gender: gender.WOMAN
},
{
    name = 'Pedro',
    age: 22,
    gender: gender.MAN
},
{
    name = 'Jennifer',
    age: 18,
    gender: gender.WOMAN
}
];

//Retorna a quantidade de itens de um array
console.log('itens: ', persons.length);

//Verificar se é array
console.log('A variavel persons ´eum array: ', Array.isArray(persons));

//Iterar os itens do array
persons.forEach(persons =>{
    console.log(`Nome: $(persons.name)`);
});

//filtrar array
const mens = persons.filter(person => person.gender === gender.MAN);
console.log('\n Nova lista apenas com homens: ', mens);


//Retorna um novo 
const personsWihtCourse = persons.map(persons => {
    persons.course = 'Introdução do JS';
});

console.log('\nPessoas com adição dp course: ', personsWithCourse);

//transformar um array em outro tipo
const totalAge = person.reduce((age, person) => {
    age += person.age;
    return age;
}, 0);

console.log('\nSoma de idades das pessoas', totalAge);

// Juntando operações
const totalEvenAge = persons .filter( persons => persons.age % 2 === 0)
            .reduce((age, persons) => { age += persons.age;
                return age;
            }, 0);

console.log('\nSoma de idades das pessoas que possuem idade par', totalEvenAge);
