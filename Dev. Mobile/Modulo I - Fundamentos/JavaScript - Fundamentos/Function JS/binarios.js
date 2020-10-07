// in 
something in somethingItems

//Arrays
var carros = new Array("Argo", "Toro", "Cronos", "Strada");
0 in carros;    // retorna true
3 in carros;    // retorna true
6 in carros;    // retorna false

"Argo" in carros;    // retorna false (vc deve especificar o número do índice), 
                     // não o valor naquele indice)
"length" in carros;  // retorna true (Length é uma propriedade de Array)

//Object predefinidos_______________________________________________________________
"PI" in Math; // retorna true

var myString = new String("Coral");
"length" in myString; // retorna true

//Objetos personalizados_________________________________________________________________
var mycar = {marca:"BMW", modelo:"M3", ano: 1998};
"marca" in mycar;   //retorna true
"modelo" in mycar   //retorna true

//Instaceof _______________________________________________________
objeto instanceof tipoObjeto

var dia = new Date(2020, 01, 03);

if(dia instanceof Date){
    //code here
}
