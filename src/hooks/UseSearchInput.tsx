import { useState } from "react";

function UseSearchButton(cards: any[]) {
// Definimos un Custom Hook que recibe un array de 'cards' 

    const [search, setSearch] = useState("");
    // Creamos un estado para almacenar el texto introducido

    const [filteredCards, setFilteredCards] = useState(cards);
    // Creamos un estado para almacenar el array de tarjetas

    function handleSearch(value: string) {
    // Esta función gestiona la lógica de filtrado en tiempo real, cambia con cada palabra

    const v = value.trim();
    // Limpiamos el valor de entrada

    if (v === "") {
    // Comprobamos si el valor limpio 'v' está vacío y mostramos todas las cartas sin filtro
        setFilteredCards(cards);
        return;
    }

    const result = cards.filter(card => card.title.toLowerCase().includes(v.toLowerCase()));
    // Si el valor no está vacío, usamos el método 'filter' sobre el array original 'cards'.
   
    setFilteredCards(result);
    // Actualizamos el estado de 'filteredCards' con el array 'result'
    }

    return { search, setSearch, filteredCards, handleSearch };
    // El hook devuelve un objeto con todas las variables 
}
export default UseSearchButton;

