
import './css/App.css';
import MyName from './sampleView/MyName';
import Counter from './sampleView/Counter';
import InputSample from './sampleView/InputSampel';
import MultiInputSampele from './sampleView/MultiInputSample';
import UserList from './sampleView/UserList';
import React, { useRef, useState } from 'react';
import CreateUser from './sampleView/CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    username:'',
    email:''
  })
  const {username, email} = inputs;

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ]);

  const nextId = useRef(4)

  const onChange = (event) =>{
    const {name, value} = event.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  const onCreate = () =>{
    const user={
      id:nextId.current,
      username,
      email
    }
    setUsers(users.concat(user))
    setInputs({
      username:'',
      email:''
    })
    nextId.current += 1
  }

  return (
    <div>
      <div className="App">
        <div>
          <MyName name="React" />
          {/*foo()*/}
        </div>
      </div>
      <Counter /><hr className="hr_red"/>
      <InputSample /><hr className="hr_red"/>
      <MultiInputSampele /><hr className="hr_red"/>
      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      /><hr className="hr_red"/>
      <UserList users={users}/><hr className="hr_red"/>
    </div>
    
  );
}

function foo(){
  let b = 'hello'
  if(true){
    let b = 'bye'
    console.log(b)
  }
  console.log(b)
}
export default App;
