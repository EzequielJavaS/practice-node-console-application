const { inquirerMenu, pausa } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');
require('colors');

console.clear();

const main = async() => {
    let opt = '';
    do {
        opt = await inquirerMenu() ; // Await= Espérate a que se ejecute esto.
        console.log( {opt} );

        await pausa();
    } while( opt !=='0');
}

main();