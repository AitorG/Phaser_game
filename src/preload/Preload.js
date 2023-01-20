export default class Preload extends Phaser.Scene {
  constructor() {
    super({ key: "Preload" })
  }

  preload() {
    this.load.image('square', 'assets/square.png')
  }

  create() {
    this.scene.stop("Preload")
    this.scene.start("Game")
  }
}
