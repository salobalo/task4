import './App.css';
import { generateUsers, generateusers } from './users';
import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      showUsersList: true,
    };

}


componentDidMount() {
  const users = generateUsers();
  this.setState({users});
}

componentDidUpdate(prevProps, prevState) {
  if (prevState.users !== this.state.users) {
    document.title = `Left ${this.state.users.length} users`;
  }
}



deleteUser = () => {
  const {users} = this.state;
  const randomIndex = Math.random() * users.length;
  const updatedUsers = [...users];
  updatedUsers.splice(randomIndex, 1);
  this.setState({users: updatedUsers});
};

ShowUsersList = () => {
  this.setState((prevState) => ({
    showUsersList: !prevState.showUsersList,
  }));
};

componentWillUnmount(){
  document.title = `title`;
}

render() {
  const {users, showUsersList} = this.state;

  return(
    <div>
      <h1>Users List</h1>
      <button onClick={this.ShowUsersList}>Show Users</button>
      {showUsersList && (
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      )}
       <button onClick={this.deleteUser}>Delete</button>
    </div>
  );
}

}
export default App;
