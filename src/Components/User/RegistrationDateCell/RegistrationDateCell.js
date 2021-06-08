import React from 'react'
import BasicCell from '../../../Elements/BasicCell'

const RegistrationDateCell = ({data}) => {
    return (
        <BasicCell mainContent={data.mainContent} subContent={data.subContent}/>
    )
}

export default RegistrationDateCell
