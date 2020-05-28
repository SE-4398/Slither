import { bird } from "../objects/bird";
import { mouse } from "../objects/mouse";
import { badMouse } from "../objects/badMouse";
import { cow } from "../objects/cow";
import { ruby } from "../objects/ruby";
import { mongoose } from "../objects/mongoose";
import { BigBird } from "../objects/bigBird";
import { bombTurtle } from "../objects/bombTurtle";
import { staticObject } from "../objects/staticObject";
import { playerSnakePart } from "../objects/playerSnake";

export class gameScene extends Phaser.Scene{

    private displayScore;
    private player: any;
    private currentTime: number;
    private staticObjects;
    private staticObjectNames;
    private preyMouse;
    

    constructor() {
        super({
            key: "gameScene"
        });
    }

    init(): void {
        this.currentTime = 0;
    }

    preload(): void {
        this.load.image("userPicture", "/static/assets/userPicture.png");
        this.load.image("desertTiles", "/static/assets/desert_1_0_7.png")
        this.load.tilemapTiledJSON("backGround1", "/static/assets/desert.json");
        this.load.image("rockAndGrassTiles", "/static/assets/mountain_landscape.png");
        this.load.tilemapTiledJSON("backGround2", "/static/assets/forest.json");
        this.load.tilemapTiledJSON("backGround3", "/static/assets/rock.json");
        //this.load.spritesheet({})

        this.load.atlas('masterAtlas', '/static/assets/masterAtlas.png', '/static/assets/masterAtlasJson.json');
        //this.load.atlas('greenSkin', 'src/assets/greenSnakeAtlas.png', 'src/assets/greenSnakeAtlas.json');
    }

    create(): void {
        
        let map;
        let tiles;
        let layer;

        switch (this.registry.get("whichBackGround")) {
            case 1:
                map = this.make.tilemap({key: 'backGround1'});
                tiles = map.addTilesetImage("desert", "desertTiles", 64, 64);
                layer = map.createStaticLayer("Tile Layer 1", tiles, 0, 0);
                break;
            case 2:
                map = this.make.tilemap({key: 'backGround2'});
                tiles = map.addTilesetImage("mountain", "rockAndGrassTiles", 64, 64);
                layer = map.createStaticLayer("Tile Layer 1", tiles, 0, 0);
                break;
            case 3:
                map = this.make.tilemap({key: 'backGround3'});
                tiles = map.addTilesetImage("mountain", "rockAndGrassTiles", 64, 64);
                layer = map.createStaticLayer("Tile Layer 1", tiles, 0, 0);
                break;
            case 4:
                //Need to do somthing to make sure the image is cenetered or the image needs to be 
                //Keeped to adher to certain dimensions
                //Update to make sure it works
                this.add.image(0, 0, "userPicture").setOrigin(0);
                break;
        }
        
        

        let pauseKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TAB);
        pauseKey.on('down', function(key, event){
               
            this.scene.launch("pauseScene");
            this.scene.pause(); 
            event.stopPropagation();
        }, this);

        //this.physics.add.sprite(500, 500, "masterAtlas", "spire").setCollideWorldBounds();
        //this.physics.add.sprite(500, 550, 'greenSkin', 'GreenSnakeHead_up');


        this.staticObjectNames = ["tree", "spire", "boulder"];
        this.staticObjects = this.physics.add.group();

        this.preyMouse = this.physics.add.group();
        let graphics = this.add.graphics();
        graphics.fillStyle(0x000000, 1);
        //graphics.moveTo(0, 0);
        graphics.fillRect(0, 0, 100, 25); //Last two width and height
        //graphics.closePath();
        //graphics.fillPath();

        this.displayScore = this.add.text(0, 0, 'Score: 0', {font: "16px Courier ", fill: "#0f0"});

        this.player = new playerSnakePart(this);

        this.staticObjectNames = ["tree", "spire", "boulder"];
        this.staticObjects = this.physics.add.group();

        this.preyMouse = this.physics.add.group();

        this.setDifficultySettings();

        /*
        let testMouse = new mouse(this, 100, 100, "masterAtlas", "Mouse_Idle").setCollideWorldBounds(true, 5);
        testMouse.play('idleMouse');
        //testMouse.setVisible(true);
        //this.preyMouse.add(testMouse);
        testMouse.setPosition(320, 320);
        //testMouse.setRandomPosition(0,0, 640, 640);

        let test = this.physics.add.sprite(100, 100, "masterAtlas", "Mouse_Idle").setCollideWorldBounds(true, 5);
        test.play("idleMouse");
        this.preyMouse.add(test);
        test.setRandomPosition(0,0, 640, 640);
        */



