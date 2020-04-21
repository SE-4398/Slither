

export class menuScene extends Phaser.Scene{
    private backGround;
    private gameSettings;

    constructor() {
        super({
           key: "menuScene"
        });
    }

    init(): void {

    }

    preload(): void {
        this.load.image("backGround", "src/assets/Caza2_SliftUmmonAlbum.png");
    }

    create(): void {
        //this.backGround = this.add.image(0, 0, "backGround").setOrigin(0);
        let testButton = this.add.text(150,100, "test", {font: "16px Courier ", fill: "#0f0"});
        testButton.setInteractive();
        testButton.on('pointerdown', () => { console.log("hit"); });
    }
}