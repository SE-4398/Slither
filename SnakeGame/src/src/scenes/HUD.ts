
//Literal just displays the score
export class hudScene extends Phaser.Scene{

    //private bitmapText: Phaser.GameObjects.BitmapText[];
    private score;
    private displayScore;

    constructor() {
        super({
            key: "hudScene",
            active: true
        });
    }

    init(): void{
        //this.bitmapText = [];
        this.score = 0;
    }

    create(): void{
        this.displayScore = this.add.text(10, 10, 'Score: 0', {font: "16px Courier ", fill: "#0f0"});

        let ourGame = this.scene.get('gameScene');
        /* Will do when we have something to add score to.
        ourGame.events.on('addScore', function () {

            this.score += 1;

            this.displayScore.setText('Score: ' + this.score);

        }, this);
        */
        // create bitmap texts
        /*
        this.bitmapText.push(
            this.add.bitmapText(
                10,
                10,
                "font",
                `Points: ${this.registry.get("points")}`,
                8
            )
        );
        */
        // create events
        //const level = this.scene.get("gameScene");
        //level.events.on("pointsChanged", this.updatePoints, this);

    }
    
    /*
    private updatePoints() {
        this.bitmapText[1].setText(`Points: ${this.registry.get("points")}`);
    }
    */
}