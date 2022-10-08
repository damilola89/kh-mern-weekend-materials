import logo from './logo.svg';
import './App.css';
import {Link, Routes, Route} from 'react-router-dom';
import { UserFetchAll, UserStore } from './UsersCrud';
function App() {
  return (
    
    <div className = 'container-fluid'>
      <div className = 'text-center'>
        <h1>React App accessing backend</h1>
      </div>
      <div className = 'container'>
        <Link to = "/store">Register</Link> / 
        <Link to = "/fetchAll">Fetch All</Link>
        
      </div>
      <div className = 'container'>
        <Routes>
          <Route path = "/store" element = {<UserStore />}></Route>
          <Route path = "/fetchAll" element = {<UserFetchAll />}></Route>
        </Routes>
      </div>
    </div>
   
  );
}

export default App;
