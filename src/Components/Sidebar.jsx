// Sidebar.js

import React from 'react';
import './Sidebar.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        <Link to={'/'}> <li className="sidebar-menu-item">Home</li></Link>
        <li className="sidebar-menu-item">Trending</li>
        <li className="sidebar-menu-item">Subscriptions</li>
        <li className="sidebar-menu-item">Library</li>
        <hr className="sidebar-divider" />
        <li className="sidebar-menu-item">History</li>
        <li className="sidebar-menu-item">Your videos</li>
        <li className="sidebar-menu-item">Watch later</li>
        <li className="sidebar-menu-item">Liked videos</li>
        <hr className="sidebar-divider" />
        <li className="sidebar-menu-item">Browse channels</li>
      </ul>
    </div>
  );
}

export default Sidebar;
