class Cliente{

    int id;
    String nome;

    //Getters e Setters
    String get nomeComTratamento{
      return "Sr. ${nome}";

    }
  } 

 
void main(List<String> args){
  var msg = "World";
  print("Hell0 $(msg)");

  print('----------------------')

  var cliente = new Cliente();
  cliente.id = 1;
  cliente.nome = "Erick";
  print(cliente.nomeComTratamento);

  print('----------------------')

  var list = [2, 4, 6, 8];
  list.remove(3);
  print(list[2]);
  list.add(10);
  print(list)

  print('----------------------')

  var mapa ={
  "id": "1",
  "nome": "master"
  };

  print(mapa('id'));
  //buscar por ID 
  print(mapa.constainKey('id'));


}