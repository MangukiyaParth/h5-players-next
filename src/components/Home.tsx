"use client";
import Link from 'next/link';
import { Card, CardMedia, Typography } from '@mui/material';
import React, { useEffect, useState, JSX } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import useScreenWidth from "@/hooks/useScreenWidth";
import { fetchGameList, fetchPopulerList } from '@/app/lib/games';

export const GameThumb = ({name, video, image, link, height}: {name: string, video: string, image: string, link: string, height: string}) => {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
    return (
        <Link style={{ display: 'block' }} href={link} className="gameThumbLink" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <div style={{ borderRadius: '10px', overflow: 'hidden', border: isHovering ? '2px solid #6842ff' : ''}}>
                {
                    isHovering && <>
                    <div className="gameThumbLinkDesktop">{name}</div>
                    <div className="gameThumbVideo">
                        <video loop autoPlay preload="none" playsInline>
                        <source src={video} type="video/mp4" />
                        </video>
                    </div>
                    <div className="gameThumb_gradient"></div>
                    </>
                }
                <CardMedia component="img" style={{ height: (height ? height : '185px') }} image={image} alt={name} />
            </div>
        </Link>
    );
};

export const GameMobileThumb = ({name, video, image, link}: {name: string, video: string, image: string, link: string}) => {
    return (
        <Link style={{ display: 'block' }} href={link} className="gameThumbLink">
            <div style={{ borderRadius: '10px', overflow: 'hidden' }}>
                <div className="gameThumbLinkDesktop">{name}</div>
                <div className="gameThumbVideo">
                    <video loop autoPlay preload="none" playsInline>
                    <source src={video} type="video/mp4" />
                    </video>
                </div>
                <div className="gameThumb_gradient"></div>
                <CardMedia component="img" image={image} alt={name} />
            </div>
        </Link>
    );
};

