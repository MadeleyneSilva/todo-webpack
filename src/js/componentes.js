import "../CSS/componentes.css";
import {Todo} from "../classes"; 
import {todoList} from "../index";

//Referencias en el HTML
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');

export const crearTodoHtml = (todo) => {
  const htmlTodo = `
   <li class="${ (todo.completado) ? 'completed' : '' }" data-id="${todo.id}">
		<div class="view">
			<input class="toggle" type="checkbox" ${(todo.completado) ? 'checked' : ''}>
			<label>${ todo.tarea }</label>
			<button class="destroy"></button>
		</div>
		<input class="edit" value="Create a TodoMVC template">
	</li>`;

   // Creando elemento HTML

   const div = document.createElement('div');
   div.innerHTML = htmlTodo;

   // Insertando el primer elemento
   divTodoList.append(div.firstElementChild);
   return div.firstElementChild;

};


// Eventos

txtInput.addEventListener( 'keyup', (event) => {

   const vacio = '';
   //console.log(event);
   if ( txtInput.value != vacio ){

      if( event.keyCode === 13){

         //console.log(txtInput.value);
         
         const nuevoTodo = new Todo( txtInput.value );
         todoList.nuevoTodo( nuevoTodo);
         //console.log(todoList);
         
         crearTodoHtml( nuevoTodo );
         txtInput.value = vacio;
   
      }

   }
   
   
   
});


divTodoList.addEventListener('click', ( event ) => {

   // console.log('click');
   const nombreElemento = ( event.target.localName ); //Input, label, button
   const todoElemento = event.target.parentElement.parentElement;
   const todoId = todoElemento.getAttribute('data-id');
   

   // console.log(todoElemento);
   // console.log(todoId);
   
   if (  nombreElemento.includes('input') ){ // click en el check 
      todoList.marcarCompletado( todoId );
      todoElemento.classList.toggle('completed');

  } else if( nombreElemento.includes('button') ) { // hay que borrar el todo

      todoList.eliminarTodo( todoId );
      divTodoList.removeChild( todoElemento );

  } 

   //console.log(todoList);
    
   
}) ; 


btnBorrar.addEventListener('click', () => {

   todoList.eliminarCompletados();

   for (let i = divTodoList.children.length - 1; i >=0 ;i--){

      const elemento = divTodoList.children[i];
      console.log(elemento);

      if ( elemento.classList.contains('completed')){
         divTodoList.removeChild(elemento);
      }
      

   }

});


