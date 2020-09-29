import 'dart:html';

void main(Lista <String>args) async{
  // requisiçãp
  // await aguardar a resposta do request
  print(await HttpRequest.getString('https://jsonplaceholder.typicode.com/todos/'));

 // HttpRequest.getString('https://jsonplaceholder.typicode.com/todos/1')
 //   .then(print);

 //Exceções
 try{
   

 }

 dividir(int valor1, int valor2){
   if(valor2 == 0){
     throw new IntegerDivisionByZeroException();
   }
 }
}