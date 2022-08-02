import { FormControl, MenuItem } from '@mui/material'
import React from 'react'
import Select  from '@mui/material/Select';

const DropDown = (data:string[]) => {
  return (
    <FormControl fullWidth>
  <Select value="">
    {data.map(item=><MenuItem value={item}>{item}</MenuItem>)}
  </Select>
</FormControl>
  )
}
export default DropDown
