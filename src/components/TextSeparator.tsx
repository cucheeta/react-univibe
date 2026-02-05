function TextSeparator({text}:{text:string}) {
    return (
    <div className="flex items-center my-4 w-80">
      <div className="flex-grow h-px bg-white "></div>

      <p className="titulos px-4 text-white text-sm">{text}</p>
      
      <div className="flex-grow h-px bg-white"></div>
    </div>
  );
}
export default TextSeparator;