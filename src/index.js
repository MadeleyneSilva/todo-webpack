// importar módulos

import './styles.css';

import {Todo, TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

const tarea = new Todo( 'Aprender Javascript' );

tarea.completado = true;

todoList.nuevoTodo( tarea);

console.log(todoList);

crearTodoHtml( tarea );