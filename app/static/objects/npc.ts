export abstract class npc extends Phaser.Physics.Arcade.Sprite {
    protected scoreValue;
    protected direction;
    protected newDirection: string;

    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
    }

    public kill(): number{
        return this.scoreValue;
    }

    public static randomTime(min, max): number{
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}
