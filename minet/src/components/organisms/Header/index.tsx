import { Grid, Typography } from '@mui/material'
import React from 'react'
import Buttons from '../../atoms/Button'
import Avatars from '../../molecules/Avatar'
interface HeaderProps{
    name:string
}

const Header = ({name}:HeaderProps) => {
    const handleClick=()=>{}
  return (
    <Grid>
        <Grid item>
        <Typography variant="h3">{name}</Typography>
        </Grid>
        <Grid item>
            <Buttons variant="contained" text={"SELL"} handleClick={handleClick}/>
            <Buttons variant="contained" text={"BUY"} handleClick={handleClick}/>
        </Grid>
        <Grid item>
            <Avatars imageSrc=''/>
        </Grid>
        
    </Grid>
  )
}

export default Header
