'use server';

import { unstable_noStore as noStore } from 'next/cache';

const games = [{
    "name": "100 Balls",
    "video": "games/100-balls/100-balls.mp4",
    "image": "games/100-balls/100-balls.png",
    "slug": "100-balls",
    "category": "Arcade",
    "populer": false
}, 
{
    "name": "Alright Quiz",
    "video": "games/Alright-quiz/Alright-quiz.mp4",
    "image": "games/Alright-quiz/Alright-quiz.png",
    "slug": "alright-quiz",
    "category": "Arcade",
    "populer": false
},
{
    "name": "Angry Heroes",
    "video": "games/Angry-heroes/Angry-heroes.mp4",
    "image": "games/Angry-heroes/Angry-heroes.png",
    "slug": "Angry-heroes",
    "category": "Arcade",
    "populer": false
},
{
    "name": "Babel",
    "video": "games/Babel/Babel.mp4",
    "image": "games/Babel/Babel.png",
    "slug": "alien-jump",
    "category": "babel",
    "populer": false
},
{
    "name": "Chopper Scape",
    "video": "games/Chopper-scape/Chopper-scape.mp4",
    "image": "games/Chopper-scape/Chopper-scape.png",
    "slug": "chopper-scape",
    "category": "Arcade",
    "populer": false
},
{
    "name": "Circle",
    "video": "games/Circle/Circle.mp4",
    "image": "games/Circle/Circle.png",
    "slug": "circle-pong",
    "category": "Arcade",
    "populer": false
},
{
    "name": "Circle Traffic",
    "video": "games/Circle-traffic/Circle-traffic.mp4",
    "image": "games/Circle-traffic/Circle-traffic.png",
    "slug": "circle-traffic",
    "category": "Arcade",
    "populer": false
},
{
    "name": "Color Snake",
    "video": "games/Color-snake/Color-snake.mp4",
    "image": "games/Color-snake/Color-snake.png",
    "slug": "color-snake",
    "category": "Arcade",
    "populer": true
},
{
    "name": "DD Release",
    "video": "games/DD-release/DD-release.mp4",
    "image": "games/DD-release/DD-release.png",
    "slug": "dd-release",
    "category": "Arcade",
    "populer": false
},
{
    "name": "Disk Rush",
    "video": "games/Disk-rush/Disk-rush.mp4",
    "image": "games/Disk-rush/Disk-rush.png",
    "slug": "disk-rush",
    "category": "Arcade",
    "populer": false
},
{
    "name": "Doodle",
    "video": "games/Doodle/Doodle.mp4",
    "image": "games/Doodle/Doodle.png",
    "slug": "doodle-drop",
    "category": "Arcade",
    "populer": false
},
{
    "name": "Dragon Jump",
    "video": "games/Dragon-jump/Dragon-jump.mp4",
    "image": "games/Dragon-jump/Dragon-jump.png",
    "slug": "dragon-jump",
    "category": "Arcade",
    "populer": true
},
{
    "name": "Draw In",
    "video": "games/Draw-in/Draw-in.mp4",
    "image": "games/Draw-in/Draw-in.png",
    "slug": "draw-in",
    "category": "Arcade",
    "populer": false
},
{
    "name": "Escape",
    "video": "games/Escape/Escape.mp4",
    "image": "games/Escape/Escape.png",
    "slug": "escape",
    "category": "Arcade",
    "populer": false
},
{
    "name": "Feed Monster",
    "video": "games/Feed-monster/Feed-monster.mp4",
    "image": "games/Feed-monster/Feed-monster.png",
    "slug": "feed-monster",
    "category": "Arcade",
    "populer": false
},
{
    "name": "Flying Bird",
    "video": "games/Flying-bird/Flying-bird.mp4",
    "image": "games/Flying-bird/Flying-bird.png",
    "slug": "flying-bird",
    "category": "Arcade",
    "populer": true
},
{
    "name": "Go Down",
    "video": "games/Go-down/Go-down.mp4",
    "image": "games/Go-down/Go-down.png",
    "slug": "go-down",
    "category": "Arcade",
    "populer": false
},
{
    "name": "Hextris",
    "video": "games/Hextris/Hextris.mp4",
    "image": "games/Hextris/Hextris.png",
    "slug": "hextris",
    "category": "Arcade",
    "populer": false
},
{
    "name": "Knife-ninja",
    "video": "games/Knife-ninja/Knife-ninja.mp4",
    "image": "games/Knife-ninja/Knife-ninja.png",
    "slug": "knife-ninja",
    "category": "Arcade",
    "populer": true
},
{
    "name": "Lemonade",
    "video": "games/Lemonade/Lemonade.mp4",
    "image": "games/Lemonade/Lemonade.png",
    "slug": "lemonade",
    "category": "Arcade",
    "populer": false
},
{
    "name": "lifeline",
    "video": "games/lifeline/lifeline.mp4",
    "image": "games/lifeline/lifeline.png",
    "slug": "lifeline",
    "category": "Arcade",
    "populer": false
},
{
    "name": "Pinball Space Adventures",
    "video": "games/Pinball-space-adventures/Pinball-space-adventures.mp4",
    "image": "games/Pinball-space-adventures/Pinball-space-adventures.png",
    "slug": "pinball-space-adventures",
    "category": "Arcade",
    "populer": true
},
{
    "name": "Space Out",
    "video": "games/Space-out/Space-out.mp4",
    "image": "games/Space-out/Space-out.png",
    "slug": "space-out",
    "category": "Arcade",
    "populer": false
},
{
    "name": "Surfer Cat",
    "video": "games/Surfer-cat/Surfer-cat.mp4",
    "image": "games/Surfer-cat/Surfer-cat.png",
    "slug": "surfer-cat",
    "category": "Arcade",
    "populer": false
},
{
    "name": "Swing-hero",
    "video": "games/Swing-hero/Swing-hero.mp4",
    "image": "games/Swing-hero/Swing-hero.png",
    "slug": "swing-hero",
    "category": "Arcade",
    "populer": false
},
{
    "name": "Switch Dash",
    "video": "games/Switch-dash/Switch-dash.mp4",
    "image": "games/Switch-dash/Switch-dash.png",
    "slug": "switch-dash",
    "category": "Arcade",
    "populer": false
},
{
    "name": "Whack A Mole",
    "video": "games/Whack-a-mole/Whack-a-mole.mp4",
    "image": "games/Whack-a-mole/Whack-a-mole.png",
    "slug": "whack-a-mole",
    "category": "Arcade",
    "populer": false
},
{
    "name": "Zombie Crusher",
    "video": "games/Zombie-crusher/Zombie-crusher.mp4",
    "image": "games/Zombie-crusher/Zombie-crusher.png",
    "slug": "zombie-crusher",
    "category": "Arcade",
    "populer": false
},
{
    "name": "Airwar-1941",
    "video": "games/Airwar-1941/Airwar-1941.mp4",
    "image": "games/Airwar-1941/Airwar-1941.png",
    "slug": "airwar",
    "category": "Action",
    "populer": false
},
{
    "name": "Alien Jump",
    "video": "games/Alien-Jump/Alien-Jump.mp4",
    "image": "games/Alien-Jump/Alien-Jump.png",
    "slug": "alien-jump",
    "category": "Action",
    "populer": true
},
{
    "name": "Caveman Adventures",
    "video": "games/Caveman-Adventures/Caveman-Adventures.mp4",
    "image": "games/Caveman-Adventures/Caveman-Adventures.png",
    "slug": "caveman-adventures",
    "category": "Action",
    "populer": false
},
{
    "name": "Clan Samurai",
    "video": "games/Clan-samurai/Clan-samurai.mp4",
    "image": "games/Clan-samurai/Clan-samurai.png",
    "slug": "clan-samurai",
    "category": "Action",
    "populer": false
},
{
    "name": "Dude Hack",
    "video": "games/Dude-hack/Dude-hack.mp4",
    "image": "games/Dude-hack/Dude-hack.png",
    "slug": "dude-hack",
    "category": "Action",
    "populer": false
},
{
    "name": "Fruit Chop Ninja",
    "video": "games/Fruit-chop-ninja/Fruit-chop-ninja.mp4",
    "image": "games/Fruit-chop-ninja/Fruit-chop-ninja.png",
    "slug": "fruit-chop-ninja",
    "category": "Action",
    "populer": true
},
{
    "name": "Hero Blaster",
    "video": "games/Hero-blaster/Hero-blaster.mp4",
    "image": "games/Hero-blaster/Hero-blaster.png",
    "slug": "hero-blaster",
    "category": "Action",
    "populer": false
},
{
    "name": "Jatpack Man Rush",
    "video": "games/Jatpack-man-rush/Jatpack-man-rush.mp4",
    "image": "games/Jatpack-man-rush/Jatpack-man-rush.png",
    "slug": "jetpackman-rush",
    "category": "Action",
    "populer": true
},
{
    "name": "Jetpack Boy",
    "video": "games/Jetpack-boy/Jetpack-boy.mp4",
    "image": "games/Jetpack-boy/Jetpack-boy.png",
    "slug": "jetpack-boy",
    "category": "Action",
    "populer": false
},
{
    "name": "Panic Drop",
    "video": "games/Panic-drop/Panic-drop.mp4",
    "image": "games/Panic-drop/Panic-drop.png",
    "slug": "panic-drop",
    "category": "Action",
    "populer": false
},
{
    "name": "Rise Up",
    "video": "games/Rise-up/Rise-up.mp4",
    "image": "games/Rise-up/Rise-up.png",
    "slug": "rise-up",
    "category": "Action",
    "populer": true
},
{
    "name": "Rolling Panda",
    "video": "games/Rolling-panda/Rolling-panda.mp4",
    "image": "games/Rolling-panda/Rolling-panda.png",
    "slug": "rolling-panda",
    "category": "Action",
    "populer": false
},
{
    "name": "Sky Heroes",
    "video": "games/Sky-heroes/Sky-heroes.mp4",
    "image": "games/Sky-heroes/Sky-heroes.png",
    "slug": "swing-hero",
    "category": "Action",
    "populer": false
},
{
    "name": "Square Game",
    "video": "games/Square-game/Square-game.mp4",
    "image": "games/Square-game/Square-game.png",
    "slug": "squaregame",
    "category": "Action",
    "populer": true
},
{
    "name": "Stick Soldier",
    "video": "games/Stick-soldier/stick-soldier.mp4",
    "image": "games/Stick-soldier/stick-soldier.png",
    "slug": "stick-soldiere",
    "category": "Action",
    "populer": false
},
{
    "name": "Swing Robber",
    "video": "games/Swing-robber/Swing-robber.mp4",
    "image": "games/Swing-robber/Swing-robber.png",
    "slug": "swing-robber",
    "category": "Action",
    "populer": false
},
{
    "name": "Tomato Crush",
    "video": "games/Tomato-crush/Tomato-crush.mp4",
    "image": "games/Tomato-crush/Tomato-crush.png",
    "slug": "tomato-crush",
    "category": "Action",
    "populer": false
},
{
    "name": "Tower Boom",
    "video": "games/Tower-boom/Tower-boom.mp4",
    "image": "games/Tower-boom/Tower-boom.png",
    "slug": "tower-boom",
    "category": "Action",
    "populer": false
},
{
    "name": "Train Bandit",
    "video": "games/Train-bandit/Train-bandit.mp4",
    "image": "games/Train-bandit/Train-bandit.png",
    "slug": "trainbandit",
    "category": "Action",
    "populer": false
},
{
    "name": "Zombie Smash",
    "video": "games/Zombie-smash/Zombie-smash.mp4",
    "image": "games/Zombie-smash/Zombie-smash.png",
    "slug": "wzombie-smash",
    "category": "Action",
    "populer": false
},
{
    "name": "8 Ball Pool With Friends",
    "video": "games/8-ball-pool-with-friends/8-ball-pool-with-friends.mp4",
    "image": "games/8-ball-pool-with-friends/8-ball-pool-with-friends.png",
    "slug": "8-ball-pro",
    "category": "Multiplayer",
    "populer": false
},
{
    "name": "Arena Noob vs Pro",
    "video": "games/arena-noob-vs-pro/arena-noob-vs-pro.mp4",
    "image": "games/arena-noob-vs-pro/arena-noob-vs-pro.png",
    "slug": "arena-noob-vs-pro",
    "category": "Multiplayer",
    "populer": false
},
{
    "name": "ludo Rumble",
    "video": "games/ludo-rumble/ludo-rumble.mp4",
    "image": "games/ludo-rumble/ludo-rumble.png",
    "slug": "ludo-rumble",
    "category": "Multiplayer",
    "populer": false
},
{
    "name": "Snakes N Ladders",
    "video": "games/snakes-n-ladders/snakes-n-ladders.mp4",
    "image": "games/snakes-n-ladders/snakes-n-ladders.png",
    "slug": "snakes-n-ladders",
    "category": "Multiplayer",
    "populer": true
},
{
    "name": "Dude Action",
    "video": "games/dude-action/dude-action.mp4",
    "image": "games/dude-action/dude-action.png",
    "slug": "dude-action",
    "category": "Runner",
    "populer": false
},
{
    "name": "Mine Rusher",
    "video": "games/mine-rusher/mine-rusher.mp4",
    "image": "games/mine-rusher/mine-rusher.png",
    "slug": "mine-rusher",
    "category": "Runner",
    "populer": false
},
{
    "name": "Picture-Runner",
    "video": "games/picture-runner/picture-runner.mp4",
    "image": "games/picture-runner/picture-runner.png",
    "slug": "picture-runner",
    "category": "Runner",
    "populer": false
},
{
    "name": "Samup",
    "video": "games/samup/samup.mp4",
    "image": "games/samup/samup.png",
    "slug": "samup",
    "category": "Runner",
    "populer": false
},
{
    "name": "8 Ball Pro",
    "video": "games/8-ball-pro/8-ball-pro.mp4",
    "image": "games/8-ball-pro/8-ball-pro.png",
    "slug": "picture-runner",
    "category": "Sports",
    "populer": false
},
{
    "name": "Dunk Shot",
    "video": "games/Dunk Shot/dunk-shot.mp4",
    "image": "games/Dunk Shot/dunk-shot.png",
    "slug": "dunk-shot",
    "category": "Sports",
    "populer": false
},
{
    "name": "Dunk Line",
    "video": "games/dunk-line/dunk-line.mp4",
    "image": "games/dunk-line/dunk-line.png",
    "slug": "dunk-line",
    "category": "Sports",
    "populer": false
},
{
    "name": "Mini Golf",
    "video": "games/mini-golf/mini-golf.mp4",
    "image": "games/mini-golf/mini-golf.png",
    "slug": "mini-golf",
    "category": "Sports",
    "populer": false
},
{
    "name": "Word Search",
    "video": "games/word-search/word-search.mp4",
    "image": "games/word-search/word-search.png",
    "slug": "cword-search",
    "category": "puzzle",
    "populer": true
},
{
    "name": "Word Haven",
    "video": "games/word-haven/word-haven.mp4",
    "image": "games/word-haven/word-haven.png",
    "slug": "word-haven",
    "category": "puzzle",
    "populer": false
},
{
    "name": "Make7",
    "video": "games/make7/make7.mp4",
    "image": "games/make7/make7.png",
    "slug": "make7",
    "category": "puzzle",
    "populer": true
},
{
    "name": "Nullify",
    "video": "games/nullify/nullify.mp4",
    "image": "games/nullify/nullify.png",
    "slug": "nullify",
    "category": "puzzle",
    "populer": false
},
{
    "name": "Dont Miss",
    "video": "games/dont-miss/dont-miss.mp4",
    "image": "games/dont-miss/dont-miss.png",
    "slug": "dont-miss",
    "category": "puzzle",
    "populer": false
},
{
    "name": "The Great Indian Quiz",
    "video": "games/the-great-indian-quiz/the-great-indian-quiz.mp4",
    "image": "games/the-great-indian-quiz/the-great-indian-quiz.png",
    "slug": "the-great-indian-quiz",
    "category": "puzzle",
    "populer": false
},
{
    "name": "Squarea",
    "video": "games/squarea/squarea.mp4",
    "image": "games/squarea/squarea.png",
    "slug": "squarea",
    "category": "puzzle",
    "populer": false
},
{
    "name": "Pattern",
    "video": "games/pattern/pattern.mp4",
    "image": "games/pattern/pattern.png",
    "slug": "pattern",
    "category": "puzzle",
    "populer": false
},
{
    "name": "Jelly Merger",
    "video": "games/jelly-merger/jelly-merger.mp4",
    "image": "games/jelly-merger/jelly-merger.png",
    "slug": "jelly-merger",
    "category": "puzzle",
    "populer": false
},
{
    "name": "Connect4",
    "video": "games/connect4/connect4.mp4",
    "image": "games/connect4/connect4.png",
    "slug": "connect4",
    "category": "puzzle",
    "populer": true
},
{
    "name": "Bridges",
    "video": "games/bridges/bridges.mp4",
    "image": "games/bridges/bridges.png",
    "slug": "bridges",
    "category": "puzzle",
    "populer": false
},
{
    "name": "Sorting Balls",
    "video": "games/sorting-balls/sorting-balls.mp4",
    "image": "games/sorting-balls/sorting-balls.png",
    "slug": "sorting-balls",
    "category": "puzzle",
    "populer": false
},
{
    "name": "5 Fruit",
    "video": "games/5-fruit/5-fruit.mp4",
    "image": "games/5-fruit/5-fruit.png",
    "slug": "5-fruit",
    "category": "puzzle",
    "populer": false
},
{
    "name": "Happy Glass",
    "video": "games/happy-glass/happy-glass.mp4",
    "image": "games/happy-glass/happy-glass.png",
    "slug": "happy-glass",
    "category": "puzzle",
    "populer": false
},
{
    "name": "Equalz",
    "video": "games/equalz/equalz.mp4",
    "image": "games/equalz/equalz.png",
    "slug": "equalz",
    "category": "puzzle",
    "populer": false
},
{
    "name": "Blue Block",
    "video": "games/blue-block/blue-block.mp4",
    "image": "games/blue-block/blue-block.png",
    "slug": "blue-block",
    "category": "puzzle",
    "populer": false
},
{
    "name": "Thiefs Journey",
    "video": "games/thiefs-journey/thiefs-journey.mp4",
    "image": "games/thiefs-journey/thiefs-journey.png",
    "slug": "thiefs-journey",
    "category": "puzzle",
    "populer": false
},
{
    "name": "Pixel-Slide",
    "video": "games/pixel-slide/pixel-slide.mp4",
    "image": "games/pixel-slide/pixel-slide.png",
    "slug": "pixel-slide",
    "category": "puzzle",
    "populer": false
},
{
    "name": "Make5",
    "video": "games/make5/make5.mp4",
    "image": "games/make5/make5.png",
    "slug": "make5",
    "category": "puzzle",
    "populer": false
},
{
    "name": "2048",
    "video": "games/2048/2048.mp4",
    "image": "games/2048/2048.png",
    "slug": "2048",
    "category": "puzzle",
    "populer": true
},
{
    "name": "Mergis",
    "video": "games/mergis/mergis.mp4",
    "image": "games/mergis/mergis.png",
    "slug": "mergis",
    "category": "puzzle",
    "populer": false
},
{
    "name": "Kuizu",
    "video": "games/kuizu/kuizu.mp4",
    "image": "games/kuizu/kuizu.png",
    "slug": "kuizu",
    "category": "puzzle",
    "populer": false
},
{
    "name": "Sudoku",
    "video": "games/sudoku/sudoku.mp4",
    "image": "games/sudoku/sudoku.png",
    "slug": "sudoku",
    "category": "puzzle",
    "populer": false
},
{
    "name": "Slot-Machine",
    "video": "games/slot-machine/slot-machine.mp4",
    "image": "games/slot-machine/slot-machine.png",
    "slug": "slot-machine",
    "category": "puzzle",
    "populer": false
},
{
    "name": "Words-Swipe",
    "video": "games/words-swipe/words-swipe.mp4",
    "image": "games/words-swipe/words-swipe.png",
    "slug": "words-swipe",
    "category": "puzzle",
    "populer": false
},
{
    "name": "Words Story",
    "video": "games/words-story/words-story.mp4",
    "image": "games/words-story/words-story.png",
    "slug": "words-story",
    "category": "puzzle",
    "populer": false
},
{
    "name": "Hill Climber",
    "video": "games/hill-climber/hill-climber.mp4",
    "image": "games/hill-climber/hill-climber.png",
    "slug": "hill-climber",
    "category": "racing",
    "populer": false
},
{
    "name": "Hero X Test",
    "video": "games/hero-x-test/hero-x-test.mp4",
    "image": "games/hero-x-test/hero-x-test.png",
    "slug": "hero-x-test",
    "category": "racing",
    "populer": false
},
{
    "name": "Rampage Road",
    "video": "games/rampage-road/rampage-road.mp4",
    "image": "games/rampage-road/rampage-road.png",
    "slug": "rampage-road",
    "category": "racing",
    "populer": false
},
{
    "name": "Furious Road",
    "video": "games/furious-road/furious-road.mp4",
    "image": "games/furious-road/furious-road.png",
    "slug": "furious-road",
    "category": "racing",
    "populer": false
},
{
    "name": "Rolly Vortex",
    "video": "games/rolly-vortex/rolly-vortex.mp4",
    "image": "games/rolly-vortex/rolly-vortex.png",
    "slug": "rolly-vortex",
    "category": "racing",
    "populer": false
},
{
    "name": "Crazy Car",
    "video": "games/crazy-car/crazy-car.mp4",
    "image": "games/crazy-car/crazy-car.png",
    "slug": "crazy-car",
    "category": "racing",
    "populer": false
},
{
    "name": "Speed Racer",
    "video": "games/speed-racer/speed-racer.mp4",
    "image": "games/speed-racer/speed-racer.png",
    "slug": "speed-racer",
    "category": "racing",
    "populer": false
},
{
    "name": "Mountain Riders",
    "video": "games/mountain-riders/mountain-riders.mp4",
    "image": "games/mountain-riders/mountain-riders.png",
    "slug": "mountain-riders",
    "category": "racing",
    "populer": false
},
{
    "name": "eggy-car",
    "video": "games/eggy-car/eggy-car.mp4",
    "image": "games/eggy-car/eggy-car.png",
    "slug": "eggy-car",
    "category": "racing",
    "populer": false
},
{
    "name": "Chicken Merge",
    "video": "games/chicken-merge/chicken-merge.mp4",
    "image": "games/chicken-merge/chicken-merge.png",
    "slug": "chicken-merge",
    "category": "strategy",
    "populer": false
},
{
    "name": "Twenty-48",
    "video": "games/twenty-48/twenty-48.mp4",
    "image": "games/twenty-48/twenty-48.png",
    "slug": "twenty-48",
    "category": "strategy",
    "populer": false
},
{
    "name": "Tiny-Cars",
    "video": "games/tiny-cars/tiny-cars.mp4",
    "image": "games/tiny-cars/tiny-cars.png",
    "slug": "tiny-cars",
    "category": "strategy",
    "populer": false
},
{
    "name": "Toops",
    "video": "games/toops/toops.mp4",
    "image": "games/toops/toops.png",
    "slug": "toops",
    "category": "strategy",
    "populer": false
},
{
    "name": "Play-Chess",
    "video": "games/play-chess/play-chess.mp4",
    "image": "games/play-chess/play-chess.png",
    "slug": "play-chess",
    "category": "strategy",
    "populer": false
},
{
    "name": "Scorpion Solitare",
    "video": "games/scorpion-solitare/scorpion-solitare.mp4",
    "image": "games/scorpion-solitare/scorpion-solitare.png",
    "slug": "scorpion-solitare",
    "category": "strategy",
    "populer": false
},
{
    "name": "Pirate Defence",
    "video": "games/pirate-defence/pirate-defence.mp4",
    "image": "games/pirate-defence/pirate-defence.png",
    "slug": "pirate-defence",
    "category": "strategy",
    "populer": false
},
{
    "name": "Pirate Merge",
    "video": "games/pirate-merge/pirate-merge.mp4",
    "image": "games/pirate-merge/pirate-merge.png",
    "slug": "pirate-merge",
    "category": "strategy",
    "populer": false
},
{
    "name": "Base Defence",
    "video": "games/base-defence/base-defence.mp4",
    "image": "games/base-defence/base-defence.png",
    "slug": "base-defence",
    "category": "strategy",
    "populer": false
},
{
    "name": "Cursed Treasure",
    "video": "games/cursed-treasure/cursed-treasure.mp4",
    "image": "games/cursed-treasure/cursed-treasure.png",
    "slug": "cursed-treasure",
    "category": "strategy",
    "populer": false
},
{
    "name": "Mafia Wars",
    "video": "games/mafia-wars/mafia-wars.mp4",
    "image": "games/mafia-wars/mafia-wars.png",
    "slug": "mafia-wars",
    "category": "strategy",
    "populer": false
},
{
    "name": "Idle Miner",
    "video": "games/idle-miner/idle-miner.mp4",
    "image": "games/idle-miner/idle-miner.png",
    "slug": "idle-miner",
    "category": "strategy",
    "populer": false
},
{
    "name": "Professor Bubble",
    "video": "games/professor-bubble/professor-bubble.mp4",
    "image": "games/professor-bubble/professor-bubble.png",
    "slug": "professor-bubble",
    "category": "strategy",
    "populer": false
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