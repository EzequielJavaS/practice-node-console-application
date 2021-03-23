require('colors');
const { inquirerMenu,
        pausa,
        leerInput     
} = require('./helpers/inquirer');
const Tareas = require('./models/tareas');

// console.clear();

const main = async() => {
    let opt = '';
    const tareas = new Tareas();
    do {
        opt = await inquirerMenu() ; // Await= Espérate a que se ejecute esto.
        
        switch (opt) {
            case '1':
                //crear tarea
                const desc = await leerInput('Introduce Descripción de tarea:');
                tareas.crearTarea( desc );
            break;

            case'2':
                console.log( tareas._listado );
            break;
        }
        await pausa();
    } while( opt !=='0');
}

main();