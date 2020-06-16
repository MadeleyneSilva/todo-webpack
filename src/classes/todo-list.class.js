
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
                break;
            }
        }
    }

    
    //Método para eliminar todos los TO DO que estén marcados con true
    eliminarCompletados(){

        this.todos = this.todos.filter( todo => !todo.completado);
        this.guardarLocalStorage();
        
    }

    guardarLocalStorage(){

        // convirtiendo el objeto a un string
        localStorage.setItem('todo', JSON.stringify(this.todos) );

    }

    cargarLocalStorage() {

        // if( localStorage.getItem('todo')){

        //     // convirtiendo de JSON a objeto o type anterior
        //     this.todos = JSON.parse( localStorage.getItem('todo'));
        //     console.log( this.todos);
            

        // } else {

        //     this.todos = [];

        // }

        // operador ternario
        this.todos = (localStorage.getItem('todo') ? JSON.parse( localStorage.getItem('todo')) : [] );
    }
}