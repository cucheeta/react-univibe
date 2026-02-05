import { useState } from "react";
import Button from "../components/Button";
import Separator from "../components/Separator";
import Text from "../components/Text";
import { FaPlusCircle } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { BiTask } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import UseButtonFilter from "../hooks/UseButtonFilter";
import { IoSearchSharp } from "react-icons/io5";
import Input from "../components/Input";
import UseSearchInput from "../hooks/UseSearchInput";
import UseSearchButton from "../hooks/UseSearchButton";
import UseFilters from "../hooks/UseFilters";
import Card from "./Card";

// Tipo extendido para las tarjetas con los campos adicionales
interface TaskCard {
    id: number;
    title: string;
    description: string;
    subtitle: string;
    date: string;
    color: string;
}

function DivCardList(){

    const [sortBy, setSortBy] = useState<"importance" | "date" | "type" | null>(null);
    // Estado que guarda el tipo de orden actual

    const { open, handleToggleFilter } = UseButtonFilter();
    // Hook que controla si el menú de filtros está abierto o cerrado

    const { openSearch, handleToggleSearch } = UseSearchButton();
    // Hook que controla si el buscador en móvil está abierto

    //Declaracion de constantes 
    const titleText = {
        text: "Tareas",
        className: "principal mt-8 text-white text-3xl"
    };

    const homeText = {
        text: "Inicio",
        className: "principal mt-8 mx-4 text-white p-2 text-2xl"
    };

    const calendarText = {
        text: "Calendario",
        className: "principal mt-8 mr-4 text-white p-2 text-2xl"
    };

    const taskText = {
        text: "Tareas",
        className: "principal mt-8 mr-4 text-white text-2xl bg-[#D87A2F] p-2 rounded-xl"
    };

    const filterButton = {
        text: "Filtros",
        onClick: handleToggleFilter,
        className: "principal bg-[#D87A2F] w-[120px] px-4 py-2 rounded-xl text-[#0B1320]"
    };

    const dateButton = {
        text: "Fecha",
        onClick: () => { setSortBy("date"); },
        className: "titulos bg-[#A6B1E1] px-4 w-full py-2 rounded-xl"
    };

    const importanceButton = {
        text: "Importancia",
        onClick: () => { setSortBy("importance"); },
        className: "titulos bg-[#A6B1E1] px-4 py-2 w-full rounded-xl"
    };

    const typeButton = {
        text: "Tipo",
        onClick: () => { setSortBy("type"); },
        className: "titulos bg-[#A6B1E1] px-4 py-2 w-full rounded-xl"
    };

    const searchButton = {
        text:"Buscar",
        onClick: handleToggleSearch,
        className:"titulos bg-[#A6B1E1] px-4 py-2 w-full rounded-xl"
    };

    const cards: TaskCard[] = [
        {
            id: 1,
            title: "Diseño figma",
            subtitle: "Desarrollo de interfaces",
            description: "Realización de diseño figma sobre el proyecto de Desarrollo de Interfaces",
            date: "23-11-2025",
            color: "#FF3B30"
        },
        {
            id: 2,
            title: "DDBBOOR",
            subtitle: "Acceso a Datos",
            description: "Realización de ejercicios usando bases de datos orientadas a objetos.",
            date: "30-11-2025",
            color: "#F5C542"
        },
        {
            id: 3,
            title: "Entrega React",
            subtitle: "Desarrollo de interfaces",
            description: "Diseño en React con Tailwind.",
            date: "05-12-2025",
            color: "#34C759"
        },
        {
            id: 4,
            title: "Prueba unitaria",
            subtitle: "Programación",
            description: "Creación de tests unitarios con Jest para comprobar el funcionamiento del código.",
            date: "08-09-2025",
            color: "#FF3B30"
        },
        {
            id: 5,
            title: "Modelo relacional",
            subtitle: "Bases de Datos",
            description: "Normalización y diseño de un modelo de datos en tercera forma normal.",
            date: "19-08-2025",
            color: "#F5C542"
        },
        {
            id: 6,
            title: "Interfaz dinámica",
            subtitle: "Desarrollo de interfaces",
            description: "Implementación de componentes dinámicos en React usando estados y props.",
            date: "15-12-2025",
            color: "#34C759"
        },
        {
            id: 7,
            title: "Seguridad web",
            subtitle: "Entornos de desarrollo",
            description: "Revisión de prácticas seguras en aplicaciones web y análisis de vulnerabilidades.",
            date: "28-07-2025",
            color: "#FF3B30"
        },
        {
            id: 8,
            title: "Docker básico",
            subtitle: "Implantación de sistemas",
            description: "Creación y ejecución de contenedores Docker para servicios independientes.",
            date: "03-11-2025",
            color: "#34C759"
        },
        {
            id: 9,
            title: "Consultas SQL avanzadas",
            subtitle: "Bases de Datos",
            description: "Resolución de consultas complejas usando funciones de agregación y subconsultas.",
            date: "10-10-2025",
            color: "#F5C542"
        },
        {
            id: 10,
            title: "Refactorización de código",
            subtitle: "Programación",
            description: "Mejora del código aplicando principios SOLID y eliminando redundancias.",
            date: "25-09-2025",
            color: "#FF3B30"
        },
        {
            id: 11,
            title: "Animaciones con CSS",
            subtitle: "Lenguajes de marcas",
            description: "Creación de animaciones y transiciones para mejorar la interfaz.",
            date: "05-08-2025",
            color: "#34C759"
        },
        {
            id: 12,
            title: "Autenticación JWT",
            subtitle: "Programación",
            description: "Implementación de registro y login seguro mediante JSON Web Tokens.",
            date: "02-12-2025",
            color: "#F5C542"
        }
    ];
    // Array con todas las tarjetas que se van a mostrar

    const { search, setSearch, filteredCards, handleSearch } = UseSearchInput(cards);
    // Hook que gestiona la búsqueda y devuelve las tarjetas filtradas

    const searchInput = {
        placeholder: "Buscar...",
        type: "text",
        value: search,
        className: "bg-white text-[#8E8E93] mx-3 border border-white rounded-xl px-3 py-2 w-full",
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
            setSearch(e.target.value); // guardamos lo que escribe el usuario
            handleSearch(e.target.value); // filtramos las tarjetas
        }
    };

    const { sortCards } = UseFilters();
    // Hook encargado de aplicar la ordenación

    const sortedCards = sortCards(filteredCards, sortBy);
    // Obtenemos las tarjetas filtradas y ordenadas


    return(
        <>
            <div className="place-items-center pb-24 relative">
                <Text {...titleText} />
                <Separator />
                <div className="md:w-[700px] w-70 flex justify-between items-center relative">
                    <FaPlusCircle className="text-[#BF691F] text-5xl" />
                    <div className="hidden md:flex w-full">
                        {/* Buscador visible en escritorio */}
                        <IoSearchSharp className="text-white ml-3 text-5xl"/>
                        <Input {...searchInput}/>
                    </div>
                    <div className="relative">
                        {/* Botón filtros */}
                        <Button {...filterButton} />
                        {open && (
                            // Si el menú de filtros está abierto lo mostramos
                            <div className="absolute top-full left-1/2 -translate-x-1/2
                             mt-2 z-50 flex flex-col items-center space-y-2">
                                <Button {...dateButton} />
                                <Button {...importanceButton} />
                                <Button {...typeButton} />

                                <div className="lg:hidden w-full">
                                    {/* Buscador en móvil */}
                                    <Button {...searchButton}/>
                                    {openSearch && (
                                        <div className="border-solid border-black">
                                            <Input {...searchInput} />
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Menú inferior para móvil */}
                <div className="xl:hidden fixed bottom-0 left-0 w-full bg-[#0B1320] shadow-md
                 border-t border-[#8E8E93] flex justify-around p-3 ">
                    <IoHome className="text-white text-4xl" />
                    <FaBell className="text-white text-4xl" />
                    <BiTask className="text-white bg-[#D87A2F] rounded text-4xl" />
                    <FaUser className="text-white text-4xl" />
                    <IoLocationSharp className="text-white text-4xl" />
                </div>

                {/* Menú superior para escritorio */}
                <div className="hidden xl:block bg-[#0B1320]">
                    <div className="flex fixed top-0 left-0">
                        <Text {...homeText} />
                        <Text {...calendarText} />
                        <Text {...taskText} />
                    </div>

                    <div className="flex fixed top-0 right-0">
                        <FaBell className="text-white text-4xl mt-10 mr-4" />
                        <IoLocationSharp className="text-white text-4xl mt-10 mr-4" />
                        <FaUser className="text-white text-4xl mt-10 mr-8" />
                    </div>
                </div>

                {/* Grid de tarjetas responsivo */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 px-4">
                    {sortedCards.map((card) => (
                        <Card
                            key={card.id}
                            title={card.title}
                            subtitle={card.subtitle}
                            description={card.description}
                            date={card.date}
                            color={card.color}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}
export default DivCardList;

