import {utilities} from 'utilities.js';
import {ls} from 'ls.js';
import { readFromLS, writeToLS } from './ls.js';
import { qs } from './utilities.js';

todoList = null;

class ToDos {
  constructor(task, status){
    this.task = task;
    this.status = status; 
    this.element = 'li'
  }

  addTodo(){
    task = qs('#newTask').innerHTML;
    saveTodo(task, key);
  }
  

} 

/*
  build a todo object, add it to the todoList, and save the new list to local storage.
  @param  {string} key The key under which the value is stored under in LS
  @param {string} task The text of the task to be saved. 
*/
function saveTodo(task, key) { 
  writeToLS(key, task);
}

/*
  check the contents of todoList, a local variable containing a list of ToDos. If it is null then pull the list of todos from localstorage, update the local variable, and return it
  @param  {string} key The key under which the value is stored under in LS
  @return {array}     The value as an array of objects
*/
function getTodos(key) { 
  readFromLS(key);
}

export default Todos