interface UserData{
    id:string,
    mail:string,
    password:string;
}

function User({ id, mail, password }:UserData){
    return(
        <>
            <p>ID: {id}</p>
            <p>Mail: {mail}</p>
            <p>Password: {password}</p>   
        </>
    );
}
export default User;