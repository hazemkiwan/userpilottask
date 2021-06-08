import axios from 'axios'
import moment from 'moment'
import { apis } from '../../../Constant/apis'
export const getData = (filter, rowsPerPage, page, onSuccess) => {
    const gender = filter?.gender ? `&gender=${filter.gender}` :  "";
    const nationality = filter?.nationality ? `&nat=${filter.nationality}` :  "";
    const pageNmber = page > 1 ? `&page=${page}` :  ""
    let url = `${apis.basicUrl}?results=${rowsPerPage}${pageNmber}${gender}${nationality}`
    
    axios.get(url)
    .then(res =>{ 
       onSuccess(res.data)
    });
}


export const formatData = data => {
    return data.results.map(user => {
        const {first, last} = user.name
        const {number, name} = user.location.street
        const {city, country, postcode} = user.location
        const {email, phone} = user
        const {thumbnail} = user.picture
        const {date} = user.registered
        return {
            id: user.id.value,
            key: user.key,
            user: {
                mainContent: `${first} ${last}`,
                subContent: `${number}  
                              ${name}, 
                              ${city} ${country}`,
                avatar: {
                    img: thumbnail,
                    alt: "User Image"
                }
            },
            contact_information: {
                mainContent: email,
                subContent: phone
            },
            registration_date: {
                mainContent: moment(date).format("MMM DD, yy"),
                subContent: moment(date).format("LT")
            },
            address: {
                mainContent: country,
                subContent: postcode
            }
        }
    })
}
