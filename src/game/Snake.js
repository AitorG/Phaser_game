
export default class Snake extends Phaser.GameObjects.Group {
  constructor(scene, coordX, coordY, texture) {
    super(scene)
    this.scene.add.existing(this)
    this.direction = 3 // 1 Arriba 2 Derecha 3 Abajo 4 Izquierda
    this.velocity = 200 // tiempo en milisegundos que tarda en ejecutar cada movimiento
    this.coordX = coordX
    this.coordY = coordY
    this.x = (coordX * 25) + 12.5
    this.y = (coordY * 25) + 12.5
    this.scene.board[coordY][coordX] = 1
    const image = this.scene.add.image(this.x, this.y, texture)
    this.add(image)
    this.timer = this.scene.time.addEvent({
      delay: this.velocity,
      callback: () => {
        this.move()
      },
      loop: true
    })
  }

  setDirection(direction) {
    if (direction <= 4 && direction > 0) {
      const valid = Math.abs(direction - this.direction)
      if (valid != 2) {
        this.direction = direction
      }
    }
  }

  movementEffect(image) {
    this.tween = this.scene.tweens.add({
      targets: image,
      delay: 0,
      duration: this.velocity,
      x: (this.coordX * 25) + 12.5,
      y: (this.coordY * 25) + 12.5,
      repeat: 0
    })
  }

  move() {
    this.scene.board[this.coordY][this.coordX] = 0
    switch (this.direction) {
      case 1: this.coordY--
        break
      case 2: this.coordX++
        break
      case 3: this.coordY++
        break
      case 4: this.coordX--
        break
    }
    if (this.coordX < 0 || this.coordX > 17 || this.coordY < 0 || this.coordY > 23 || this.scene.board[this.coordY][this.coordX] == 1) {
      // FIN DEL JUEGO
      console.log('FIN DEL JUEGO')
    } else {
      if (this.scene.board[this.coordY][this.coordX] == 2) { // comida
        console.log('HE COMIDOOOOO')
        this.scene.food.move()
      }
      this.scene.board[this.coordY][this.coordX] = 1
      this.x = (this.coordX * 25) + 12.5
      this.y = (this.coordY * 25) + 12.5
      this.children.each((snake) => {
        this.movementEffect(snake)
      })
    }
  }

  // move() {
  //   let childs = 0
  //   this.children.each((snake) => {
  //     snake.x = this.x + (25 * childs)
  //     snake.y = this.y
  //     childs++
  //   })
  // }

  

}
