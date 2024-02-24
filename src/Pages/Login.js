import React from "react";
import Template from "../Components/Template";

const Login=({setIsLoggedIn})=>{
    
    const img1 = "https://images.unsplash.com/photo-1501884428012-aa321a256730?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMTIzNjQwfHxlbnwwfHx8fHw%3D";
    return(
        <Template
        title="Welcome Back"
        desc1="Build skills for today, tomorrow and beyond"
        desc2="Education to future-proof your Career"
        formtype="login"
        image={img1}
        setIsLoggedIn = {setIsLoggedIn}
        />
    )
}
export default Login;