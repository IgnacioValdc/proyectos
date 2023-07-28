import { Clave } from "./clave.js";



class Claves{
    _claves = {};

    get listarClaves(){
        return Object.keys(this._claves).map((id) => this._claves[id]);
    }

    constructor(){
        this._claves = {}
    }

    crearClave(idUser,user,pass,sitio){
        const clave = new Clave(idUser,user,pass,sitio);
        this._claves[clave.id] = clave;
    }

    listadoCompleto(idUsuario){
        const clavesArray = this.listarClaves;
        const clavesUsuario = clavesArray.filter((idUser) => clavesArray.idUser === idUsuario);
        for(let i = 0; i<clavesUsuario.length; i++){
            console.log(`${i+1}.`.green + `${clavesUsuario[i].user}` + `${clavesUsuario[i].password}`.red)
        }
    }

    cargarClaves(claves = []){
        for(let i = 0; i<claves.length; i++){
            this._claves[claves[i].id] = claves[i];
        }
    }

    obtenerClave(clave = []){
        // console.log(clave);
        clave.forEach(id => {
            const clave = this._claves[id];
            console.log(clave)
            clipboard.writeSync(clave.password);
        })
    }

    borrarClave(id = ''){
        if(this._claves[id]){
            delete this._claves[id];
        }
    }

    editarClave(id = '', pass = ''){
        if(this._claves[id]){
            this._claves[id].password = pass
        }
    }
}

export {
    Claves
}