'use server';

import { unstable_noStore as noStore } from 'next/cache';

const games = [{
    "name": "100 Balls",
    "video": "games/100-balls/100-balls.mp4",
    "image": "games/100-balls/100-balls.png",
    "slug": "100-balls",
    "category": "Arcade",
    "populer": false,
    "description": "100 Balls is an engaging physics-based arcade game where players must control the flow of balls into rotating cups to score points. The game starts with 100 balls in a container at the top of the screen, and the player must tap to open a small gate, releasing them strategically into the moving cups below. Successfully landing balls in the cups allows them to keep circulating, while any balls that miss are lost forever."
}, 
{
    "name": "Alright Quiz",
    "video": "games/Alright-quiz/Alright-quiz.mp4",
    "image": "games/Alright-quiz/Alright-quiz.png",
    "slug": "alright-quiz",
    "category": "Arcade",
    "populer": false,
    "description": "Alright Quiz is a fun and challenging trivia game that tests your general knowledge with a variety of engaging questions. The game features multiple categories, including history, science, pop culture, geography, and more. Each round presents the player with a question and multiple-choice answers, requiring quick thinking and recall skills."
},
{
    "name": "Angry Heroes",
    "video": "games/Angry-heroes/Angry-heroes.mp4",
    "image": "games/Angry-heroes/Angry-heroes.png",
    "slug": "Angry-heroes",
    "category": "Arcade",
    "populer": false,
    "description": "Angry Heroes is a physics-based action game where players launch heroic warriors using a slingshot to defeat enemy bases. Similar to the classic Angry Birds, the game requires strategic aiming and force control to destroy fortresses and eliminate enemy soldiers."
},
{
    "name": "Babel",
    "video": "games/Babel/Babel.mp4",
    "image": "games/Babel/Babel.png",
    "slug": "alien-jump",
    "category": "babel",
    "populer": false,
    "description": "Babel is a delightful and addictive stacking game where players aim to build the tallest tower possible by carefully dropping blocks on top of one another. The game’s mechanics are simple: a block swings back and forth across the screen, and the player must tap at just the right moment to drop it onto the tower below. Precision and timing are crucial, as any misaligned drop causes the tower to become unstable."
},
{
    "name": "Chopper Scape",
    "video": "games/Chopper-scape/Chopper-scape.mp4",
    "image": "games/Chopper-scape/Chopper-scape.png",
    "slug": "chopper-scape",
    "category": "Arcade",
    "populer": false,
    "description": "Chopper Scape is an exhilarating side-scrolling arcade game that puts players in control of a helicopter navigating through a treacherous maze of obstacles. The controls are simple yet challenging: tap to ascend and release to descend, carefully avoiding walls, spikes, and moving hazards."
},
{
    "name": "Circle",
    "video": "games/Circle/Circle.mp4",
    "image": "games/Circle/Circle.png",
    "slug": "circle-pong",
    "category": "Arcade",
    "populer": false,
    "description": "Circle is a modern twist on the classic Pong game, offering a circular playing field and intense reflex-based gameplay. Players control a paddle that rotates around the edge of the circle, bouncing a ball back towards the center to keep it in play."
},
{
    "name": "Circle Traffic",
    "video": "games/Circle-traffic/Circle-traffic.mp4",
    "image": "games/Circle-traffic/Circle-traffic.png",
    "slug": "circle-traffic",
    "category": "Arcade",
    "populer": false,
    "description": "Circle Traffic is a fun and challenging traffic management game where players control cars circling a roundabout. The goal is to avoid crashes by tapping to speed up or slow down the cars as they enter and exit the circle."
},
{
    "name": "Color Snake",
    "video": "games/Color-snake/Color-snake.mp4",
    "image": "games/Color-snake/Color-snake.png",
    "slug": "color-snake",
    "category": "Arcade",
    "populer": true,
    "description": "Color Snake is a vibrant and fast-paced arcade game where players control a colorful snake navigating a path filled with obstacles. The twist is that the snake can only pass through obstacles of the same color, requiring quick reflexes and smart path-planning."
},
{
    "name": "DD Release",
    "video": "games/DD-release/DD-release.mp4",
    "image": "games/DD-release/DD-release.png",
    "slug": "dd-release",
    "category": "Arcade",
    "populer": false,
    "description": "DD Release is a fun and strategic bubble-shooting game where players aim to clear the screen by matching three or more bubbles of the same color. The game offers a relaxing yet engaging experience, as each level introduces new challenges, such as moving bubbles and limited shots."
},
{
    "name": "Disk Rush",
    "video": "games/Disk-rush/Disk-rush.mp4",
    "image": "games/Disk-rush/Disk-rush.png",
    "slug": "disk-rush",
    "category": "Arcade",
    "populer": false,
    "description": "Disk Rush is a lightning-fast reaction game where players must tap to stack disks on a moving platform. The disks move horizontally, and the challenge is to time the tap perfectly to place each one directly on top of the previous disk."
},
{
    "name": "Doodle",
    "video": "games/Doodle/Doodle.mp4",
    "image": "games/Doodle/Doodle.png",
    "slug": "doodle-drop",
    "category": "Arcade",
    "populer": false,
    "description": "Doodle is a fun and addictive jumping game where players control a cute doodle character that bounces on platforms to reach higher altitudes. The goal is to climb as high as possible while avoiding obstacles and enemies along the way."
},
{
    "name": "Dragon Jump",
    "video": "games/Dragon-jump/Dragon-jump.mp4",
    "image": "games/Dragon-jump/Dragon-jump.png",
    "slug": "dragon-jump",
    "category": "Arcade",
    "populer": true,
    "description": "Dragon Jump is an action-packed arcade game where players control a fearless dragon warrior on a mission to climb a dangerous tower. The goal is to jump from platform to platform while defeating enemies that stand in the way."
},
{
    "name": "Draw In",
    "video": "games/Draw-in/Draw-in.mp4",
    "image": "games/Draw-in/Draw-in.png",
    "slug": "draw-in",
    "category": "Arcade",
    "populer": false,
    "description": "Draw In is a creative puzzle game where players must estimate the perimeter of different shapes by drawing a single continuous line. The challenge is to make the line as close to the exact length as possible without exceeding it."
},
{
    "name": "Escape",
    "video": "games/Escape/Escape.mp4",
    "image": "games/Escape/Escape.png",
    "slug": "escape",
    "category": "Arcade",
    "populer": false,
    "description": "Escape is a fast-paced endless runner game where players navigate a character through an ever-changing labyrinth of obstacles. The goal is to dodge traps, jump over gaps, and slide under barriers while collecting coins and power-ups."
},
{
    "name": "Feed Monster",
    "video": "games/Feed-monster/Feed-monster.mp4",
    "image": "games/Feed-monster/Feed-monster.png",
    "slug": "feed-monster",
    "category": "Arcade",
    "populer": false,
    "description": "Feed Monster is a delightful puzzle game where players must guide food into the mouth of a hungry monster by drawing paths or using interactive objects. Each level presents a unique physics-based challenge, requiring creativity and problem-solving skills."
},
{
    "name": "Flying Bird",
    "video": "games/Flying-bird/Flying-bird.mp4",
    "image": "games/Flying-bird/Flying-bird.png",
    "slug": "flying-bird",
    "category": "Arcade",
    "populer": true,
    "description": "Flying Bird is an addictive arcade game inspired by the classic Flappy Bird. Players control a small bird that must navigate through a series of pipes without crashing. The controls are simple tap to make the bird flap its wings and keep it airborne. The challenge lies in timing each flap perfectly to avoid obstacles."
},
{
    "name": "Go Down",
    "video": "games/Go-down/Go-down.mp4",
    "image": "games/Go-down/Go-down.png",
    "slug": "go-down",
    "category": "Arcade",
    "populer": false,
    "description": "Go Down is a unique gravity-based platformer where players must descend through a tower filled with obstacles. Instead of jumping up, the goal is to carefully fall while avoiding spikes, moving platforms, and traps."
},
{
    "name": "Hextris",
    "video": "games/Hextris/Hextris.mp4",
    "image": "games/Hextris/Hextris.png",
    "slug": "hextris",
    "category": "Arcade",
    "populer": false,
    "description": "Hextris is a fast-paced puzzle game that combines elements of Tetris and hexagonal stacking. Players rotate a hexagon at the center of the screen to match falling colored blocks. When three or more blocks of the same color align, they disappear, earning points."
},
{
    "name": "Knife-ninja",
    "video": "games/Knife-ninja/Knife-ninja.mp4",
    "image": "games/Knife-ninja/Knife-ninja.png",
    "slug": "knife-ninja",
    "category": "Arcade",
    "populer": true,
    "description": "Knife Ninja is a reflex-based action game where players throw knives at a spinning target without hitting previously thrown blades. The goal is to hit all available spots on the target before moving to the next level."
},
{
    "name": "Lemonade",
    "video": "games/Lemonade/Lemonade.mp4",
    "image": "games/Lemonade/Lemonade.png",
    "slug": "lemonade",
    "category": "Arcade",
    "populer": false,
    "description": "Lemonade is a fun and strategic time-management game where players run a lemonade stand and must balance ingredients, pricing, and customer satisfaction to make the most profit. Players must adjust sugar levels, ice, and pricing based on customer preferences and changing weather conditions. If the lemonade is too sweet or too warm, customers will be unhappy, affecting sales."
},
{
    "name": "lifeline",
    "video": "games/lifeline/lifeline.mp4",
    "image": "games/lifeline/lifeline.png",
    "slug": "lifeline",
    "category": "Arcade",
    "populer": false,
    "description": "Lifeline is a thrilling arcade survival game where players must guide a small dot through a dangerous maze filled with obstacles, moving barriers, and sudden twists. The game requires quick reflexes and precise timing to navigate tight spaces and avoid traps."
},
{
    "name": "Pinball Space Adventures",
    "video": "games/Pinball-space-adventures/Pinball-space-adventures.mp4",
    "image": "games/Pinball-space-adventures/Pinball-space-adventures.png",
    "slug": "pinball-space-adventures",
    "category": "Arcade",
    "populer": true,
    "description": "Pinball Space Adventures takes classic pinball gameplay into outer space, offering a galactic twist on the traditional arcade game. Players must keep the ball in play using flippers while hitting special targets to activate bonuses and multipliers."
},
{
    "name": "Space Out",
    "video": "games/Space-out/Space-out.mp4",
    "image": "games/Space-out/Space-out.png",
    "slug": "space-out",
    "category": "Arcade",
    "populer": false,
    "description": "Space Out is an exciting arcade shooter where players control a spaceship fighting against waves of enemy invaders. The goal is to blast through enemy formations while dodging incoming fire and collecting power-ups."
},
{
    "name": "Surfer Cat",
    "video": "games/Surfer-cat/Surfer-cat.mp4",
    "image": "games/Surfer-cat/Surfer-cat.png",
    "slug": "surfer-cat",
    "category": "Arcade",
    "populer": false,
    "description": "Surfer Cat is a fun endless runner where players control a cool cat riding the waves on a surfboard. The objective is to avoid obstacles, perform tricks, and collect fish while staying on the surfboard as long as possible."
},
{
    "name": "Swing-hero",
    "video": "games/Swing-hero/Swing-hero.mp4",
    "image": "games/Swing-hero/Swing-hero.png",
    "slug": "swing-hero",
    "category": "Arcade",
    "populer": false,
    "description": "Swing Hero is a physics-based action game where players control a superhero swinging between buildings using a grappling hook. The goal is to swing as far as possible without crashing into obstacles or falling."
},
{
    "name": "Switch Dash",
    "video": "games/Switch-dash/Switch-dash.mp4",
    "image": "games/Switch-dash/Switch-dash.png",
    "slug": "switch-dash",
    "category": "Arcade",
    "populer": false,
    "description": "Switch Dash is a high-speed reflex game where players must navigate a cube through a neon track filled with color-coded obstacles. The twist? The cube can only pass through barriers that match its color, requiring quick thinking and rapid reactions."
},
{
    "name": "Whack A Mole",
    "video": "games/Whack-a-mole/Whack-a-mole.mp4",
    "image": "games/Whack-a-mole/Whack-a-mole.png",
    "slug": "whack-a-mole",
    "category": "Arcade",
    "populer": false,
    "description": "Whack A Mole is a modern take on the classic arcade game where players must quickly tap moles as they pop up from holes. The challenge lies in reacting quickly before the moles disappear while avoiding tapping on bombs or special trick moles."
},
{
    "name": "Zombie Crusher",
    "video": "games/Zombie-crusher/Zombie-crusher.mp4",
    "image": "games/Zombie-crusher/Zombie-crusher.png",
    "slug": "zombie-crusher",
    "category": "Arcade",
    "populer": false,
    "description": "Zombie Crusher is an action-packed survival game where players must drive a vehicle through a post-apocalyptic world filled with zombies. The goal is to run over as many zombies as possible while upgrading the vehicle to become stronger."
},
{
    "name": "Bounce",
    "video": "games/bounce/bounce.mp4",
    "image": "games/bounce/bounce.png",
    "slug": "bounce",
    "category": "Arcade",
    "populer": false,
    "description": "Bounce is a classic arcade-style platformer where players control a bouncing ball navigating through various obstacles, spikes, and moving platforms. The goal is to reach the end of each level while collecting coins and avoiding hazards."
},
{
    "name": "Airwar-1941",
    "video": "games/Airwar-1941/Airwar-1941.mp4",
    "image": "games/Airwar-1941/Airwar-1941.png",
    "slug": "airwar",
    "category": "Action",
    "populer": false,
    "description": "Airwar-1941 is a retro-style aerial combat game where players pilot a fighter plane during World War II. The objective is to shoot down enemy planes, dodge enemy fire, and complete dangerous missions to win the war."
},
{
    "name": "Alien Jump",
    "video": "games/Alien-Jump/Alien-Jump.mp4",
    "image": "games/Alien-Jump/Alien-Jump.png",
    "slug": "alien-jump",
    "category": "Action",
    "populer": true,
    "description": "Alien Jump is a gravity-based platformer where players control an alien trying to escape a mysterious planet by jumping from platform to platform. The challenge comes from moving and disappearing platforms, as well as obstacles like lasers and space debris."
},
{
    "name": "Caveman Adventures",
    "video": "games/Caveman-Adventures/Caveman-Adventures.mp4",
    "image": "games/Caveman-Adventures/Caveman-Adventures.png",
    "slug": "caveman-adventures",
    "category": "Action",
    "populer": false,
    "description": "Caveman Adventures is a fun side-scrolling platformer where players control a caveman on a journey to escape prehistoric dangers. The game features running, jumping, and dodging obstacles such as lava pits, dinosaurs, and rolling boulders."
},
{
    "name": "Clan Samurai",
    "video": "games/Clan-samurai/Clan-samurai.mp4",
    "image": "games/Clan-samurai/Clan-samurai.png",
    "slug": "clan-samurai",
    "category": "Action",
    "populer": false,
    "description": "Clan Samurai is an intense action game where players take on the role of a skilled samurai warrior defending their village against invading enemies. Players use swords, shurikens, and special combat techniques to defeat waves of foes."
},
{
    "name": "Dude Hack",
    "video": "games/Dude-hack/Dude-hack.mp4",
    "image": "games/Dude-hack/Dude-hack.png",
    "slug": "dude-hack",
    "category": "Action",
    "populer": false,
    "description": "Dude Hack is a puzzle-platformer where players control a hacker navigating through a cyber world filled with security systems, firewalls, and traps. The goal is to bypass obstacles by solving hacking puzzles, jumping over security lasers, and avoiding digital enemies."
},
{
    "name": "Fruit Chop Ninja",
    "video": "games/Fruit-chop-ninja/Fruit-chop-ninja.mp4",
    "image": "games/Fruit-chop-ninja/Fruit-chop-ninja.png",
    "slug": "fruit-chop-ninja",
    "category": "Action",
    "populer": true,
    "description": "Fruit Chop Ninja is a fast-paced slicing game where players must use their ninja blade to cut flying fruits before they fall off the screen. The challenge is to avoid slicing bombs while creating high-scoring combos."
},
{
    "name": "Hero Blaster",
    "video": "games/Hero-blaster/Hero-blaster.mp4",
    "image": "games/Hero-blaster/Hero-blaster.png",
    "slug": "hero-blaster",
    "category": "Action",
    "populer": false,
    "description": "Hero Blaster is an action-packed shooting game where players control a futuristic hero battling against waves of alien invaders. Armed with powerful blasters, players must aim and shoot at incoming enemies while dodging projectiles."
},
{
    "name": "Jatpack Man Rush",
    "video": "games/Jatpack-man-rush/Jatpack-man-rush.mp4",
    "image": "games/Jatpack-man-rush/Jatpack-man-rush.png",
    "slug": "jetpackman-rush",
    "category": "Action",
    "populer": true,
    "description": "Jetpackman Rush is an endless flying game where players control a hero equipped with a jetpack, navigating through a maze of obstacles and enemy drones. The objective is to survive as long as possible while collecting coins and power-ups."
},
{
    "name": "Jetpack Boy",
    "video": "games/Jetpack-boy/Jetpack-boy.mp4",
    "image": "games/Jetpack-boy/Jetpack-boy.png",
    "slug": "jetpack-boy",
    "category": "Action",
    "populer": false,
    "description": "Jetpack Boy is a fun arcade-style endless runner where players control a boy with a jetpack, soaring through the skies while avoiding hazards like missiles and electric barriers. The game challenges players to time their movements carefully to collect coins and avoid crashing."
},
{
    "name": "Panic Drop",
    "video": "games/Panic-drop/Panic-drop.mp4",
    "image": "games/Panic-drop/Panic-drop.png",
    "slug": "panic-drop",
    "category": "Action",
    "populer": false,
    "description": "Panic Drop is a vertical platformer where players must guide a character falling through an endless series of platforms while avoiding spikes, enemies, and disappearing floors. The objective is to survive as long as possible while collecting points."
},
{
    "name": "Rise Up",
    "video": "games/Rise-up/Rise-up.mp4",
    "image": "games/Rise-up/Rise-up.png",
    "slug": "rise-up",
    "category": "Action",
    "populer": true,
    "description": "Rise Up is a physics-based arcade game where players must protect a rising balloon from obstacles using a movable shield. The challenge lies in predicting the movement of falling objects and clearing a safe path for the balloon."
},
{
    "name": "Rolling Panda",
    "video": "games/Rolling-panda/Rolling-panda.mp4",
    "image": "games/Rolling-panda/Rolling-panda.png",
    "slug": "rolling-panda",
    "category": "Action",
    "populer": false,
    "description": "Rolling Panda is a charming physics-based game where players control a cute panda rolling down a series of platforms. The goal is to land safely on each platform while avoiding gaps and traps. The game includes power-ups such as double jumps and slow-motion effects to assist in navigating tricky sections."
},
{
    "name": "Sky Heroes",
    "video": "games/Sky-heroes/Sky-heroes.mp4",
    "image": "games/Sky-heroes/Sky-heroes.png",
    "slug": "swing-hero",
    "category": "Action",
    "populer": false,
    "description": "Sky Heroes is an action-packed flying game where players control heroic pilots battling against enemy aircraft in intense dogfights. The goal is to shoot down as many enemy planes as possible while avoiding incoming fire."
},
{
    "name": "Square Game",
    "video": "games/Square-game/Square-game.mp4",
    "image": "games/Square-game/Square-game.png",
    "slug": "squaregame",
    "category": "Action",
    "populer": true,
    "description": "Square Game is a minimalistic puzzle game where players control a small square navigating through a maze of obstacles. The goal is to reach the exit while avoiding moving barriers, spikes, and other hazards."
},
{
    "name": "Stick Soldier",
    "video": "games/Stick-soldier/stick-soldier.mp4",
    "image": "games/Stick-soldier/stick-soldier.png",
    "slug": "stick-soldiere",
    "category": "Action",
    "populer": false,
    "description": "Stick Soldier is a physics-based balancing game where players control a stick figure trying to cross dangerous gaps using a self-extending stick. The challenge is to calculate the exact length needed to bridge each gap without falling."
},
{
    "name": "Swing Robber",
    "video": "games/Swing-robber/Swing-robber.mp4",
    "image": "games/Swing-robber/Swing-robber.png",
    "slug": "swing-robber",
    "category": "Action",
    "populer": false,
    "description": "Swing Robber is a heist-themed arcade game where players control a skilled thief swinging between rooftops to escape from the police. Timing each swing perfectly is crucial to avoid falling or getting caught."
},
{
    "name": "Tomato Crush",
    "video": "games/Tomato-crush/Tomato-crush.mp4",
    "image": "games/Tomato-crush/Tomato-crush.png",
    "slug": "tomato-crush",
    "category": "Action",
    "populer": false,
    "description": "Tomato Crush is a satisfying arcade game where players must smash falling tomatoes by tapping the screen before they reach the bottom. The goal is to crush as many tomatoes as possible without missing any."
},
{
    "name": "Tower Boom",
    "video": "games/Tower-boom/Tower-boom.mp4",
    "image": "games/Tower-boom/Tower-boom.png",
    "slug": "tower-boom",
    "category": "Action",
    "populer": false,
    "description": "Tower Boom is a physics-based demolition game where players strategically place explosives to bring down towers in the most efficient way possible. Each level features a different structure, requiring careful planning to achieve maximum destruction."
},
{
    "name": "Train Bandit",
    "video": "games/Train-bandit/Train-bandit.mp4",
    "image": "games/Train-bandit/Train-bandit.png",
    "slug": "trainbandit",
    "category": "Action",
    "populer": false,
    "description": "Train Bandit is a wild-west action game where players control an outlaw robbing a moving train while avoiding security guards. The goal is to jump between train cars, collect loot, and take down enemies before getting caught."
},
{
    "name": "Zombie Smash",
    "video": "games/Zombie-smash/Zombie-smash.mp4",
    "image": "games/Zombie-smash/Zombie-smash.png",
    "slug": "zombie-smash",
    "category": "Action",
    "populer": false,
    "description": "Zombie Smash is a thrilling survival game where players must defend their base against waves of zombies. Using a variety of weapons, from baseball bats to machine guns, players must eliminate incoming zombies before they breach the defenses."
},
{
    "name": "Igloria",
    "video": "games/igloria/igloria.mp4",
    "image": "games/igloria/igloria.png",
    "slug": "igloria",
    "category": "Action",
    "populer": false,
    "description": "Igloria is a beautifully designed fantasy adventure game where players embark on a journey through a mystical world filled with secrets, challenges, and hidden treasures. The goal is to explore different landscapes, solve puzzles, and overcome obstacles to unlock new areas."
},
{
    "name": "Zombi World",
    "video": "games/zombi-world/zombi-world.mp4",
    "image": "games/zombi-world/zombi-world.png",
    "slug": "zombi-world",
    "category": "Action",
    "populer": false,
    "description": "Zombi World is an action-packed survival game set in a post-apocalyptic world overrun by zombies. Players must navigate through dangerous environments, scavenging for weapons, supplies, and shelter while fighting off relentless waves of the undead."
},
{
    "name": "8 Ball Pool With Friends",
    "video": "games/8-ball-pool-with-friends/8-ball-pool-with-friends.mp4",
    "image": "games/8-ball-pool-with-friends/8-ball-pool-with-friends.png",
    "slug": "8-ball-pro",
    "category": "Multiplayer",
    "populer": false,
    "description": "8 Ball Pool With Friends is a competitive multiplayer pool game where players can challenge their friends or compete against other players worldwide. The game follows classic 8-ball pool rules, with smooth cue controls and realistic physics."
},
{
    "name": "Arena Noob vs Pro",
    "video": "games/arena-noob-vs-pro/arena-noob-vs-pro.mp4",
    "image": "games/arena-noob-vs-pro/arena-noob-vs-pro.png",
    "slug": "arena-noob-vs-pro",
    "category": "Multiplayer",
    "populer": false,
    "description": "Arena Noob vs Pro is a hilarious battle game where players start as weak 'noobs' and must defeat enemies to level up into powerful 'pros' The goal is to survive and grow stronger by upgrading weapons and skills."
},
{
    "name": "ludo Rumble",
    "video": "games/ludo-rumble/ludo-rumble.mp4",
    "image": "games/ludo-rumble/ludo-rumble.png",
    "slug": "ludo-rumble",
    "category": "Multiplayer",
    "populer": false,
    "description": "Ludo Rumble is an exciting multiplayer board game that brings the classic game of Ludo to digital platforms. Players roll the dice and move their tokens strategically to reach the finish line while competing against opponents."
},
{
    "name": "Snakes N Ladders",
    "video": "games/snakes-n-ladders/snakes-n-ladders.mp4",
    "image": "games/snakes-n-ladders/snakes-n-ladders.png",
    "slug": "snakes-n-ladders",
    "category": "Multiplayer",
    "populer": true,
    "description": "Snakes N Ladders is a digital adaptation of the classic board game where players roll dice and climb ladders to advance while avoiding snakes that send them backward. The game offers different board designs, multiplayer modes, and AI opponents. A unique twist includes power-ups that allow players to block opponents, skip turns, or gain extra dice rolls."
},
{
    "name": "Dude Action",
    "video": "games/dude-action/dude-action.mp4",
    "image": "games/dude-action/dude-action.png",
    "slug": "dude-action",
    "category": "Runner",
    "populer": false,
    "description": "Dude Action is a side-scrolling shooter where players control a tough action hero battling against waves of enemies. Armed with different guns and explosives, players must navigate through levels filled with obstacles, enemies, and boss fights."
},
{
    "name": "Mine Rusher",
    "video": "games/mine-rusher/mine-rusher.mp4",
    "image": "games/mine-rusher/mine-rusher.png",
    "slug": "mine-rusher",
    "category": "Runner",
    "populer": false,
    "description": "Mine Rusher is an endless runner set in a blocky, Minecraft-inspired world where players control a character running through a mine filled with obstacles and treasures. Players must tap to turn at the right time, avoid falling into gaps, and collect coins to unlock new skins and abilities. The game gets progressively faster, making quick reflexes essential."
},
{
    "name": "Picture-Runner",
    "video": "games/picture-runner/picture-runner.mp4",
    "image": "games/picture-runner/picture-runner.png",
    "slug": "picture-runner",
    "category": "Runner",
    "populer": false,
    "description": "Picture-Runner is a unique endless runner where the game’s environment changes based on images that appear in the background. Players must adapt their running strategy based on the terrain formed by each new image."
},
{
    "name": "Samup",
    "video": "games/samup/samup.mp4",
    "image": "games/samup/samup.png",
    "slug": "samup",
    "category": "Runner",
    "populer": false,
    "description": "Samup is a samurai-themed action game where players take on the role of a legendary warrior battling enemies in an endless combat arena. The goal is to defeat as many foes as possible while dodging attacks and using special moves."
},
{
    "name": "8 Ball Pro",
    "video": "games/8-ball-pro/8-ball-pro.mp4",
    "image": "games/8-ball-pro/8-ball-pro.png",
    "slug": "picture-runner",
    "category": "Sports",
    "populer": false,
    "description": "8 Ball Pro is a realistic pool simulation game where players can compete against AI or real opponents in a classic 8-ball format. The game offers smooth controls, precise aiming mechanics, and customizable cue sticks."
},
{
    "name": "Dunk Shot",
    "video": "games/Dunk Shot/dunk-shot.mp4",
    "image": "games/Dunk Shot/dunk-shot.png",
    "slug": "dunk-shot",
    "category": "Sports",
    "populer": false,
    "description": "Dunk Shot is a fun and addictive basketball game where players aim to make consecutive hoop shots by adjusting the angle and power of their throw. The goal is to score as many baskets as possible before missing."
},
{
    "name": "Dunk Line",
    "video": "games/dunk-line/dunk-line.mp4",
    "image": "games/dunk-line/dunk-line.png",
    "slug": "dunk-line",
    "category": "Sports",
    "populer": false,
    "description": "Dunk Line is a creative puzzle game where players draw lines to guide basketballs into hoops. The challenge is to create the right path while avoiding obstacles and time-based challenges. The game introduces different difficulty levels, with some requiring players to think outside the box to get the ball into the hoop. Power-ups like slow motion and bounce boosters help players complete tricky levels."
},
{
    "name": "Mini Golf",
    "video": "games/mini-golf/mini-golf.mp4",
    "image": "games/mini-golf/mini-golf.png",
    "slug": "mini-golf",
    "category": "Sports",
    "populer": false,
    "description": "Mini Golf is a relaxing sports game where players can test their putting skills across various creative and challenging courses. The objective is to sink the ball in the fewest strokes possible while navigating tricky obstacles like ramps, tunnels, and water hazards."
},
{
    "name": "Word Search",
    "video": "games/word-search/word-search.mp4",
    "image": "games/word-search/word-search.png",
    "slug": "cword-search",
    "category": "puzzle",
    "populer": true,
    "description": "Word Search is a classic puzzle game where players must find hidden words within a grid of letters. Words can be placed horizontally, vertically, or diagonally, making each puzzle a fun challenge. The game includes multiple difficulty levels and different themed categories, such as animals, science, and geography. A timer-based mode adds extra excitement for those who enjoy racing against the clock."
},
{
    "name": "Word Haven",
    "video": "games/word-haven/word-haven.mp4",
    "image": "games/word-haven/word-haven.png",
    "slug": "word-haven",
    "category": "puzzle",
    "populer": false,
    "description": "Word Haven is an engaging word puzzle game where players must create words from a given set of letters to fill in a crossword-style board. The challenge increases as new words and tricky letter combinations are introduced."
},
{
    "name": "Make7",
    "video": "games/make7/make7.mp4",
    "image": "games/make7/make7.png",
    "slug": "make7",
    "category": "puzzle",
    "populer": true,
    "description": "Make7 is a number-merging puzzle game where players combine numbered tiles to reach the target sum of 7. The game requires strategic placement of tiles to prevent the board from filling up too quickly. Players must think ahead and use power-ups to clear obstacles or merge tiles more efficiently. The game’s increasing difficulty ensures that each session is both challenging and rewarding."
},
{
    "name": "Nullify",
    "video": "games/nullify/nullify.mp4",
    "image": "games/nullify/nullify.png",
    "slug": "nullify",
    "category": "puzzle",
    "populer": false,
    "description": "Nullify is a unique math-based puzzle game where players must strategically combine numbers to cancel them out and clear the board. Each level presents a new challenge, requiring logical thinking and careful planning."
},
{
    "name": "Dont Miss",
    "video": "games/dont-miss/dont-miss.mp4",
    "image": "games/dont-miss/dont-miss.png",
    "slug": "dont-miss",
    "category": "puzzle",
    "populer": false,
    "description": "Don't Miss is a fast-paced reaction game where players must tap at the right moment to shoot an object into a moving target. The challenge is to hit the target perfectly while avoiding obstacles and misfires. As the game progresses, targets move unpredictably, and speed increases, making precision crucial. Power-ups help by slowing down targets or providing multiple shots."
},
{
    "name": "The Great Indian Quiz",
    "video": "games/the-great-indian-quiz/the-great-indian-quiz.mp4",
    "image": "games/the-great-indian-quiz/the-great-indian-quiz.png",
    "slug": "the-great-indian-quiz",
    "category": "puzzle",
    "populer": false,
    "description": "The Great Indian Quiz is a trivia game that tests players’ knowledge of Indian culture, history, sports, and entertainment. Each round consists of multiple-choice questions with increasing difficulty. Players can use lifelines, such as '50/50' or 'Ask a Friend,'' to help answer tough questions. Competing against friends or other players in timed quizzes adds to the excitement."
},
{
    "name": "Squarea",
    "video": "games/squarea/squarea.mp4",
    "image": "games/squarea/squarea.png",
    "slug": "squarea",
    "category": "puzzle",
    "populer": false,
    "description": "Squarea is a logic-based puzzle game where players must fit different-sized squares into a grid without overlapping. The challenge is to find the perfect arrangement before running out of space. As players progress, the puzzles become more complex, requiring advanced spatial reasoning. The game includes a relaxing mode for casual play and a timed mode for those who enjoy a challenge."
},
{
    "name": "Pattern",
    "video": "games/pattern/pattern.mp4",
    "image": "games/pattern/pattern.png",
    "slug": "pattern",
    "category": "puzzle",
    "populer": false,
    "description": "Pattern is a memory and logic game where players must recreate a displayed pattern by tapping on a grid in the correct sequence. The challenge lies in remembering the sequence as patterns become more complex."
},
{
    "name": "Jelly Merger",
    "video": "games/jelly-merger/jelly-merger.mp4",
    "image": "games/jelly-merger/jelly-merger.png",
    "slug": "jelly-merger",
    "category": "puzzle",
    "populer": false,
    "description": "Jelly Merger is a colorful merging game where players combine jellies of the same number to create larger ones and clear the board. The goal is to reach the highest possible number before running out of space."
},
{
    "name": "Connect4",
    "video": "games/connect4/connect4.mp4",
    "image": "games/connect4/connect4.png",
    "slug": "connect4",
    "category": "puzzle",
    "populer": true,
    "description": "Connect4 is a classic two-player strategy game where players take turns dropping colored discs into a vertical grid. The objective is to be the first to connect four discs in a row, column, or diagonal. The game offers different AI difficulty levels and an online multiplayer mode for competitive play. Special variations, like larger grids and time-based rounds, add extra excitement."
},
{
    "name": "Bridges",
    "video": "games/bridges/bridges.mp4",
    "image": "games/bridges/bridges.png",
    "slug": "bridges",
    "category": "puzzle",
    "populer": false,
    "description": "Bridges is a strategic puzzle game where players must connect islands by building bridges while following specific rules. Each island has a number indicating how many bridges it requires, and players must ensure all islands are connected correctly."
},
{
    "name": "Sorting Balls",
    "video": "games/sorting-balls/sorting-balls.mp4",
    "image": "games/sorting-balls/sorting-balls.png",
    "slug": "sorting-balls",
    "category": "puzzle",
    "populer": false,
    "description": "Sorting Balls is a fun and addictive sorting puzzle where players must organize colored balls into their respective tubes. The challenge increases as more colors and limited space make organizing the balls trickier."
},
{
    "name": "5 Fruit",
    "video": "games/5-fruit/5-fruit.mp4",
    "image": "games/5-fruit/5-fruit.png",
    "slug": "5-fruit",
    "category": "puzzle",
    "populer": false,
    "description": "5 Fruit is a matching puzzle game where players must connect five or more of the same fruit to clear them from the board. The longer the chain, the more points earned. The game includes power-ups like bombs and shuffle options to help when the board gets too crowded. Different game modes, such as time attack and endless mode, offer varied challenges."
},
{
    "name": "Happy Glass",
    "video": "games/happy-glass/happy-glass.mp4",
    "image": "games/happy-glass/happy-glass.png",
    "slug": "happy-glass",
    "category": "puzzle",
    "populer": false,
    "description": "Happy Glass is a physics-based puzzle game where players must draw lines to guide water into an empty glass until it reaches the required level. The challenge lies in drawing the most efficient path while using the least amount of ink."
},
{
    "name": "Equalz",
    "video": "games/equalz/equalz.mp4",
    "image": "games/equalz/equalz.png",
    "slug": "equalz",
    "category": "puzzle",
    "populer": false,
    "description": "Equalz is a number-matching puzzle game where players must combine tiles to reach a target sum. The challenge is to strategically clear the board while making the best possible number combinations. As levels progress, larger numbers and limited moves make the game increasingly difficult. Special bonus tiles help players clear tricky situations."
},
{
    "name": "Blue Block",
    "video": "games/blue-block/blue-block.mp4",
    "image": "games/blue-block/blue-block.png",
    "slug": "blue-block",
    "category": "puzzle",
    "populer": false,
    "description": "Blue Block is a sliding puzzle game where players must move blocks to clear a path for the blue block to reach the exit. The challenge lies in figuring out the correct sequence of moves within the limited space. The game features hundreds of levels, each with different difficulty levels. Some puzzles require planning several moves ahead to solve efficiently."
},
{
    "name": "Thiefs Journey",
    "video": "games/thiefs-journey/thiefs-journey.mp4",
    "image": "games/thiefs-journey/thiefs-journey.png",
    "slug": "thiefs-journey",
    "category": "puzzle",
    "populer": false,
    "description": "Thief's Journey is a stealth-based puzzle game where players control a sneaky thief navigating through security systems to steal valuable treasures. Each level presents different challenges, such as motion sensors, patrolling guards, and locked doors. Players must use disguises, hide in shadows, and time their movements carefully to avoid detection."
},
{
    "name": "Pixel-Slide",
    "video": "games/pixel-slide/pixel-slide.mp4",
    "image": "games/pixel-slide/pixel-slide.png",
    "slug": "pixel-slide",
    "category": "puzzle",
    "populer": false,
    "description": "Pixel Slide is a unique pixel art puzzle game where players must slide pixel blocks to recreate a given image. The challenge is to arrange the blocks in the correct positions while following limited moves. As levels progress, more complex images and restricted movements make the game increasingly challenging. Players can unlock new pixel designs and themes as they complete puzzles."
},
{
    "name": "Make5",
    "video": "games/make5/make5.mp4",
    "image": "games/make5/make5.png",
    "slug": "make5",
    "category": "puzzle",
    "populer": false,
    "description": "Make5 is a tile-merging puzzle game where players must combine numbered tiles to create the highest number possible before running out of space. The game requires strategic placement of tiles to set up high-scoring combos. As the board fills up, players must plan moves carefully to prevent getting stuck."
},
{
    "name": "2048",
    "video": "games/2048/2048.mp4",
    "image": "games/2048/2048.png",
    "slug": "2048",
    "category": "puzzle",
    "populer": true,
    "description": "2048 is a highly popular sliding tile puzzle where players combine matching numbers to reach the ultimate tile—2048. The challenge is to move the board efficiently while preventing it from filling up too quickly. Players must think ahead and make strategic moves to set up chain reactions and high-number merges. Advanced players aim for even higher tiles beyond 2048 for a greater challenge."
},
{
    "name": "Mergis",
    "video": "games/mergis/mergis.mp4",
    "image": "games/mergis/mergis.png",
    "slug": "mergis",
    "category": "puzzle",
    "populer": false,
    "description": "Mergis is a fun and strategic merging game where players combine identical blocks to form higher-numbered tiles. The objective is to merge as many tiles as possible before running out of space. The game features different power-ups that help players clear blocks or rearrange the board when stuck. As the game progresses, the board fills up faster, requiring careful planning and quick decision-making."
},
{
    "name": "Kuizu",
    "video": "games/kuizu/kuizu.mp4",
    "image": "games/kuizu/kuizu.png",
    "slug": "kuizu",
    "category": "puzzle",
    "populer": false,
    "description": "Kuizu is a trivia-based game that challenges players with a variety of general knowledge questions across different categories, including history, science, entertainment, and sports. Players must answer multiple-choice questions correctly within a time limit. Bonus points are awarded for consecutive correct answers, encouraging players to build streaks."
},
{
    "name": "Sudoku",
    "video": "games/sudoku/sudoku.mp4",
    "image": "games/sudoku/sudoku.png",
    "slug": "sudoku",
    "category": "puzzle",
    "populer": false,
    "description": "Sudoku is a classic logic puzzle game where players must fill a 9x9 grid with numbers 1-9, ensuring that no number repeats within the same row, column, or 3x3 section. The game offers multiple difficulty levels, ranging from beginner-friendly puzzles to expert challenges. A hint system is available to assist players stuck on tricky puzzles."
},
{
    "name": "Slot-Machine",
    "video": "games/slot-machine/slot-machine.mp4",
    "image": "games/slot-machine/slot-machine.png",
    "slug": "slot-machine",
    "category": "puzzle",
    "populer": false,
    "description": "Slot-Machine is a virtual casino game where players spin the reels in hopes of landing winning combinations of symbols. The game features classic slot machine mechanics with bonus rounds, free spins, and multipliers. Players can place bets and unlock different slot machine themes, each offering unique bonuses and payout structures."
},
{
    "name": "Words-Swipe",
    "video": "games/words-swipe/words-swipe.mp4",
    "image": "games/words-swipe/words-swipe.png",
    "slug": "words-swipe",
    "category": "puzzle",
    "populer": false,
    "description": "Words Swipe is a word puzzle game where players swipe letters to form words and clear the board. Each level presents a new set of letters and a unique challenge, requiring players to think creatively. The game offers bonus words that provide extra points, and daily challenges keep the gameplay fresh. As players advance, the puzzles become more complex, testing vocabulary and pattern recognition skills."
},
{
    "name": "Words Story",
    "video": "games/words-story/words-story.mp4",
    "image": "games/words-story/words-story.png",
    "slug": "words-story",
    "category": "puzzle",
    "populer": false,
    "description": "Words Story is a word-based escape game where players must solve word puzzles to help the main character break free from prison. Each correct word unlocks new clues and advances the story. The game starts with simple puzzles but gradually becomes more challenging, requiring players to use hints and think outside the box."
},
{
    "name": "Guess the word",
    "video": "games/guess-the-word/guess-the-word.mp4",
    "image": "games/guess-the-word/guess-the-word.png",
    "slug": "guess-the-word",
    "category": "puzzle",
    "populer": false,
    "description": "Guess the Word is a word puzzle game that challenges players to identify hidden words based on given clues or scrambled letters. The game features multiple levels with increasing difficulty, testing players' vocabulary and logical thinking."
},
{
    "name": "Hill Climber",
    "video": "games/hill-climber/hill-climber.mp4",
    "image": "games/hill-climber/hill-climber.png",
    "slug": "hill-climber",
    "category": "racing",
    "populer": false,
    "description": "Hill Climber is an exciting physics-based driving game where players must navigate rough terrains, hills, and obstacles without flipping over. The objective is to travel as far as possible while collecting fuel and coins. Players can upgrade their vehicles for better speed, grip, and fuel efficiency."
},
{
    "name": "Hero X Test",
    "video": "games/hero-x-test/hero-x-test.mp4",
    "image": "games/hero-x-test/hero-x-test.png",
    "slug": "hero-x-test",
    "category": "racing",
    "populer": false,
    "description": "Hero X Test is a superhero training game where players must complete various challenges to test their hero’s abilities. The tasks range from reflex-based tests to logic puzzles and strength challenges. Players can upgrade their hero’s powers, unlock new costumes, and compete against AI opponents in special test battles."
},
{
    "name": "Rampage Road",
    "video": "games/rampage-road/rampage-road.mp4",
    "image": "games/rampage-road/rampage-road.png",
    "slug": "rampage-road",
    "category": "racing",
    "populer": false,
    "description": "Rampage Road is a high-speed action game where players drive through a chaotic city, avoiding police and smashing obstacles in a thrilling car chase. The game features various vehicles, each with unique handling and abilities. Players can upgrade their cars for better speed, armor, and weaponry."
},
{
    "name": "Furious Road",
    "video": "games/furious-road/furious-road.mp4",
    "image": "games/furious-road/furious-road.png",
    "slug": "furious-road",
    "category": "racing",
    "populer": false,
    "description": "Furious Road is a fast-paced combat racing game inspired by post-apocalyptic car battles. Players must shoot down enemy vehicles while navigating rough terrain and avoiding traps. The game includes different weapons and armor upgrades, allowing players to customize their vehicles for maximum destruction. Survival mode challenges players to last as long as possible against waves of enemies."
},
{
    "name": "Rolly Vortex",
    "video": "games/rolly-vortex/rolly-vortex.mp4",
    "image": "games/rolly-vortex/rolly-vortex.png",
    "slug": "rolly-vortex",
    "category": "racing",
    "populer": false,
    "description": "Rolly Vortex is a fast-paced reflex game where players control a rolling ball traveling through a twisting tunnel filled with obstacles. The goal is to navigate the ball as far as possible while avoiding rotating barriers. As the game progresses, the speed increases, and obstacles become trickier, testing players' reaction time and hand-eye coordination."
},
{
    "name": "Crazy Car",
    "video": "games/crazy-car/crazy-car.mp4",
    "image": "games/crazy-car/crazy-car.png",
    "slug": "crazy-car",
    "category": "racing",
    "populer": false,
    "description": "Crazy Car is an action-packed driving game where players race through chaotic city streets while dodging traffic, police, and obstacles. The goal is to survive as long as possible while collecting coins and performing stunts. The game features multiple vehicles, each with different handling and abilities."
},
{
    "name": "Speed Racer",
    "video": "games/speed-racer/speed-racer.mp4",
    "image": "games/speed-racer/speed-racer.png",
    "slug": "speed-racer",
    "category": "racing",
    "populer": false,
    "description": "Speed Racer is a high-speed endless racing game where players control a futuristic car zooming through neon-lit highways. The objective is to dodge obstacles, overtake opponents, and collect boosters to increase speed. The game includes various track environments, from city highways to space-like neon roads."
},
{
    "name": "Mountain Riders",
    "video": "games/mountain-riders/mountain-riders.mp4",
    "image": "games/mountain-riders/mountain-riders.png",
    "slug": "mountain-riders",
    "category": "racing",
    "populer": false,
    "description": "Mountain Riders is an off-road biking game where players ride through rugged mountain trails, performing tricks and avoiding obstacles. The goal is to reach the finish line while maintaining balance on uneven terrain. The game features different bikes, each with unique handling and speed."
},
{
    "name": "eggy-car",
    "video": "games/eggy-car/eggy-car.mp4",
    "image": "games/eggy-car/eggy-car.png",
    "slug": "eggy-car",
    "category": "racing",
    "populer": false,
    "description": "Eggy Car is a physics-based driving game where players must transport a fragile egg across bumpy roads without breaking it. The challenge is to control speed and balance while navigating hills and obstacles. Players can collect coins to unlock new vehicles, each with different handling characteristics."
},
{
    "name": "Chicken Merge",
    "video": "games/chicken-merge/chicken-merge.mp4",
    "image": "games/chicken-merge/chicken-merge.png",
    "slug": "chicken-merge",
    "category": "strategy",
    "populer": false,
    "description": "Chicken Merge is a farm-themed merging game where players combine chickens to create stronger and faster egg-producing birds. The objective is to build the ultimate chicken coop and generate as many eggs as possible. Players can unlock special breeds, upgrade their farm, and automate egg collection for faster progression."
},
{
    "name": "Twenty-48",
    "video": "games/twenty-48/twenty-48.mp4",
    "image": "games/twenty-48/twenty-48.png",
    "slug": "twenty-48",
    "category": "strategy",
    "populer": false,
    "description": "Twenty-48 is a number-matching puzzle game where players combine blocks with the same number to reach 2048. The challenge is to carefully place and merge tiles before running out of space. Players must strategize to create high-value tiles while managing the limited board space."
},
{
    "name": "Tiny-Cars",
    "video": "games/tiny-cars/tiny-cars.mp4",
    "image": "games/tiny-cars/tiny-cars.png",
    "slug": "tiny-cars",
    "category": "strategy",
    "populer": false,
    "description": "Tiny Cars is a traffic management game where players control traffic lights to guide small cars safely through intersections. The goal is to avoid crashes while ensuring a smooth flow of traffic. As the game progresses, more cars and complex intersections appear, requiring quick reflexes and strategic planning."
},
{
    "name": "Toops",
    "video": "games/toops/toops.mp4",
    "image": "games/toops/toops.png",
    "slug": "toops",
    "category": "strategy",
    "populer": false,
    "description": "Toops is a physics-based ball shooter game where players launch balls to break numbered blocks before they reach the bottom. The challenge is to angle shots strategically to clear as many blocks as possible. The game offers different ball types and power-ups, such as multi-ball shots and explosive impacts."
},
{
    "name": "Play-Chess",
    "video": "games/play-chess/play-chess.mp4",
    "image": "games/play-chess/play-chess.png",
    "slug": "play-chess",
    "category": "strategy",
    "populer": false,
    "description": "Play Chess is a digital version of the classic strategy game, allowing players to challenge AI opponents or compete against other players online. The game features different difficulty levels, in-game hints, and move analysis to help players improve their skills."
},
{
    "name": "Scorpion Solitare",
    "video": "games/scorpion-solitare/scorpion-solitare.mp4",
    "image": "games/scorpion-solitare/scorpion-solitare.png",
    "slug": "scorpion-solitare",
    "category": "strategy",
    "populer": false,
    "description": "Scorpion Solitaire is a classic card game where players must arrange a deck of cards into four complete sequences from King to Ace in the same suit. The challenge is to strategically move cards while uncovering hidden ones. Unlike traditional solitaire, Scorpion Solitaire allows partial stack moves, making planning and foresight essential."
},
{
    "name": "Pirate Defence",
    "video": "games/pirate-defence/pirate-defence.mp4",
    "image": "games/pirate-defence/pirate-defence.png",
    "slug": "pirate-defence",
    "category": "strategy",
    "populer": false,
    "description": "Pirate Defence is a tower defense game where players must protect their treasure island from waves of attacking pirates. Players build defenses, upgrade cannons, and strategically place traps to stop enemy ships and invaders. The game features multiple island layouts, each requiring different strategies to defend successfully."
},
{
    "name": "Pirate Merge",
    "video": "games/pirate-merge/pirate-merge.mp4",
    "image": "games/pirate-merge/pirate-merge.png",
    "slug": "pirate-merge",
    "category": "strategy",
    "populer": false,
    "description": "Pirate Merge is a unique merging strategy game where players combine pirate ships, weapons, and crew members to create stronger units. The goal is to build the ultimate pirate fleet and conquer the seas. As players merge items, they unlock new ship upgrades and special abilities. Battles against enemy fleets require careful planning and tactical decision-making."
},
{
    "name": "Base Defence",
    "video": "games/base-defence/base-defence.mp4",
    "image": "games/base-defence/base-defence.png",
    "slug": "base-defence",
    "category": "strategy",
    "populer": false,
    "description": "Base Defence is a survival strategy game where players must defend their military base from waves of incoming enemies. The game features different weapon turrets, soldier reinforcements, and traps to keep invaders at bay. Players can upgrade their defenses, unlock new battle strategies, and fight increasingly powerful enemy waves."
},
{
    "name": "Cursed Treasure",
    "video": "games/cursed-treasure/cursed-treasure.mp4",
    "image": "games/cursed-treasure/cursed-treasure.png",
    "slug": "cursed-treasure",
    "category": "strategy",
    "populer": false,
    "description": "Cursed Treasure is a fantasy tower defense game where players take on the role of an evil overlord protecting their hoard of magical gems from heroic invaders. Players build defensive towers with different abilities, including archers, wizards, and demon summoners, to stop waves of heroes trying to steal their treasure."
},
{
    "name": "Mafia Wars",
    "video": "games/mafia-wars/mafia-wars.mp4",
    "image": "games/mafia-wars/mafia-wars.png",
    "slug": "mafia-wars",
    "category": "strategy",
    "populer": false,
    "description": "Mafia Wars is a crime-themed strategy game where players build their own criminal empire by recruiting gangsters, running illegal businesses, and taking over rival territories. The game features various missions, including bank heists, car chases, and underground fights. Players must manage resources wisely, upgrade their crew, and expand their influence across the city."
},
{
    "name": "Idle Miner",
    "video": "games/idle-miner/idle-miner.mp4",
    "image": "games/idle-miner/idle-miner.png",
    "slug": "idle-miner",
    "category": "strategy",
    "populer": false,
    "description": "Idle Miner is an idle clicker game where players manage a mining company, extracting valuable resources and upgrading equipment to maximize profits. Players can hire workers, automate production, and expand their mining empire across different locations. The game includes various resources, from coal and gold to rare diamonds, making upgrades and investment choices critical."
},
{
    "name": "Professor Bubble",
    "video": "games/professor-bubble/professor-bubble.mp4",
    "image": "games/professor-bubble/professor-bubble.png",
    "slug": "professor-bubble",
    "category": "strategy",
    "populer": false,
    "description": "Professor Bubble is a classic bubble shooter game where players must match three or more bubbles of the same color to clear them from the board. The goal is to clear all bubbles before they reach the bottom. As levels progress, bubbles appear in challenging patterns, requiring precise aiming and strategy. Power-ups like bombs and rainbow bubbles help players clear tricky sections."
}];

