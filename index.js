import { Game } from './scenes/game.js';
import { gameOver } from './scenes/gameOver.js';
import { congratulations } from './scenes/congratulations.js';

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 500,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: [Game, gameOver, congratulations]
        
};

var game = new Phaser.Game(config);
