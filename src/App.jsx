// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Home/HomePage';
import Nav from './Navbar/Nav';
import Event from './Pages/Event';
import Inauguration from './Pages/Inauguration';
import WhatWeDo from './Pages/WhatWeDo';
import Joinacm from './Home/Joinacm';
import Game from './Home/Game/Game';

const App = () => {

  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/womens-day" element={<Event />} />
        <Route path="/inauguration" element={<Inauguration />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/join-acm-w" element={<Joinacm />} />
            <Route path="/game" element={<Game />} />



      </Routes>
    </Router>
  );
};

export default App;