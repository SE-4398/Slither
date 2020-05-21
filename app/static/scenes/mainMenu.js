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
var menuScene = /** @class */ (function (_super) {
    __extends(menuScene, _super);
    function menuScene() {
        return _super.call(this, {
            key: "menuScene"
        }) || this;
    }
    menuScene.prototype.init = function () {
        this.initRegistry();
    };
    menuScene.prototype.preload = function () {
        //this.load.image("backGround", "src/assets/Caza2_SliftUmmonAlbum.png");
    };
    menuScene.prototype.create = function () {
        var _this = this;
        //this.backGround = this.add.image(0, 0, "backGround").setOrigin(0);
        var newGameButton = this.add.text(150, 100, "Start Game", { font: "16px Courier ", fill: "#0f0" });
        newGameButton.setInteractive();
        newGameButton.on('pointerdown', function () {
            _this.scene.start("gameScene");
        });
        var optionsButton = this.add.text(150, 150, "Options", { font: "16px Courier ", fill: "#0f0" });
        optionsButton.setInteractive();
        optionsButton.on('pointerdown', function () {
            //this.scene.start("optionsScene");
            _this.scene.launch("optionsScene");
            _this.scene.sleep();
            event.stopPropagation();
        });
        var creditsButton = this.add.text(150, 200, "Credits", { font: "16px Courier ", fill: "#0f0" });
        creditsButton.setInteractive();
        creditsButton.on('pointerdown', function () {
            _this.scene.start("creditScene");
        });
    };
    /**
     * Build-in global game data manager to exchange data between scenes.
     * Here we initialize our variables with a key.
     */
    menuScene.prototype.initRegistry = function () {
        //all should start from 0
        this.registry.set("points", 0);
        this.registry.set("time", 0);
        this.registry.set("difficulty", 0);
        this.registry.set("modKills", 0);
        this.registry.set("preyKilled", 0);
        this.registry.set("rubyGot", 0);
        this.registry.set("whichBackGround", 2);
        this.registry.set('skin', 2);
    };
    return menuScene;
}(Phaser.Scene));
exports.menuScene = menuScene;
//# sourceMappingURL=mainMenu.js.map