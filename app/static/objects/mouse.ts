import {npc} from "./npc";

export class mouse extends npc  {
    private gameScene;

    constructor(scene, x, y, texture, f){
        super(scene, x, y, texture, f);
        scene.preyMouse.add(this);
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.gameScene = scene;
        this.scoreValue = 1 //Score of mouse
        // @ts-ignore
        //this.body.onWorldBounds = true;
        //this.play('idleMouse');
    }

    preload(): void {
        //this.createAnimations();
    }

    update(): void {
        //this.play('idleMouse');
    }

    /*
    private changeMouseAnimation(mouse, direction): void{
        switch(direction){
            case "up":
                mouse.play("")
                break;
            case "down":
                break;
            case "right":
                mouse.play("rightMouse");
                break;
            case "left":
                break;
            case "stop":
                mouse.play("idleMouse");
                break;
        }
    }
    */

    /*
    private moveMouse(prey): void{
        //randomeNumber > 0.5
        for(let i = 0; i < prey.getLength(); i++){
            let randomNumber = Math.random();
            if(randomNumber > 0.5){
                //We move up or down
                if(randomNumber > 0.75){
                    //We move up
                }
                else{
                    //We move Down
                }
            }else{
                //We move left or right
                if(randomNumber > 0.25){
                    // We move left

                }
                else if(randomNumber > 0.10){
                    //we move right
                    this.changeMouseAnimation(prey.getChildren()[i], "right");
                    prey.getChildren()[i].x += 5;
                }
                else{
                    //Remains still
                    this.changeMouseAnimation(prey.getChildren()[i], "stop");
                }
            }
        }

    }
    */

}