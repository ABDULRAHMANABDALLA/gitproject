import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-item active">
        <Link to="/dashboard" className="sidebar-link">
          <FontAwesomeIcon icon={faHome} className="icon" />
          <span>Dashboard</span>
        </Link>
      </div>
      <div className="sidebar-item">
        <Link to="/bookinglist" className="sidebar-link">
          <FontAwesomeIcon icon={faUsers} className="icon" />
          <span>Customers</span>
        </Link>
      </div>
      <div className="sidebar-section">
        <div className="sidebar-item">
          <div className='logout'>
          <Link to="/adminlogin" className="sidebar-link">
          <FontAwesomeIcon icon={faSignOutAlt}  className="icon" />
            <span>Sign Out</span>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
