
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
        
    }

    // Método para marcar cuando un TO DO está completado
    marcarCompletado( id ){

    }

    //Método para eliminar todos los TO DO que estén marcados con true
    eliminarCompletados(){

    }
}