import { v4 as uuidv4 } from 'uuid';

class Usuario{
    id = '';
    user = '';
    password = '';

    constructor(user, pass) {
        this.id = uuidv4();
        this.user = user;
        this.password = pass;
    }
}

export {
    Usuario
}