import React, { Component } from 'react';
import logo from './ibm.png';
import './App.css';
import UserForm from './UserForm';
import SocialButtons from './SocialButtons';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    }
  }
  

  render() {
    
    return (
      

      <div className='container'>
        <div className='text-center my-3'>
          <img src={logo} className="img-fluid" alt="logo" style={{height: '35px'}}/>
        </div>
        

          
        <h2 className='header mb-4 ml-3'> Por favor, completa tus datos:</h2>
        <UserForm />
        <SocialButtons />
      </div>
    );
  }
}


export default App;
