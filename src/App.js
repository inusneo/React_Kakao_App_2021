import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Friends from './routes/Friends';
import Chats from './routes/Chats';
import Find from './routes/Find';
import More from './routes/More';
import Chatting from './routes/Chatting';
import Profile from './routes/Profile';
import './App.scss';

function App({location}) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Friends />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/find" element={<Find />} />
        <Route path="/more" element={<More />} />
        <Route path="/chatting" element={<Chatting />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
