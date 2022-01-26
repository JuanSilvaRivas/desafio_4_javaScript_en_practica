//llamamos primero a nuestro formulario y lo guardamos en una variable


//declaramos las constantes con su respectiva funcion
const nombre = document.querySelector(".errorNombre");
const asunto = document.querySelector(".errorAsunto");
const email = document.querySelector(".errorMensaje");
const resultado = document.querySelector(".resultado");

//llamamos al form y le asignaremos un evento
formulario.addEventListener("submit", (e) =>{
    e.preventDefault();
    //reset
    errorNombre.innerHTML = "";

    const regExpLetras = /[a-zA-Z]\w+/gi;

})