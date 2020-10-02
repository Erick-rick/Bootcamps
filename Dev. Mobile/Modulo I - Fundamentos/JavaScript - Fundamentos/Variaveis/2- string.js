//Retorna o tamanho de um string

const textSize = 'Texto'.length;
console.log(`Quantidade de letras: ${textSize}`);

//retorna um array quebrando a string por um delimitador
const splittedText = 'Texto'.split('x');
console.log('\nArray com as posições separadas: ', splittedText);

//Buscar por um valor e substitui por outro
const replaceText = 'Texto'.replace('Text', 'tXeT');
console.log('\n Substituição de valor :', replaceText);

//Retorna a "Fatia" de um valor
const lastChar = 'Texto'.slice(-1);
console.log('\nUltima letra de uma string :', lastChar);

const allWithoutLastChar = 'Texto'.slice(0, -1);
console.log('\nValor da string da primeira letra menos a última', allWithoutLastChar);

const secondToEnd = 'Texto'.slice(1);
console.log('\nValor da string da segunda letra até a última',secondToEnd);


//Retorna N caracters a partir de uma posição
const twoCharsBeforeFirstPos= 'Texto'.slice(0, 2);
console.log('\nAs duas letras primeiras letras são: ', twoCharsBeforeFirstPos);