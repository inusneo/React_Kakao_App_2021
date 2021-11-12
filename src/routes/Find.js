import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Nav from '../components/Nav';
import '../styles/Find.scss';

function Find() {
  return (
    <>
      <header className="header">
        <div className="status-bar">
          <div className="left-item">
            <i className="fas fa-plane"></i><i className="fas fa-wifi"></i>
          </div>
          <div className="center-item">
            <span>14</span> : <span>29</span>
          </div>
          <div className="right-item">
            <i className="far fa-moon"></i><i className="fab fa-bluetooth-b"></i><span>100%</span><i className="fas fa-battery-full"></i>
          </div>
        </div>
        <div className="title-bar">
          <h1>Chats <span>1</span></h1>
          <div className="left-item">
            <NavLink to="/">Edit</NavLink>
          </div>
          <div className="right-item">
            <i className="fas fa-cog"></i>
          </div>
        </div>
      </header>
      <main className="main">
        <ul className="find-method">
          <li>
            <Link to=""><i className="fas fa-address-book"></i>Find</Link>
          </li>
          <li>
            <Link to=""><i className="fas fa-qrcode"></i>QR Code</Link>
          </li>
          <li>
            <Link to=""><i className="fas fa-mobile-alt"></i>Shake</Link>
          </li>
          <li>
            <Link to=""><i className="fas fa-envelope"></i>Invite via SNS</Link>
          </li>
        </ul>
        <section className="recommend-section">
          <header><h2>Recommend Friends</h2></header>
          <ul>
            <li>You Have no recommended friends.</li>
          </ul>
        </section>
      </main>
      <Nav />
    </>
  );
}

export default Find;