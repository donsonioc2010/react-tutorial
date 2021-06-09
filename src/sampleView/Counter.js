import React, { Component, useState } from "react";
/* onClick등의 이벤트 지정시 꼭 camelCase로 설정
class Counter extends Component{
    state = {
        number : 0,
        foo : {
            bar: 0,
            foobar: 1
        }
    }

    handleIncrease = () =>{
        this.setState(
            ({number})=>({
                number : number + 1 
            })
        )
    }
    handleDecrease = () => {
        const {number} = this.state
        this.setState({
            number: number -1
        })
    }

    render(){
        return (
            <div>
                <h1>카운터</h1>
                <div>값 : {this.state.number}</div>
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        )
    }
}/*
const Counter = () =>{
    state = {
        number : 0
    }

    handleIncrease = () =>{
        this.setState(
            ({number})=>({
                number : number + 1 
            })
        )
    }
    handleDecrease = () => {
        const {number} = this.state
        this.setState({
            number: number -1
        })
    }
    return (
        <div>
            <h1>카운터</h1>
            <div>값 : {this.state.number}</div>
            <button onClick={this.handleIncrease}>+</button> 
            <button onClick={this.handleDecrease}>-</button>
        </div>
    )
}
*/

const Counter = () =>{
    const [number, setNumber] = useState(0)
    const onIncrease = () => {
        setNumber(number+1)
    }
    const onDecrease = () => {
        setNumber(number-1)
    }

    return(
        <div>
            <h1>카운터</h1>
            <div>값 : {number}</div>
            <button onClick={onIncrease}>+</button> 
            <button onClick={onDecrease}>-</button>
        </div>
    )
}

export default Counter