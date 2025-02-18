"use client";

import Navbar from '../components/Navbar';
import { Container, Typography } from '@mui/material';
import Sidebar from '@/components/Sidebar';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';
import { HomeComponent } from '@/components/Home';
import useScreenWidth from '@/hooks/useScreenWidth';

export default function Home() {
  const screenWidth = useScreenWidth();
  const [drawerShow, setDrawerShow] = useState(screenWidth > 450 ? true : false);
  return (
    <div>
      <CssBaseline />
      <Navbar drawerShow={drawerShow} setDrawerShow={setDrawerShow} />
      <Sidebar drawerShow={drawerShow} />

      <div style={{ marginTop: 10, marginLeft: drawerShow ? '60px' : 0 }}>
        <Container sx={{ marginTop: 10 }}>
          <HomeComponent />
        </Container>
      </div>
    </div>
  );
}