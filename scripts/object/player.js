export default class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);

        // Add the player to the scene
        scene.add.existing(this);
        scene.physics.add.existing(this);

        // Set player properties
        this.setCollideWorldBounds(true);
    }

}