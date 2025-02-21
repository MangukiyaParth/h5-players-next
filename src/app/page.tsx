"use client";

import Navbar from '../components/Navbar';
import { Container, Typography } from '@mui/material';
import Sidebar from '@/components/Sidebar';
import CssBaseline from '@mui/material/CssBaseline';
import { useEffect, useState } from 'react';
import { HomeComponent } from '@/components/Home';
import { useMediaQuery } from 'react-responsive';

export default function Home() {
  const isMobile = useMediaQuery({ maxWidth: 450 });
  const [drawerShow, setDrawerShow] = useState(false);
  useEffect(() => {
    setDrawerShow(!isMobile);
  }, [isMobile]);
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