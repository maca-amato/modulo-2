let funcionesDeTareas = require('./funcionesDeTareas');

let accion = process.argv[2];

let tareas = [];

switch (accion){
    case 'listar':
        console.log();
        console.log('Listado de tareas');
        console.log('----------------');
        let tareas = funcionesDeTareas.leerJSON();
        tareas.forEach((tarea, i) => {
            console.log(i + 1 +  '. ' + tarea.titulo + ': ' + tarea.estado);
        });
        console.log()
        break;
        //----------//
    case 'crear':
        console.log();
        console.log('Nueva tarea creada');
        console.log('------------------');
        let titulo = process.argv[3];
        let tarea = {
            titulo: titulo,
            estado: 'pendiente'
        }
        funcionesDeTareas.guardarTarea(tarea);
        console.log(tarea.titulo + ' => ' + tarea.estado);
        console.log()
        break;
        //----------//
    case 'filtrar':
        let estado = process.argv[3];
        console.log();
        console.log('Tareas con estado: ' + estado + ' ');
        console.log('------------------');
        let filtradas = funcionesDeTareas.filtrarPorEstado(estado);
        filtradas.forEach(tarea => console.log(tarea.titulo));
        break;
        //----------//        
    case undefined:
        console.log('Tenés que pasarme una acción');
        console.log('Las acciones disponibles son: listar, crear, filtrar');
        break;
        //----------//
    default:
        console.log('No entiendo qué me estás pidiendo');
        console.log('Las acciones disponibles son: listar, crear, filtrar');
        break;
}