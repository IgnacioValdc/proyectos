import { v4 as uuidv4 } from 'uuid';

class Clave{

    id = '';
    idUser = '';
    user = '';
    password = '';
    sitio = '';

    constructor(idUser,user,pass,sitio) {
        this.id = uuidv4();
        this.idUser = idUser;
        this.user = user;
        this.password = pass;
        this.sitio = sitio;
    }
}

export {
    Clave
}