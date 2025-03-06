// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Home/HomePage';
import Nav from './Navbar/Nav';
import Event from './Pages/Event';
import Inauguration from './Pages/Inauguration';

const App = () => {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/womens-day" element={<Event />} />
        <Route path="/inauguration" element={<Inauguration />} />
      </Routes>
    </Router>
  );
};

export default App;