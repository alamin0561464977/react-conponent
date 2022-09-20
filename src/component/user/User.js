import React from 'react';
import './user.css';

const User = (props) => {
    const { name, email, phone } = props.user;
    return (
        <div className='div'>
            <h3>Name: {name}</h3>
            <h5>Phone: {phone}</h5>increase dicrease decrease
            <p>Email: {email}</p>
        </div>
    );
};

export default User;