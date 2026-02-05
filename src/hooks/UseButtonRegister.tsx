import { useState } from "react";

interface User {
    name: string;
    mail: string;
    password: string;
}
//Definimos el user

function UseButtonRegister(){

    const [name, setName] = useState(""); 
    // Estado para guardar el valor introducido en el campo 'nombre'.

    const [mail, setMail] = useState("");
    // Estado para guardar el valor introducido en el campo 'correo electrónico'.

    const [password, setPassword] = useState("");
    // Estado para guardar el valor introducido en el campo 'contraseña'.

    const[user, setUser]=useState<Array<User>>([]);
    // Estado para almacenar el array de todos los usuarios registrados del tipo User.


    function handleRegister() {
    
        const newUser:User = {
        // Creamos un nuevo objeto 'newUser' de tipo 'User'.
            name,
            mail,
            password
        };
        setUser([...user, newUser]);
        // Actualizamos el array de usuarios

        //Te dejo un console.log, por si quieres ver el array al dar de alta un usuario
        console.log("Dado de alta: ",[...user,newUser]);
    }

    return { name, setName, mail, setMail, password, setPassword, handleRegister};
// Devolvemos el objeto con todos los estados

}
export default UseButtonRegister;
