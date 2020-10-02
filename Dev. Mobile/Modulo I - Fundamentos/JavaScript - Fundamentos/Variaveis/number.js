const myNumber = 12.4032;

//Converter número para string
const numberAsString = myNumber.toString();
console.log('Numero transformado em string', typeof numberAsString);

//Retorna número comum de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log('\nNúmero com duas casas decimais');

//Converter um string em float
console.log('\nString convertida p/ Float', parseFloat('13.22'));

//Converter um string em int
console.log('\nString p/ int ', parseInt('13.20'));