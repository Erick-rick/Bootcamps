let user = {
    name: 'Root'
};

//Alterando a propriedade de um objeto
user.name = 'Toor'
user['name'] = '3oot';


console.log(user);

const prop = 'name';
user[prop] = 'name2';

console.log(user);

//criando propriedade
user.lastName = 'rOoT';

//Deletando uma propriedade
delete user.name;

