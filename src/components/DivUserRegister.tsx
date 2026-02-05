import { Link } from "react-router-dom";
import Logo from "../assets/UniVibe_logo_4.png";
import Image from "../components/Image";
import Text from "../components/Text";
import Input from "../components/Input";
import Button from "../components/Button";
import TextSeparator from "../components/TextSeparator";
import UseButtonRegister from "../hooks/UseButtonRegister";

    //Declaramos las constantes
    const logoImage =  {
        src:Logo,
        alt:"Logo UniVibe",
        className:""
    }

    const registerText = {
        text:"Register:",
        className:"principal text-white"
    }

    const textSeparator = {
        text:"Pulsa para ir a la pagina de listado"
    }

    const loginText = {
        text:"¿Ya tienes cuenta? Accede al login",
        className:"titulos mb-8 mt-2 mr-0.75 text-white"
    }


function DivUserRegister (){
    
    //Declaramos constantes con funcion
    const { name, setName, mail, setMail, password, setPassword, handleRegister } = UseButtonRegister();

    const userInput = {
        placeholder: "ID o nombre de usuario",
        type:"text",
        className: "titulos bg-white rounded-xl p-2 w-80 m-4 outline-solid text-[#8E8E93] text-center",
        value:name,
        onChange:(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)
        
    }

    const emailInput = {
        placeholder: "Correo electronico",
        type:"text",
        className: "titulos bg-white rounded-xl p-2 w-80 m-4 outline-solid text-[#8E8E93] text-center",
        value:mail,
        onChange:(e: React.ChangeEvent<HTMLInputElement>) => setMail(e.target.value)
    }

    const passwordInput = {
        placeholder:"Contraseña",
        type:"password",
        className:"titulos bg-white rounded-xl p-2 w-80 m-4 outline-solid text-[#8E8E93] text-center",
        value:password,
        onChange:(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)
    }

    const registerButton = {
        text: "Registrarse",
        onClick: handleRegister,
        className: "principal w-75 m-4 p-2 bg-[#D87A2F] text-[#0B1320] rounded-xl hover:bg-[#BF691F] cursor-pointer"
    }

    return(
        <> 
           {/* Ponemos una unica columna para todos los dispositivos */}
            <div className="grid grid-cols-1 place-items-center">
                {/* Declaramos todos los objetos */}
                <Image {...logoImage}/>
                <Text {...registerText}/>
                <Input {...userInput}/>
                <Input {...emailInput}  />
                <Input  {...passwordInput}/>
                <Button {...registerButton}/>
                {/* Linkeamos a la pagina List */}
                <Link to="/list"><TextSeparator {...textSeparator}/></Link>
                <Text {...loginText}/>
            </div>

        </>
    )
}

export default DivUserRegister;