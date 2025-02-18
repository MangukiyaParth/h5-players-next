"use client";

import Navbar from '../components/Navbar';
import { Container, Typography } from '@mui/material';
import Sidebar from '@/components/Sidebar';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';
import { HomeComponent } from '@/components/Home';

export default function General({ children }: { children: React.ReactNode }) {
  const [drawerShow, setDrawerShow] = useState(true);
  return (
    <div>
      <CssBaseline />
      <Navbar drawerShow={drawerShow} setDrawerShow={setDrawerShow} />
      <Sidebar drawerShow={drawerShow} />

      <div style={{ marginTop: 10, marginLeft: drawerShow ? '60px' : 0 }}>
        <Container sx={{ marginTop: 10 }}>
          {children}
        </Container>
      </div>
    </div>
  );
}