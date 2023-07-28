
const valida = (user,pass,listaUsuario) => {

    for(let i = 0; i<listaUsuario.length; i++){
        if(user === listaUsuario[i].user && pass === listaUsuario[i].password){
            console.log('Exito al loggear');
            return listaUsuario[i].id;
        }
    }
    console.log('Existe un error');
    return null;
}

const usuarioRepetido = (usuarios = [],nuevoUsuario = '') => {
    const repetido = usuarios.filter((usuario) => usuario.user === nuevoUsuario);

    if(repetido.length > 0){
        console.log('El nombre de usuario ya existe, utilice otro');
        return null;
    }
    return 1;
}

export {
    valida,
    usuarioRepetido
}