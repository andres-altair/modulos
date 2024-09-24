//codigo para manejar lista de cliente
let clientes =[];
export function addCliente(nombre,correo){
    clientes.push({nombre,correo});
}

export function listaCliente(){
    return clientes;
}

