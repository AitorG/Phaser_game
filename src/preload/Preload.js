export default class Preload extends Phaser.Scene {
  constructor() {
    super({ key: "Preload" })
  }

  preload() {
    const progressBar = this.add.graphics()
    const width = this.cameras.main.width

    this.load.on("progress", (value) => {
      progressBar.clear()
      progressBar.fillStyle(0xee7722, 1)
      progressBar.fillRect(width / 2 - 320 / 2 + 10, 310, 300 * value, 30)
    })

    this.load.on("complete", () => {
      progressBar.destroy()
    })

    //Load Assets
    this.load.image("square", "./assets/square.png")
    this.load.image("food", "./assets/food.png")
  }

  create() {
    this.scene.stop("Preload")
    this.scene.start("Game")
  }
}
