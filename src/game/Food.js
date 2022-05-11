export default class Food extends Phaser.GameObjects.Image {
  constructor(scene) {
    super(scene, 12.5, 12.5, 'food')
    this.scene.add.existing(this)
    this.move()
  }

  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  move() {
    this.coordX = this.getRandomNumber(0, 17)
    this.coordY = this.getRandomNumber(0, 23)
    this.scene.board[this.coordY][this.coordX] = 2
    this.x = (this.coordX * 25) + 12.5
    this.y = (this.coordY * 25) + 12.5
  }
}