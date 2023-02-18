import { reStartButton } from "../components/restartButton";

export class congratulations extends Phaser.Scene {


    constructor() {
        super({ key: "congratulations" });
        this.restartButton = new reStartButton(this)
      }
    

      preload() {
        this.load.image("niceGame", "images/nice_game.png");
        this.restartButton.preload()

      }

      create() {
        this.add.image(400, 250, "background");
        this.restartButton.create();
        this.nicegameImage = this.add.image(400, 250, "niceGame");




      }

}