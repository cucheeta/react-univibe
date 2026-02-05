import { useState } from "react";

function UseButtonFilter() {

    const [open, setOpen] = useState(false);
    // Creamos un estado booleano para saber si esta desplegado

    function handleToggleFilter() {
        setOpen(!open);
        // Cambiamos el valor de 'open' al contrario de lo que era 
    }

    return { open, setOpen, handleToggleFilter };
    // El hook devuelve un objeto con todas las variables
}
export default UseButtonFilter;

