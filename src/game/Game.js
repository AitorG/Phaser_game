
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
    const image = this.add.image(50, 100, "cuadradoNaranja")
    const image1 = this.add.image(100, 100, "cuadradoVerde")
    this.physics.add.existing(image)
    this.physics.add.existing(image1)
    this.physics.arcade.collide(this.image, this.image1)
    image.body.setCollideWorldBounds()
    image1.body.setCollideWorldBounds()
    this.matter.world.enable(image, image1)
    image.body.setDensity(30)
    image1.body.setDensity(30)
    image.body.setBounce(30)
    image1.body.setBounce(30)
    image.body.setVelocityX(30)
    image1.body.setVelocityX(30)
  }

  update() {}
}
