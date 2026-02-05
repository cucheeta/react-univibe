import Facebook from "../assets/facebook.png";
import Google from "../assets/google.png";
import Apple from "../assets/apple.png";
import Image from "../components/Image";

const googleIcon = {
        src:Google,
        alt:"Google Icon",
        className:"w-10 bg-white rounded-xl p-1 m-2"
    }

    const facebookIcon ={
        src:Facebook,
        alt:"Facebook Icon",
        className:"w-10 bg-white rounded-xl p-1 m-2"
    }

    const appleIcon = {
        src:Apple,
        alt:"Apple Icon",
        className:"w-10 bg-white rounded-xl p-1 m-2"
    }

function DivLoginPlatforms(){
    return(
        <>
            <div className="w-50 flex justify-between items-center">
                <Image {...googleIcon}/>
                <Image {...facebookIcon}/>
                <Image {...appleIcon}/>
            </div>
        </>
    )
}
export default DivLoginPlatforms;