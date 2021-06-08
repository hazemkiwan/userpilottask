import React from 'react'
import BasicCell from '../../../Elements/BasicCell'

const AddresCell = ({data}) => {
    return (
        <BasicCell mainContent={data.mainContent} subContent={data.subContent}/>
    )
}

export default AddresCell
