// import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar=(props)=>{
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn; 

   
    return(
        <div className="pe-6 ps-6 bg-slate-900 py-5 text-white">
            <nav className="flex justify-between items-center">
                <div>
                    <Link to="/" ><label className="font-medium text-[16px] text-slate-400">Kr_<span className="font-bold text-[24px] text-yellow-300 font-[gotham]">SUJAL</span></label></Link>
                </div>
                <div>
                    <ul className="flex gap-5 font-medium">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/">Courses</Link></li>
                    </ul>
                </div>
                <div >
                    { !isLoggedIn && 
                    <Link to="/login">
                        <button className="bg-slate-600 py-2 px-3 rounded-lg me-3 shadow-lg text-slate-300">Log in</button>
                    </Link>
                    }

                    { !isLoggedIn &&
                    <Link to="/signup">
                        <button className="bg-slate-600 py-2 px-3 rounded-lg ms-3 shadow-lg text-slate-300">Sign up</button>
                    </Link>
                    }

                    { isLoggedIn &&
                    <Link to="/">
                        <button className="bg-slate-600 py-2 px-3 rounded-lg me-3 shadow-lg text-slate-300" onClick={()=>{
                            setIsLoggedIn(false)
                            toast("Logged Out")
                        }}>Log out</button>
                    </Link>
                    }

                    { isLoggedIn &&
                    <Link to="/dashboard">
                        <button className="bg-slate-600 py-2 px-3 rounded-lg ms-3 shadow-lg text-slate-300">Dashboard</button>
                    </Link>
                    }
                </div>
            </nav>
        </div>
    )
}
export default Navbar;