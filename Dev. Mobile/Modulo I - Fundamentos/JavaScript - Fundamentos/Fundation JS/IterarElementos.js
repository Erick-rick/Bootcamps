const arr = [1, 2, 3, 4, 5];

arr.forEach((value, index)=> {
    console.log(`${index}: ${value}`);
});

//Iterar elementos
const arr1 = [1, 2, 3, 4, 5];
arr1.map(value => value * 2);
//[2, 4, 6, 8, 10]

/* Flat
Retorna um novo array com todos os elementos de um sub-array concatenados de forma recursiva de acordo com a 
porfundidade especificada(depth) */

const arr2= [1, 2, [3, 4]];
arr2.flat();
//[1, 2, 3, 4]


/**FlatMap 
 * Retorna um novo array assim como a função map e executa um flat de profundidade 1
 */
const arr3 = [1, 2, 3, 4];
arr3.flatMap(value => [value * 2]);
//[2, 4, 6, 8]

arr3.flatMap(value => [[value * 2]]);
//[[2],[4], [6], [8]]

/**Keys 
 * Retorna um array iterator que contém as chaves para cada elemento do array
*/

const arr4 = [1, 2, 3, 4];

const arrIterator = arr4.keys();
arrIterator.next();
//{value: 0, done: false}
arrIterator.next();
//{value: 1, done: false}
arrIterator.next();
//{value: 2, done: false}
arrIterator.next();
//{value: 3, done: true}

/**Find >> 
 *      Retorna o primeiro  item de um array que satisfaz a condição
 */
const arr5 = [1, 2, 3, 4];

const firstGreaterThanTwo = arr5.find(value => value >2 );
console.log(firstGreaterThanTwo);
//3

/*Filter 
    Retorna um novo array com todos os elementos que satisfazem a condição 
 */

const arr6 = [1, 2, 3, 4];

const allValuesGreaterThanTwo = arr6.filter(value => value > 2);
console.log(allValuesGreaterThanTwo);
//[3, 4]

/*indexOf
    Retorna o primeiro índice em que um elemento pode ser encontrado no array
*/

const arr7= [1, 3, 3, 4, 3];

const firstIndexOfItem = arr7.indexOf(3);
console.log(firstIndexOfItem);
// 1


/**LastIndexOf
 *  Retorna o último indice em que um elemento pode ser encontrado no array
 */

const arr8= [1, 3, 3, 4, 3];

const lastIndexOfItem = arr7.lastIndexOf(3);
console.log(lastIndexOfItem);
// 4

/**Include
 *  Retorna um booleano verificando se determinado elemento existe no array
 */
const arr9 =[1, 3 ,3, 4, 3];

const hasItemOne = arr9.includes(1);
 // true
const hasItemTwo = arr9.includes(2);
 // false

/**Sort
 * Ordena os elementos de array de acordo com a condição
 */