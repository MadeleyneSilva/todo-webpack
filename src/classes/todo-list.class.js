import { Todo } from "./todo.class";
import { countTodo } from "../js/componentes";

export class TodoList {

    constructor (){

        //this.todos = [];
        this.cargarLocalStorage();
    }

    // Método para generar un nuevo TO DO
    nuevoTodo( todo ){

        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    
    // Método para eliminar un TO DO
    eliminarTodo( id ){
        
        this.todos = this.todos.filter( todo => todo.id != id);
        this.guardarLocalStorage();
    }

    // Método para marcar cuando un TO DO está completado
    marcarCompletado( id ){

        for( const todo of this.todos){

            if ( todo.id == id){
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                this.countTodo();
                break;
            }
        }
    }

    
    //Método para eliminar todos los TO DO que estén marcados con true
    eliminarCompletados(){

        this.todos = this.todos.filter( todo => !todo.completado);
        this.guardarLocalStorage();
        
    }


    // Método para contar las tareas pendientes
    countTodo(){
        let pendientes = 0;
        let countBox = countTodo.firstElementChild; // llamando al elemento html donde va la cuenta
        for (let todo of this.todos ){
            (!todo.completado === true) ? pendientes++ : null; // pendientes aumenta cada vez que completa = falso
        }
        countBox.innerHTML = pendientes; // agrega el contador al HTML

    }


    guardarLocalStorage(){

        // convirtiendo el objeto a un string
        localStorage.setItem('todo', JSON.stringify(this.todos) );

    }

    cargarLocalStorage() {

        // operador ternario
        this.todos = (localStorage.getItem('todo') ? JSON.parse( localStorage.getItem('todo')) : [] );

        //this.todos = this.todos.map( obj => Todo.fromJson( obj ));
        // Lo mismo

        // generando las instancias de los objetos del arreglo y devuelve el arreglo
        this.todos = this.todos.map( Todo.fromJson);
    }
}