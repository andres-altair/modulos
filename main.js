import { addCliente,listaCliente } from "./cliente.js";
import { sumar,restar,PI } from "./opreaciones.js";

/*let n1 =21
let n2 =123
let resultado = sumar(n1,n2);
let resulatdo2 = restar(n2,PI);
console.log(resultado , resulatdo2);*/


/*import opreaciones  from "./opreaciones.js";
let n1 =21
let num2 =123
let resultado = sumar(n1,n2);
let resulatdo2 = restar(n2,PI);
console.log(resultado , resulatdo2);*/
  

// crear cliente
addCliente('andes','a@gmail.com');
addCliente('ana','b.@gmail.com');
console.log(listaCliente());
let cliente = listaCliente();
console.log(cliente[0].nombre);