export const HomeComponent = () => {
    const screenWidth = useScreenWidth();
    const [populerGameDetails, setPopulerGameDetails] = useState<{ name: string; video: string; image: string; slug: string; category: string; }[]>([]);
    const [actionGameDetails, setActionGameDetails] = useState<{ name: string; video: string; image: string; slug: string; category: string; }[]>([]);
    const [arcadeGameDetails, setArcadeGameDetails] = useState<{ name: string; video: string; image: string; slug: string; category: string; }[]>([]);
    const [multiplayerGameDetails, setMultiplayerGameDetails] = useState<{ name: string; video: string; image: string; slug: string; category: string; }[]>([]);
    const [runnerGameDetails, setRunnerGameDetails] = useState<{ name: string; video: string; image: string; slug: string; category: string; }[]>([]);
    const [sportsGameDetails, setSportsGameDetails] = useState<{ name: string; video: string; image: string; slug: string; category: string; }[]>([]);
    const [puzzleGameDetails, setPuzzleGameDetails] = useState<{ name: string; video: string; image: string; slug: string; category: string; }[]>([]);
    const [racingGameDetails, setRacingGameDetails] = useState<{ name: string; video: string; image: string; slug: string; category: string; }[]>([]);
    const [strategyGameDetails, setStrategyGameDetails] = useState<{ name: string; video: string; image: string; slug: string; category: string; }[]>([]);
    useEffect(()=>{
        getDetails();
    },[]);

    const getDetails = async () => {
        let populergameData = await fetchPopulerList();
        if(populergameData && populergameData.success && populergameData.data){
            setPopulerGameDetails(populergameData.data);
        }
        let actiongameData = await fetchGameList('Action', true);
        if(actiongameData && actiongameData.success && actiongameData.data){
            setActionGameDetails(actiongameData.data);
        }
        let arcadeGameData = await fetchGameList('Arcade', true);
        if(arcadeGameData && arcadeGameData.success && arcadeGameData.data){
            setArcadeGameDetails(arcadeGameData.data);
        }
        let multiplayerGameData = await fetchGameList('Multiplayer', true);
        if(multiplayerGameData && multiplayerGameData.success && multiplayerGameData.data){
            setMultiplayerGameDetails(multiplayerGameData.data);
        }
        let runnerGameData = await fetchGameList('Runner', true);
        if(runnerGameData && runnerGameData.success && runnerGameData.data){
            setRunnerGameDetails(runnerGameData.data);
        }
        let sportsGameData = await fetchGameList('Sports', true);
        if(sportsGameData && sportsGameData.success && sportsGameData.data){
            setSportsGameDetails(sportsGameData.data);
        }
        let puzzleGameData = await fetchGameList('puzzle', true);
        if(puzzleGameData && puzzleGameData.success && puzzleGameData.data){
            setPuzzleGameDetails(puzzleGameData.data);
        }
        let racingGameData = await fetchGameList('racing', true);
        if(racingGameData && racingGameData.success && racingGameData.data){
            setRacingGameDetails(racingGameData.data);
        }
        let strategyGameData = await fetchGameList('strategy', true);
        if(strategyGameData && strategyGameData.success && strategyGameData.data){
            setStrategyGameDetails(strategyGameData.data);
        }
    }
    return (
        <>
        {
            (screenWidth > 450) &&
            <Carousel showArrows={true} autoPlay={false} showThumbs={false} showStatus={false} centerMode={true} centerSlidePercentage={(screenWidth <= 1050) ? 50 : 33.33}>
                {
                    populerGameDetails.reduce<JSX.Element[]>((acc, game, index) => {
                        
                        // Check if index is the start of a group
                        const isStartGroup = index === 1 || index === 6;
                        const isEndGroup = index === 4 || index === 9;
                    
                        if (isStartGroup) {
                            acc.push(
                                <div key={`group-${index}`}  className="multi-game-slide">
                                    {populerGameDetails
                                        .slice(index, index + 4) // Get the next 4 items
                                        .map((groupedGame, i) => (
                                            <div key={index + i} style={{ margin: '0 5px', position: 'relative' }}>
                                                <GameThumb 
                                                    link={`/game/${groupedGame.slug}`} 
                                                    name={groupedGame.name} 
                                                    video={`/${groupedGame.video}`} 
                                                    image={`/${groupedGame.image}`} 
                                                    height="90px" 
                                                />
                                            </div>
                                        ))}
                                </div>
                            );
                            return acc;
                        }
                    
                        // Ensure skipped items aren't duplicated
                        if ((index > 1 && index <= 4) || (index > 6 && index <= 9)) return acc;
                    
                        // Render single elements outside groups
                        acc.push(
                            <div key={index} style={{ margin: '0 5px', position: 'relative' }}>
                                <GameThumb 
                                    link={`/game/${game.slug}`} 
                                    name={game.name} 
                                    video={`/${game.video}`} 
                                    image={`/${game.image}`} 
                                    height=""  
                                />
                            </div>
                        );
                    
                        return acc;
                    }, [])
                }
            </Carousel>
        }
        {
            (screenWidth <= 450) &&
            <Carousel showArrows={true} autoPlay={false} showThumbs={false} showStatus={false} centerMode={true} centerSlidePercentage={(screenWidth <= 450) ? 100 : ((screenWidth <= 1050) ? 50 : 33.33)}>
                {
                    populerGameDetails.map((game, index) => (
                        <div key={index} style={{ margin: '0 5px', position: 'relative' }}>
                            <GameThumb link={`/game/${game.slug}`} name={game.name} video={game.video} image={game.image} height="" />
                        </div>
                    ))
                }
            </Carousel>
        }
        <Typography variant="h6" gutterBottom sx={{ marginTop: 4 }}>
            Action Games
        </Typography>
        <Carousel showArrows={true} autoPlay={false} showThumbs={false} showStatus={false} centerMode={true} centerSlidePercentage={(screenWidth <= 1050) ? 50 : 33.33}>
            {
                actionGameDetails.map((game, index) => (
                    <div key={index} style={{ margin: '0 5px', position: 'relative' }}>
                        <GameThumb link={`/game/${game.slug}`} name={game.name} video={game.video} image={game.image} height="" />
                    </div>
                ))
            }
        </Carousel>
        
        <Typography variant="h6" gutterBottom sx={{ marginTop: 4 }}>
            Arcade Games
        </Typography>
        <Carousel showArrows={true} autoPlay={false} showThumbs={false} showStatus={false} centerMode={true} centerSlidePercentage={(screenWidth <= 1050) ? 50 : 33.33}>
            {
                arcadeGameDetails.map((game, index) => (
                    <div key={index} style={{ margin: '0 5px', position: 'relative' }}>
                        <GameThumb link={`/game/${game.slug}`} name={game.name} video={game.video} image={game.image} height="" />
                    </div>
                ))
            }
        </Carousel>

        <Typography variant="h6" gutterBottom sx={{ marginTop: 4 }}>
            Multiplayer Games
        </Typography>
        <Carousel showArrows={true} autoPlay={false} showThumbs={false} showStatus={false} centerMode={true} centerSlidePercentage={(screenWidth <= 1050) ? 50 : 33.33}>
            {
                multiplayerGameDetails.map((game, index) => (
                    <div key={index} style={{ margin: '0 5px', position: 'relative' }}>
                        <GameThumb link={`/game/${game.slug}`} name={game.name} video={game.video} image={game.image} height="" />
                    </div>
                ))
            }
        </Carousel>

        <Typography variant="h6" gutterBottom sx={{ marginTop: 4 }}>
            Runner Games
        </Typography>
        <Carousel showArrows={true} autoPlay={false} showThumbs={false} showStatus={false} centerMode={true} centerSlidePercentage={(screenWidth <= 1050) ? 50 : 33.33}>
            {
                runnerGameDetails.map((game, index) => (
                    <div key={index} style={{ margin: '0 5px', position: 'relative' }}>
                        <GameThumb link={`/game/${game.slug}`} name={game.name} video={game.video} image={game.image} height="" />
                    </div>
                ))
            }
        </Carousel>

        <Typography variant="h6" gutterBottom sx={{ marginTop: 4 }}>
            Sports Games
        </Typography>
        <Carousel showArrows={true} autoPlay={false} showThumbs={false} showStatus={false} centerMode={true} centerSlidePercentage={(screenWidth <= 1050) ? 50 : 33.33}>
            {
                sportsGameDetails.map((game, index) => (
                    <div key={index} style={{ margin: '0 5px', position: 'relative' }}>
                        <GameThumb link={`/game/${game.slug}`} name={game.name} video={game.video} image={game.image} height="" />
                    </div>
                ))
            }
        </Carousel>

        <Typography variant="h6" gutterBottom sx={{ marginTop: 4 }}>
            Puzzle Games
        </Typography>
        <Carousel showArrows={true} autoPlay={false} showThumbs={false} showStatus={false} centerMode={true} centerSlidePercentage={(screenWidth <= 1050) ? 50 : 33.33}>
            {
                puzzleGameDetails.map((game, index) => (
                    <div key={index} style={{ margin: '0 5px', position: 'relative' }}>
                        <GameThumb link={`/game/${game.slug}`} name={game.name} video={game.video} image={game.image} height="" />
                    </div>
                ))
            }
        </Carousel>

        <Typography variant="h6" gutterBottom sx={{ marginTop: 4 }}>
            Racing Games
        </Typography>
        <Carousel showArrows={true} autoPlay={false} showThumbs={false} showStatus={false} centerMode={true} centerSlidePercentage={(screenWidth <= 1050) ? 50 : 33.33}>
            {
                racingGameDetails.map((game, index) => (
                    <div key={index} style={{ margin: '0 5px', position: 'relative' }}>
                        <GameThumb link={`/game/${game.slug}`} name={game.name} video={game.video} image={game.image} height="" />
                    </div>
                ))
            }
        </Carousel>

        <Typography variant="h6" gutterBottom sx={{ marginTop: 4 }}>
            Strategy Games
        </Typography>
        <Carousel showArrows={true} autoPlay={false} showThumbs={false} showStatus={false} centerMode={true} centerSlidePercentage={(screenWidth <= 1050) ? 50 : 33.33}>
            {
                strategyGameDetails.map((game, index) => (
                    <div key={index} style={{ margin: '0 5px', position: 'relative' }}>
                        <GameThumb link={`/game/${game.slug}`} name={game.name} video={game.video} image={game.image} height="" />
                    </div>
                ))
            }
        </Carousel>
        </>
    );
}