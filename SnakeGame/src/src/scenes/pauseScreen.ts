

export class pauseScene extends Phaser.Scene{
    private pauseMenu;

    constructor() {
        super({
            key: "pauseScene"
        });
    }

    init(): void {

    }

    preload(): void {
        
    }

    create(): void {
        //: Phaser.GameObjects.Graphics
        //x: this.sys.canvas.width / 2,
        //y: this.sys.canvas.height - 40,
        this.pauseMenu = this.add.graphics();
        this.pauseMenu.fillStyle(0x0000FF, 1);
        this.pauseMenu.fillRect(192, 192, 320, 320);

        //Maybe change to switch
        //or change start to resume
        let resumeButton = this.add.text(320, 256, "resume", {font: "16px Courier ", fill: "#0f0"});
        resumeButton.setInteractive();
        resumeButton.on('pointerdown', () => {
            this.scene.resume("gameScene");
            this.scene.stop();
        });
    }
}