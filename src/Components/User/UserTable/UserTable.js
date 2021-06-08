import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import BasicTable from '../../../Elements/BasicTable'
import AddresCell from '../AddresCell/AddresCell'
import ContactInformationCell from '../ContactInformationCell/ContactInformationCell'
import RegistrationDateCell from '../RegistrationDateCell/RegistrationDateCell'
import UserDetailsCell from '../UserDetailsCell/UserDetailsCell'
import {useStyles} from './style.js'
import UserFilter from '../UserFilter/UserFilter'
import {getData, formatData} from './utils'

const UserTable = () => {
    let history = useHistory();
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState(undefined);
    const classes = useStyles()
    const columns = [
        {
            key : 'user', name: 'User', cell: (data) => <UserDetailsCell data={data}/>
        },
        {
            key : 'contact_information', name: 'Contact Information', cell: (data) => <ContactInformationCell data={data}/>
        },
        {
            key : 'registration_date', name: 'Registration Date', cell: (data) => <RegistrationDateCell data={data}/>
        },
        {
            key : 'address', name: 'Country/Postal Code', cell: (data) => <AddresCell data={data}/>
        },
    ]
    const getAndFormatData = (filter, rowsPerPage, page) => {
       getData(filter, rowsPerPage, page, (data) => {
           var users= formatData(data);
            setUsers(users)
       })
    }

    useEffect(() => {
        getAndFormatData(null, 8, 1);
     }, [])

    const onGenderChange = (gender) => {
        let newFilter = {...filter, gender}
        setFilter(newFilter)
        getAndFormatData(newFilter, 8, 1);
    }
    const onNationalityChange = (nationality) => {
        let newFilter = {...filter, nationality}
        setFilter(newFilter)
        getAndFormatData(newFilter, 8, 1);
    }
    const onUserRowClick = (userId) => {
        history.push(`/user/${userId}`)
    }
    const handlePageChange = (page, rowsPerPage) => {
        getAndFormatData(filter, rowsPerPage, page+1)
    }
    return(
       <div className={classes.userAreaRoot}>
           <div className={classes.userAreaHeader}>
                <h3>All Users</h3>
                <UserFilter 
                    onGenderChange = {onGenderChange} 
                    onNationalityChange = {onNationalityChange} 
                    className={classes.userFilterField}
                />
           </div>
           <BasicTable 
                data={users} 
                columns={columns} 
                rowsPerPageOptions={[]}
                onRowClickCallBack={onUserRowClick}
                initialPage={0}
                pagable={true}
                onPageChange={handlePageChange}
                rowsPerPage={8}
                tableCount={80}
           />
       </div>
    );
}
export default UserTable;
