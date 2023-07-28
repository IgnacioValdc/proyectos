import inquirer from "inquirer";
import colors  from "colors";

const opcionesUsuario = [
    {
        type: 'list',
        name: 'usuario',
        message: 'Ingrese la opcion deseada: ',
        choices: [
            {
                value: '1',
                name: `${'1'.yellow} Tengo usuario`
            },
            {
                value: '2',
                name: `${'2'.yellow} Crear nuevo usuario`
            },
            {
                value: '3',
                name: `${'3'.yellow} Listar usuarios`
            },
            {
                value: '0',
                name: `${'0'.yellow} Salir.`
            }
        ]
    }
];

const inquirerUsuario = async() => {
    console.log('=================='.green);
    console.log('Seleccione una opción'.green);
    console.log('=================='.green);

    const {usuario} = await inquirer.prompt(opcionesUsuario);
    console.log(usuario)
    return usuario;
}

const opciones = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Ingrese la opción deseada: ',
        choices: [
            {
                value: '1',
                name: `${'1'.yellow}. Agregar nueva credencial`
            },
            {
                value: '2',
                name: `${'2'.yellow}. Listar`
            },
            {
                value: '3',
                name: `${'3'.yellow}. Eliminar credencial`
            },
            {
                value: '4',
                name: `${'4'.yellow}. Editar contraseña`
            },
            {
                value: '0',
                name: `${'0'.yellow}. Salir.`
            }
        ]
    }
];


const inquirerMenu = async() => {
    console.log('=================='.green);
    console.log('Seleccione una opción'.green);
    console.log('=================='.green);

    const {opcion} = await inquirer.prompt(opciones);

    return opcion;
};

export {
    inquirerMenu,

    inquirerUsuario

}