        this.physics.add.collider(this.staticObjects, this.player.getSnakeBody()[0], () =>{
            console.log("collusion");
        });

        this.physics.add.collider(this.player.getSnakeBody()[0], this.preyMouse, this.killMouse, null, this);

    }

    update(time): void {

        if (this.currentTime === 0) {
            this.currentTime = time;
        }
        else{
            if (time - this.currentTime > 200) {
              this.player.move(this);
              this.currentTime = time;
              //this.moveMouse(this.preyMouse);
            }
            this.player.handleInput();
            
        }

    }

    private setDifficultySettings(): void{
        this.createAnimations();
        switch( this.registry.get("difficulty") ){
            case 0:
                //Easy
                //StaticObjects
                for(let i = 0; i < 5; i++){
                    let spriteToUse = this.staticObjectNames[Math.floor(Math.random() *
                        this.staticObjectNames.length)]
                    let obstical = this.physics.add.sprite(16, 16, "masterAtlas", spriteToUse);
                    this.staticObjects.add(obstical);
                    obstical.setRandomPosition(0, 0, 640, 640);
                }
                for(let j = 0; j < 5; j++){
                    let newMouse = new mouse(this, 100, 100, "masterAtlas",
                        "Mouse_Idle").setCollideWorldBounds(true, 5);
                    newMouse.play("idleMouse");
                    newMouse.setRandomPosition(0,0, 640, 640);
                }
                break;
            case 1:
                //Medium
                break;
            case 2:
                //Hard
                break;        
        }
    }

    private createAnimations(): void{
        
        let rest = this.textures.addSpriteSheetFromAtlas(
            'idle',
            {
                atlas: 'masterAtlas',
                frame: 'Mouse_Idle',
                frameWidth: 34,
                frameHeight: 50
                //endFrame: 5
            });
        
        var config1 = {
            key: 'idleMouse',
            frames: this.anims.generateFrameNumbers('idle', 
                { start: 0, end: 5, first: 0 }),
            frameRate: 3,
            repeat: -1
        };        
        
        this.anims.create(config1);
        
        let walkRight = this.textures.addSpriteSheetFromAtlas(
            'walkingRight',
            {
                atlas: 'masterAtlas',
                frame: 'Mouse_LeftRight',
                frameWidth: 39,
                frameHeight: 36,
                //endFrame: 9
            });
        
        var config2 = {
            key: 'rightMouse',
            frames: this.anims.generateFrameNumbers('walkingRight', 
                { start: 5, end: 8 }),
            frameRate: 3,
            repeat: -1
        };        
        
        this.anims.create(config2);

        let walkLeft = this.textures.addSpriteSheetFromAtlas(
            'walkingLeft',
            {
                atlas: 'masterAtlas',
                frame: 'Mouse_LeftRight',
                frameWidth: 39,
                frameHeight: 36,
                //endFrame: 5
            });
        
        var config3 = {
            key: 'rightMouse',
            frames: this.anims.generateFrameNumbers('walkingLeft', 
                { start: 3, end: 0, first: 3 }),
            frameRate: 3,
            repeat: -1
        };        
        
        this.anims.create(config3);

        let walkup = this.textures.addSpriteSheetFromAtlas(
            'walkingUp',
            {
                atlas: 'masterAtlas',
                frame: 'Mouse_UpDown',
                frameWidth: 39,
                frameHeight: 23,
                //endFrame: 5
            });
        
        var config4 = {
            key: 'upMouse',
            frames: this.anims.generateFrameNumbers('walkingUp', 
                { start: 0, end: 3}),
            frameRate: 3,
            repeat: -1
        };        
        
        this.anims.create(config4);

        let walkdown = this.textures.addSpriteSheetFromAtlas(
            'walkingDown',
            {
                atlas: 'masterAtlas',
                frame: 'Mouse_UpDown',
                frameWidth: 39,
                frameHeight: 23,
                //endFrame: 5
            });
        
        var config4 = {
            key: 'upMouse',
            frames: this.anims.generateFrameNumbers('walkingUp', 
                { start: 0, end: 3}),
            frameRate: 3,
            repeat: -1
        };        
        
        this.anims.create(config4);

    }

    private increaseScore(by) : void{
        let currentScore = this.registry.get('points');
        currentScore += by;
        this.displayScore.setText('Score: ' + currentScore);
        this.registry.set('points', currentScore);
    }

    private killMouse(snakeHead, mouse): void{
        console.log("collusion with mouse!");
        this.preyMouse.killAndHide(mouse);
        mouse.body.enable = false;
        this.increaseScore(this.preyMouse.getChildren()[0].kill());
    }
}