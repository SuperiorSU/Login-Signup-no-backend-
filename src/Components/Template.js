import React from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
const Template=({title, desc1, desc2, image, formtype, setIsLoggedIn})=>{
    return(
        <div className="flex flex-wrap-reverse justify-center items-center">
            <div className="text-start mt-5 ms-10 text-white">
                <h1 className="font-semibold text-[32px]">{title} __________</h1>
                <span className="text-[18px] text-slate-400">{desc1}</span> <br/>
                <span className="text-blue-500 font-light">{desc2}</span>
                {
                    formtype==="signup"?<SignupForm setIsLoggedIn={setIsLoggedIn}/>:<LoginForm setIsLoggedIn={setIsLoggedIn}/>
                }
                <div className="flex justify-center items-center gap-2 mt-4 mb-4">
                    <div className="bg-slate-500 w-[30%] h-[1px]"></div>
                    <p className="text-center text-slate-400">OR</p>
                    <div  className="bg-slate-500 w-[30%] h-[1px]"></div>
                </div>
                
                <button className="bg-black p-3 text-white rounded-lg w-[100%] border-b-4 border-white/25">Sign in with Google</button>
            </div>
            <div className="mt-5 w-[60%] text-center m-auto rounded-lg">
                <img src={image} className="rounded-lg w-[100%]" alt="lol"/>
            </div>
        </div>
        
    )
}

export default Template;