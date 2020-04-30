import "phaser";
import {menuScene} from "../../../../../../../Downloads/Slither-adrian-sBranch(2)/Slither-adrian-sBranch/SnakeGame/src/scenes/mainMenu";
import {optionsScene} from "../../../../../../../Downloads/Slither-adrian-sBranch(2)/Slither-adrian-sBranch/SnakeGame/src/scenes/options";
import {hudScene} from "../../../../../../../Downloads/Slither-adrian-sBranch(2)/Slither-adrian-sBranch/SnakeGame/src/scenes/HUD";
import {gameScene} from "../../../../../../../Downloads/Slither-adrian-sBranch(2)/Slither-adrian-sBranch/SnakeGame/src/scenes/snakeGame";
import {pauseScene} from "../../../../../../../Downloads/Slither-adrian-sBranch(2)/Slither-adrian-sBranch/SnakeGame/src/scenes/pauseScreen";
import {gameOverScene} from "../../../../../../../Downloads/Slither-adrian-sBranch(2)/Slither-adrian-sBranch/SnakeGame/src/scenes/gameOver";
import {creditScene} from "../../../../../../../Downloads/Slither-adrian-sBranch(2)/Slither-adrian-sBranch/SnakeGame/src/scenes/creditScene";
import GameConfig = Phaser.Types.Core.GameConfig;

const config: GameConfig = {
    type: Phaser.AUTO,
    scale: {
        parent: "game",
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.FIT,
        width: 640,
        height: 640,
    },
    scene: [menuScene, optionsScene, creditScene, gameScene, pauseScene, gameOverScene],
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


