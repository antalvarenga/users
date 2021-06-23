import { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import UsersList from './components/Users/UsersList';

function App() {
  const [users, setUsers] = useState([])

  const addUserHandler = (user) => {
    setUsers(prevUsers => [user, ...prevUsers])
  }
  return (
    <div className="App">
      <Form onAddUser={addUserHandler}/>
      {users.length > 0 ?
        <UsersList users={users} />
        :
        null
      }
    </div>
  );
}

export default App;
