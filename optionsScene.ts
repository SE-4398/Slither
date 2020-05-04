/* Options.ts
 * Developer: Asa Murphy
 * Date: 04/17/2020
 *
 * Function: Backend for game options page of slither web game.
 * It prompts button options to change game settings,
 * and view a tutorial.
 */

 export class optionsScene extends Phaser.Scene{
     private logo;
     private gameSettings;

     constructor() {
         super({
            key: "optionsScene"
         });
     }

     init(): void {

     }

     preload(): void {

     }

     create(): void {
       let pageTitle = this.add.text(0, 0, 'Settings & Options', {font: "30px Courier ", fill: "#0f0"});

       let difficulty = this.add.text(0, 40, 'Choose Difficulty', {font: "20px Courier ", fill: "#0f0"});

       //Buttons
       let easyButton = this.add.text(0,60, "Easy", {font: "15px Courier ", fill: "#0f0"});
           easyButton.setInteractive();
       let mediumButton = this.add.text(0, 80, "Medium", {font: "15px Courier ", fill: "#0f0"});
           mediumButton.setInteractive();
       let hardButton = this.add.text(0,100, "Hard", {font: "15px Courier ", fill: "#0f0"});
           hardButton.setInteractive();

       let skins = this.add.text(0, 140, 'Choose Skin', {font: "20px Courier ", fill: "#0f0"});

       //Buttons
       let greenSkinButton = this.add.text(0,160, "Green", {font: "15px Courier ", fill: "#0f0"});
           greenSkinButton.setInteractive();
       let redSkinButton = this.add.text(0, 180, "Red", {font: "15px Courier ", fill: "#0f0"});
           redSkinButton.setInteractive();
       let blueSkinButton = this.add.text(0,200, "Blue", {font: "15px Courier ", fill: "#0f0"});
           blueSkinButton.setInteractive();

       let backgrounds = this.add.text(0, 240, 'Choose Background', {font: "20px Courier ", fill: "#0f0"});

       //Buttons
       let background1Button = this.add.text(0,260, "Background 1", {font: "15px Courier ", fill: "#0f0"});
           background1Button.setInteractive();
       let background2Button = this.add.text(0, 280, "Background 2", {font: "15px Courier ", fill: "#0f0"});
           background2Button.setInteractive();
       let background3Button = this.add.text(0,300, "Background 3", {font: "15px Courier ", fill: "#0f0"});
           background3Button.setInteractive();

       let backButton = this.add.text(150,340, "return", {font: "16px Courier ", fill: "#0f0"});
           backButton.setInteractive();
           backButton.on('pointerdown', () => {this.scene.start("menuScene"); });
     }



 }
