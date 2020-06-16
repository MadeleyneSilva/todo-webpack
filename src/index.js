// importar módulos

import './styles.css';

import {Todo, TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

// agregando los elementos del local storage al html
todoList.todos.forEach( todo => crearTodoHtml(todo));
// lo mismo siempre y cuando sea un solo argumento
// todoList.todos.forEach( crearTodoHtml());