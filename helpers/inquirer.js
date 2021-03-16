const inquirer = require('inquirer');
require('colors');

const preguntas =[{
    type: 'list',
    name: 'opcion',
    message: '¿Qué deseas hacer?',
    choices: [
        {
            value: '1',
            name: '1. Crear tarea'
        },
        {
            value: '2',
            name: '2. Listar tareas'
        },
        {
            value: '3',
            name: '3. Listar tareas completadas'
        },
        {
            value: '4',
            name: '4. Listar tareas pendientes'
        },
        {
            value: '5',
            name: '5. Completar tarea(s)'
        },
        {
            value: '6',
            name: '6. Borrar tarea'
        },
        {
            value: '0',
            name: '0. Salir'
        },
    ]
}];

const inquirerMenu = async() => {
    //console.clear();
    console.log('============================'.green);
    console.log('    Selecione una opción    '.green);
    console.log('============================\n'.green);

    //inquirer devuelve un objeto. Por tanto opt es un objeto donde la key será el name de la pregunta y el valor será el value del choices {preguntas.name:choises[x].value}. Por eso lo puedo sesetructurar.

    // const opt = await inquirer.prompt(preguntas);
    const {opcion} = await inquirer.prompt(preguntas);
    return opcion;
}

const pausa = async() =>{
    const question = [{
        type: 'input',
        name: 'enter',
        message: `Presione ${ 'ENTER'.red } para continuar`
    }]
    console.log('\n')
    await inquirer.prompt(question);
}

module.exports = {
    inquirerMenu,
    pausa
}
