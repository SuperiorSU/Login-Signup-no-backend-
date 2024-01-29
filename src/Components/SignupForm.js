import React, { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { Link } from "react-router-dom";

const SignupForm =({setIsLoggedIn})=>{
    const [formData, setFormData] = useState({firstname:"", lastname:"", email:"", password:"",confirmPassword:""});

    function changeHandler(event){
        setFormData((prevData)=>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }
    const [accountType, setAccountType] = useState("student")
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    return(
        <div className="backdrop-blur-lg bg-slate-700 shadow-lg w-[max-content] m-10 rounded-lg p-6">
            <div className="bg-slate-800 rounded-full p-2 mb-4 flex justify-around gap-2 text-slate-200 w-[75%] m-auto transition-all duration-[0.6s]">
                {/* user-expert */}
                <button onClick={()=>{
                    setAccountType("student")
                }} className={`${accountType==="student"?"rounded-full p-3 bg-slate-900 w-[50%] shadow-lg":"bg-slate-800 w-[50%]"}`} >User</button>
                <button onClick={()=>{
                    setAccountType("expert")
                }} className={`${accountType==="expert"?"rounded-full p-3 bg-slate-900 w-[50%] shadow-lg":"bg-slate-800 w-[50%]"}`}>Expert</button>
            </div>
            <br/>
            <form>
                <div className="flex gap-3 text-slate-300">
                    <div>    
                        <p className="text-start"><label htmlFor="firstname">First Name</label><sup>●</sup></p>
                        
                        <input required type="text" id="firstname" 
                        placeholder="Sujal"
                        name="firstname"
                        onChange={changeHandler}
                        value={formData.firstname}
                        className="bg-slate-800 px-2 py-3 rounded-md w-[210px] border-b-2 border-slate-500" />
                    </div>
                    <div>
                        <p className="text-start"><label htmlFor="firstname">Last Name</label><sup>●</sup></p>
                        <input required type="text" id="lastname" 
                        placeholder="Sinha"
                        name="lastname"
                        onChange={changeHandler}
                        value={formData.lastname}
                        className="bg-slate-800 px-2 py-3 rounded-md w-[210px] border-b-2 border-slate-500" />
                    </div>
                </div>
                <br/>
                <div>
                        <p className="text-start text-slate-300"><label htmlFor="email">Email Address</label><sup>●</sup></p>
                        <input required type="email" id="email" 
                        placeholder="abc@gmail.com"
                        name="email"
                        onChange={changeHandler}
                        value={formData.email}
                        className="bg-slate-800 px-2 py-3 rounded-md w-[100%] border-b-2 border-slate-500" />
                    </div>
                    <br/>
                    <div className="flex gap-3 text-slate-300">
                        
                    <div>    
                        <p className="text-start"><label htmlFor="password">Create Password</label><sup>●</sup></p>
                        
                        <input required type={showPassword?"text":"password"} id="password" 
                        name="password"
                        placeholder="Enter Password"
                        onChange={changeHandler}
                        value={formData.password}
                        className="bg-slate-800 px-2 py-3 rounded-md w-[210px] border-b-2 border-slate-500" />
                        <div className="absolute mt-[-35px] ms-[183px]">
                    <p className="inline-block" onClick={()=>{
                        setShowPassword((prevData)=>!prevData)
                    }}>
                        {
                            showPassword?( <FaEyeSlash />):(<FaEye />)
                        }
                    </p>
                </div>
                    </div>
                    <div>
                    <p className="text-start"><label htmlFor="confirmPassword">Confirm Password</label><sup>●</sup></p>
                        
                        <input required type={showConfirmPassword?"text":"password"}
                        placeholder="Enter Password"
                        id="confirmPassword" 
                        name="confirmPassword"
                        onChange={changeHandler}
                        value={formData.confirmPassword}
                        className="bg-slate-800 px-2 py-3 rounded-md w-[210px] border-b-2 border-slate-500" />
                        <div className="absolute mt-[-35px] ms-[183px]">
                    <p className="inline-block" onClick={()=>{
                        setShowConfirmPassword((prevData)=>!prevData)
                    }}>
                        {
                            showConfirmPassword?( <FaEyeSlash />):(<FaEye />)
                        }
                    </p>
                </div>
                    </div>
                </div>
                <br/><br/>
                <button className="text-slate-800 bg-yellow-400 border-b-2 order-yellow-200 px-2 py-2 rounded-md w-[100%] font-medium">Create Account</button>
            </form>
        </div>
    )
}

export default SignupForm;