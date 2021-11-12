import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import Nav from '../components/Nav';
import ChatList from '../components/ChatList';
import profileImage from '../data/profileImg.json';
import '../styles/Chats.scss';

function Chats() {
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const friendsImg = profileImage;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setError(null);
        setProfile(null);
        setLoading(true);
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        );
        setProfile(response.data); 
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
          <h1>Chats <span>1</span></h1>
          <div className="left-item">
            <NavLink to="/">Edit</NavLink>
          </div>
          <div className="right-item">
            <i className="fas fa-cog"></i>
          </div>
        </div>
      </header>
      <main className="main chats">
        <form className="search-box">
          <fieldset className="search-inner">
            <legend className="blind">검색창</legend>
            <i className="fas fa-search"></i>
            <input type="search" name="search" id="search" placeholder="Find friends, Chats, Plus Friends" />
          </fieldset>
        </form>
        <section className="main-section">
          <header className="blind"><h2>Friends</h2></header>
          <ul>
            {profile.map((chat, idx) => (
              <ChatList
                key = {chat.id}
                id = {chat.id}
                name = {chat.name}
                website = {chat.website}
                img = {friendsImg[idx].image}
              />
            ))}
          </ul>
        </section>
        <div className="floating-btn">
          <Link to=""><i className="fas fa-comment"></i></Link>
        </div>
      </main>
      <Nav />
    </>
  );
}

export default Chats;