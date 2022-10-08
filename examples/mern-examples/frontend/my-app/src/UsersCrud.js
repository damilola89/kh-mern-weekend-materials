import axios from "axios";
import { useState } from "react";

export function UserFetchAll() {
    let [users, setUsers] = useState([]);
    let handleRefresh = (e) => {
        let url = "http://localhost:9091/users";
        axios.get(url)
        .then(response => setUsers(response.data))
        .catch(err => console.log(err));
    }
    return (<div>
        <h2>Display All Users</h2>
        <p>Click on refresh to update the table</p>
        <button className = "btn btn-primary" onClick = {handleRefresh}>Refresh</button>
        <table className = 'table'>
            <thead>
                <tr>
                    <th>ID</th><th>NAME</th><th>PHONE</th><th>DELETE</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((value, index) => <tr key = {index}>
                        <td>{value._id}</td><td>{value.name}</td><td>{value.phone}</td>
                        <td>
                            <button className = 'btn btn-danger'>X</button>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>
    </div>)
}
export function UserStore() {
    let [_id, setId] = useState('');
    let [name, setName] = useState('');
    let [password, setPassword] = useState('');
    let [phone, setPhone] = useState('');
    let [message, setMessage] = useState('');
    let handleSubmit = (e) => {
        e.preventDefault();
        let data = {"_id":parseInt(_id), 
            "name": name, "password": password, "phone":parseInt(phone)};
        let url = "http://localhost:9091/users";
        axios.post(url, data)
        .then(response => {
            setMessage('Saved Successfully');
            setId(''); setName(''); setPassword(''); setPhone('');
            setTimeout(() => {setMessage('')}, 2000);
        })
        .catch(err => {
            setMessage('Something went wrong, data not stored');
            setTimeout(() => {setMessage('')}, 2000);
            setId(''); setName(''); setPassword(''); setPhone('');
        });
    }
    return (<div>
        <h2>User Registration!</h2>
        <div className = "row">
            <div className = "col-6">
                <form onSubmit = {handleSubmit}>
                    Enter id <input type = "number" name = "id" autoComplete="off" 
                     onChange = {(e) => setId(e.target.value)} value = {_id}></input>
                    <br />
                    Enter name <input type = "text" name = "name" autoComplete="off"
                     onChange = {e => setName(e.target.value)} value = {name}></input>
                    <br />
                    Enter password <input type = "password" name = "password" 
                     onChange={e => setPassword(e.target.value)} value = {password}></input>
                     <br />
                    Enter phone <input type = "number" name = "phone"
                     onChange={e => setPhone(e.target.value)} value = {phone}></input>
                     <br />
                    <input type = "submit" value = "Save"></input>
                </form>
                <div className = 'text-success'>{message}</div>
            </div>
           
        </div>
    </div>)
}