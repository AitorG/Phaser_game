export default class Preload extends Phaser.Scene {
  constructor() {
    super({ key: "Preload" })
  }

  preload() {
  }

  create() {
    this.scene.stop("Preload")
    this.scene.start("Game")
  }
}
