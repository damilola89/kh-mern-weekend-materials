import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
function Register() {
  let [id, setId] = useState(undefined);
  let [name, setName] = useState('');
  let [phone, setPhone] = useState(undefined);
  let [message, setMessage] = useState('');

  let handleSubmit = ( e ) => {
    e.preventDefault(); 
    let url = 'http://localhost:3001/users'
    axios.post(url, {"id":id, "name":name, "phone":phone})
    .then( (s) => setMessage(`${id} stored successfully`) )
    .catch( (e) => console.log(e))
    
  }
  
  return (<div>
    <h3>Registration Form</h3>
    <h5 className = 'text text-success'>{message}</h5>
    <form onSubmit = {handleSubmit}>
    <label>
        Id <input type = 'number' onChange={(e) => setId(parseInt(e.target.value))}/>
      </label> <br />
      <label>
        Name <input type = 'text' onChange={(e) => setName(e.target.value)}/>
      </label> <br />
      <label>
        Phone <input type = 'number' onChange={(e) => setPhone(parseInt(e.target.value))}/>
      </label> <br />
      <input type = 'submit' value = 'Submit' />
    </form>
    </div>)
}
function FakeJson() {
  return (<div><h3>Loads the Fake data using axios library</h3></div>)
}
function Login() {
  return (<div><h3>Login Form</h3></div>)
}

function App() {
  return (
    <div className = 'container-fluid'>
      <h2 className = 'text-center'>Root component with routes</h2>
      <div>
        <Link to = '/login'>Login</Link> /
        <Link to = '/register'>Register</Link> /
        <Link to = '/fetch'>Fetch</Link>
      </div>
      <div>
        <Routes>
          <Route path = '/login' element = {<Login />} />
          <Route path = '/register' element = {<Register />} />
          <Route path = '/fetch' element = {<FakeJson />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
