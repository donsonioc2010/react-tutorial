import './css/App.css';
import MyName from './sampleView/MyName';
import Counter from './sampleView/Counter';
import InputSample from './sampleView/InputSampel';
import MultiInputSampele from './sampleView/MultiInputSample';
import UserList from './sampleView/UserList';
import React, { useCallback, useMemo, useReducer, useRef, useState } from 'react';
import CreateUser from './sampleView/CreateUser';
import useInputs from './hooks/useInputs';
/* useState 사용
function countactiveUsers(users){
  console.log(
    '활성 사용자 수를 세는중'
  )
  return users.filter(user => user.active).length;
}

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
      email: 'public.velopert@gmail.com',
      active : true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active : false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active : false
    }
  ]);

  const nextId = useRef(4)

  const onChange = useCallback((event) =>{
      const {name, value} = event.target;
      setInputs(inputs => (
        {
          ...inputs,
          [name]: value
        }
      ))
    }, []
  )

  const onCreate = useCallback(() =>{
      const user={
        id:nextId.current,
        username,
        email
      }
      setUsers(users => users.concat(user))
      setInputs({
        username:'',
        email:''
      })
      nextId.current += 1
    }, [username, email]
  )

  const onRemove = useCallback(
    id => {
      setUsers(users.filter(user => user.id !== id));
    },
    []
  )

  const onToggle = useCallback(
    id => {
      setUsers(
        users.map(user =>
          user.id === id?{...user, active: !user.active } : user
        )
      )
    },
    []
  )

  const count = useMemo(()=> countactiveUsers(users), [users])

  return (
    <div>
      <div className="App">
        <div>
          <MyName name="React" />
          //{foo()}
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
      />
      <hr className="hr_red"/>
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/><hr className="hr_red"/>
      <div>활성사용자 수 : {count}</div>
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
*/

//useState에서 useReducer로 변경
function countactiveUsers(users) {
    console.log('활성 사용자 수를 세는중');
    return users.filter(user => user.active).length;
}

const initialState = {
    inputs: {
        username: '',
        email: '',
    },
    users: [
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com',
            active: true,
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com',
            active: false,
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com',
            active: false,
        },
    ],
};

function reducer(state, action) {
    switch (action.type) {
        case 'CREATE_USER':
            return {
                users: state.users.concat(action.user),
            };
        case 'REMOVE_USER':
            return {
                users: state.users.filter(user => user.id !== action.id),
            };
        case 'TOGGLE_USER':
            return {
                users: state.users.map(user => (user.id === action.id ? { ...user, active: !user.active } : user)),
            };
        default:
            return state;
    }
}

function App() {
    const [{ username, email }, onChange, reset] = useInputs({
        username: '',
        email: '',
    });

    const [state, dispatch] = useReducer(reducer, initialState);

    const nextId = useRef(4);

    const { users } = state;
    const count = useMemo(() => countactiveUsers(users), [users]);
    const onCreate = useCallback(() => {
        dispatch({
            type: 'CREATE_USER',
            user: {
                id: nextId.current,
                username,
                email,
            },
        });
        nextId.current += 1;
    }, [username, email]);

    const onToggle = useCallback(id => {
        dispatch({
            type: 'TOGGLE_USER',
            id,
        });
    }, []);

    const onRemove = useCallback(id => {
        dispatch({
            type: 'REMOVE_USER',
            id,
        });
    }, []);

    return (
        <div>
            <div className="App">
                <div>
                    <MyName name="React" />
                </div>
            </div>
            <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
            <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
            <div>활성 사용자 수 : {count}</div>
            <hr className="hr_red" />
        </div>
    );
}

export default App;
