import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import DehazeIcon from '@mui/icons-material/Dehaze';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import CloseIcon from '@mui/icons-material/Close';
import Collapse from '@mui/material/Collapse';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import './nav.css';

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState({});
  const navigate = useNavigate();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const toggleCollapse = (section) => {
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const allCollapsed = Object.values(expanded).every((val) => !val);

  // Social Media Links
  const socialLinks = {
    instagram: 'https://www.instagram.com/acmw_mitsoc',
    whatsapp: 'https://chat.whatsapp.com/DStjyiU0SpX79m5DVNRsPc',
    linkedin: 'https://www.linkedin.com/company/acm-mitsoc',
  };

  // Navigation Options
  const options = {
    'PAST EVENTS': [
      { label: 'ACM INAUGURATION', path: '/inauguration', scrollTo: 'ACM INAUGURATION' },
      { label: 'UI-DESIGN CONTEST', path: '/inauguration', scrollTo: 'UI-DESIGN CONTEST' },
      { label: 'CLUB CATALYST', path: '/inauguration', scrollTo: 'CLUB CATALYST' },
    ],
    'UPCOMING EVENTS': [
      { label: 'WOMEN\'S DAY CELEBRATION', path: '/womens-day' },
    ],
    // 'ACM CREW': [
    //   { label: 'CORE TEAM', path: '/crew/core-team' },
    //   { label: 'TECHNICAL TEAM', path: '/crew/technical-team' },
    //   { label: 'DESIGN TEAM', path: '/crew/design-team' },
    //   { label: 'SOCIAL MEDIA TEAM', path: '/crew/social-media-team' },
    //   { label: 'EVENTS TEAM', path: '/crew/events-team' },
    // ],
  };

  // Drawer Content
  const DrawerList = (
    <Box sx={{ width: 300, padding: '10px', position: 'relative', minHeight: '100vh' }} role="presentation">
      {/* Close Button */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button onClick={toggleDrawer(false)}>
          <CloseIcon />
        </Button>
      </Box>

      <List>
        {Object.keys(options).map((section) => (
          <div key={section}>
            <ListItemButton
              onClick={() => toggleCollapse(section)}
              style={{
                backgroundColor: expanded[section] ? '#2196f3' : 'transparent',
                color: expanded[section] ? 'white' : 'black',
                transition: 'background-color 0.3s ease',
              }}
            >
              {expanded[section] ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
              <ListItemText primary={section} />
            </ListItemButton>

            <Collapse in={expanded[section]} timeout="auto" unmountOnExit>
              <List sx={{ paddingLeft: '20px', color: '#63798A' }}>
                {options[section].map((item) => (
                  <ListItem key={item.label} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(item.path, { state: { scrollTo: item.scrollTo } });
                        setOpen(false);
                      }}
                    >
                      <ListItemText primary={item.label} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </div>
        ))}
      </List>

      <hr style={{ margin: '20px 0', borderColor: '#ccc' }} />

      <p style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '10px' }}>
        Connect with Us
      </p>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
        <Button
          onClick={() => window.open(socialLinks.instagram)}
          sx={{ color: 'white', backgroundColor: '#E1306C', '&:hover': { backgroundColor: '#C13584' } }}>
          <FaInstagram />
        </Button>
        <Button
          onClick={() => window.open(socialLinks.whatsapp)}
          sx={{ color: 'white', backgroundColor: '#25D366', '&:hover': { backgroundColor: '#128C7E' } }}>
          <FaWhatsapp />
        </Button>
        <Button
          onClick={() => window.open(socialLinks.linkedin)}
          sx={{ color: 'white', backgroundColor: '#0A66C2', '&:hover': { backgroundColor: '#004182' } }}>
          <FaLinkedin />
        </Button>
      </Box>

      {/* Report an Issue */}
      {allCollapsed && (
        <p style={{ position: 'absolute', bottom: '90px', width: '100%', padding: '20px 0', textAlign: 'center' }}>
          Report issues: <a href="mailto:ayanmulani158@gmail.com">ACM TECH-TEAM</a>
        </p>
      )}
    </Box>
  );

  return (
    <div className='nav'>
      <div className="nav-logo">
        <img src="/ACM-LOG.png" alt="ACM-W Logo" />
      </div>

      <Button
        onClick={toggleDrawer(true)}
        className="drawer-button"
        sx={{
          marginRight: '20px',
          fontWeight: 'bold',
        }}
      >
        <DehazeIcon sx={{ fontSize: 35 }} />
      </Button>

      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}