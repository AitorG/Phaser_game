
export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'Game' })
  }

  create() {
    const hello = this.add.text(0, 0, 'Hola que tal', {
      color: '#FFFFFF',
      font: '20px Arial',
    })

  }

  update() {}
}
