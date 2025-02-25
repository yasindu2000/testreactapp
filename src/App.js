import './App.css';
import { useNavigate } from 'react-router-dom';


function App() {

  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
         <h1>WELCOME TO USERFLOW</h1>
         <button className='users-button' onClick={()=> navigate("/users")}>Users</button>
      </header>
    </div>
  );
}

export default App;
