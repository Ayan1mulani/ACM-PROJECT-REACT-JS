import { useState } from 'react';
import './App.css';
import Navbar from './components/ui/navbar.jsx';
import { VideoExpansionTextBlend } from './components/ui/scroll-expansion-hero.jsx';
import AboutPage from './components/ui/about.jsx';
import ChaptersPeoplePage from './components/ui/chapters-people.jsx';
import EventsPage from './components/ui/events.jsx';
import InitiativesPage from './components/ui/initiatives.jsx';
import ResourcesPage from './components/ui/resources.jsx';
import GalleryPage from './components/ui/gallery.jsx';
import ContactPage from './components/ui/contact.jsx';

function App() {
  const [activePage, setActivePage] = useState('Home');

  const handleNavClick = (item) => {
    if (item === 'Home') {
      setActivePage('Home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (item === 'About') {
      setActivePage('About');
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    if (item === 'Chapters & People') {
      setActivePage('Chapters & People');
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    if (item === 'Events') {
      setActivePage('Events');
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    if (item === 'Initiatives') {
      setActivePage('Initiatives');
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    if (item === 'Resources') {
      setActivePage('Resources');
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    if (item === 'Gallery') {
      setActivePage('Gallery');
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    if (item === 'Contact') {
      setActivePage('Contact');
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    // For now, keep other items on Home; can be wired later to sections/pages.
  };

  return (
    <>
      <Navbar activeItem={activePage} onNavClick={handleNavClick} />
      {activePage === 'Home' && <VideoExpansionTextBlend />}
      {activePage === 'About' && <AboutPage />}
      {activePage === 'Chapters & People' && <ChaptersPeoplePage />}
      {activePage === 'Events' && <EventsPage />}
      {activePage === 'Initiatives' && <InitiativesPage />}
      {activePage === 'Resources' && <ResourcesPage />}
      {activePage === 'Gallery' && <GalleryPage />}
      {activePage === 'Contact' && <ContactPage />}
    </>
  );
}

export default App;