export async function fetchPopulerList() {
	noStore();
	try {
		let relatedGames = games.filter(g => g.populer === true).slice(0, 10);
        return {
            message: 'Success.',
            success: true,
            data: relatedGames
        };
	} catch (error) {
		console.error('Database Error:', error);
		// throw new Error('Failed to fetch setting data.');
	}
}

export async function fetchGameList(category: any, fromDashboard: any) {
	noStore();
	try {
		let relatedGames = games.filter(g => g.category === category);
        if(fromDashboard){
            relatedGames = relatedGames.slice(0, 9);
        }
        return {
            message: 'Success.',
            success: true,
            data: relatedGames
        };
	} catch (error) {
		console.error('Database Error:', error);
		// throw new Error('Failed to fetch setting data.');
	}
}

export async function fetchGameDetails(slug: any) {
	noStore();
	try {
		const gameDetails = games.find(game => game.slug === slug);
        return {
			message: 'Success.',
			success: true,
            data: gameDetails
		};
	} catch (error) {
		console.error('Database Error:', error);
		// throw new Error('Failed to fetch setting data.');
	}
}

export async function fetchGameDescription(slug: any) {
	noStore();
	try {
		const gameDetails = games.find(game => game.slug === slug);
        return {
			message: 'Success.',
			success: true,
            data: gameDetails?.description
		};
	} catch (error) {
		console.error('Database Error:', error);
		// throw new Error('Failed to fetch setting data.');
	}
}

export async function fetchRelatedGames(slug: any, listLength: number) {
	noStore();
    try {
        const gameDetails = games.find(game => game.slug === slug);
        if (!gameDetails) {
            return {
                message: 'Games not found.',
                success: false,
                data: null
            };
        }
        const category = gameDetails.category;
        if(!category) {
            return {
                message: 'Games not found.',
                success: false,
                data: null
            };
        }
        let relatedGames = games.filter(g => g.category === category && g.slug !== slug);
        if(listLength > 0){
            relatedGames = relatedGames.slice(0, 9);
        }
        return {
            message: 'Success.',
            success: true,
            data: relatedGames
        };
    } catch (error) {
		console.error('Database Error:', error);
		return {
            message: 'Games not found.',
            success: false,
            data: null
        };
	}
}