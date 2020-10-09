// Criar um Array

const a = Array(3);
// [empty x 3]

const b = Array(3, 2);
//[3, 2]

// Array.from
//cria uma nova instancia de array a partir de um parametro array-like ou iterable object

const divs = document.querySelectorAll('div');
const arr = Array.from(divs);

/**Inserir e remover elementos 
 * 
 * >>> push - Adicionar um ou mais elementos no final do array e retorna o tamanho do novo array
*/

const c = ['Maça', 'Melancia', 'Uva'];
const cLength = c.push('Mamão');

console.log(cLength);
//-----------------------------------------------------------
console.log(c);

const removedItem = c.pop();
console.log(removedItem);
//'Mamão

console.log(c);

/**__________________________________________________________________________
 * >>> shift 
 * Remove o primeiro elemento de um array e retorna o elemento removido */
 const removerItem2 = c.shift();
 console.log(removerItem2);
 //remove Maça

/**Unshift 
 * 
 * Adicionar um ou mais elementos no início do array e retorna o tamanho do novo array
 */

const addItem = c.unshift('Manga');
console.log(addItem);
//Manga, 'Maça', 'Melancia', 'Uva']

/**>>> Concat
 * concatena um ou mais arrays retornado um novo array
 */

const e = [1, 2, 3];
const f = [4, 5, 6];

const newArry = e.concat(f);
 
console.log(newArry);

/*  >>Slice 
*     Retorna um nova array 'fatiando' o array de acordo com ínicio e fim
*/
const g  = [1, 2, 3, 4, 5];
g.slice(0, 2);
// [1 ,2]

g.slice(2);
//[3, 4, 5]

g.slice(-1);
//[5]


/**Splice 
 * Alterar um array adicionando novos elementos enquanto remove elementos antigos
*/
const h = [1, 2, 3, 4, 5];
h.splice(2);
//[3, 4, 5]

console.log(h);
//[1,2]