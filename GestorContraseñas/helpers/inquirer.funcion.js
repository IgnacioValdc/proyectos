import inquirer from "inquirer";
import colors  from "colors";

const leerInput = async(message) => {
    const pregunta = [
        {
            type: 'password',
            name: 'value',
            message: message,
            validate(value){
                if(value.length === 0){
                    return 'Valor invalido, vuelva a ingresar';
                }
                return true;
            }
        }
    ];

    const {value} = await inquirer.prompt(pregunta);
    return value;
}

const capturarDatos = async(message) => {
    const pregunta = [
        {
            type: 'input',
            name: 'value',
            message: message,
            validate(value){
                if(value.length === 0){
                    return 'Valor invalido, vuelva a ingresar';
                }
                return true;
            }
        }
    ];

    const {value} = await inquirer.prompt(pregunta);
    return value;
}

const listarClaves = async(claves = []) => {
    const choices = claves.map((clave,i=0) => {
        return{
            value: clave.id,
            name: `${i+1}.`.yellow + ' Usuario:'+`${clave.user}`.cyan +' Sitio:'+`${clave.sitio}`.green
        }
    });
    choices.unshift({
        value: '0',
        name: '0.'.green + 'Cancelar'
    })
    const pregunta = [
        {
            type: 'list',
            name: 'id',
            message: 'Selecciona la credencial deseada: ',
            choices

        }
    ];
    const {id} = await inquirer.prompt(pregunta);
    return id;
}

const eliminarClave = async(claves = []) => {
    const choices = claves.map((clave, i=0) => {
        const idx = `${i + 1}`.green;
        return{
            value: clave.id,
            name: `${i+1}`.green + ` Usuario: ${clave.user}`+` Sitio: ${clave.sitio}`
        }
    });
    choices.unshift({
        value: '0',
        name: '0.'.green + 'Cancelar'
    })
    const pregunta = [
        {
            type: 'list',
            name: 'id',
            message: 'Selecciona la credencial que deseas borrar',
            choices

        }
    ];
    const {id} = await inquirer.prompt(pregunta);
    return id;
}


const confirmar = async(message) => {
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ]
    const {ok} = await inquirer.prompt(question);
    return ok;
}

export {
    confirmar,
    eliminarClave,
    capturarDatos,
    listarClaves,
    leerInput
}