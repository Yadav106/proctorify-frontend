import { useState, useCallback } from "react";
import InputField from "./InputField";
import { BsChevronDown } from "react-icons/bs";

import {signIn} from "next-auth/react"

const LoginRight = () => {

  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [ number, setNumber] = useState("");
  const [ email, setEmail] = useState("");
  const [ password, setPassword] = useState("");
  const [ confirmedPassword, setConfirmedPassword] = useState("");
  const [ variant, setVariant] = useState("login");
  const [showCodes, setShowCodes ] = useState(false);
 
  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login')
  },[])

  const codes = ['+91','+27','+34','+94', '+30', '+31']

  const login = useCallback(async () => {
    try {
        await signIn('credentials', {
            email, 
            password,
            callbackUrl: '/dashboard'
        })
    } catch (error) {
        console.log(error)
    }
}, [email, password])

  const validatePassword = (password: string) => {
    // Define regex patterns for each requirement
    const patterns = {
        capital: /[A-Z]/,
        number: /[0-9]/,
        special: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/,
        minLength: /.{8,}/,
    };

    // Check if all patterns are satisfied
    const isValidPassword = Object.values(patterns).every(pattern =>
        pattern.test(password)
    );

    return isValidPassword;
};

  const validateEmail = (email: string) => {
    // Define regex pattern for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const register = () =>{
    if(!validateEmail(email)){
      alert("enter valid email")
    }
    if(!validatePassword(password)){
      alert("password should contain at least one Capital letter, at least one Small letter, at least one special character and at least one number ")
    }
    if(password !== confirmedPassword){
      alert("password not matching")
    }
  }

  const handleCode = (e: any) => {
    const value = (e.target as HTMLInputElement).value
    setCode(value)
    console.log(value)
  }

  return(
    <div className="w-1/2 h-screen bg-white flex flex-col justify-center items-center text-black relative">
      <div className="flex flex-col items-left absolute top-3 right-3 justify-center">
        <span className="font-bold text-2xl text-blue-600">ProctoriFy</span>
        <span>Secure Meetings</span>
      </div>
      <div className="flex flex-col gap-3 ">
        <span className="text-3xl mb-6 font-bold">
          {variant === 'login' ? 'Log in' : 'Register'}
        </span>
        <InputField 
          label="Username"
          onChange={(event: any) => setName(event.target.value)}
          id="name"
          type="name"
          value={name}
        />
        {variant === 'register' && <div className="flex flex-col relative">
          <div className="flex relative">
            <div className="block px-2 h-12 w-[60px] mr-2 p-2 rounded-sm text-md border-2 border-gray-400 appearance-none outline-border-gray-700 focus:ring-0" >{code}</div>          
              <BsChevronDown onClick={()=>setShowCodes(code=>!code)} className={`${showCodes && "rotate-[360deg]"} z-1 absolute left-10 top-5 text-gray-400 text-sm`} />
              <InputField 
                label="Phone"
                onChange={(event: any) => setNumber(event.target.value)}
                id="phone"
                type="phone"
                value={number}
              />
            </div>
            {showCodes && (
              <div className="w-12 absolute pl-2 top-14 h-30 text-white z-9 bg-blue-400 ">
                {codes.map((code, index)=>(
                  <div key={index} onClick={handleCode} className="text-white mb-2 ">{code}</div>
                ))}
              </div>
            )}
          </div>}
          {variant==='register' && <InputField 
          label="Email"
          onChange={(event: any) => setEmail(event.target.value)}
          id="email"
          type="email"
          value={email}
        />}
        <InputField 
          label="Password"
          onChange={(event: any) => setPassword(event.target.value)}
          id="password"
          type="password"
          value={password}
        />
        {variant ==='register' && <InputField 
          label="Confirm Password"
          onChange={(event: any) => setConfirmedPassword(event.target.value)}
          id="password"
          type="password"
          value={confirmedPassword}
        />}
        {/* <button onClick={variant === 'login' ? login : register} className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition "> */}
        <button onClick={variant === 'login' ? login : register} className="bg-blue-600 py-3 text-white rounded-sm w-full mt-6 hover:bg-blue-700 transition ">
          {variant === 'login' ? "Login" : "Sign Up"}
        </button>
        <p className="text-neutral-500 mt-6 ">
          {variant==='login' ? 'First time here?': 'Already have an account'}
          <span onClick={toggleVariant} className="text-blue-500 ml-1 hover:underline cursor-pointer" >
              {variant==='login' ? 'Create an account': 'Log In'}
          </span>
        </p>
      </div>
    </div>
  )
}

export default LoginRight;