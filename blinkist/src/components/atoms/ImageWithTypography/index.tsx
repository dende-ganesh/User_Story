import { Typography } from '@mui/material'
import React from 'react'
interface Iprops{
    icon:string;
    text:string;
}
const ImageWithTypography = ({icon,text}:Iprops) => {
  return (
    <div>
        <img src={icon}></img>
      <Typography>{text}</Typography>
    </div>
  )
}

export default ImageWithTypography
