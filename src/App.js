import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux' 
import {updateUser} from './actions/userAction'
import { stat } from 'fs';
class App extends Component {

  constructor(props){
    super(props);
    this.onUpdateUser = this.onUpdateUser.bind(this);
  }
  onUpdateUser(){
    this.props.onUpdateUser('Jenifer mathew')
  }
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <div>
            <button onClick={this.onUpdateUser} >Update user</button>
          </div>
          <div>
            {this.props.user}
          </div>
          <div>
            {this.props.products[0].name}
          </div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
const mapStateToProps = (state, props) =>{
  //console.log(props)
 return {
   products: state.products,
  user: state.user,
  userPlusProps: `${state.user} ${props.aProps}`
 } 
}

const mapActionToProps ={
  onUpdateUser: updateUser
}

export default connect(mapStateToProps,mapActionToProps) (App);
