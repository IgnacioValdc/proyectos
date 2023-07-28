import { Usuario } from "./usuario.js";

class Usuarios{
    _usuario = {};

    constructor(){
        this._usuario = {};
    }

    get listarUsuarios(){
        return Object.keys(this._usuario).map((id) => this._usuario[id]);
    }

    cargarUsuarios(usuarios = []){
        for(let i = 0; i<usuarios.length; i++){
            this._usuario[usuarios[i].id] = usuarios[i];
        }
    }

    crearUsuario(user,pass){
        const usuario = new Usuario(user,pass);
        this._usuario[usuario.id] = usuario;
    }

    listadoCompleto(){
        for(let i = 0; i<this.listarUsuarios.length; i++){
            console.log(`${i+1}.`.green + `${this.listarUsuarios[i].user}` + `${this.listarUsuarios[i].password}`.red)
        }
    }
}

export {
    Usuarios
}