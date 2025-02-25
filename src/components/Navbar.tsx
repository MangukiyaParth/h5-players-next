"use client";

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Link from 'next/link';

const Navbar = ({drawerShow, setDrawerShow}: {drawerShow: boolean, setDrawerShow: any}) => {
  const handleDrawer = () => {
    setDrawerShow(!drawerShow);
  };
  return (
    <AppBar className={ drawerShow ? 'drawer-show' : '' } position="fixed" sx={{ backdropFilter: 'blur(8px)', backgroundColor: '#212233e6', boxShadow: '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawer}
          edge="start"
          sx={[
            {
            mr: 2,
            '@media (max-width: 450px)': {
              mr: 0,
              order: 2,
            },
            },
          ]}
          >
            <MenuOpenIcon sx={[
              !drawerShow && { transform: 'rotate(180deg)' },
              {
                transition: 'transform 0.5s',
                '@media (max-width: 450px)': {
                  display: 'none'
                },
              },
            ]} />
            {
              !drawerShow && <ManageSearchIcon sx={[
                {
                  height: '1.8rem',
                  width: '1.8rem',
                  '@media (min-width: 450px)': {
                    display: 'none'
                  },
                }
              ]} />
            }
            {
              drawerShow && <KeyboardBackspaceIcon sx={[
                {
                  height: '1.8rem',
                  width: '1.8rem',
                  '@media (min-width: 450px)': {
                    display: 'none'
                  },
                }
              ]} />
            }
          </IconButton>
          <Link href="/" className="header-link">
            <div  className="header-logo">
              <img 
                src="/h5-players.png" 
                className="H5PlayerIcon" 
                alt="logo"
              />
              <img 
                src="/h5-players-text.svg" 
                alt="logo" 
                className="H5PlayerText" 
              />
            </div>
          </Link>
        </div>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search"
          color="primary"
          style={{ display: 'none' }}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon style={{color: 'rgb(170, 173, 190)'}} />
                </InputAdornment>
              ),
            },
          }}
          className="header-search"
        />
        <div className="header-action" style={{ display: 'none' }}>
          <Button variant="contained" color="inherit" sx={{ backgroundColor: '#ffffff1a', borderRadius: 30, padding: '10px', minWidth: 'auto', marginRight: 1 }}>
            <PeopleOutlineIcon />
          </Button>
          <Button variant="contained" color="inherit" sx={{ backgroundColor: '#ffffff1a', borderRadius: 30, padding: '10px', minWidth: 'auto', marginRight: 1 }}>
            <FavoriteBorderIcon />
          </Button>
          <Button variant="contained" color="primary" style={{ borderRadius: 30, textTransform: 'none', fontSize: '1rem' }}>
            Log in
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;