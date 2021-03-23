const Tarea = require("./tarea");

/**
 *  _listado:
 *      {'uuid-123456-125554-2: {id:12, desc:loQuSea, completadoEn: 94457}}
 *      {'uuid-123456-125554-2: {id:13, desc:loQuSea, completadoEn: 94457}}
 */
class Tareas {
    _listado = {};

    constructor(){
        this._listado = {}
    }

    crearTarea( desc = '') { //Recibe la descripción y con ella ya puede crear la tarea
        const tarea = new Tarea(desc);//Ahora hay que guardar la tarea recien creada en Tareas. Lo que hago insertar una nueva propiedad a la propiedad _listado. Cada tarea será una propiedad del objeto -Listado.

        this._listado[tarea.id] = tarea;
    }
}
module.exports = Tareas;



