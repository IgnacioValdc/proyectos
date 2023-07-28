import { inquirerMenu } from "../helpers/inquirer.js";
import { readFile, save } from "../helpers/leer-guardar.js";
import { copiarPorta } from "../helpers/mostrarClave.js";

import { capturarDatos,listarClaves,eliminarClave,confirmar,leerInput } from "../helpers/inquirer.funcion.js";
import { limpiar } from "../helpers/limpiar.js";

const menuClaves = async(claves,userData) => {

    const {id,name,secretaUsuario} = userData;
    let opt = '';

    console.log('\n=================');
        console.log(`Bienvenido ${name}`);
        console.log('=================');

        const opciones = {
            palabraSecreta: secretaUsuario,
            path: './db/claves-'+`${name}`+'.json'
        }
        const clavesLeidas = readFile(opciones);

        if(clavesLeidas){
            claves.cargarClaves(clavesLeidas);
        }

        do{
            opt = await inquirerMenu();

            switch(opt){
                case '1':
                    const name = await capturarDatos('Ingrese usuario: ');
                    const pass = await leerInput('Ingrese password: ');
                    const sitio = await capturarDatos('Ingrese sitio: ');

                    claves.crearClave(id,name,pass,sitio);
                    limpiar();
                    console.log('Clave guardada con exito.');
                    break;
                case '2':
                    const idClave = await listarClaves(claves.listarClaves);
                    limpiar();
                    if(idClave){
                        copiarPorta(claves.listarClaves,idClave);
                        break;
                    }
                    break;
                case '3':
                    const claveEliminar = await eliminarClave(claves.listarClaves);
                    if(claveEliminar !== '0'){
                        const validar = await confirmar('Esta seguro de eliminar? ');
                        limpiar();
                        if(validar){
                            claves.borrarClave(claveEliminar);
                            console.log('Clave eliminada');
                        }
                    }
                    break;
                case '4':
                    const idEditar = await listarClaves(claves.listarClaves);
                    limpiar();
                    if(idEditar !== '0'){
                        const newPass = await leerInput('Ingrese la nueva contraseña: ');

                        claves.editarClave(idEditar,newPass);
                        limpiar();
                        console.log('Password editada con exito.')
                    }
                    
                    break;
            }
        const op = {
            data:claves.listarClaves,
            palabraSecreta: secretaUsuario,
            path: './db/claves-'+`${name}`+'.json'
        }
        save(op);
        }while(opt !== '0');
}

export {
    menuClaves
}