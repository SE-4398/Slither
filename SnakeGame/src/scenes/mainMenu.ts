

export class menuScene extends Phaser.Scene{
    private logo;
    private gameSettings;

    constructor() {
        super({
           key: "menuScene"
        });
    }

    init(): void {
        this.initRegistry();
    }

    preload(): void {
        //this.load.image("backGround", "src/assets/Caza2_SliftUmmonAlbum.png");
    }

    create(): void {
        //this.backGround = this.add.image(0, 0, "backGround").setOrigin(0);
        let newGameButton = this.add.text(150,100, "Start Game",
            {font: "16px Courier ", fill: "#0f0"});
        newGameButton.setInteractive();
        newGameButton.on('pointerdown', () => {
            this.scene.start("gameScene"); });

        let optionsButton = this.add.text(150,150, "Options", {font: "16px Courier ", fill: "#0f0"});
        optionsButton.setInteractive();
        optionsButton.on('pointerdown', () => {
            this.scene.start("optionsScene"); });

        let creditsButton = this.add.text(150,200, "Credits", {font: "16px Courier ", fill: "#0f0"});
        creditsButton.setInteractive();
        creditsButton.on('pointerdown', () => {
            this.scene.start("creditScene"); });
    }

    /**
     * Build-in global game data manager to exchange data between scenes.
     * Here we initialize our variables with a key.
     */
    private initRegistry(): void {
        this.registry.set("points", 0);
        this.registry.set("time", 0);
        this.registry.set("difficulty", 0);
        this.registry.set("modKills", 0);
        this.registry.set("preyKilled", 0);
        this.registry.set("rubyGot", 0);
        this.registry.set("whichBackGround", 1);
    }
}