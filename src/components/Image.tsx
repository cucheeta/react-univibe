interface ImageData{
    src:string,
    alt:string,
    className:string
}
function Image({src, alt,className}:ImageData){
    
    return <img src={src} alt={alt} className={className}></img>; 

}

export default Image;