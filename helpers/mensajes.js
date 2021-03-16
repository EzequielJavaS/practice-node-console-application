require('colors');

const mostrarMenu = () => {

    return new Promise (resolve =>{
        console.clear();
        console.log('============================'.green);
        console.log('    Selecione una opción    '.green);
        console.log('============================\n'.green);

        console.log(`${ '1.'.green } Crear tarea`);
        console.log(`${ '2.'.green } Listar tareas`);
        console.log(`${ '3.'.green } Listar tareas completadas`);
        console.log(`${ '4.'.green } Listar treas pendientes`);
        console.log(`${ '5.'.green } Completar tareas`);
        console.log(`${ '6.'.green } Borrar tarea`);
        console.log(`${ '0.'.green } Salir \n`);

        const readline = require('readline').createInterface({
            input: process.stdin, //Esperamos que el usuario escriba algo
            output: process.stdout //Le damos informacón al usuario
        })

        readline.question('Seleccione una opción: ', (opt) => {
            readline.close();
            resolve(opt);
        })

        }); 
}

const pausa = () => {

    return new Promise( resolve =>{
        const readline = require('readline').createInterface({
            input: process.stdin, //Esperamos que el usuario escriba algo
            output: process.stdout //Le damos informacón al usuario
        })
    
        readline.question(`\nPresione ${ 'ENTER'.red} para continuar\n`, (opt) => {
            readline.close();
            resolve();
        })

    });
}

module.exports = {
    mostrarMenu,
    pausa
}