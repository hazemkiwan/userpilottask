import React from 'react'
import { Avatar } from '@material-ui/core'
const BasicAvatar = ({data, className}) => {
    return (
        <Avatar alt={data.alt} src={data.img} className={className}/> 
    )
}

export default BasicAvatar
