import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import Nav from '../components/Nav';
import MemberList from '../components/MemberList';
import profileImage from '../data/profileImg.json';
import '../styles/Friends.scss';

function Friends() {
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const friendsImg = profileImage;
  const myProfile = friendsImg[0];

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setProfile(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        );
        setProfile(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  if (loading) return <div>Loading..</div>;
  if (error) return <div>An error has occurred!</div>;
  if (!profile) return null;

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
          <h1>Friends <span>1</span></h1>
          <div className="left-item">
            <NavLink to="/">Manage</NavLink>
          </div>
          <div className="right-item">
            <i className="fas fa-cog"></i>
          </div>
        </div>
      </header>
      <main className="main">
        <form className="search-box">
          <fieldset className="search-inner">
            <legend className="blind">검색창</legend>
            <i className="fas fa-search"></i>
            <input type="search" name="search" id="search" placeholder="Find friends, Chats, Plus Friends" />
          </fieldset>
        </form>
        <section className="main-section">
          <header><h2>My Profile</h2></header>
          <ul>
            <li>
              <Link to="/profile">
                <span className="profile-img">
                  <img src={myProfile.image} alt="profile images" />
                </span>
                <span className="profile-name">My Name</span>
                <span className="profile-messages">Hello World</span>
              </Link>
            </li>
          </ul>
        </section>
        <section className="main-section">
          <header><h2>Friends</h2></header>
          <ul>
            {profile.map((profileInfo, idx) => {
              if (profileInfo.id > 1) {
                return (
                  <MemberList
                    key = {profileInfo.id}
                    id = {profileInfo.id}
                    name = {profileInfo.name}
                    email = {profileInfo.email}
                    img = {friendsImg[idx].image}
                  />
                )
              }
              return false;
            })}
          </ul>
        </section>
      </main>
      <Nav />
    </>
  );
}

export default Friends;