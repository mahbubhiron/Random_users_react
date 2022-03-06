import React, { useState } from 'react';
import './Users.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faCalendar, faMapMarker, faPhone, faLock } from '@fortawesome/free-solid-svg-icons';

const Users = (props) => {
    console.log('props', props.user);
    const { picture, name, email, dob, location, phone, login } = props.user;
    const { title, first, last } = name;
    const fullName = `${title} . ${first} ${last}`;

    const [uDetails, setUDetails] = useState([])
    function sName(props, lis) {
        const sNameHeading = ['Hi, my name is', props];
        setUDetails(sNameHeading);
    }
    function sEmail(props, lis) {
        const sEmailHeading = ['my email is', props];
        setUDetails(sEmailHeading);
    }
    function sDob(props) {
        const sDobHeading = ['my birth date is', props.date];
        setUDetails(sDobHeading);
    }
    function sLocation(props) {
        const { name, number } = props.street;
        const fLocation = `${number} ${name}`;
        const sDobHeading = ['my Location is', fLocation];
        setUDetails(sDobHeading);
    }
    function sPhone(props) {
        const sPhoneHeading = ['my phone number is', props];
        setUDetails(sPhoneHeading);
    }
    function sPassword(props) {
        const sPhoneHeading = ['my password is', props.password];
        setUDetails(sPhoneHeading);
    }
    return (
        <div>
            <div className="main">
                <div className="card">
                    <div className="card-details">
                        <div className="card-img">
                            <img src={picture.large} />
                        </div>
                    </div>
                    <div className="card-icon">
                        <p id="name-header">{uDetails[0] || sName(fullName)}</p>
                        <p id="name">{uDetails[1]}</p>
                        <ul>
                            <li onMouseOver={() => sName(fullName)}><FontAwesomeIcon icon={faUser} /></li>
                            <li onMouseOver={() => sEmail(email)}><FontAwesomeIcon icon={faEnvelope} /></li>
                            <li onMouseOver={() => sDob(dob)}><FontAwesomeIcon icon={faCalendar} /></li>
                            <li onMouseOver={() => sLocation(location)}><FontAwesomeIcon icon={faMapMarker} /></li>
                            <li onMouseOver={() => sPhone(phone)}><FontAwesomeIcon icon={faPhone} /></li>
                            <li onMouseOver={() => sPassword(login)}><FontAwesomeIcon icon={faLock} /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Users;