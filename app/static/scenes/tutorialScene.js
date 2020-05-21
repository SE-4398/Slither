"use strict";
/* tutorialScene.ts
 * Developer: Asa Murphy
 * Date: 04/17/2020
 *
 * Function: Backend for game options page of slither web game.
 * It prompts button options to change game settings,
 * and view a tutorial.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var tutorialScene = /** @class */ (function (_super) {
    __extends(tutorialScene, _super);
    function tutorialScene() {
        return _super.call(this, {
            key: "tutorialScene"
        }) || this;
    }
    tutorialScene.prototype.init = function () {
    };
    tutorialScene.prototype.preload = function () {
    };
    tutorialScene.prototype.create = function () {
        var _this = this;
        var pageTitle = this.add.text(0, 0, 'Tutorial', { font: "30px Courier ", fill: "#0f0" });
        var textline1 = this.add.text(0, 40, 'Welcome to the Slither Game tutorial!', { font: "15px Courier ", fill: "#0f0" });
        var textline2 = this.add.text(0, 60, 'Controls', { font: "15px Courier ", fill: "#0f0" });
        var textline3 = this.add.text(0, 80, 'Arrow Left: Move Left', { font: "15px Courier ", fill: "#0f0" });
        var textline4 = this.add.text(0, 100, 'Arrow Right: Move Right', { font: "15px Courier ", fill: "#0f0" });
        var textline5 = this.add.text(0, 120, 'Arrow Up: Move Up', { font: "15px Courier ", fill: "#0f0" });
        var textline6 = this.add.text(0, 140, 'Arrow Down: Move Down', { font: "15px Courier ", fill: "#0f0" });
        var textline7 = this.add.text(0, 160, 'Tab: Pause', { font: "15px Courier ", fill: "#0f0" });
        var textline8 = this.add.text(0, 180, 'Just like the classic snake game. Move the snake around, eat the sprites and score points.', { font: "15px Courier ", fill: "#0f0" });
        var textline9 = this.add.text(0, 200, 'But there is a twist, There are also some mobs that can cause harm to the snake. Here is a list', { font: "15px Courier ", fill: "#0f0" });
        var textline10 = this.add.text(0, 220, 'of the good and bad sprites in the game, but it is up to you to figure out which are which. Good Luck!', { font: "15px Courier ", fill: "#0f0" });
        var textline11 = this.add.text(0, 240, 'Good Sprites:', { font: "15px Courier ", fill: "#0f0" });
        var textline12 = this.add.text(0, 260, 'Mouse - *Regular food (Snake grows by 1 and gains 1 point)', { font: "15px Courier ", fill: "#0f0" });
        var textline13 = this.add.text(0, 280, 'Bird - *length-shortening food (snake looses length by 2 nodes)', { font: "15px Courier ", fill: "#0f0" });
        var textline14 = this.add.text(0, 300, 'Cow - *Super food (Snake grows by 1 and gains 5 points)', { font: "15px Courier ", fill: "#0f0" });
        var textline15 = this.add.text(0, 320, 'Ruby - *Super Rare food (Snake does nott grow and gains 10 points)', { font: "15px Courier ", fill: "#0f0" });
        var textline16 = this.add.text(0, 340, 'Bad Sprites:', { font: "15px Courier ", fill: "#0f0" });
        var textline17 = this.add.text(0, 360, 'Poison Mouse - *Insta-Kill food (Snake dies, resulting in a game over)', { font: "15px Courier ", fill: "#0f0" });
        var textline18 = this.add.text(0, 380, 'Mongoose - It will actively hunt the snakes head to eat it. If it gets the head', { font: "15px Courier ", fill: "#0f0" });
        var textline19 = this.add.text(0, 400, 'the snake gets a game over, but if the snake causes the Mongoose', { font: "15px Courier ", fill: "#0f0" });
        var textline20 = this.add.text(0, 420, 'to run into its body, the Mongoose will get "knocked out" and play', { font: "15px Courier ", fill: "#0f0" });
        var textline21 = this.add.text(0, 440, 'its death animation.', { font: "15px Courier ", fill: "#0f0" });
        var textline22 = this.add.text(0, 460, 'Big Bird - Will try to land around snake. If the snake', { font: "15px Courier ", fill: "#0f0" });
        var textline23 = this.add.text(0, 480, 'runs into it, they get a game over.', { font: "15px Courier ", fill: "#0f0" });
        var textline24 = this.add.text(0, 500, 'Bomb Turtle - It will slowly walk towards an obstacle that is randomly chosen.', { font: "15px Courier ", fill: "#0f0" });
        var textline25 = this.add.text(0, 520, 'If the snake runs into it, it will explode and the player will get', { font: "15px Courier ", fill: "#0f0" });
        var textline26 = this.add.text(0, 540, 'a game over. The explosion of the bomb Turtle should cover a small', { font: "15px Courier ", fill: "#0f0" });
        var textline27 = this.add.text(0, 560, 'area around it. Say if the playing field is implemented as a square', { font: "15px Courier ", fill: "#0f0" });
        var textline28 = this.add.text(0, 580, 'grid, the explosion will cover an 3x3 grid with the turtle in the', { font: "15px Courier ", fill: "#0f0" });
        var textline29 = this.add.text(0, 600, 'middle. Feature can be scraped if it breaks something.', { font: "15px Courier ", fill: "#0f0" });
        var backButton = this.add.text(550, 620, "return", { font: "16px Courier ", fill: "#0f0" });
        backButton.setInteractive();
        backButton.on('pointerdown', function () { _this.scene.start("optionsScene"); });
    };
    return tutorialScene;
}(Phaser.Scene));
exports.tutorialScene = tutorialScene;
//# sourceMappingURL=tutorialScene.js.map