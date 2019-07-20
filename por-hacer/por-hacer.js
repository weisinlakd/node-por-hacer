const fs = require('fs');


let listadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    

        fs.writeFile('./db/data.json', data, (err) => {
                
            if (err) throw new Error('error:',err);            
            else(console.log('archivo creado!'))
        });

}


const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
    
    
}

const getListado = ( ) => {
    cargarDB();
    // let lista = [];
    //     for (let i =0; i < listadoPorHacer.length; i++) {

    //         tarea = {
    //             descripcion: listadoPorHacer[i].descripcion,
    //             completado: listadoPorHacer[i].completado,
    //         }
    //         lista.push(tarea);
    //     }
    // return lista;
    return listadoPorHacer;
    


}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();
    return porHacer;
}


const actualizar = (descripcion, completado) => {

    cargarDB();

    let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion);
    console.log(`${index}`.red)
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return console.log('tarea actualizada!'),true;
    } else {
        return console.log('no existe la tarea!'), false;
    }
}

const borrar = (descripcion) => {

    cargarDB();
    

    let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion);
    console.log(`${index}`.red);

    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return console.log(`${descripcion} fue borrada de las tareas!`.red), true;
        
    } else {
        return console.log('no existe la tarea'), false
    }
}
module.exports ={
    crear,
    guardarDB,
    getListado,
    actualizar,
    borrar
}