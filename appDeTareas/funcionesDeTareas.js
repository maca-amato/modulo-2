const fs = require('fs');

let archivoTareas = {
    archivo: './tareas.json',
    leerJSON: function(){
        const contenidoJSON = fs.readFileSync(this.archivo, 'utf-8')
        return JSON.parse(contenidoJSON);
    },
    escribirJSON: function(tareas){
        const jsonActualizado = JSON.stringify(tareas);
        fs.writeFileSync(this.archivo, jsonActualizado);
    },
    guardarTarea(tarea){
        let tareas = this.leerJSON();
        this.escribirJSON([...tareas, tarea]);
    },
    filtrarPorEstado(estado){
        let tareas = this.leerJSON();
        let tareasFiltradas = tareas.filter(tarea => {return tarea.estado == estado;});
        return tareasFiltradas;
    }
}

module.exports = archivoTareas;