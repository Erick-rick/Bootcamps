/**
 * 
 * if (condição){
 *  //code
 * }
**/

const array = [0, 1, 2, 3 ,4 ,5];

array.forEach(item => {
    if(item % 2 === 0){
        console.log(`O numero ${item} é par`);
    }else{
        console.log(`O numero ${item} é impar`);
    }
});

const array2 = [2, 3, 4, 5, 6, 8, 10, 15];

console.log('\nelse if');
array2.forEach(item =>{
    if(item % 2 === 0){
        console.log(`O numeto ${item} é divisivel por 2`);
    }
    else if(item % 3 === 0){
        console.log(`O numeto ${item} é divisivel por 3`);
    }
    else if(item % 5 === 0){
        console.log(`O numeto ${item} é divisivel por 5`);
    }
} );
