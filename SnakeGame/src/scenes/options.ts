

export class optionsScene extends Phaser.Scene{
    private gameSetting;
    private backGround;
    private title;

    constructor() {
        super({
            key: "optionsScene"
        });
    }

    init(): void {

    }

    preload(): void {
        //this.load.image('background', 'assets/background.png'); //Fix
    }

    create(): void {
        /*
        let background = this.add.sprite();

        this.title = this.add.text(300, 100, 'Settings & Options', { fontSize: 60 });


        this.text1 = this.add.text(200, 200, 'Difficulty', {fontSize: 30});

        this.easyBtn = this.add.text(200, 225, 'Easy', { fill: '#0f0' }) //Easy Button
        .setInteractive()
        .on('pointerdown', () => this.updateGame() )
        .on('pointerover', () => this.enterButtonHoverState() )
        .on('pointerout', () => this.enterButtonRestState() );

        this.mediumBtn = this.add.text(200, 250, 'Medium', { fill: '#0f0' }) //Medium Button
        .setInteractive()
        .on('pointerdown', () => this.updateGame() )
        .on('pointerover', () => this.enterButtonHoverState() )
        .on('pointerout', () => this.enterButtonRestState() );

        this.hardBtn = this.add.text(200, 275, 'Hard', { fill: '#0f0' }) //Hard Button
        .setInteractive()
        .on('pointerdown', () => this.updateGame() )
        .on('pointerover', () => this.enterButtonHoverState() )
        .on('pointerout', () => this.enterButtonRestState() );

        //logic
        //updateGame(){
          
        //}

        this.text2 = this.add.text(200, 300, 'Change Snake Skin', {fontSize: 30});

        this.redSnake = this.add.text(100, 325, 'Red', { fill: '#0f0' })
        .setInteractive()
        .on('pointerdown', () => this.updateSkin() )
        .on('pointerover', () => this.enterButtonHoverState() )
        .on('pointerout', () => this.enterButtonRestState() );

        this.blueSnake = this.add.text(100, 350, 'Blue', { fill: '#0f0' })
        .setInteractive()
        .on('pointerdown', () => this.updateSkin() )
        .on('pointerover', () => this.enterButtonHoverState() )
        .on('pointerout', () => this.enterButtonRestState() );

        this.greenSnake = this.add.text(100, 375, 'Green', { fill: '#0f0' })
        .setInteractive()
        .on('pointerdown', () => this.updateSkin() )
        .on('pointerover', () => this.enterButtonHoverState() )
        .on('pointerout', () => this.enterButtonRestState() );

        //logic
        //updateSkin(){

        //}

        this.text3 = this.add.text(200, 400, 'Change Background', {fontSize: 30});

        this.background1 = this.add.text(200, 425, 'Option 1', { fill: '#0f0' })
        .setInteractive()
        .on('pointerdown', () => this.updateBackground() )
        .on('pointerover', () => this.enterButtonHoverState() )
        .on('pointerout', () => this.enterButtonRestState() );

        this.background2 = this.add.text(200, 450, 'Option 2', { fill: '#0f0' })
        .setInteractive()
        .on('pointerdown', () => this.updateBackground() )
        .on('pointerover', () => this.enterButtonHoverState() )
        .on('pointerout', () => this.enterButtonRestState() );

        this.background3 = this.add.text(100, 475, 'Option 3', { fill: '#0f0' })
        .setInteractive()
        .on('pointerdown', () => this.updateBackground() )
        .on('pointerover', () => this.enterButtonHoverState() )
        .on('pointerout', () => this.enterButtonRestState() );

        //logic
        //updateBackground(){

        //}

        this.text4 = this.add.text(200, 500, 'View Tutorial', {fontSize: 30});

        //Styles
        enterButtonHoverState()
        {
          //Difficulty buttons
          this.easyBtn.setStyle({ fill: '#ff0'});
          this.mediumBtn.setStyle({ fill: '#ff0'});
          this.hardBtn.setStyle({ fill: '#ff0'});

          //Snake skin Buttons
          this.redSnake.setStyle({ fill: '#ff0'});
          this.blueSnake.setStyle({ fill: '#ff0'});
          this.greenSnake.setStyle({ fill: '#ff0'});

          //Background buttons
          this.background1.setStyle({ fill: '#ff0'});
          this.background2.setStyle({ fill: '#ff0'});
          this.background3.setStyle({ fill: '#ff0'});
        }

        enterButtonRestState()
        {
          //Difficulty buttons
          this.easyBtn.setStyle({ fill: '#0f0'});
          this.mediumBtn.setStyle({ fill: '#0f0'});
          this.hardBtn.setStyle({ fill: '#0f0'});

          //Snake skin Buttons
          this.redSnake.setStyle({ fill: '#0f0'});
          this.blueSnake.setStyle({ fill: '#0f0'});
          this.greenSnake.setStyle({ fill: '#0f0'});

          //Background buttons
          this.background1.setStyle({ fill: '#0f0'});
          this.background2.setStyle({ fill: '#0f0'});
          this.background3.setStyle({ fill: '#0f0'});
        }


      }
      */
    }
}