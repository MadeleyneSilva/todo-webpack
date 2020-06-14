import '../CSS/componentes.css';

export const saludar = ( nombre) => {
         
    console.log('Creando etiqueta h1, en el html');
    
    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${nombre}, cómo estás?`;
 
    document.body.append(h1);
          
 }