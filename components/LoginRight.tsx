import { useState, useCallback } from "react";
import InputField from "./InputField";
const LoginRight = () => {

  const [name, setName] = useState("");
  const [ number, setNumber] = useState("");
  const [ email, setEmail] = useState("");
  const [ password, setPassword] = useState("");
  const [ confirmedPassword, setConfirmedPassword] = useState("");
  const [ variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login')
},[])

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
        {variant==='register' && <InputField 
          label="Username"
          onChange={(event: any) => setName(event.target.value)}
          id="name"
          type="name"
          value={name}
        />}
        {variant === 'register' && <InputField 
          label="Phone"
          onChange={(event: any) => setNumber(event.target.value)}
          id="email"
          type="email"
          value={number}
        />}
        <InputField 
          label="Email"
          onChange={(event: any) => setEmail(event.target.value)}
          id="email"
          type="email"
          value={email}
        />
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
        <button className="bg-blue-600 py-3 text-white rounded-sm w-full mt-6 hover:bg-blue-700 transition ">
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