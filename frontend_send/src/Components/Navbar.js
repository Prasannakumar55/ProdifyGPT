import React from 'react'
import { TbMenu } from "react-icons/tb";
import { FaRegEdit } from "react-icons/fa";
import "../css/Navbar.css"
import Sidebar from "./Sidebar";

const Navbar = () => {
  return (
    <div className='Navbar-head'>
      <div><Sidebar/></div>
      <div className='Navbar'>
        <TbMenu className='TbMenu' />
        <h3>ProdifyGPT</h3>
        <div><FaRegEdit className='FaRegEdit' /></div>
      </div>
    </div>
  )
}

export default Navbar

// import React, { useState } from 'react';
// import { TbMenu } from 'react-icons/tb';
// import { FaRegEdit } from 'react-icons/fa';
// import '../css/Navbar.css';
// import Sidebar from './Sidebar';

// const Navbar = () => {
//   // const [sidebarVisible, setSidebarVisible] = useState(false);

//   // const toggleSidebar = () => {
//   //   setSidebarVisible(!sidebarVisible);
//   //   console.log("clicked")
//   // };


//   return (
//     <div className='container'>
//       <div className='Navbar'>
//         <TbMenu className='TbMenu' />
//         <h3>ProdifyGPT</h3>
//         <div ><FaRegEdit className='FaRegEdit'/></div>
//         {/* {sidebarVisible && <Sidebar />} */}
//       </div>
//     </div>
//   );
// };

// export default Navbar;
