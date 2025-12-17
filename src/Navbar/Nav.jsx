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
import { useMediaQuery } from '@mui/material';
import './nav.css';

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState({});
  const [desktopDropdown, setDesktopDropdown] = useState({});
  const navigate = useNavigate();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const toggleCollapse = (section) => {
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const toggleDesktopDropdown = (section) => {
    setDesktopDropdown((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const closeAllDesktopDropdowns = () => {
    setDesktopDropdown({});
  };


  // ✅ Detect screen size
  const isMobile = useMediaQuery('(max-width: 768px)');

  // Navigation Options
  const options = {
    'PAST EVENTS': [
      { label: 'ACM INAUGURATION', path: '/inauguration', scrollTo: 'ACM INAUGURATION' },
      { label: 'UI-DESIGN CONTEST', path: '/inauguration', scrollTo: 'UI-DESIGN CONTEST' },
      { label: 'CLUB CATALYST', path: '/inauguration', scrollTo: 'CLUB CATALYST' },
    ],
    'UPCOMING EVENTS': [
      { label: 'Treasure Hunt', path: '/womens-day' },
    ],
  };

  // Extra single option
  const singleOptions = [
      { label: 'WHAT WE DO', path: '/what-we-do' } ,// ✅ new link,
            { label: 'Technical Hunt', path: '/game' } // ✅ new link

  ];

  // Drawer Content for Mobile
  const DrawerList = (
    <Box sx={{ width: 300, padding: '10px', position: 'relative', minHeight: '100vh' }} role="presentation">
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button onClick={toggleDrawer(false)}>
          <CloseIcon />
        </Button>
      </Box>

      {/* Section dropdowns */}
      <List>
        {Object.keys(options).map((section) => (
          <div key={section}>
            <ListItemButton
              onClick={() => toggleCollapse(section)}
              style={{
                backgroundColor: expanded[section] ? '#2196f3' : 'transparent',
                color: expanded[section] ? 'white' : 'black',
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

        {/* Single direct options */}
        {singleOptions.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              onClick={() => {
                navigate(item.path);
                setOpen(false);
              }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className='nav'>
      <div onClick={() => { navigate('/'); closeAllDesktopDropdowns(); }} className="nav-logo">
        <img src="/ACM-LOG.png" alt="ACM-W Logo" />
      </div>

      {/* ✅ Desktop: Show dropdown menus */}
      {!isMobile && (
        <div className="nav-links-desktop">
          {Object.keys(options).map((section) => (
            <div 
              key={section} 
              className="dropdown-container"
              onMouseEnter={() => toggleDesktopDropdown(section)}
              onMouseLeave={() => setDesktopDropdown(prev => ({ ...prev, [section]: false }))}
            >
              <div className="dropdown-trigger">
                <span>{section}</span>
                <ArrowDropDownIcon />
              </div>
              
              {desktopDropdown[section] && (
                <div className="dropdown-menu">
                  {options[section].map((item) => (
                    <div
                      key={item.label}
                      className="dropdown-item"
                      onClick={() => {
                        navigate(item.path, { state: { scrollTo: item.scrollTo } });
                        closeAllDesktopDropdowns();
                      }}
                    >
                      {item.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* ✅ Add WHO WE ARE as plain link */}
          {singleOptions.map((item) => (
            <div 
              key={item.label} 
              className="dropdown-container"
              onClick={() => navigate(item.path)}
            >
              <div className="dropdown-trigger">
                <span>{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ✅ Mobile: Show Drawer */}
      {isMobile && (
        <>
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
        </>
      )}
    </div>
  );
}