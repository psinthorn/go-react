// this show how to create class component on react

import React, { Component, Fragment } from 'react';
import './AppClass.css';

export default class AppClass extends Component {

    // Create class state
    constructor(props){
        super(props);
        this.state = {
            isTrue: false
        };
    };

    toggleIsTrue  = () => {
        if(this.state.isTrue){
            this.setState({
                isTrue: false
            })
            return
        };
        this.setState({ 
            isTrue: true
        });
    };


    render(){
        return(
            <>
                 <h1 className='h1-red'>{this.props.msg}</h1>
                {this.state.isTrue && 
                <>
                    <p>This is isTrue value is {this.state.isTrue? "true" : false } </p>
                </>
                }

                <a href='#!' onClick={this.toggleIsTrue} className='btn btn-warning'>Toggle isTrue is {this.state.isTrue? "true" : "false"} </a>
            </>
               
        ); 
    }     
}