"use strict";
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
var optionsScene = /** @class */ (function (_super) {
    __extends(optionsScene, _super);
    function optionsScene() {
        return _super.call(this, {
            key: "optionsScene"
        }) || this;
    }
    optionsScene.prototype.init = function () {
    };
    optionsScene.prototype.preload = function () {
        //this.load.image('background', 'assets/background.png'); //Fix
    };
    optionsScene.prototype.create = function () {
        var _this = this;
        var pageTitle = this.add.text(0, 0, 'Settings & Options', { font: "30px Courier ", fill: "#0f0" });
        var difficulty = this.add.text(0, 40, 'Choose Difficulty', { font: "20px Courier ", fill: "#0f0" });
        //Buttons
        var easyButton = this.add.text(0, 60, "Easy", { font: "15px Courier ", fill: "#0f0" });
        easyButton.setInteractive();
        easyButton.on('pointerdown', function () { _this.registry.set('difficulty', 0); }); //default
        var mediumButton = this.add.text(0, 80, "Medium", { font: "15px Courier ", fill: "#0f0" });
        mediumButton.setInteractive();
        mediumButton.on('pointerdown', function () { _this.registry.set('difficulty', 1); });
        var hardButton = this.add.text(0, 100, "Hard", { font: "15px Courier ", fill: "#0f0" });
        hardButton.setInteractive();
        hardButton.on('pointerdown', function () { _this.registry.set('difficulty', 2); });
        var skins = this.add.text(0, 140, 'Choose Skin', { font: "20px Courier ", fill: "#0f0" });
        //Buttons
        var greenSkinButton = this.add.text(0, 160, "Green", { font: "15px Courier ", fill: "#0f0" });
        greenSkinButton.setInteractive();
        greenSkinButton.on('pointerdown', function () { _this.registry.set('skin', 0); });
        var redSkinButton = this.add.text(0, 180, "Red", { font: "15px Courier ", fill: "#0f0" });
        redSkinButton.setInteractive();
        redSkinButton.on('pointerdown', function () {
            //console.log("Pressed red button");
            //console.log(this.registry.get('skin'));
            _this.registry.set('skin', 1);
            //console.log(this.registry.get('skin'));
        });
        var blueSkinButton = this.add.text(0, 200, "Blue", { font: "15px Courier ", fill: "#0f0" });
        blueSkinButton.setInteractive();
        blueSkinButton.on('pointerdown', function () { _this.registry.set('skin', 2); });
        var backgrounds = this.add.text(0, 240, 'Choose Background', { font: "20px Courier ", fill: "#0f0" });
        //Buttons
        var background1Button = this.add.text(0, 260, "Background 1", { font: "15px Courier ", fill: "#0f0" });
        background1Button.setInteractive();
        background1Button.on('pointerdown', function () { _this.registry.set('whichBackGround', 0); });
        var background2Button = this.add.text(0, 280, "Background 2", { font: "15px Courier ", fill: "#0f0" });
        background2Button.setInteractive();
        background2Button.on('pointerdown', function () { _this.registry.set('whichBackGround', 1); });
        var background3Button = this.add.text(0, 300, "Background 3", { font: "15px Courier ", fill: "#0f0" });
        background3Button.setInteractive();
        background3Button.on('pointerdown', function () { _this.registry.set('whichBackGround', 2); });
        var background4Button = this.add.text(0, 320, "Background 4", { font: "15px Courier ", fill: "#0f0" });
        background4Button.setInteractive();
        background4Button.on('pointerdown', function () { _this.registry.set('whichBackGround', 3); });
        var tutorialButton = this.add.text(0, 360, "View Tutorial", { font: "15px Courier ", fill: "#0f0" });
        tutorialButton.setInteractive();
        tutorialButton.on('pointerdown', function () { _this.scene.start("tutorialScene"); });
        var backButton = this.add.text(150, 380, "return", { font: "16px Courier ", fill: "#0f0" });
        backButton.setInteractive();
        backButton.on('pointerdown', function () {
            _this.scene.wake("menuScene");
            _this.scene.stop();
            //this.scene.start("menuScene"); 
        });
    };
    return optionsScene;
}(Phaser.Scene));
exports.optionsScene = optionsScene;
//# sourceMappingURL=options.js.map