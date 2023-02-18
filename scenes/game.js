import { Score } from "../components/score.js";


export class Game extends Phaser.Scene {
  constructor() {
    super({ key: "game" });
  }

  init() {
    this.score = new Score(this);
  }

  preload() {
    this.load.image("background", "images/fondo.png");
    this.load.image("platform", "images/platform.png");
    this.load.image("ball", "images/ball.png");
    this.load.image("blueBrick", "images/blueBrick.png");
    this.load.image("redBrick", "images/redBrick.png");
    this.load.image("purpleBrick", "images/purpleBrick.png");
    this.load.image("greenBrick", "images/greenBrick.png");
  }

  create() {
    this.physics.world.setBoundsCollision(true, true, true, false);

    this.add.image(400, 250, "background");

    this.bricks = this.physics.add.staticGroup({
      key: ["blueBrick", "redBrick", "greenBrick", "purpleBrick"],
      frameQuantity: 9,
      gridAlign: {
        width: 9,
        height: 4,
        cellWidth: 80,
        cellHeight: 34,
        x: 63,
        y: 80,
      },
    });

    
        this.score.create();

    this.platform = this.physics.add.image(400, 460, "platform").setImmovable();
    this.platform.body.allowGravity = false;
    this.platform.setCollideWorldBounds(true);

    this.ball = this.physics.add.image(400, 435, "ball");
    this.ball.setData("glue", true);
    this.ball.setCollideWorldBounds(true);
    this.ball.setBounce(1);

    this.physics.add.collider(
      this.ball,
      this.platform,
      this.platformImpact,
      null,
      this
    );
    this.physics.add.collider(
      this.ball,
      this.bricks,
      this.brickImpact,
      null,
      this
    );

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    if (this.cursors.left.isDown) {
      this.platform.setVelocityX(-500);
      if (this.ball.getData("glue")) {
        this.ball.setVelocityX(-500);
      }
    } else if (this.cursors.right.isDown) {
      this.platform.setVelocityX(500);
      if (this.ball.getData("glue")) {
        this.ball.setVelocityX(500);
      }
    } else {
      this.platform.setVelocity(0);
      if (this.ball.getData("glue")) {
        this.ball.setVelocityX(0);
      }
    }

    if (this.ball.y > 500) {
      console.log("fin");
      this.showGameOver()
    }

    if (this.ball.y > 500) {
      this.bricks;
    }

    if (this.cursors.up.isDown) {
      this.ball.setVelocity(-75, -300);
      this.ball.setData("glue", false);
    }
  }

  brickImpact(ball, bricks) {
    bricks.disableBody(true, true);
    this.score.incrementPoints(10);
    if (this.bricks.countActive() === 0) {
    this.showCongratulations();
    }
  }

  platformImpact(ball, platform) {
    this.score.incrementPoints(1);
    let relativeImpact = ball.x - platform.x;
    if (relativeImpact < 0.1 && relativeImpact > -0.1) {
      ball.setVelocityX(Phaser.Math.Between(-10, 10));
    } else {
      ball.setVelocityX(10 * relativeImpact);
    }
  }

  showGameOver() {
this.scene.start('gameOver')
  }

  showCongratulations() {
    this.scene.start('congratulations')
      }

}
