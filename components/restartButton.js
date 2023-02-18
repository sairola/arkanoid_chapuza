export class reStartButton {

    constructor(scene) {
    this.relatedScene= scene;
    this.score = 0
} 


preload() {

    this.relatedScene.load.spritesheet('button', 'images/restart.png', {
        frameWidth: 130,
        frameHeight: 78})
}

create() {

    this.StartButton = this.relatedScene.add.sprite(400, 390, 'button').setInteractive();


    this.StartButton.on('pointerover', () => {
        this.StartButton.setFrame(0)
    });


    this.StartButton.on('pointerout', () => {
        this.StartButton.setFrame(1)});

    this.StartButton.on('pointerdown', () => {
        this.relatedScene.scene.start('game')})

    }

}

