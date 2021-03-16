require('colors');
const { mostrarMenu, pausa } = require('./helpers/mensajes');

console.clear();

const main = async() => {
    let opt = '';
    do {
        opt = await mostrarMenu(); // Await= Espérate a que se ejecute esto.
        console.log({ opt });
        ( opt !== '0')&& await pausa(); //Hace que pida un ENTER para continuar.
    } while( opt !=='0');
}

main();