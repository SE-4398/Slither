import * as Phaser from 'phaser';
import {menuScene} from "/scenes/mainMenu";
import {optionsScene} from "/scenes/options";
import {hudScene} from "/scenes/HUD";
import {gameScene} from "/scenes/snakeGame";
import {pauseScene} from "/scenes/pauseScreen";
import {gameOverScene} from "/scenes/gameOver";
import {creditScene} from "/scenes/creditScene";

let GameConfig;
GameConfig = Phaser.Types.Core.GameConfig;

const config: GameConfig = {
    type: Phaser.AUTO,
    scale: {
        parent: "game",
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.FIT,
        width: 1300,
        height: 650,
    },
    scene: [menuScene, optionsScene, hudScene, creditScene, gameScene, pauseScene, gameOverScene],
    //optionsScene, hudScene, creditScene, gameScene, pauseScene, gameOverScene],
    input: {
        keyboard: true
    }
};

export class Game extends Phaser.Game {
    constructor(config: GameConfig) {
        super(config);
    }
}

//() => declares a anonymous function
window.addEventListener("load", () => {
    let game = new Game(config);
});
