import { useRef, useState } from "react";

export default function Login() {
  const [emailIsInvalid , setEmailIsInvalid]= useState(false);
    const email=useRef();
    const password=useRef();
  function handleSubmit(event){
    event.preventDefault();
    const enteredEmail = email.current.value;
    const enteredPassword =password.current.value;
    // const enteredEmail = useRef();
    // const enteredPassword =useRef()
    // console.log(enteredEmail+","+enteredPassword);

    const emailIsvalid = enteredEmail.includes('@');

    // email.current.value='';
    if(!emailIsvalid){
      setEmailIsInvalid(true);
      return;
    }
    setEmailIsInvalid(false);

    
  }

  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input 
            id="email" 
            type="email" 
            name="email" 
            ref={email}
          />
          <div className="control-error">{emailIsInvalid 
          && <p>Please Enter a Valid Email address.</p>
          }</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input 
            id="password" 
            type="password" 
            name="password" 
            ref={password} 
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat" type='reset'>Reset</button>
        <button  className="button" onClick={handleSubmit} >Login</button>
      </p>
    </form>
  );
}
