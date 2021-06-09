import React, { Component } from 'react';

/*
class MyName extends Component{
    render(){
        return(
            <div>
                Hi MyName is <b>{this.props.name}</b>
            </div>
        )
    }
}
*/
/*
function MyName(name){
    return(
        <div>
            Hi MyName is <b>{//this.props.name
                name}</b> //안에 두개전부사용가능
        </div>
    )
}
*/
const MyName = ({name})=>{
    return(
        <div>
            Hi MyName is <b>{name}</b> {/*안에 두개전부사용가능*/}
        </div>
    )
}

export default MyName