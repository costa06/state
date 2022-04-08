import './App.css';

import React from 'react';
import Profil from './components/profil';
import Lifecycle from './components/lifecycle';

class App extends React.Component {
  render() {
    return (

      <div className='container'>
      <div className='content'>
        <Profil/>
        </div>
      </div>
      
    )
  }
}

export default App;
