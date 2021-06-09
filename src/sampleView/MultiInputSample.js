import React, { useRef, useState } from 'react';

//한개의 input인 경우
function MultiInputSampele(){
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    })

    const nameInput = useRef()
    const {name, nickname} = inputs

    const onChange = (e) =>{
        const{value, name} = e.target
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const onReset = () => {
        setInputs({
            name:'',
            nickname:''
        })
        nameInput.current.focus()
    }

    return(
        <div>
            <input 
                name="name" 
                onChange={onChange} 
                value={name} 
                placeholder="이름" 
                ref={nameInput}
            /> <br />
            <input 
                name="nickname" 
                onChange={onChange} 
                value={nickname} 
                placeholder="닉네임"
            /> <br />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 : {name}</b>
                이름 : {nickname}
            </div>
        </div>
    )
}
export default MultiInputSampele;