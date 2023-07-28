import {inquirerUsuario} from '../helpers/inquirer.js'
import { valida, usuarioRepetido } from '../helpers/validarUsuario.js';
import { readFile,save } from '../helpers/leer-guardar.js';
import { leerInput } from '../helpers/inquirer.funcion.js';
import { limpiar } from '../helpers/limpiar.js';




const menuUsuario = async(usuarios) => {

    const usuariosLeidos = readFile({});

    if(usuariosLeidos){
        usuarios.cargarUsuarios(usuariosLeidos);
    }
    
    let optUs = '';
    
    let id,name,secretaUsuario;

    do{
        optUs = await inquirerUsuario();

        switch(optUs){
            case '1':
                name = await leerInput('Ingrese usuario: ');
                const pass = await leerInput('Ingrese contraseña: ');

                id = valida(name,pass,(usuarios.listarUsuarios));

                if(id){
                    secretaUsuario = await leerInput('Ingrese la clave de Bodega: ');
                    optUs = '0';
                    limpiar();
                }
                break;
            case '2':
                const nuevoUsuario = await leerInput('Ingrese usuario: ');

                const repetido = usuarioRepetido(usuarios.listarUsuarios,nuevoUsuario);
                if(repetido !== 1){
                    break;
                }
                const nuevoPass = await leerInput('Ingrese contraseña: ');

                usuarios.crearUsuario(nuevoUsuario,nuevoPass);
                limpiar();
                console.log('Usuario creado con exito, ingrese con sus credenciales en la opcion 1');
                
                break;
            case '3':
                limpiar();
                console.log("Función de prueba, debe ser eliminada en ambiente productivo")
                usuarios.listadoCompleto();
                break;
        }
        const op = {
            data: usuarios.listarUsuarios
        }
        save(op);
    }while(optUs !== '0')

    const valores = {
        id: id,
        name: name,
        secretaUsuario: secretaUsuario
    }
    return valores;
}

export {
    menuUsuario
}