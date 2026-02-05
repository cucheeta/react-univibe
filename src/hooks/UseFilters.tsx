export default function UseFilters() {

    function sortCards(cards: any[], sortBy: string | null) {
    // La funcion recibe el array de cards y el sortBy para filtrado

        let sorted = [...cards];
        // Creamos una copia del array de entrada usando para evitar manipular el original
        if (sortBy === "importance") {
            //Caso de ordenación por color de Importancia

            const importanceOrder: Record<string, number> = {
            // Definimos un mapa de valores y asignamos un número segun importancia
                "#FF3B30": 1,
                "#F5C542": 2,
                "#34C759": 3,
            };

            sorted.sort((a, b) =>(importanceOrder[a.color] ?? 999) - (importanceOrder[b.color] ?? 999));
            // Usamos el método 'sort' de JavaScript. Ordena el array 'sorted' comparando 'a' y 'b'.
            // Obtenemos el valor numérico del color de la tarjetas. Si no le asignamos un valor fuera de rango
        }

        if (sortBy === "date") {
            // Caso de ordenación por fecha

            const parseDate = (str: string) => {
            // Función para convertir la cadena de fecha (ej: "25-05-2025") a un número.
            // Es necesaria para que JavaScript pueda comparar las fechas correctamente.

            const [d, m, y] = str.split("-").map(Number);
            // Dividimos la cadena por "-" y convertimos día, mes y año a números.

            return new Date(y, m - 1, d).getTime();
            // Creamos un objeto 'Date' (usando m-1 porque los meses en JS van de 0 a 11)
            // y devolvemos su valor en milisegundos ('getTime()') para comparaciones numéricas.
            };

            sorted.sort((a, b) => parseDate(a.date) - parseDate(b.date));
            // Ordenamos el array: si la resta es negativa, 'a' va antes; si es positiva, 'b' va antes.
        }

        if (sortBy === "type") {
        // Caso de ordenación por tipo de tarjeta.

        sorted.sort((a, b) =>(a.subtitle || "").localeCompare(b.subtitle || ""));
        // Usamos 'localeCompare' para una ordenación alfabética
        // Agregamos (|| "") para manejar subtítulos nulos/vacíos sin que fallen.
        }

        return sorted;
        // Devolvemos el array ordenado
    }

    return { sortCards };
    // El hook devuelve el objeto
}