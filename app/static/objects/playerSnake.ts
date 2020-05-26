

export class playerSnakePart {
    private snakeBodyHeightHorizontal: number;
    private snakeBodyHeightVertical: number;
    private snakeBodyWidthHorizontal: number;
    private snakeBodyWidthVertical: number;
    private snakeHeadHeightHorizontal: number;
    private snakeHeadHeightVertical: number;
    private snakeHeadWidthHorizontal: number;
    private snakeHeadWidthVertical: number;
    private snakeTailHeightHorizontal: number;
    private snakeTailHeightVertical: number;
    private snakeTailWidthHorizontal: number;
    private snakeTailWidthVertical: number;
    private snakeLength: number;
    private direction: string;
    private dead: boolean;
    private body:  Phaser.GameObjects.Sprite[];
    private startingX: number;
    private startingY: number;
    private cursor: any;
    private changedDirection: boolean;
    private prefixToUse: string;
    
    constructor(scene: Phaser.Scene) {
        
        this.snakeBodyHeightVertical = 48;
        this.snakeBodyWidthVertical = 30;
        
        this.snakeBodyHeightHorizontal = 30;
        this.snakeBodyWidthHorizontal = 48;

        this.snakeTailHeightHorizontal = 27;
        this.snakeTailWidthHorizontal = 42;

        this.snakeTailHeightVertical = 42;
        this.snakeTailWidthVertical = 27;

        this.snakeHeadHeightHorizontal = 34;
        this.snakeHeadWidthHorizontal = 47;

        this.snakeHeadHeightVertical = 47;
        this.snakeHeadWidthVertical = 34;

        this.snakeLength = 3;
        this.direction = "right";
        this.body = [];
        this.startingX = 300;
        this.startingY = 100;

        this.dead = false;

        //input
        this.cursor = scene.input.keyboard.createCursorKeys();

        this.buildSnake(scene);
    }
    

    private buildSnake(scene): void {
        this.createSnakeAnimations(scene);
        
        for(let i = 0; i <= this.snakeLength; i++){
            if(i === 0){
                //head
                //Problem here
                this.body[i] = scene.physics.add.sprite(this.startingX, this.startingY, "masterAtlas", this.prefixToUse + "Head_right").setCollideWorldBounds();
            }
            else if(i === this.snakeLength){
                //tail
                this.body[i] = scene.physics.add.sprite(this.body[i - 1].x - this.snakeTailWidthHorizontal, this.body[i - 1].y,
                    "masterAtlas", this.prefixToUse + "Tail_right").setCollideWorldBounds();
            }
            else if(i % 2 === 0){
                this.body[i] = scene.physics.add.sprite(this.body[i - 1].x - this.snakeBodyWidthHorizontal, this.body[i - 1].y,
                     "SnakeBody").play('rightBodyA').setCollideWorldBounds();
            }
            else{
                if((i - 1) === 0){
                    this.body[i] = scene.physics.add.sprite(this.body[i - 1].x - this.snakeBodyWidthHorizontal, this.body[i - 1].y,
                        "SnakeBody").play('rightBodyB').setCollideWorldBounds();
                }
                else{
                    this.body[i] = scene.physics.add.sprite(this.body[i - 1].x - this.snakeBodyWidthHorizontal, this.body[i - 1].y,
                        "SnakeBody").play('rightBodyB').setCollideWorldBounds();
                }   
            }
        }
    }
    
    private createSnakeAnimations(scene): void{
        switch( scene.registry.get('skin') ){
            case 0:
                //Green skin
                this.prefixToUse = 'GreenSnake';
                break;
            case 1:
                //red skin
                this.prefixToUse = 'RedSnake';
                break;
            case 2:
                //blue skin
                this.prefixToUse = 'BlueSnake';
                break;    
        }

        scene.anims.create({
            key: 'rightBodyA', 
            frameRate: 3,
            frames: scene.anims.generateFrameNames('masterAtlas', { 
              prefix: this.prefixToUse + 'Body_right_', 
              start: 1,
              end: 2, 
              zeroPad: 2 }),
            repeat: -1 
        });
        
        scene.anims.create({
            key: 'rightBodyB', 
            frameRate: 3,
            frames: scene.anims.generateFrameNames('masterAtlas', { 
              prefix: this.prefixToUse + 'Body_right_', 
              start: 2,
              end: 1, 
              zeroPad: 2 }),
            repeat: -1 
        });

        scene.anims.create({
            key: 'leftBodyA', 
            frameRate: 3,
            frames: scene.anims.generateFrameNames('masterAtlas', { 
              prefix: this.prefixToUse + 'Body_left_', 
              start: 1,
              end: 2, 
              zeroPad: 2 }),
            repeat: -1 
        });

        scene.anims.create({
            key: 'leftBodyB', 
            frameRate: 3,
            frames: scene.anims.generateFrameNames('masterAtlas', { 
              prefix: this.prefixToUse + 'Body_left_', 
              start: 2,
              end: 1, 
              zeroPad: 2 }),
            repeat: -1 
        });
        
        scene.anims.create({
            key: 'upBodyA',
            frameRate: 3,
            frames: scene.anims.generateFrameNames('masterAtlas',{
                prefix: this.prefixToUse + 'Body_up_',
                start: 1,
                end: 2,
                zeroPad: 2
            }),
            repeat: -1
        });

        scene.anims.create({
            key: 'upBodyB',
            frameRate: 3,
            frames: scene.anims.generateFrameNames('masterAtlas',{
                prefix: this.prefixToUse + 'Body_up_',
                start: 2,
                end: 1,
                zeroPad: 2
            }),
            repeat: -1
        });

        scene.anims.create({
            key: 'downBodyA',
            frameRate: 3,
            frames: scene.anims.generateFrameNames('masterAtlas',{
                prefix: this.prefixToUse + 'Body_down_',
                start: 1,
                end: 2,
                zeroPad: 2
            }),
            repeat: -1
        });

        scene.anims.create({
            key: 'downBodyB',
            frameRate: 3,
            frames: scene.anims.generateFrameNames('masterAtlas',{
                prefix: this.prefixToUse + 'Body_down_',
                start: 2,
                end: 1,
                zeroPad: 2
            }),
            repeat: -1
        });
    }

