import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [listOfUsers, setlistOfUsers] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [username, setUsername] = useState('')
  useEffect(() => {
    axios.get('http://localhost:3001/getUsers').then((response) => {
      setlistOfUsers(response.data)
    })
  }, [])

  const createUser = () => {
    axios.post('http://localhost:3001/createUser', { name: name, age: age, username: username }).then((response) => {
      alert('User created.')
    })
  }

  return (
    <div className="App">
      <div className='usersDisplay'>
        {listOfUsers.map((user) => {
          return (
            <div>
              <h1>Name: {user.name}</h1>
              <h1>Age: {user.age}</h1>
              <h1>Username: {user.username}</h1>
            </div>
          )
        })}
      </div>
      <div>
        <input type='text' placeholder=' Name...' onChange={(event) => { setName(event.target.value) }}>
        </input>
        <input type='number' placeholder=' Age...' onChange={(event) => { setAge(event.target.value) }}>
        </input>
        <input type='text' placeholder=' Username...' onChange={(event) => { setUsername(event.target.value) }}>
        </input>
        <button onClick={createUser}> Create User </button>
      </div>
    </div >
  );
}

export default App;
