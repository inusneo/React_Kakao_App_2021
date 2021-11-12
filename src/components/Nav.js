import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Nav.scss';

function Nav() {
  return (
    <nav className="tab-bar">
      <ul>
        <li>
          <NavLink to="/" className="tab-list">
            <i className="fas fa-user"></i>Friends
          </NavLink>
        </li>
        <li>
          <NavLink to="/chats" className="tab-list">
            <i className="fas fa-comment"></i>Chats
          </NavLink>
        </li>
        <li>
          <NavLink to="/find" className="tab-list">
            <i className="fas fa-search"></i>Find
          </NavLink>
        </li>
        <li>
          <NavLink to="/more" className="tab-list">
            <i className="fas fa-ellipsis-h"></i>More
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;