    private changePartBody(scene, index): void{
        
        if(this.changedDirection){
            switch(this.direction){
                case "left":
                    if (index % 2 === 0) {
                        this.body[index].play('leftBodyA');
                    }
                    else{
                        this.body[index].play('leftBodyB');
                    }
                    break;
                case "right":
                    if (index % 2 === 0) {
                        this.body[index].play('rightBodyA');
                    } 
                    else{
                        this.body[index].play('rightBodyB');
                    }
                    break;
                case "up":
                    if (index % 2 === 0) {
                        this.body[index].play('upBodyA');
                    } 
                    else{
                        this.body[index].play('upBodyB');
                    }
                    break;
                case "down":
                    if (index % 2 === 0) {
                        this.body[index].play('downBodyA');
                    } 
                    else{
                        this.body[index].play('downBodyB');
                    }
                    break;        
            }
        }
    }

    private changePartTail(scene, index): void{
        if(this.changedDirection){
            switch(this.direction){
                case "left":
                    this.body[index].setTexture('masterAtlas', this.prefixToUse + 'Tail_left' );
                    break;
                case "right":
                    this.body[index].setTexture('masterAtlas', this.prefixToUse + 'Tail_right' );
                    break;
                case "up":
                    this.body[index].setTexture('masterAtlas', this.prefixToUse + 'Tail_up' );
                    break;
                case "down":
                    this.body[index].setTexture('masterAtlas', this.prefixToUse + 'Tail_down' );
                    break;        
            }
        }
    }

    /*
    if (this.direction === "left") {
            this.body[0].x -= this.snakeHeadWidth;
        } else if (this.direction === "right") {
            this.body[0].x += this.snakeBodyWidth;
        } else if (this.direction === "up") {
            this.body[0].y -= this.snakeHeadLength;
        } else if (this.direction === "down") {
            this.body[0].y += this.snakeBodyLength;
        }
    */
    public move(scene): void{
        //  body
        for (let i = this.snakeLength; i > 0; i--) {
            if( (i - 1) === 0){
                //Just before head
                //Remove?
                this.body[i].x = this.body[i - 1].x;
                this.body[i].y = this.body[i - 1].y;
                this.changePartBody(scene, i);
            }
            else if(i === this.snakeLength){
                //Tail
                this.body[i].x = this.body[i - 1].x;
                this.body[i].y = this.body[i - 1].y;
                this.changePartTail(scene, i);
            }
            else{
                //Body
                this.body[i].x = this.body[i - 1].x;
                this.body[i].y = this.body[i - 1].y; 
                this.changePartBody(scene, i);
            }
        }

        // head
        if (this.direction === "left") {
            if(this.changedDirection){
                this.body[0].setTexture('masterAtlas', this.prefixToUse + 'Head_left' );
                this.body[0].x -= this.snakeBodyWidthHorizontal;
                this.changedDirection = false;
            }
            else{
                this.body[0].x -= this.snakeBodyWidthHorizontal;
            }
        } else if (this.direction === "right") {
            if(this.changedDirection){
                this.body[0].setTexture( 'masterAtlas', this.prefixToUse + 'Head_right');
                this.body[0].x += this.snakeBodyWidthHorizontal;
                this.changedDirection = false;
            }
            else{
                this.body[0].x += this.snakeBodyWidthHorizontal;
            }
        } else if (this.direction === "up") {
            if(this.changedDirection){
                this.body[0].setTexture('masterAtlas', this.prefixToUse + 'Head_up' );
                this.body[0].y -= this.snakeBodyHeightVertical;
                
                this.changedDirection = false;
            }
            else{
                this.body[0].y -= this.snakeBodyHeightVertical;
            }
        } else if (this.direction === "down") {
            if(this.changedDirection){
                this.body[0].setTexture('masterAtlas', this.prefixToUse + 'Head_down' );
                this.body[0].y += this.snakeBodyHeightVertical;
                
                this.changedDirection = false;
            }
            else{
                this.body[0].y += this.snakeBodyHeightVertical;
            }
        }
    }

    public handleInput(): void{
        if (this.cursor.up.isDown && this.direction != "down" && this.direction != "up") {
            this.direction = "up";
            this.changedDirection = true;
          } else if (this.cursor.down.isDown && this.direction != "up" && this.direction != "down") {
            this.direction = "down";
            this.changedDirection = true;
          } else if (this.cursor.right.isDown && this.direction != "left" && this.direction != "right") {
            this.direction = "right";
            this.changedDirection = true;
          } else if (this.cursor.left.isDown && this.direction != "right" && this.direction != "left") {
            this.direction = "left";
            this.changedDirection = true;
          }
    }

    public isDead(): boolean{
        return this.dead;
    }

    public setDead(killed): void{
        this.dead = killed;
    }

    public getSnakeLength(): number{
        return this.snakeLength;
    }

    public getSnakeBody(): Phaser.GameObjects.Sprite[] {
        return this.body;
      }

    public getHead(): Phaser.GameObjects.Sprite {
        return this.body[0];
    }
     
}