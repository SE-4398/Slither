
//Literal just displays the score
export class hudScene extends Phaser.Scene{
    private bitmapText: Phaser.GameObjects.BitmapText[];

    constructor() {
        super({
            key: "hudScene"
        });
    }

    init(): void{
        this.bitmapText = [];
    }

    create(): void{

        // create bitmap texts
        this.bitmapText.push(
            this.add.bitmapText(
                10,
                10,
                "font",
                `Points: ${this.registry.get("points")}`,
                8
            )
        );

        // create events
        const level = this.scene.get("gameScene");
        level.events.on("pointsChanged", this.updatePoints, this);


    }


    private updatePoints() {
        this.bitmapText[1].setText(`Points: ${this.registry.get("points")}`);
    }

}