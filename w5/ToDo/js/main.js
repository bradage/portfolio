import {ToDos} from './toDo.js';
const bAddTask = qs('#addTask')


const tasks = new ToDos('brush teeth', 'active');

bAddTask.addEventListener('click', tasks.addTodo());

