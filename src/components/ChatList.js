import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function ChatList({ id, name, website, img }) {
  return (
    <>
      <li>
        <NavLink to={'/chatting'}
                state={{ id, name, img }}>
          <span className="chats-img">
            <img src={img} alt={name} />
          </span>
          <span className="chats-cont">
            <span className="chats-name">{name}</span>
            <span className="chats-latest">{website}</span>
          </span>
          <span className="chats-time"><span>14</span>:<span>59</span></span>
        </NavLink>
      </li>
    </>
  );
}

ChatList.propTypes = {
  id : PropTypes.number.isRequired,
  name : PropTypes.string.isRequired,
  website : PropTypes.string.isRequired,
  img : PropTypes.string.isRequired
}

export default ChatList;