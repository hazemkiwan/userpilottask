import React, { useState, useContext } from 'react'
import {CountryContext} from '../../../Context/CountryContext'
import BasicSelect from '../../../Elements/BasicSelect/BasicSelect'

const UserFilter = (props) => {    
    const [gender, setGender] = useState('')
    const [nationality, setNationality] = useState('')
    const countries = useContext(CountryContext)
    const {className} = props
    const genderData = [
        {name: "Male", value: "male"},
        {name: "Female", value: "female"}
    ]
    const genderChange = (e) => {
        setGender(e.target.value);
        props.onGenderChange(e.target.value)
    }

    const nationalityChange = (e) => {
        setNationality(e.target.value);
        props.onNationalityChange(e.target.value)
    }

    return (
        <div>
            <BasicSelect 
                value={gender}
                onSelectChange={genderChange}
                className={className}
                id="gender-select"
                noneOption={true}
                data={genderData}
                label="Gender"
            />
            <BasicSelect 
                value={nationality}
                onSelectChange={nationalityChange}
                className={className}
                id="nationality-select"
                noneOption={true}
                data={countries}
                label="Nationality"
            />
        </div>
    )
}

export default UserFilter
