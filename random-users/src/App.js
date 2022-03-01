
import { useEffect, useState } from 'react';
import './App.css';
import Users from './Componants/users/Users';

function App() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(data => setUser(data.results))
      .catch(error => console.log(error))
  }, [])
  return (
    <div className="App">
      {
        users.map(user => <Users user={user}></Users>)
      }
    </div>
  );
}

export default App;
