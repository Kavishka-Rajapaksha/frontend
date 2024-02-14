import React from 'react'
import InputContainer from '../InputContainer/InputContainer';
import classes from './input.module.css'

function Input(
    {lable, type, defaultValue, onChange, onBlur, name, error},
    ref
) {
    const getErrorMessage = () =>{
        if (!error)  return;
        if (error.message) return error.message;
        //defaults
        switch (error.type) {
            case 'required':
                return 'This field is required';
            case'minLength':
                return 'Field is Too Short';
            default:
                return '*';
            
        }
   
       };



  return (
    <InputContainer label={lable}>
        <input
            defaultValue={defaultValue}
            className={classes.input}
            type={type}
            placeholder={lable}
            ref={ref}
            name={name}
            onChange={onChange}
            onBlur={onBlur}   
        />
        {error && <div className={classes.error}>{getErrorMessage()}</div>}
    </InputContainer>
  );
}

export default React.forwardRef(Input);