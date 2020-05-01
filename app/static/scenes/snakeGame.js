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
var gameScene = /** @class */ (function (_super) {
    __extends(gameScene, _super);
    function gameScene() {
        return _super.call(this, {
            key: "gameScene"
        }) || this;
    }
    gameScene.prototype.init = function () {
    };
    gameScene.prototype.preload = function () {
        this.load.image("userPicture", "src/assets/userPicture.jpg");
        this.load.image("desertTiles", "src/assets/desert_1_0_7.png");
        this.load.tilemapTiledJSON("backGround1", "src/assets/desert.json");
        this.load.image("rockAndGrassTiles", "src/assets/mountain_landscape.png");
        this.load.tilemapTiledJSON("backGround2", "src/assets/forest.json");
        this.load.tilemapTiledJSON("backGround3", "src/assets/rock.json");
    };
    gameScene.prototype.create = function () {
        var map;
        var tiles;
        var layer;
        switch (this.registry.get("whichBackGround")) {
            case 1:
                map = this.make.tilemap({ key: 'backGround1' });
                tiles = map.addTilesetImage("desert", "desertTiles", 64, 64);
                layer = map.createStaticLayer("Tile Layer 1", tiles, 0, 0);
                break;
            case 2:
                map = this.make.tilemap({ key: 'backGround2' });
                tiles = map.addTilesetImage("mountain", "rockAndGrassTiles", 64, 64);
                layer = map.createStaticLayer("Tile Layer 1", tiles, 0, 0);
                break;
            case 3:
                map = this.make.tilemap({ key: 'backGround3' });
                tiles = map.addTilesetImage("mountain", "rockAndGrassTiles", 64, 64);
                layer = map.createStaticLayer("Tile Layer 1", tiles, 0, 0);
                break;
            case 4:
                this.load.image("userPicture", "src/assets/userPicture.jpg");
                break;
        }
        this.displayScore = this.add.text(200, 100, "Score:", { font: "16px Courier ", fill: "#0f0" });
        /*
        this.backGround = this.add.image(0, 0, "backGround").setOrigin(0);
        let testButton = this.add.text(150,100, "test", {font: "16px Courier ", fill: "#0f0"});
        testButton.setInteractive();
        testButton.on('pointerdown', () => {
            this.scene.start("optionsScene") });
        */
    };
    return gameScene;
}(Phaser.Scene));
exports.gameScene = gameScene;
//# sourceMappingURL=snakeGame.js.map