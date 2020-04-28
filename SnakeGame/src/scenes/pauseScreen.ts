

export class pauseScene extends Phaser.Scene{
    private pauseMenu: Phaser.GameObjects.Graphics;

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
        this.pauseMenu.fillStyle(0xffff00, 1);
        this.pauseMenu.fillRect(100, 100, 100, 100);
    }
}