import { useState } from "react";
import AddUsers from "./Users/AddUsers";
import UsersList from "./Users/UsersList";
function App() {
  const [enteredlist, setenteredlist] = useState([]);

  const addUserHandler = (uname, uage) => {
    setenteredlist((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uname, age: uage, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div className="">
      <AddUsers onAddUser={addUserHandler} />
      <UsersList users={enteredlist} />
    </div>
  );
}

export default App;
