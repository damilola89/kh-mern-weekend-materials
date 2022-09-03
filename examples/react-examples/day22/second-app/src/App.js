
import './App.css';
import axios from 'axios';
import React, { useState } from 'react';

function App() {
  let [items, setItems] = useState([]);
  let handleFetch = ( e ) => { 
    let url = 'https://jsonplaceholder.typicode.com/users';
    axios.get(url)
    .then( ( response ) => setItems(response.data))
    .catch( ( err ) => console.log(err));
  }
  return (
    <div className = 'container-fluid'>
      <h1>My Second App</h1>
      <button onClick = {handleFetch}>Fetch</button>
      {
        items.map( (item, index) => 
        <p key = {index}>{item.id}, {item.name}, {item.username} </p> )
      }
    </div>
  );
}
export default App;
