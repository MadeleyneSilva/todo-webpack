
export class TodoList {

    constructor (){

        this.todos = [];
    }

    // Método para generar un nuevo TO DO
    nuevoTodo( todo ){

        this.todos.push(todo);
    }

    
    // Método para eliminar un TO DO
    eliminarTodo( id ){
        
        this.todos = this.todos.filter( todo => todo.id != id);

    }

    // Método para marcar cuando un TO DO está completado
    marcarCompletado( id ){

        for( const todo of this.todos){

            if ( todo.id == id){
                todo.completado = !todo.completado;
                break;
            }
        }
    }

    
    //Método para eliminar todos los TO DO que estén marcados con true
    eliminarCompletados(){

        this.todos = this.todos.filter( todo => !todo.completado);
        
    }
}