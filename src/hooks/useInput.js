import React from 'react'
import { useState } from 'react';
const useInput = (defaultValue , validationFn) => {
    const [enteredValue,setEnteredValue]=useState(defaultValue);
    
    const [didEdit , setEdit]=useState(false);

    function handleInputChange(event){
        setEnteredValue(event.target.value);
        setEdit(false);
    }

    const valueIsvalid=validationFn(enteredValue);

    function handleInputBlur(){
        setEdit(true);
    }

    return {
        value:enteredValue,
        handleInputChange,
        handleInputBlur,
        hasError : didEdit && !valueIsvalid,
    };
}
    


export default useInput