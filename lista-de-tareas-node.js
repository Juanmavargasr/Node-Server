// const { stdout } = require('process');

// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });


let taskList = [ {
        id: 1,
        taskname: "TASK 1",
        taskiDescriprion: "Task 1 Description",
        taskCompleted: false
    },
    {
        id: 2,
        taskname: "TASK 2",
        taskiDescriprion: "Task 2 Description",
        taskCompleted: true
    },
]

const saludar = () => {
    console.log('Bienvenido a tu lista de tareas, escoge qué deseas hacer:')
    console.log('1. Crear tarea')
    console.log('2. Modificar tarea')
    console.log('3. Borrar tarea')
    console.log('4.salir')

    process

    var eleccion = "3"

    // pregunta()

    
    // do {
    //     readline.question(`Escoge una opción `, eleccion => {
    //     console.log(`Escogiste la opción: ${eleccion}`);
    //     readline.close();
    //     });
    // }
    // while (eleccion !== "1" && eleccion !== "2" && eleccion !== "3" && eleccion !== "4")




    pregunta(eleccion)
   
    

    switch (eleccion){
        case "1":
            console.log('el case 1 funciona')
            break;
        case "2":
            console.log('el case 2 funciona')
            break;
        case "3":
            console.log('el case 3 funciona')
            break;
        default:
            break;
    }
}


// const pregunta = (eleccion) => {
//     readline.question(`Escoge una opción: `, eleccion => {
//     console.log(`Escogiste la opción: ${eleccion}`);
//     console.log('gonorrea');
//     readline.close();
//     });
// }


const pregunta = (eleccion) => {
    process.stdout.write('Escoge una opción: ')
    process.stdin.on('data', function(data){
        eleccion = data.toString()
        process.stdout.write(`escogiste la opción: ${eleccion}\n`)
        // process.exit()
    })
}


const createTask = (taskList) => {
    console.log(taskList[0])
}

const deleteTask = (taskList) => {
    console.log('Esta es la lista de tareas:')
    for (let i = 0; i < taskList.length; i++) {
        console.log (`La tarea ${i} es ${taskList[i].taskname}`)
    }
    console.log('Escoge cuál quieres borrar:')
}

const completeTask = (taskList) => {
    console.log(taskList[0])
}



saludar()

