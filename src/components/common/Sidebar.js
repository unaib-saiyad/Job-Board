import React, { useRef, useState } from 'react';
import '../../assets/styles/dashboard/Sidebar.css';
import logo from '../../assets/images/dashboard/logos/companyLogo.png';
function Sidebar() {
  const [isRotated, setIsRotated] = useState(false);
  const sidebarRef = useRef(null);

  const toggleNavbar = ()=>{
    sidebarRef.current.classList.toggle('open-sidebar')
    sidebarRef.current.classList.toggle('close-sidebar')
    setIsRotated(!isRotated);
  }

  return (
    <>
    <div className='sidebar open-sidebar' ref={sidebarRef}>
      <div className="sidebarHeader">
        <i className={`fa-2x fa-bars fa-solid m-2 ${isRotated ? 'rotate' : ''}`} aria-hidden="true" onClick={toggleNavbar}></i>
      </div>
    </div>
    </>
  )
}

export default Sidebar;