export default class Snake extends Phaser.GameObjects.Group {
  constructor(scene, x, y, texture) {
    super(scene)
    const image = this.scene.add.image(x, y, texture)
    const image2 = this.scene.add.image(x - 25, y, texture)
    this.add(image)
    this.add(image2)
    this.scene.add.existing(this)
    this.direction = 3 // 1 Arriba 2 Derecha 3 Abajo 4 Izquierda
    this.velocity = 1.4
    this.x = x
    this.y = y
  }

  setDirection(direction) {
    if (direction <= 4 && direction > 0) {
      const valid = Math.abs(direction - this.direction)
      if (valid != 2) {
        this.direction = direction
      }
    }
  }

  move() {
    let childs = 0
    this.children.each((snake) => {
      snake.x = this.x + (25 * childs)
      snake.y = this.y
      childs++
    })
  }
  
  preUpdate() {
    switch (this.direction) {
      case 1:
        if (this.y >= 12.5) this.y -= this.velocity
        break
      case 2:
        if (this.x <= (450 - 12.5)) this.x += this.velocity
        break
      case 3:
        if (this.y <= (600 - 12.5)) this.y += this.velocity
        break
      case 4:
        if (this.x >= 12.5) this.x -= this.velocity
        break
    }
    this.move()
  }
}
