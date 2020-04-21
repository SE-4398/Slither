/* Options.js
 * Developer: Asa Murphy
 * Date: 04/17/2020
 *
 * Function: Backend for game options page of slither web game.
 * It prompts button options to change game settings,
 * and view a tutorial.
 */

class Options extends Phaser.Scene{
      constructor(){
        super({key: 'Options'});
      }

      preload () {
        this.load.image('background', 'assets/background.png');
      }

      create () {
        let background = this.add.sprite();

        this.title = this.add.text(300, 100, 'Settings & Options', { fontSize: 60 });

        this.text1 = this.add.text(200, 200, 'Difficulty', {fontSize: 30});
        //button implementation goes here
        this.text1 = this.add.text(200, 300, 'Change Snake Skin', {fontSize: 30});
        //button implementation goes here
        this.text1 = this.add.text(200, 400, 'Change Background', {fontSize: 30});
        //button implementation goes here
        this.text1 = this.add.text(200, 500, 'View Tutorial', {fontSize: 30});
        //link to external HTML document

      }
}

export default Options;
