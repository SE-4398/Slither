

import { bird } from "../objects/bird";
import { mouse } from "../objects/mouse";
import { badMouse } from "../objects/badMouse";
import { cow } from "../objects/cow";
import { ruby } from "../objects/ruby";
import { mongoose } from "../objects/mongoose";
import { BigBird } from  "../objects/bigBird";
import { bombTurtle } from "../objects/bombTurtle";
import { staticObject } from "../objects/staticObject";
import { playerSnake } from "../objects/playerSnake";

export class gameScene extends Phaser.Scene{

    private gameSetting;
    private backGround;

    constructor() {
        super({
            key: "gameScene"
        });
    }

    init(): void {

    }

    preload(): void {
        //this.load.image("backGround", "src/assets/Caza2_SliftUmmonAlbum.png");
    }

    create(): void {
        //this.backGround = this.add.image(0, 0, "backGround").setOrigin(0);
        //let testButton = this.add.text(150,100, "test", {font: "16px Courier ", fill: "#0f0"});
        //testButton.setInteractive();
        //testButton.on('pointerdown', () => {
        //    this.scene.start("optionsScene") });
    }

    /*
    public gainPoints(){
        this.scene.events.emit("pointsChanged");
    }

     */
}