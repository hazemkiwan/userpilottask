import React from 'react'
import BasicAvatar from '../../../Elements/BasicAvatar'
import BasicCell from '../../../Elements/BasicCell'
import {useStyles} from './style.js'

const UserDetailsCell = ({data}) => {
    const classes = useStyles()
    return (
        <div className={classes.userDetailsCellRoot}>
            { data.avatar ? <BasicAvatar data={data.avatar} className={classes.avatar}/> : '' }
            <BasicCell mainContent={data.mainContent} subContent={data.subContent}/>
        </div>
    )
}

export default UserDetailsCell
