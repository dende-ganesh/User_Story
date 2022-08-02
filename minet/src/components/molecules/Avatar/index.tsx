import { Avatar } from '@mui/material'
import React from 'react'
interface AvatarProps{
    imageSrc:string,
}

const Avatars = ({imageSrc}:AvatarProps) => {
  return (
    <Avatar >
      <img src={imageSrc}/>
    </Avatar>
  )
}

export default Avatars
