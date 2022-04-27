import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import ErrorModal from './components/UI/ErrorModal';

let message = '';

function App() {
  const [Users, setUsers] = useState([{name: 'Bob', age: 32}, {name: 'Lucy', age: 23}]);
  const [hide, setHide] = useState(true);


  function updateUsers (user) {
    setUsers(prevUsers => {
      return [...prevUsers, user];
    });    
  };

  function errorHandler(errMessage) {
    message = errMessage;
    setHide(false);
  };

  function modalUnhide() {
    message = '';
    setHide(true);
  }
  
  return (
    <div>
      <ErrorModal mess={message} hide={hide} dismiss={modalUnhide} />
      <AddUser update={updateUsers} error={errorHandler}/>
      <UsersList arr={Users}/>
    </div>
  );
}

export default App;
