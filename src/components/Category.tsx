"use client";

import Navbar from '../components/Navbar';
import Sidebar from '@/components/Sidebar';
import CssBaseline from '@mui/material/CssBaseline';
import { useEffect, useState } from 'react';
import { GameThumb } from './Home';
import { fetchGameList } from '@/app/lib/games';

export const Category = ({id}:{id: any}) => {
    const [drawerShow, setDrawerShow] = useState(true);
    const [gameDetails, setGameDetails] = useState<{ name: string; video: string; image: string; slug: string; category: string; }[]>([]);
    useEffect(()=>{
        getDetails();
	},[]);

    const getDetails = async () => {
        let gameData = await fetchGameList(id, false);
        if(gameData && gameData.success && gameData.data){
            setGameDetails(gameData.data);
        }
    }
    return (
        <>
        <CssBaseline />
        <Navbar drawerShow={drawerShow} setDrawerShow={setDrawerShow} />
        <Sidebar drawerShow={drawerShow} />

        <div style={{ marginTop: 65, marginLeft: drawerShow ? '60px' : 0 }}>
            <div className="GameContainerGrid">
                <div className="GameContainerGamesWrapper">
                    {
                        gameDetails.map((game, index) => (
                            <div key={index} style={{ margin: '0 5px', position: 'relative' }}>
                                <GameThumb link={`/game/${game.slug}`} name={game.name} video={`${game.video}`} image={`/${game.image}`} height="" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
        </>
    );
}
