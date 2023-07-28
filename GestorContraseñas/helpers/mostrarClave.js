import clipboard from "clipboardy";

const copiarPorta = (claves = [], claveId = '') => {

    claves.forEach(elemento => {

        if(elemento.id === claveId){
            clipboard.writeSync(elemento.password);
            console.log('Su clave a sido copiada al portapapeles')
        }
    });
}

export {
    copiarPorta
}