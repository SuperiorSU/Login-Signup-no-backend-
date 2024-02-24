import React, { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginForm=({setIsLoggedIn})=>{
    const [formData, setFormData] = useState({email:"", password:""});
    const navigate = useNavigate();

    function changeHandler(event){
        setFormData((prevData)=>(
            {
                ...prevData,
                [event.target.name]:event.target.value
        }
        ))
    }
    // show password-->

    const [showPassword, setShowPassword] = useState(false);
    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true)
        toast("Login Successful");
        navigate("/dashboard")
        
        
    }

    return(
        <div className="backdrop-blur-lg bg-slate-700 shadow-lg w-[360px] mt-3 rounded-lg">
            <form onSubmit={submitHandler} className="text-slate-300 p-5 text-start pt-8 pb-8">
                <p><label htmlFor="email">Email Address</label><sup>●</sup></p>
                <input required type="email" id="email" value={formData.email} 
                onChange={changeHandler}
                placeholder="Enter email id..."
                name="email"
                className="bg-slate-800 px-2 py-3 rounded-md w-[320px] border-b-2 border-slate-500" />

                <br/>
                <br/>

                <p className="text-slate-300 text-start"><label htmlFor="password">Password</label><sup>●</sup></p>

                <input className="bg-slate-800 px-2 py-3 rounded-md w-[320px] border-b-2 border-slate-500" required id="password" type={showPassword? ("text"): ("password")} 
                name="password"
                value={formData.password} 
                onChange={changeHandler}
                placeholder="Enter password..."
                 />

                <div className="absolute mt-[-32px] ms-[290px]">
                    <p className="inline-block" onClick={()=>{
                        setShowPassword((prevData)=>!prevData)
                    }}>
                        {
                            showPassword?( <FaEyeSlash />):(<FaEye />)
                        }
                    </p>
                </div>
                <p className="text-end"><Link to="#" >Forgot Password</Link></p>
                <br/>
                <button className="text-slate-800 bg-yellow-400 border-b-2 order-yellow-200 px-2 py-2 rounded-md w-[100%] font-medium" onClick={submitHandler}>Log In</button>
            </form>

        </div>
    )
}

export default LoginForm;