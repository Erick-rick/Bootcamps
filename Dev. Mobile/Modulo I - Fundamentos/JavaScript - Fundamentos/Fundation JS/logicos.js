// AND lógico(&&)

exp1 && exp2

var a1 = true && true;          // retorna true
var a2 = true && false;         // retorna false
var a3 = false && true;         // retorna false
var a4 = false && (3 == 4);     // retorna false
var a5 = "Gato" && "Cão" ;       // retorna Cão

// OU lógico (||)
exp1 || exp2

var o1 = true || true;          // retorna true
var o2 = false || true;         // retorna true
var o3 = true || false;         // retorna true
var o4 = false || (3 == 4);     // retorna false
var o5 = "Gato" || "Cão" ;      // retorna gato

// NOT logico(!)
!exp1

var n1 = !true;     // retorna false
var n2 = !false;    // retorna true
var n3 = !"Gato"    // retorna false