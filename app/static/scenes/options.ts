export class optionsScene extends Phaser.Scene {
    private gameSetting;
    private backGround;

    constructor() {
        super({
            key: "optionsScene"
        });
    }

    init(): void {

    }

    preload(): void {
        this.load.image("slitherLogoFull", "/static/assets/Slither_Logo.png");
    }

    create(): void {
        this.backGround = this.add.image(0, 0, "slitherLogoFull").setOrigin(0);
        let returnButton = this.add.text(150, 100, "Back", {font: "16px Courier ", fill: "#0f0"});
        returnButton.setInteractive();
        returnButton.on('pointerdown', () => {
            this.scene.start("menuScene");
        });
    }
}