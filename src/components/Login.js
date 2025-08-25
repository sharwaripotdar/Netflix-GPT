import React from 'react'
import Header from './Header'
import { useState } from 'react';
const Login = () => {
    const[isSignInForm, setIsSignInForm] = useState(true);
    const toggleSignInForm = ()=>{
        //setIsSignInForm if(true) then setIsSignInForm fale (not of isSignInForm)
        setIsSignInForm(!isSignInForm);
    }
    return (
        <div>
            <Header />
            <div className="absolute">
                <img
                    className=""
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/3e4bd046-85a3-40e1-842d-fa11cec84349/web/IN-en-20250818-TRIFECTA-perspective_4bd1b66d-bbb6-4bc6-ba8f-ecbba53a1278_small.jpg" alt="logo" />
            </div>
            <form className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-85">
            <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In": "Sign Up"}</h1>
            {/* not sign in then show NameField */}
            {!isSignInForm && 
                    <input type="text" placeholder="Full Name" className="p-4 my-4 w-full"/>}
                <input type="text" placeholder="Email Address" className="p-4 my-4 w-full"/>
                <input type="password" placeholder="Password" className="p-4 my-4 w-full"/>
                <button className="p-4 my-4 bg-red-700 w-full rounded-lg" >{isSignInForm ? "Sign In": "Sign Up"}</button>
                <p className="py-4 cursor-pointer"
                onClick={toggleSignInForm}
                >{isSignInForm  
                    ? "New to Netflis? Sign Up Now "
                    :"Already registerd? Sign In Now"
                 }
                </p>
            </form>
        </div>
    )
}

export default Login
