import { reStartButton } from "../components/restartButton";

export class gameOver extends Phaser.Scene {


    constructor() {
        super({ key: "gameOver" });
        this.restartButton = new reStartButton(this)
      }
    

      preload() {
        this.load.image("game_over", "images/game_over.png");
        this.restartButton.preload()

      }

      create() {
        this.add.image(400, 250, "background");
        this.restartButton.create();
        this.gaveOverImage = this.add.image(400, 250, "game_over");




      }

}