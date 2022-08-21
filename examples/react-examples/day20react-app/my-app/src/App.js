import logo from './logo.svg';
import './App.css';
import { User } from './User' 

function App() {
  let names = ["Rahul", "Rajesh", "Ajay"];
  return (
    <div className = "container-fluid">
      <h1>React App with React tool kit</h1>
      <button className = "btn btn-primary">MyButton</button>
      {
        names
        .map((username, index) => 
        <User key = {index} name = {username} />)
      }
    </div>
  );
}

export default App;
