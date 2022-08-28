import logo from './logo.svg';
import './App.css';
import {ConditionalRendering, EventDemo, StateDemo, UserList} from './components/Demo';

function App() {
  return (
    <div className = "container-fluid">
      <h2 className = "text-center">App Component</h2>
      {/* <UserList /> */}
      {/* <EventDemo /> */}
      {/* <StateDemo /> */}
      <ConditionalRendering />
    </div>
  );
}

export default App;
