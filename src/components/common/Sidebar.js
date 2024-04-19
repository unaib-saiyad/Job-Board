import React, { useRef, useState } from 'react';
import '../../assets/styles/dashboard/Sidebar.css';
import logo from '../../assets/images/dashboard/logos/companyLogo.png';
function Sidebar() {
  const [isRotated, setIsRotated] = useState(false);
  const [display, setDisplay] = useState(false);
  const sidebarRef = useRef(null);

  const toggleNavbar = () => {
    sidebarRef.current.classList.toggle('open-sidebar');
    sidebarRef.current.classList.toggle('close-sidebar');
    setIsRotated(!isRotated);
    if (!display) {
      setDisplay(!display);
    }
    else {
      setTimeout(() => {
        setDisplay(!display);
      }, 300);
    }
  }

  return (
    <>
      <div className='sidebar open-sidebar' ref={sidebarRef}>
        <div className="sidebarHeader">
          <i className={`fa-2x fa-bars fa-solid m-2 ${isRotated ? 'rotate' : ''}`} aria-hidden="true" onClick={toggleNavbar}></i>
        </div>
        <div className="mt-4 sidebarBody">
          <ul className="p-0">
            <li className="bg-primary my-2 p-2 w-75">
              <i className="fa fa-dashboard px-2" aria-hidden="true"></i>
              <span className={`${display ? 'd-none' : ''}`}>Dashboard</span>
            </li>
            <li className="my-2 p-2 w-75">
              <i className="fa-solid fa-briefcase px-2"></i>
              <span className={`${display ? 'd-none' : ''}`}>Jobs</span>
            </li>
            <li className="my-2 p-2 w-75">
              <i className="fa-solid fa-gear px-2"></i>
              <span className={`${display ? 'd-none' : ''}`}>Settings</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Sidebar;