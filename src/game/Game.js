
export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'Game' })
  }

  create() {
    const hello = this.add.text(0, 0, 'Hola, el juego esta en marcha', {
      color: '#FFFFFF',
      font: '20px Arial',
    })

  }

  update() {}
}
