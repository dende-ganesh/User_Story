import React from 'react'
interface IconProps{
    imageSrc:string,
    alt:string,
}

const Icon = ({imageSrc,alt}:IconProps) => {
  return (
    <img src={imageSrc} alt={alt}/>
  )
}

export default Icon
