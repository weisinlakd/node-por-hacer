const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');



let comando = argv._[0];

switch(comando) {

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
            console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        let i = 1;
        for (let tarea of listado) {
            
            console.log(`${i})`.red);
            console.log('=============POR HACER========='.green);
            console.log('Tarea: '.green + tarea.descripcion);
            console.log('Estado: '.green, tarea.completado);
            console.log('=============POR HACER========='.green);
            i++;
            
        }
            
        break;
    case 'actualizar':
            let actualizacion = porHacer.actualizar(argv.descripcion, argv.completado);
            console.log(actualizacion);
        break;
    case 'borrar':
            let borrado = porHacer.borrar(argv.descripcion);
            
        break;
    default:
        console.log('Comando no reconocido')
}