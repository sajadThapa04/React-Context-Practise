import {React,useContext,useState} from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    const {user} = useContext(UserContext);

    if(!user){
        return <h1 className='mt-4'>Please login first</h1>
    }
    else {
        return (
            <div>
                <h2>Welcome {user.username} Bro</h2>
                {/* <h2>Password: {user.password}</h2> */}
            </div>
        )
    }

 
}

export default Profile