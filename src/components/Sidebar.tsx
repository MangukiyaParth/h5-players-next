"use client";

import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useEffect, useState } from 'react';
import Divider from '@mui/material/Divider';
import { useMediaQuery } from 'react-responsive';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Sidebar = ({drawerShow}: {drawerShow: boolean}) => {
    const theme = useTheme();
    const isMobile = useMediaQuery({ maxWidth: 450 });
    const [drawerOpen, setDrawerOpen] = useState(true);
    useEffect(() => {
        setDrawerOpen(isMobile);
    }, [isMobile]);
    return (
        <Drawer
            variant="persistent"
            style={{ background: '#0C0D14',borderRight: '1px solid #28293d', transition: 'visibility 0s, all .15s ease-in-out' }}
            sx={{
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { boxSizing: 'border-box', overflow: 'hidden' },
            }}
            onMouseEnter={() => setDrawerOpen(true)}
            onMouseLeave={() => setDrawerOpen(false)}
            open={drawerShow}
            className={`dark-theme navbar ${drawerOpen ? 'full-sidebar' : 'half-sidebar'}`}
        >
            <Toolbar />
            <Box sx={{ overflowY: drawerOpen ? 'auto' : 'hidden', overflowX: 'hidden' }}>
                <List>
                    <ListItem component="a" href="/" key="Home" className="menu-item">
                        <ListItemIcon style={{ minWidth: 45 }}>
                            <img src={"/menu/Home.svg"} alt="Home" />
                        </ListItemIcon>
                        <ListItemText primary="Home" className="menu-title"/>
                    </ListItem>
                    <ListItem component="a" href="/recent" key="Recent" className="menu-item" style={{ display: 'none' }}>
                        <ListItemIcon style={{ minWidth: 45 }}>
                            <img src={"/menu/Recent.svg"} alt="Recently Played" />
                        </ListItemIcon>
                        <ListItemText primary="Recently Played" className="menu-title"/>
                    </ListItem>
                    <ListItem component="a" href="/new" key="New" className="menu-item" style={{ display: 'none' }}>
                        <ListItemIcon style={{ minWidth: 45 }}>
                            <img src={"/menu/New.svg"} alt="New" />
                        </ListItemIcon>
                        <ListItemText primary="New" className="menu-title"/>
                    </ListItem>
                    <ListItem component="a" href="/hot" key="Trending" className="menu-item" style={{ display: 'none' }}>
                        <ListItemIcon style={{ minWidth: 45 }}>
                            <img src={"/menu/Trending.svg"} alt="Trending" />
                        </ListItemIcon>
                        <ListItemText primary="Trending now" className="menu-title"/>
                    </ListItem>
                    <ListItem component="a" href="/c/Multiplayer" key="Multiplayer" className="menu-item">
                        <ListItemIcon style={{ minWidth: 45 }}>
                            <img src={"/menu/Multiplayer.svg"} alt="Multiplayer" />
                        </ListItemIcon>
                        <ListItemText primary="Multiplayer" className="menu-title"/>
                    </ListItem>
                    <Divider variant="middle" style={{ borderColor: '#ffffff1f', margin: '8px 16px' }} />
                    <ListItem component="a" href="/t/2-players" key="2 Players" className="menu-item" style={{ display: 'none' }}>
                        <ListItemIcon style={{ minWidth: 45 }}>
                            <img src={"/menu/2players.svg"} alt="2 Players" />
                        </ListItemIcon>
                        <ListItemText primary="2 Players" className="menu-title"/>
                    </ListItem>
                    <ListItem component="a" href="/c/Action" key="Action" className="menu-item">
                        <ListItemIcon style={{ minWidth: 45 }}>
                            <img src={"/menu/Action.svg"} alt="Action" />
                        </ListItemIcon>
                        <ListItemText primary="Action" className="menu-title"/>
                    </ListItem>
                    <ListItem component="a" href="/c/adventure" key="Adventure" className="menu-item"  style={{ display: 'none' }}>
                        <ListItemIcon style={{ minWidth: 45 }}>
                            <img src={"/menu/Adventure.svg"} alt="Adventure" />
                        </ListItemIcon>
                        <ListItemText primary="Adventure" className="menu-title"/>
                    </ListItem>
                    <ListItem component="a" href="/t/basketball" key="Basketball" className="menu-item" style={{ display: 'none' }}>
                        <ListItemIcon style={{ minWidth: 45 }}>
                            <img src={"/menu/Basketball.svg"} alt="Basketball" />
                        </ListItemIcon>
                        <ListItemText primary="Basketball" className="menu-title"/>
                    </ListItem>
                    <ListItem component="a" href="/c/beauty" key="Beauty" className="menu-item" style={{ display: 'none' }}>
                        <ListItemIcon style={{ minWidth: 45 }}>
                            <img src={"/menu/Beauty.svg"} alt="Beauty" />
                        </ListItemIcon>
                        <ListItemText primary="Beauty" className="menu-title"/>
                    </ListItem>
                    <ListItem component="a" href="/t/bike" key="Bike" className="menu-item" style={{ display: 'none' }}>
                        <ListItemIcon style={{ minWidth: 45 }}>
                            <img src={"/menu/Bike.svg"} alt="Bike" />
                        </ListItemIcon>
                        <ListItemText primary="Bike" className="menu-title"/>
                    </ListItem>
                    <ListItem component="a" href="/t/car" key="Car" className="menu-item" style={{ display: 'none' }}>
                        <ListItemIcon style={{ minWidth: 45 }}>
                            <img src={"/menu/Car.svg"} alt="Car" />
                        </ListItemIcon>
                        <ListItemText primary="Car" className="menu-title"/>
                    </ListItem>
                    <ListItem component="a" href="/c/casual" key="Casual" className="menu-item" style={{ display: 'none' }}>
                        <ListItemIcon style={{ minWidth: 45 }}>
                            <img src={"/menu/Casual.svg"} alt="Casual" />
                        </ListItemIcon>
                        <ListItemText primary="Casual" className="menu-title"/>
                    </ListItem>
                    <ListItem component="a" href="/c/clicker" key="Clicker" className="menu-item" style={{ display: 'none' }}>
                        <ListItemIcon style={{ minWidth: 45 }}>
                            <img src={"/menu/Clicker.svg"} alt="Clicker" />
                        </ListItemIcon>
                        <ListItemText primary="Clicker" className="menu-title"/>
                    </ListItem>
                    <ListItem component="a" href="/t/controller" key="Controller" className="menu-item" style={{ display: 'none' }}>
                        <ListItemIcon style={{ minWidth: 45 }}>
                            <img src={"/menu/Controller.svg"} alt="Controller" />
                        </ListItemIcon>
                        <ListItemText primary="Controller" className="menu-title"/>
                    </ListItem>
                    <ListItem component="a" href="/t/dressup" key="Dress Up" className="menu-item" style={{ display: 'none' }}>
                        <ListItemIcon style={{ minWidth: 45 }}>
                            <img src={"/menu/DressUp.svg"} alt="DressUp" />
                        </ListItemIcon>
                        <ListItemText primary="Dress Up" className="menu-title"/>
                    </ListItem>
                    <ListItem component="a" href="/c/racing" key="Racing" className="menu-item">
                        <ListItemIcon style={{ minWidth: 45 }}>
                            <img src={"/menu/Driving.svg"} alt="Racing" />
                        </ListItemIcon>
                        <ListItemText primary="Racing" className="menu-title"/>
                    </ListItem>
                    <ListItem component="a" href="/t/escape" key="Escape" className="menu-item" style={{ display: 'none' }}>
                        <ListItemIcon style={{ minWidth: 45 }}>
                            <img src={"/menu/Escape.svg"} alt="Escape" />
                        </ListItemIcon>
                        <ListItemText primary="Escape" className="menu-title"/>
                    </ListItem>
                    <ListItem component="a" href="/t/flash" key="Flash" className="menu-item" style={{ display: 'none' }}>
                        <ListItemIcon style={{ minWidth: 45 }}>
                            <img src={"/menu/Flash.svg"} alt="Flash" />
                        </ListItemIcon>
                        <ListItemText primary="Flash" className="menu-title"/>
                    </ListItem>
                    <ListItem component="a" href="/t/first-person-shooter" key="FPS" className="menu-item" style={{ display: 'none' }}>
                        <ListItemIcon style={{ minWidth: 45 }}>
                            <img src={"/menu/FPS.svg"} alt="FPS" />
                        </ListItemIcon>
                        <ListItemText primary="FPS" className="menu-title"/>
                    </ListItem>
                    <ListItem component="a" href="/t/horror" key="Horror" className="menu-item" style={{ display: 'none' }}>
                        <ListItemIcon style={{ minWidth: 45 }}>
                            <img src={"/menu/Horror.svg"} alt="Horror" />
                        </ListItemIcon>
                        <ListItemText primary="Horror" className="menu-title"/>
                    </ListItem>
                    <ListItem component="a" href="/c/io" key="io" className="menu-item" style={{ display: 'none' }}>
                        <ListItemIcon style={{ minWidth: 45 }}>
                            <img src={"/menu/io.svg"} alt=".io" />
                        </ListItemIcon>
                        <ListItemText primary=".io" className="menu-title"/>
                    </ListItem>
                    <ListItem component="a" href="/t/mahjong" key="Mahjong" className="menu-item" style={{ display: 'none' }}>
                        <ListItemIcon style={{ minWidth: 45 }}>
                            <img src={"/menu/Mahjong.svg"} alt="Mahjong" />
                        </ListItemIcon>
                        <ListItemText primary="Mahjong" className="menu-title"/>
                    </ListItem>
                    <ListItem component="a" href="/t/minecraft" key="Minecraft" className="menu-item" style={{ display: 'none' }}>
                        <ListItemIcon style={{ minWidth: 45 }}>
                            <img src={"/menu/Minecraft.svg"} alt="Minecraft" />
                        </ListItemIcon>
                        <ListItemText primary="Minecraft" className="menu-title"/>
                    </ListItem>
                    <ListItem component="a" href="/t/pool" key="Pool" className="menu-item" style={{ display: 'none' }}>
                        <ListItemIcon style={{ minWidth: 45 }}>
                            <img src={"/menu/Pool.svg"} alt="Pool" />
                        </ListItemIcon>
                        <ListItemText primary="Pool" className="menu-title"/>
                    </ListItem>
                    <ListItem component="a" href="/c/puzzle" key="Puzzle" className="menu-item">
                        <ListItemIcon style={{ minWidth: 45 }}>
                            <img src={"/menu/Puzzle.svg"} alt="Puzzle" />
                        </ListItemIcon>
                        <ListItemText primary="Puzzle" className="menu-title"/>
                    </ListItem>
                    <ListItem component="a" href="/c/shooting" key="Shooting" className="menu-item" style={{ display: 'none' }}>
                        <ListItemIcon style={{ minWidth: 45 }}>
                            <img src={"/menu/Shooting.svg"} alt="Shooting" />
                        </ListItemIcon>
                        <ListItemText primary="Shooting" className="menu-title"/>
                    </ListItem>
                    <ListItem component="a" href="/t/soccer" key="Soccer" className="menu-item" style={{ display: 'none' }}>
                        <ListItemIcon style={{ minWidth: 45 }}>
                            <img src={"/menu/Soccer.svg"} alt="Soccer" />
                        </ListItemIcon>
                        <ListItemText primary="Soccer" className="menu-title"/>
                    </ListItem>
                    <ListItem component="a" href="/c/Sports" key="Sports" className="menu-item">
                        <ListItemIcon style={{ minWidth: 45 }}>
                            <img src={"/menu/Sports.svg"} alt="Sports" />
                        </ListItemIcon>
                        <ListItemText primary="Sports" className="menu-title"/>
                    </ListItem>
                    <ListItem component="a" href="/t/stickman" key="Stickman" className="menu-item" style={{ display: 'none' }}>
                        <ListItemIcon style={{ minWidth: 45 }}>
                            <img src={"/menu/Stickman.svg"} alt="Stickman" />
                        </ListItemIcon>
                        <ListItemText primary="Stickman" className="menu-title"/>
                    </ListItem>
                    <ListItem component="a" href="/t/tower-defense" key="TowerDefense" className="menu-item" style={{ display: 'none' }}>
                        <ListItemIcon style={{ minWidth: 45 }}>
                            <img src={"/menu/TowerDefense.svg"} alt="TowerDefense" />
                        </ListItemIcon>
                        <ListItemText primary="TowerDefense" className="menu-title"/>
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    );
};

export default Sidebar;