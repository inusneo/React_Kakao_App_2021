import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import profileImage from '../data/profileImg.json';
import '../styles/Profile.scss';

function Profile() {
  const myProfile = profileImage[0].image;
  return (
    <>
      <header className="header myProfile">
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
          <div className="left-item">
            <NavLink to="/"><i className="fas fa-angle-left"></i></NavLink>
          </div>
          <div className="right-item"><i className="fas fa-user"></i></div>
        </div>
      </header>
      <main className="main profile-wrap">
        <div className="background"></div>
        <section className="profile">
          <div className="profile-img">
            <img src={myProfile} alt="profile images" />
          </div>
          <div className="profile-cont">
            <span className="profile-name">My Name</span>
            <input type="text" className="profile-email" placeholder="UserID@gmail.com" />
            <ul className="profile-menu">
              <li><Link to=""><span className="icon"><i className="fas fa-comment"></i></span>My Chatroom</Link></li>
              <li><Link to=""><span className="icon"><i className="fas fa-pencil-alt"></i></span>Edit Profile</Link></li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}

export default Profile;