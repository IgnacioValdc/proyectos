import { writeFileSync, existsSync, readFileSync, read } from 'fs';
import crypto from 'crypto-js';

const save = (opciones) => {
    const {data,path = './db/user.json',palabraSecreta = 'CharAznable'} = opciones;

    const json = JSON.stringify(data);
    const jsonEncriptado = crypto.AES.encrypt(json,palabraSecreta).toString();
    writeFileSync(path,jsonEncriptado,'utf-8');
}

const readFile = (opciones) => {
    const {palabraSecreta = 'CharAznable',path = './db/user.json'} = opciones;

    if(!existsSync(path)){
        return null;
    }
    try {
        const archivoEncriptado = readFileSync(path,{encoding: 'utf-8'});
    
        const bytes = crypto.AES.decrypt(archivoEncriptado,palabraSecreta);
        
        const info = bytes.toString(crypto.enc.Utf8);
        
        const data = JSON.parse(info);
        return data
    } catch (error) {
        console.error('Error al desencriptar la bodega, verifique su clave');
    }
}

export {

    readFile,
    save
}