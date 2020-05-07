export class creditScene extends Phaser.Scene {

    private gameSetting;
    private logo;

    constructor() {
        super({
            key: "creditScene"
        });
    }

    init(): void {

    }

    preload(): void {
        this.load.image("logo", "/static/assets/logo.png");
    }

    create(): void {
        this.logo = this.add.image(0, 0, "logo");
        let backButton = this.add.text(150, 100, "return", {font: "16px Courier ", fill: "#0f0"});
        backButton.setInteractive();
        backButton.on('pointerdown', () => {
            this.scene.start("menuScene");
        });
    }

}