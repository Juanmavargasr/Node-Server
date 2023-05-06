// const { stdout } = require('process');

const readline = require("readline-sync");

let taskList = [
  {
    id: 1,
    taskName: "TASK 1",
    taskDescriprion: "Task 1 Description",
    taskCompleted: false,
  },
  {
    id: 2,
    taskName: "TASK 2",
    taskDescriprion: "Task 2 Description",
    taskCompleted: true,
  },
  {
    id: 3,
    taskName: "TASK 2",
    taskDescriprion: "Task 3  Description",
    taskCompleted: false,
  },
];

const pregunta = () => {
  let continuar = true;

  while (continuar === true) {
    console.log("Bienvenido a tu lista de tareas, escoge qué deseas hacer:");
    console.log("1. Crear tarea");
    console.log("2. Completar tarea");
    console.log("3. Borrar tarea");
    console.log("4.salir");
    const eleccion = readline.question(`Escoge una opcion: `);
    switch (eleccion) {
      case "1":
        createTask(taskList);
        break;
      case "2":
        completeTask(taskList);
        break;
      case "3":
        deleteTask(taskList);
        break;
      case "4":
        continuar = false;
        break;
      default:
        console.log("Opción invalida");
        break;
    }
  }
};

const createTask = (taskList) => {
  const newTaskName = readline.question(
    `Por favor inserta el nombre de la nueva tarea: `
  );
  const newTaskDescription = readline.question(
    `Por favor inserta la descripcion de la nueva tarea: `
  );
  let newTaskItem = {
    id: taskList.length + 1,
    taskname: newTaskName,
    taskDescriprion: newTaskDescription,
    taskCompleted: false,
  };

  taskList.push(newTaskItem);
  console.log(
    `La tarea ${newTaskName} ha sido añadida. El nuevo listado de tareas es: `
  );
  console.log(taskList);
  console.log(`Fin del programa`);
};

const deleteTask = (taskList) => {
  console.log("Aquí está el listado actual de tareas: ");
  console.log(taskList);
  const taskToDelete = readline.question(
    `Por favor escribe el ID tarea que quieres borrar: `
  );
  if (taskToDelete <= taskList.length) {
    taskList.splice(taskToDelete - 1, 1);
  }
  console.log(
    `La tarea ha sido borrada con éxito, este es tu nuevo listado de tareas:`
  );
  console.log(taskList);
};

const completeTask = (taskList) => {
  const taskToComplete = readline.question(
    `Por favor escribe el ID  de la tarea que deseas marcar como completada: `
  );
  if (taskList[taskToComplete - 1].taskCompleted === false) {
    taskList[taskToComplete - 1].taskCompleted =
      !taskList[taskToComplete - 1].taskCompleted;
    console.log(`La tarea con el ID ${taskToComplete} ha sido completada.`);
  } else {
    console.log(`La tarea con el ID ${taskToComplete} ya ha sido completada.`);
  }

  console.log(`El listado final de tareas es el siguiente: `);
  console.log(taskList);
};

pregunta();
