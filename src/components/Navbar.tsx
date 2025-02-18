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
import Link from 'next/link';

const Navbar = ({drawerShow, setDrawerShow}: {drawerShow: boolean, setDrawerShow: any}) => {
  const handleDrawer = () => {
    setDrawerShow(!drawerShow);
  };
  return (
    <AppBar position="fixed" sx={{ backdropFilter: 'blur(8px)', backgroundColor: '#212233e6', boxShadow: '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)', zIndex: (theme) => theme.zIndex.drawer + 1 
    }}>
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
                },
              ]}
            >
              <MenuOpenIcon sx={[
                !drawerShow && { transform: 'rotate(180deg)' },
              ]} />
          </IconButton>
          <Link href="/">
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'stretch' }}>
              <img src="/H5players.png" className="H5PlayerIcon" alt="logo" style={{ height: 35, marginRight: 10 }} />
              <img src="/H5playersText.svg" alt="logo" style={{ height: 40, marginRight: 10 }} />
            </div>
          </Link>
        </div>
        <TextField
          style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', border: 'none', display: 'none' }}
          variant="outlined"
          size="small"
          placeholder="Search"
          color="primary"
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
        <div style={{ display: 'none' }}>
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