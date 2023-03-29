import React,{useState} from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

import "./AddUsers.css"

const AddUsers = (props) => {
  const [enteredname, setenteredname] = useState('');
  const [enteredage, setenteredage] = useState('');

  const addUserHandler = (e) => {
    e.preventDefault();
    if(enteredname.trim().length===0||enteredage.length===0){
      return;
    }
    if(+enteredage<1){
      return;
    }
    props.onAddUser(enteredname,enteredage)
    setenteredage("");
    setenteredage("");
  };

  const addnameHandler=(event)=>{
    setenteredname(event.target.value);
  }

  const addageHandler=(event)=>{
    setenteredage(event.target.value);
  }

  return (
    <div>
      <Card>
        <form onSubmit={addUserHandler} className="form">
          <label htmlFor="username">Username</label>
          <input id="username" type="text"  onChange={addnameHandler} value={enteredname}/>
          
          <label htmlFor="age">Age</label>
          <input id="age" type="number"  onChange={addageHandler} value={enteredage}/>
           
          <Button type="submit" >Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUsers;
