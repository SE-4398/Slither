"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({__proto__: []} instanceof Array && function (d, b) {
                d.__proto__ = b;
            }) ||
            function (d, b) {
                for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
            };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);

        function __() {
            this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", {value: true});
require("phaser");
var mainMenu_1 = require("../scenes/mainMenu");
var options_1 = require("../scenes/options");
var snakeGame_1 = require("../scenes/snakeGame");
var pauseScreen_1 = require("../scenes/pauseScreen");
var gameOver_1 = require("../scenes/gameOver");
var creditScene_1 = require("../scenes/creditScene");
var config = {
    type: Phaser.AUTO,
    scale: {
        parent: "game",
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.FIT,
        width: 640,
        height: 640,
    },
    scene: [mainMenu_1.menuScene, options_1.optionsScene, creditScene_1.creditScene, snakeGame_1.gameScene, pauseScreen_1.pauseScene, gameOver_1.gameOverScene],
    //optionsScene, hudScene, creditScene, gameScene, pauseScene, gameOverScene],
    input: {
        keyboard: true
    }
};
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);

    function Game(config) {
        return _super.call(this, config) || this;
    }

    return Game;
}(Phaser.Game));
exports.Game = Game;
//() => declares a anonymous function
window.addEventListener("load", function () {
    var game = new Game(config);
});
//# sourceMappingURL=game.js.map