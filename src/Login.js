import { useForm } from "react-hook-form";
import React, { useState } from 'react';


const Login = () => {
    const [user, setUser] = useState();
    const {register, handleSubmit} = useForm();
    const onSubmit = nazwa => setUser(nazwa.Username)

    const validation = (value) => {
            if(value.length <= 8){
                
            return "Hasło za krotkie";
            
        }   
    }

    

    return ( 
    <div className="login">
        {!user && <form onSubmit= {handleSubmit(onSubmit)}>
            <p>Username</p>
            <input{...register("Username", {required: true})} />
            <p>Hasło</p>
            <input type="password" {...register("Password", {validate: validation}, {required: true})} />
            <input type="submit"/>
        </form>}
        <p>Witaj, {user}</p>
    </div>
 
     );
}
 
export default Login;