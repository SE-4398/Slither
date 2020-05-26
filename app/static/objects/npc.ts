export abstract class npc extends Phaser.Physics.Arcade.Sprite {
    protected scoreValue;

    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
    }

    public kill(): number{
        return this.scoreValue;
    }
}
