export default class Preload extends Phaser.Scene {
  constructor() {
    super({ key: "Preload" })
  }

  preload() {
    this.load.image("Bomba", "assets/bomb.png")
    this.load.image("Plataforma", "assets/platform.png")
    this.load.image("Cielo", "assets/sky.png")
    this.load.image("Estrella", "assets/star.png")
    this.load.image("Corazon", "assets/corazon.png")
    this.load.font("ComicSans", "assets/comic.ttf")
    this.load.spritesheet("Personaje", "assets/dude.png", {
      frameWidth: 32,
      frameHeight: 48
    })
  }

  create() {
    this.scene.stop("Preload")
    this.scene.start("Game")
  }
}
