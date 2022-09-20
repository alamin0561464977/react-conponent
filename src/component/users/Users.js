import React, { useEffect, useState } from 'react';
import User from '../user/User';
import './Users.css'

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div className='users'>
            {
                users.map(user => <User user={user} key={user.id}></User>)
            }
        </div>
    );
};

export default Users;