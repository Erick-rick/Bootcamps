void main(){
  print("Hello");

  //no dart declaração de variavel com tipo ou var
  String nome = "Fulano de Tal";
  var nome2 = "Fulano de Tal 2";

  //concatenação
  print(nome + nome2);

  //tipo numerico
  int numero1 = 1;
  int numero2 = 2;
  double numeroDecimal = 1.12;
  //num class pai de int e double
  num a= 1;

  print('abc $nome abc ${nome2}  ${numero1 + numero2}');

  //booleano
  bool tipobooleano = false;

  //Lista - a palavra new e opcional
  List lista = new List();
  lista.add(1);
  lista.add(1.5);
  lista.add("texto");

  List<String> listaString = new List();
  listaString.add("texto");

  var list = [1, 2, 3, 4, 5];
  list.add(4);

  //constante
  const constanteX = 12;
  //constanteX =13

  

}