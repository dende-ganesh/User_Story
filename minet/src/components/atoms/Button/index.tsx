import { Button } from '@mui/material';
import React, {   ReactElement, } from 'react'
interface ButtonProps{
    variant:"text"|"outlined"|"contained",
    startIcon?:ReactElement,
    endIcon?:ReactElement,
    text:string,
    handleClick:()=>void;
}
const Buttons = (props:ButtonProps) => {
    const {text,variant,startIcon,endIcon,handleClick}=props;
  return (
    <Button  variant={variant} startIcon={startIcon} endIcon={endIcon} onClick={handleClick}>{text}</Button>
  )
}

export default Buttons;
