import Logo from "../assets/UniVibe_logo_4.png";
import Image from "../components/Image";
import Text from "../components/Text";
import Input from "../components/Input";
import Button from "../components/Button";
import TextSeparator from "../components/TextSeparator";
import UseButtonRegister from "../hooks/UseButtonRegister";
import DivLoginPlatforms from "./DivLoginPlatforms";

//Definimos constantes
const logoImage = {
    src:Logo,
    alt:"Logo UniVibe",
    className:""
}

const loginText = {
    text:"Login:",
    className:"principal text-white"
}

const textSeparator = {
    text:"O inicia usando"
}

function DivUserLogin (){
    //Definimos constantes de hooks dentro del metodo
    const {mail, setMail, password, setPassword, handleRegister } = UseButtonRegister(); 

    const emailInput = {
        placeholder: "Correo electronico o nombre de usuario",
        type:"text",
        className: "titulos bg-white rounded-xl p-2 w-80 m-4 outline-solid text-[#8E8E93] text-center",
        value: mail, // Accede a la variable del hook
        onChange:(e: React.ChangeEvent<HTMLInputElement>) => setMail(e.target.value) // Accede a la función del hook
    }

    const passwordInput = {
        placeholder:"Contraseña",
        type:"password",
        className:"titulos bg-white rounded-xl p-2 w-80 m-4 outline-solid text-[#8E8E93] text-center",
        value: password, // Accede a la variable del hook
        onChange:(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value) // Accede a la función del hook
    }

    const loginButton = {
        text: "Iniciar sesion",
        onClick: handleRegister, // Accede a la función del hook
        className: "principal w-75 m-4 p-2 bg-[#D87A2F] text-[#0B1320] rounded-xl hover:bg-[#BF691F] cursor-pointer"
    }

    return(
        <> 
            {/* Declaramos una unica columna */}
            <div className="grid grid-cols-1 place-items-center">
                {/* Objetos */}
                <Image {...logoImage}/>
                <Text {...loginText}/>
                <Input {...emailInput} />
                <Input  {...passwordInput}/>
                <Button {...loginButton}/>
                <TextSeparator {...textSeparator}/>
                
                <DivLoginPlatforms/>
            </div>
        </>
    )
}

export default DivUserLogin;