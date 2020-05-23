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
var playerSnake_1 = require("../objects/playerSnake");
var gameScene = /** @class */ (function (_super) {
    __extends(gameScene, _super);
    function gameScene() {
        return _super.call(this, {
            key: "gameScene"
        }) || this;
    }
    gameScene.prototype.init = function () {
        this.currentTime = 0;
    };
    gameScene.prototype.preload = function () {
        this.load.image("userPicture", "/static/assets/userPicture.png");
        this.load.image("desertTiles", "/static/assets/desert_1_0_7.png");
        this.load.tilemapTiledJSON("backGround1", "/static/assets/desert.json");
        this.load.image("rockAndGrassTiles", "/static/assets/mountain_landscape.png");
        this.load.tilemapTiledJSON("backGround2", "/static/assets/forest.json");
        this.load.tilemapTiledJSON("backGround3", "/static/assets/rock.json");
        //this.load.spritesheet({})
        this.load.atlas('masterAtlas', '/static/assets/masterAtlas.png', '/static/assets/masterAtlasJson.json');
        //this.load.atlas('greenSkin', 'src/assets/greenSnakeAtlas.png', 'src/assets/greenSnakeAtlas.json');
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
                //Need to do somthing to make sure the image is cenetered or the image needs to be 
                //Keeped to adher to certain dimensions
                //Update to make sure it works
                this.add.image(0, 0, "userPicture").setOrigin(0);
                break;
        }
        var pauseKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TAB);
        pauseKey.on('down', function (key, event) {
            this.scene.launch("pauseScene");
            this.scene.pause();
            event.stopPropagation();
        }, this);
        //this.physics.add.sprite(500, 500, "masterAtlas", "spire").setCollideWorldBounds();
        //this.physics.add.sprite(500, 550, 'greenSkin', 'GreenSnakeHead_up');
        this.player = new playerSnake_1.playerSnake();
        this.staticObjectNames = ["tree", "spire", "boulder"];
        this.staticObjects = this.physics.add.group();
        this.preyMouse = this.physics.add.group();
        this.setDifficultySettings();
        //for(let i = 0; i < this.player.getSnakeLength(); i++){
        //this.physics.add.collider(this.staticObjects, this.player.getSnakeBody()[i]);
        //}
        this.physics.add.collider(this.staticObjects, this.player.getSnakeBody()[0], function () {
            console.log("collusion");
        });
        this.physics.add.collider(this.preyMouse, this.player.getSnakeBody()[0], function () {
            console.log("collusion");
        });
        //this.displayScore = this.add.text(200, 100, "Score:", {font: "16px Courier ", fill: "#0f0"});
        /*
        this.backGround = this.add.image(0, 0, "backGround").setOrigin(0);
        let testButton = this.add.text(150,100, "test", {font: "16px Courier ", fill: "#0f0"});
        testButton.setInteractive();
        testButton.on('pointerdown', () => {
            this.scene.start("optionsScene") });
        */
    };
    gameScene.prototype.update = function (time) {
        if (this.currentTime === 0) {
            this.currentTime = time;
        }
        else {
            if (time - this.currentTime > 200) {
                this.player.move(this);
                this.currentTime = time;
                this.moveMouse(this.preyMouse);
            }
            this.player.handleInput();
        }
    };
    gameScene.prototype.setDifficultySettings = function () {
        this.createAnimations();
        switch (this.registry.get("difficulty")) {
            case 0:
                //Easy
                //StaticObjects
                for (var i = 0; i < 5; i++) {
                    var spriteToUse = this.staticObjectNames[Math.floor(Math.random() * this.staticObjectNames.length)];
                    var obstical = this.physics.add.sprite(16, 16, "masterAtlas", spriteToUse);
                    this.staticObjects.add(obstical);
                    obstical.setRandomPosition(0, 0, 640, 640);
                }
                for (var j = 0; j < 5; j++) {
                    //let newMouse = new mouse(this, 100, 100, "masterAtlas", "Mouse_Idle");
                    //newMouse.setRandomPosition(0,0, 640, 640);
                    //newMouse.update();
                    var test = this.physics.add.sprite(100, 100, "masterAtlas", "Mouse_Idle").setCollideWorldBounds(true, 5);
                    test.play("idleMouse");
                    this.preyMouse.add(test);
                    test.setRandomPosition(0, 0, 640, 640);
                }
                break;
            case 1:
                //Medium
                break;
            case 2:
                //Hard
                break;
        }
    };
    gameScene.prototype.createAnimations = function () {
        var rest = this.textures.addSpriteSheetFromAtlas('idle', {
            atlas: 'masterAtlas',
            frame: 'Mouse_Idle',
            frameWidth: 34,
            frameHeight: 50
            //endFrame: 5
        });
        var config1 = {
            key: 'idleMouse',
            frames: this.anims.generateFrameNumbers('idle', { start: 0, end: 5, first: 0 }),
            frameRate: 3,
            repeat: -1
        };
        this.anims.create(config1);
        var walkRight = this.textures.addSpriteSheetFromAtlas('walkingRight', {
            atlas: 'masterAtlas',
            frame: 'Mouse_LeftRight',
            frameWidth: 39,
            frameHeight: 36,
        });
        var config2 = {
            key: 'rightMouse',
            frames: this.anims.generateFrameNumbers('walkingRight', { start: 5, end: 8 }),
            frameRate: 3,
            repeat: -1
        };
        this.anims.create(config2);
        var walkLeft = this.textures.addSpriteSheetFromAtlas('walkingLeft', {
            atlas: 'masterAtlas',
            frame: 'Mouse_LeftRight',
            frameWidth: 39,
            frameHeight: 36,
        });
        var config3 = {
            key: 'rightMouse',
            frames: this.anims.generateFrameNumbers('walkingLeft', { start: 3, end: 0, first: 3 }),
            frameRate: 3,
            repeat: -1
        };
        this.anims.create(config3);
        var walkup = this.textures.addSpriteSheetFromAtlas('walkingUp', {
            atlas: 'masterAtlas',
            frame: 'Mouse_UpDown',
            frameWidth: 39,
            frameHeight: 23,
        });
        var config4 = {
            key: 'upMouse',
            frames: this.anims.generateFrameNumbers('walkingUp', { start: 0, end: 3 }),
            frameRate: 3,
            repeat: -1
        };
        this.anims.create(config4);
        var walkdown = this.textures.addSpriteSheetFromAtlas('walkingDown', {
            atlas: 'masterAtlas',
            frame: 'Mouse_UpDown',
            frameWidth: 39,
            frameHeight: 23,
        });
        var config4 = {
            key: 'upMouse',
            frames: this.anims.generateFrameNumbers('walkingUp', { start: 0, end: 3 }),
            frameRate: 3,
            repeat: -1
        };
        this.anims.create(config4);
    };
    gameScene.prototype.moveMouse = function (prey) {
        //randomeNumber > 0.5
        for (var i = 0; i < prey.getLength(); i++) {
            var randomNumber = Math.random();
            if (randomNumber > 0.5) {
                //We move up or down  
                if (randomNumber > 0.75) {
                    //We move up
                }
                else {
                    //We move Down
                }
            }
            else {
                //We move left or right
                if (randomNumber > 0.25) {
                    // We move left
                }
                else if (randomNumber > 0.10) {
                    //we move right
                    this.changeMouseAnimation(prey.getChildren()[i], "right");
                    prey.getChildren()[i].x += 5;
                }
                else {
                    //Remains still
                    this.changeMouseAnimation(prey.getChildren()[i], "stop");
                }
            }
        }
    };
    gameScene.prototype.changeMouseAnimation = function (mouse, direction) {
        switch (direction) {
            case "up":
                mouse.play("");
                break;
            case "down":
                break;
            case "right":
                mouse.play("rightMouse");
                break;
            case "left":
                break;
            case "stop":
                mouse.play("idleMouse");
                break;
        }
    };
    return gameScene;
}(Phaser.Scene));
exports.gameScene = gameScene;
//# sourceMappingURL=snakeGame.js.map