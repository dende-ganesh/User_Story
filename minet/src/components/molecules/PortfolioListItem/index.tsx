import { Card } from '@mui/material'
import React from 'react'
import Icon from '../../atoms/Icon'
interface PortfolioListItemProps{
    amount:string,
    name:string,
    shortform:string,
    percentageIncreased?:string,
    logo:string
}
const PortfolioListItem = ({name,logo}:PortfolioListItemProps) => {
  return (
    <Card>
        <Icon imageSrc={logo} alt={name}></Icon>
        {/* text fields  */}
    </Card>
  )
}

export default PortfolioListItem
