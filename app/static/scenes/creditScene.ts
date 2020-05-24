
export class creditScene extends Phaser.Scene{

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
        this.logo = this.add.image(0, 70, "logo");

        let textline1 = this.add.text(0, 110, 'We would like to take a moment to thank the team of developers!', {font: "15px Courier ", fill: "#0f0"});
        let textline2 = this.add.text(0, 130, 'Shervone Mayes: Senior full stack development engineer.', {font: "15px Courier ", fill: "#0f0"});
        let textline3 = this.add.text(0, 150, 'Madison Crowns: Technical sprite and art designer.', {font: "15px Courier ", fill: "#0f0"});
        let textline4 = this.add.text(0, 170, 'Adrian Lopez: Senior game design software engineer.', {font: "15px Courier ", fill: "#0f0"});
        let textline5 = this.add.text(0, 190, 'Mesut Apil: UI & UX  Engineer', {font: "15px Courier ", fill: "#0f0"});
        let textline6 = this.add.text(0, 210, 'Asa Murphy: Associate game design software engineer', {font: "15px Courier ", fill: "#0f0"});
        let textline7 = this.add.text(0, 230, 'Thank you for playing our game!', {font: "15px Courier ", fill: "#0f0"});

        let backButton = this.add.text(150,280, "return", {font: "16px Courier ", fill: "#0f0"});
        backButton.setInteractive();
        backButton.on('pointerdown', () => {
            this.scene.start("menuScene"); });
    }

}