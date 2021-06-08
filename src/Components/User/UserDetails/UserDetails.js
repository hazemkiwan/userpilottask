import React, {useEffect, useState} from 'react'
import axios from 'axios'
//import { useParams } from "react-router-dom";
import Drawer from '@material-ui/core/Drawer';
import BasicAvatar from '../../../Elements/BasicAvatar';
import {useStyles} from './style.js'
import { useHistory } from "react-router-dom";
import {apis} from '../../../Constant/apis'

const UserDetails = () => {
    let history = useHistory();
    const [user, setUser] = useState({});
    const [open, setOpen] = useState(true);
    const [loaded, setLoaded] = useState(false);
    const classes = useStyles()

    //Not deeded since the API calls users randomly!
    //const { userId } = useParams();

    useEffect(() => {
        axios.get(apis.basicUrl)
        .then(res =>{ 
            setUser(res.data.results.length > 0 ? res.data.results[0] : {})
            setLoaded(true)
        })
    }, [])

    const toggleDrawer = (open) => {
        setOpen(open)
        history.push('/')
    };
    return (
        <div>
            {loaded && 
                <Drawer 
                    anchor="right" 
                    open={open} 
                    onClose={() => toggleDrawer(false)} 
                    className={classes.userDetailsDrawer}
                >
                    <div className={classes.userDetailsDrawerContent}>
                        <div className={classes.userDetailsDrawerAvatarContainer}>
                            <BasicAvatar 
                                data={{alt: "User Image", img: user.picture.thumbnail}}
                                className={classes.userDetailsDrawerAvatar}
                            />
                        </div>
                        <div className={classes.userDetailsDrawerMainTitle}>
                            {user.name.first} 
                            {user.name.last}
                        </div>
                        <div className={classes.userDetailsDrawerSubTitle}>
                            {user.location.street.number} 
                            {user.location.street.name} 
                            {user.location.street.city} 
                        </div>
                    </div>
                </Drawer>
            }
        </div>
    )
}
export default UserDetails
