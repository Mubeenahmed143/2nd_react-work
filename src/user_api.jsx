import React, {useEffect , useState} from 'react';


function UserList(){
    const[users, setusers] = useState([]);

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setusers(data));
    }, []);

    return(
        <div> 
            <h3>
                Users Email List:
            </h3>
            <ul>
                {users.map(user => <li key={user.id}>{user.email}</li>)}
            </ul>
        </div>
    );

}


export default UserList