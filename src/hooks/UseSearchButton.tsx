import { useState } from "react";

function UseSearchButton(){

    const [openSearch, setOpenSearch] = useState(false);
    // Estado booleano para comprobar si se ve o no el Input de busqueda.

     const [searchActive, setSearchActive] = useState<string | null>(null);
    // Estado para almacenar el valor actual de la búsqueda.
    // El tipo <string | null> indica que el valor puede ser un texto o nulo

    function handleToggleSearch() {
    // Función que se activa al pulsar el botón para mostrar u ocultar la interfaz de búsqueda.
        setOpenSearch(!openSearch);
    // Alternamos el valor de 'openSearch'.

    }

    function handleSelectSearch(value: string | null) {
    // Función que se llama cuando se establece el valor de búsqueda.
    // Recibe el 'value' como argumento. Con el realiza la busqueda

    setSearchActive(value);
    //Guardamos el valor que se ha introducido en el estado 'searchActive'.

    setOpenSearch(false);     
    //Cerramos la interfaz de búsqueda después de haber realizado la búsqueda.
    }

    return { 
        openSearch, searchActive, handleToggleSearch, handleSelectSearch
        // Devolvemos las variables de estado 
    };
}
export default UseSearchButton;