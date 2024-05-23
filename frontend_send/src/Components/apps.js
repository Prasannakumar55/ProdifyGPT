import React from 'react';
import './App.css';
import ChatApp from './Components/ChatComponent.js';
import Navbar from './Components/Navbar.js';
// import Sidebar from './Components/Sidebar.js';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <h1>Prodify GPT</h1>
      </header> */}

      <div className='container'>
        {/* <font className='Sidebar-comp'><Sidebar /></font> */}

        <div className='sub-container'>
          <div className='Navbar-comp'><Navbar /></div>
          <main className='ChatApp-comp'><ChatApp /></main>
        </div>
      </div>




    </div>
  );
}

export default App;
