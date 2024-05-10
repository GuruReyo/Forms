// import { useRef } from "react";

// export default function Login() {

//     const [enteredValues,setEnteredValues]=useState({
//       email:'',
//       password:''
//     });
//   function handleSubmit(event){
//     event.preventDefault();
//     console.log(enteredValues);
//     // setEnteredValues({
//     //   email: '',
//     //   password : ''
//     // })
//   }

//   const emailInvalid = 
//   function handleInputChange(identifier,value){
//     setEnteredValues(prevValues =>({
//       ...prevValues,
//       [identifier]:value
//     }))
//   }

//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Login</h2>

//       <div className="control-row">
//         <div className="control no-margin">
//           <label htmlFor="email">Email</label>
//           <input 
//             id="email" 
//             type="email" 
//             name="email" 
//             ref={email}
//           />
//         </div>

//         <div className="control no-margin">
//           <label htmlFor="password">Password</label>
//           <input 
//             id="password" 
//             type="password" 
//             name="password" 
//             ref={password} 
//           />
//         </div>
//       </div>

//       <p className="form-actions">
//         <button className="button button-flat" >Reset</button>
//         <button  className="button" onClick={handleSubmit} >Login</button>
//       </p>
//     </form>
//   );
// }

import { isEmail,isNotEmpty,hasMinLength } from "../util/validation";
import { useState } from "react";
import Input from "./Input";
import useInput from "../hooks/useInput";
// import { isHtmlElement } from "react-router-dom/dist/dom";

export default function StateLogin() {
  //For Email
  const {
    value:emailValue ,
    handleInputChange:handleEmailChange,
    handleInputBlur:handleEmailBlur,
    hasError : emailHasError,
  }= useInput('',(value)=> isEmail(value) && isNotEmpty(value));
  //For password
  const {
    value:passwordValue ,
    handleInputChange:handlePaswordChange,
    handleInputBlur:handlePasswordBlur,
    hasError : passwordHasError,
  }= useInput('',(value)=> hasMinLength(value,6));

  // const [enteredEmail,setEnteredEmail]=useState('');
  // const [enteredPassword,setEnteredPassword]=useState('');
  // const emailInvalid = didEdit.email && 
  // !isEmail(enteredValues.email) && 
  // // !isNotEmpty(enteredValues.email);
  // const passwordIsInvalid=
  //   didEdit.password && hasMinLength(enteredValues.password , 6);
  // const [enteredValues,setEnteredValues]=useState({
  //   email:'',
  //   password:''
  // });

  // const [didEdit , setEdit]=useState({
  //   email : false,
  //   password : false
  // });
  
  // enteredValues.email !== '' && !enteredValues.email.includes('@');

  function handleSubmit(event){
    event.preventDefault();
    if(emailHasError || passwordHasError){
      return ;
    }
    console.log(enteredValues);
  }

  // function handleEmailChange(event){
  //   setEnteredEmail(event.target.value);
  //   console.log(enteredEmail);
  // }

  // function handlePasswordChange(event){
  //   setEnteredPassword(event.target.value);
  // }
  // const emailInvalid = didEdit.email && !enteredValues.email.includes('@');
  
  // const passwordIsInvalid=
  //   didEdit.password && enteredValues.password.trim().length <6 ;
  
  // function handleInputChange(identifier,value){
  //   setEnteredValues(prevValues =>({
  //     ...prevValues,
  //     [identifier]:value
  //   }));
  //   setEdit(prevEdit =>({
  //     ...prevEdit,
  //     [identifier]: false
  //   }))
  // }


  // function handleInputBlur(identifier){
  //   setEdit(prevEdit =>({
  //     ...prevEdit,
  //     [identifier]:true
  //   }));
  // }
  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input 
          label="Email" 
          id="email" 
          name="email" 
          type="email" 
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={emailValue}

          error={emailHasError && 'Please Enter a valid email... '}
        />

        <Input 
            label="Password" 
            id='password' 
            name="password" 
            type="password" 
            onBlur={handlePasswordBlur}
            onChange={handlePaswordChange}
            value={passwordValue}
            error={passwordHasError && 'Please enter a valid password'}
        />

        {/* <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input 
            id="email" 
            type="email" 
            name="email" 
            onBlur={()=>handleInputBlur('email')}
            onChange={(event)=>handleInputChange('email',event.target.value)}
            value={enteredValues.email}
          />
          <div className="control-error">
              {emailInvalid && <p>Please Enter a valid email address.! </p>}
            </div>
        </div> */}

        {/* <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" 
          onBlur={()=>handleInputBlur('password')}
          value={enteredValues.password} onChange={(event)=>
            handleInputChange('password',event.target.value)}/>
        </div> */}
      </div>

      <p className="form-actions">
        <button className="button button-flat" >Reset</button>
        <button  className="button" onClick={handleSubmit} >Login</button>
      </p>
    </form>
  );
}
