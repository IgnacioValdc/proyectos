
import { Usuarios,Claves } from './models/index.js';
import { menuUsuario } from './views/usuarios.view.js';
import { menuClaves } from './views/claves.view.js';
import { limpiar } from './helpers/limpiar.js';

const main = async() => {
    limpiar();
    //Iniciamos las Clases
    const usuarios = new Usuarios();
    const claves = new Claves();
    const userData = await menuUsuario(usuarios);

    if(userData.name){
        await menuClaves(claves,userData);
    }
}

main();