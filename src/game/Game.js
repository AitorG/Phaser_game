
export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'Game' })
  }

  preload() {
    this.load.image("cuadradoNaranja", "assets/square.png")
    this.load.image("cuadradoVerde", "assets/food.png")
  }

  create() {
    const hello = this.add.text(0, 0, 'Hola que tal', {
      color: '#FFFFFF',
      font: '20px Arial',
    })
    this.image = this.add.image(50, 100, "cuadradoNaranja")
    this.image1 = this.add.image(100, 100, "cuadradoVerde")
    this.physics.add.existing(this.image)
    this.physics.add.existing(this.image1)
    this.image.body.setCollideWorldBounds()
    this.image1.body.setCollideWorldBounds()
    this.image.body.setBounce(1)
    this.image1.body.setBounce(1)
    this.image.body.setVelocity(200)
    this.image1.body.setVelocity(140)
    this.physics.add.collider(this.image, this.image1)
  }

  update() {}
}
