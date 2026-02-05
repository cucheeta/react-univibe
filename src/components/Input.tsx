interface InputData {
    placeholder: string;
    type: string;
    className: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
}

function Input({placeholder, type, className,value, onChange}:InputData){
    return <input type={type} placeholder={placeholder} className={className} value={value} onChange={onChange}></input>
}

export default Input;