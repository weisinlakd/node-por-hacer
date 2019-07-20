let descripcion = {
        demand: true,
        alias: 'd',
    }







const argv = require('yargs')
    .command('crear', 'imprime la lista de cosas por hacer en un archivo', {
        descripcion
    })
    .command('actualizar', 'actualizar estado de una tarea', {
        descripcion,
        completado: {
            demand: false,
            alias: 'c',
            default: true,
        }
    })
    .command('borrar', 'borrar una tarea', {
        descripcion
    })
    .help()
    .argv

module.exports = {
    argv
}