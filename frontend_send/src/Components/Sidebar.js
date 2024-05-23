import React from 'react';
import '../css/Sidebar.css';
import Prodify from './Images/prodify.png';


const Sidebar = () => {
  return (
    <div className='Sidebar'>
      <div className='sidebar-head'>
        <div>
          <img width={"30px"} src={ Prodify }/> 
        </div>
        <div className='chat-head'>New Chat</div>
      </div>
      <div>
        <div>Hi this is from sidebar</div>
      </div>
    </div>
  );
};

export default Sidebar;

