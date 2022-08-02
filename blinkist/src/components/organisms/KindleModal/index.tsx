import { Box, Modal } from '@mui/material'
import React, { useState } from 'react'
import Button from '../../atoms/Button';

interface KindleModalProps{
    open:boolean,
    
}
const KindleModal = ({open}:KindleModalProps) => {
  const [emailAdded,setEmailAdded]=useState(false);
  const handleSuccess=()=>setEmailAdded((email:boolean)=>!email)
  return (
    <Modal open={open}>
            {!emailAdded ? (
          <Box>         
              <Button  variant="contained"  handleClick={handleSuccess} text="Add Email"/>
              <Button variant={'text'} text={'Need Help?'} handleClick={()=>{/* logic */}}/>
          </Box>
        ) : (
          <Box>
            <Button variant="contained" handleClick={()=>{ /* logic */ }} text={"Continue Reading"}/>
          </Box>
        )}
    </Modal>

  )
}

export default KindleModal
