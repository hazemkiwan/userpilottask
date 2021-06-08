import React from 'react'
import {useStyles} from './style.js'

const BasicCell = ({mainContent, subContent}) => {
    const classes = useStyles()
    return (
        <div>
            <div className={classes.basicCellMainContent}>{mainContent}</div>
            <div className={classes.basicCellSubContent}>{subContent}</div>
        </div>
    )
}

export default BasicCell
