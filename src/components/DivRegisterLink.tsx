import Text from "../components/Text";
import { Link } from "react-router-dom";

const registerText = {
        text:"¿No tienes cuenta? Registrate",
        className:"titulos mb-8 mt-2 mr-0.75 text-white"
}

function DivRegisterLink(){
    return(
        <>
            <div className="flex">
                {/* Linkeamos a la pagina register */}
                <Text {...registerText}/>
                <Link className="titulo mb-8 mt-2 mr-0.75 text-[#0074E4]" to="/register">ahora</Link>
            </div>
        </>
    ) 
}
export default DivRegisterLink;