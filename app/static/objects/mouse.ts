import {npc} from "./npc";


export class mouse extends npc  {
    private gameScene;
    //private chooseDirectionEvt;
    //private chooseAnimEvt;
    private moveEvent;

    constructor(scene, x, y, texture, f) {
        super(scene, x, y, texture, f);
        scene.preyMouse.add(this);
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.gameScene = scene;
        this.scoreValue = 1 //Score of mouse
        // @ts-ignore
        //this.body.onWorldBounds = true;
        this.play('idleMouse');
    }

    create(): void {




        //this.scene.time.delayedCall(2000, this.moveMouse, null, this);
    }

    update(): void {
        //Re-write this and turn it into a single event that'll
        //Preform the entire movement action.S
/*        this.time.addEvent({
           delay: 1000,
           callback: this.moveMouse(),
           callbackScope: this,
           loop: true
        });
*/
    }

    private moveMouse(): Function{
        this.randomDirection();
        this.changeMouseAnimation();
        return;
    }

    private changeMouseAnimation(): Function{
        console.log("we changed animation of a mouse");
        switch(this.newDirection){
            case "up":
                this.direction = "up";
                this.play("upMouse", true);
                break;
            case "down":
                this.direction = "down";
                this.play("downMouse", true);
                break;
            case "right":
                this.direction = "right";
                this.play("rightMouse", true);
                break;
            case "left":
                this.direction = "left";
                this.play('leftMouse', true);
                break;
            case "stop":
                this.direction = "stop";
                this.play("idleMouse", true);
                break;
        }
        return;
    }

    private randomDirection(): Function{
        //randomeNumber > 0.5
        console.log("we changed direction of a mouse");
        let randomNumber = Math.random();
        if(randomNumber > 0.5){
            //We move up or down
            if(randomNumber > 0.75){
                //We move up
                this.newDirection = "up";
            }
            else{
                //We move Down
                this.newDirection = "down";
            }
        }else{
            //We move left or right
            if(randomNumber > 0.25){
                // We move left
                this.newDirection = "left";
            }
            else if(randomNumber > 0.10){
                //we move right
                this.newDirection = "right";
            }
            else{
                //Remains still
                this.newDirection = "stop";
            }
        }

        return;
    }
}