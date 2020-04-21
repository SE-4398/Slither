import "phaser";
import { menuScene } from "./scenes/mainMenu";
import { optionsScene } from "./scenes/options";
import { hudScene } from "./scenes/HUD";
import { gameScene } from "./scenes/snakeGame";
import { pauseScene } from "./scenes/pauseScreen";
import { gameOverScene } from "./scenes/gameOver";
import { creditScene } from "./scenes/creditScene";
import GameConfig = Phaser.Types.Core.GameConfig;

const config: GameConfig = {
    width: 1300,
    height: 650,
    type: Phaser.AUTO,
    parent: "game",
    scene: [menuScene],
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


