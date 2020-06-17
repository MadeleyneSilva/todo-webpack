export class Todo {

    static fromJson ({id, tarea, completado, creado}){ // desestructuración de argumentos del objeto

        // creando la instancia para recuperar los métodos de la clase
        // (Los métodos no son almacenados en el localStorage)
        const tempTodo = new Todo( tarea ); // nueva instancia
        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.creado = creado;

        return tempTodo; // regresando las instancia
    }

    constructor(tarea){

        this.tarea = tarea;
        this.id = new Date().getTime();
        this.completado = false;
        this.creado = new Date();
    }

    imprimirClase (){

        console.log(`${this.tarea} - ${this.id}`);
        
    }



}