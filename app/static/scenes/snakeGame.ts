import {bird} from "../objects/bird";
import {mouse} from "../objects/mouse";
import {badMouse} from "../objects/badMouse";
import {cow} from "../objects/cow";
import {ruby} from "../objects/ruby";
import {mongoose} from "../objects/mongoose";
import {BigBird} from "../objects/bigBird";
import {bombTurtle} from "../objects/bombTurtle";
import {staticObject} from "../objects/staticObject";
import {playerSnake} from "../objects/playerSnake";

export class gameScene extends Phaser.Scene {

    private displayScore;

    constructor() {
        super({
            key: "gameScene"
        });
    }

    init(): void {

    }

    preload(): void {
        this.load.image("userPicture", "src/assets/userPicture.jpg");
        this.load.image("desertTiles", "src/assets/desert_1_0_7.png")
        this.load.tilemapTiledJSON("backGround1", "src/assets/desert.json");
        this.load.image("rockAndGrassTiles", "src/assets/mountain_landscape.png");
        this.load.tilemapTiledJSON("backGround2", "src/assets/forest.json");
        this.load.tilemapTiledJSON("backGround3", "src/assets/rock.json");
    }

    create(): void {

        let map;
        let tiles;
        let layer;

        switch (this.registry.get("whichBackGround")) {
            case 1:
                map = this.make.tilemap({key: 'backGround1'});
                tiles = map.addTilesetImage("desert", "desertTiles", 64, 64);
                layer = map.createStaticLayer("Tile Layer 1", tiles, 0, 0);
                break;
            case 2:
                map = this.make.tilemap({key: 'backGround2'});
                tiles = map.addTilesetImage("mountain", "rockAndGrassTiles", 64, 64);
                layer = map.createStaticLayer("Tile Layer 1", tiles, 0, 0);
                break;
            case 3:
                map = this.make.tilemap({key: 'backGround3'});
                tiles = map.addTilesetImage("mountain", "rockAndGrassTiles", 64, 64);
                layer = map.createStaticLayer("Tile Layer 1", tiles, 0, 0);
                break;
            case 4:
                this.load.image("userPicture", "src/assets/userPicture.jpg");
                break;
        }

        this.displayScore = this.add.text(200, 100, "Score:", {font: "16px Courier ", fill: "#0f0"});

        /*
        this.backGround = this.add.image(0, 0, "backGround").setOrigin(0);
        let testButton = this.add.text(150,100, "test", {font: "16px Courier ", fill: "#0f0"});
        testButton.setInteractive();
        testButton.on('pointerdown', () => {
            this.scene.start("optionsScene") });
        */
    }


}