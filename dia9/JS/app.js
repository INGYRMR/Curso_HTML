// Selección de elementos d

let mensaje = document.getElementById("mensaje");   // Elemento a modificar
let btnCambiar = document.getElementById("btnCambiar"); // Botón para cambiar el texto
let nombreInput = document.getElementById("nombre"); // Input para el nombre
let btnSaludar = document.getElementById("btnSaludar"); // Botón para saludar
let saludo = document.getElementById("saludo"); // Elemento para mostrar el saludo

// Eventos 

btnCambiar.addEventListener("click", function() { // Evento para cambiar el texto

    // function: Función sin nombre que se ejecuta al ocurrir el evento
    // addEventListener: Permite escuchar eventos en un elemento
    // ClicK: Permite añadir una acción al hacer clic en el botón
    mensaje.textContent = "¡El texto ha sido cambiado!";  // Cambia el texto del elemento mensaje

}); // Fin del evento para cambiar el texto

// Evento con estructura de control 

btnSaludar.addEventListener("click", function() { // Evento para saludar al usuario

    let nombre = nombreInput.value; // Obtiene el valor del input

    // Estructura de control: if-else para verificar si el nombre está vacío
    // if: Si la condición es verdadera, ejecuta el bloque de código
    // else: Si la condición es falsa, ejecuta el otro bloque de código
    // textContent: Propiedad que permite modificar el contenido de texto de un elemento
    // value: Propiedad que obtiene el valor de un input
    // === : Operador de comparación estricta (igualdad)
    // addEventListener: Permite escuchar eventos en un elemento
    // click: Permite añadir una acción al hacer clic en el botón

    if (nombre === "") { // Verifica si el nombre está vacío

        saludo.textContent = "Por favor, ingresa tu nombre."; // Mensaje si el nombre está vacío

    }else{ // Si el nombre no está vacío

        saludo.textContent = " Hola " + nombre +  " , ¡bienvenido/a!"; // Mensaje de saludo personalizado

    }

}); // Fin del evento para saludar al usuario

    



    