import { npc } from "./npc";

export class mouse extends npc{
    private gameScene;

    constructor(scene, x, y, texture, f){
        super(scene, x, y, texture, f);
        this.gameScene = scene;
    }
    
    preload(): void {
        //this.createAnimations();
    }

    update(): void {
        this.anims.play('idleMouse');
    }

    

}