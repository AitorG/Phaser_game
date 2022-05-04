import Snake from "./Snake"

export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: "Game" })
    this.board = []
  }

  create() {
    const hello = this.add.text(0, 0, 'Hola, el juego esta en marcha', {
      color: '#FFFFFF',
      font: '20px Arial',
    })

    // matriz de 18x24
    for (let i = 0; i < 24; i++) {
      this.board[i] = []
      for (let x = 0; x < 18; x++) {
        this.board[i][x] = 0
      }
    }
    console.log(this.board)

    this.snake = new Snake(this, 5, 2, 'square')

    // Teclado alfabético
    this.up = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W) // ArrowUp
    this.down = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S) // ArrowDown
    this.left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A) // ArrowLeft
    this.right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D) // ArrowRight

    // Flechas de dirección
    this.arrowUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP) // ArrowUp
    this.arrowDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN) // ArrowDown
    this.arrowLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT) // ArrowLeft
    this.arrowRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT) // ArrowRight

    this.up.onDown = () => {
      this.snake.setDirection(1)
    }
    this.down.onDown = () => {
      this.snake.setDirection(3)
    }
    this.left.onDown = () => {
      this.snake.setDirection(4)
    }
    this.right.onDown = () => {
      this.snake.setDirection(2)
    }

    this.arrowUp.onDown = () => {
      this.snake.setDirection(1)
    }
    this.arrowDown.onDown = () => {
      this.snake.setDirection(3)
    }
    this.arrowLeft.onDown = () => {
      this.snake.setDirection(4)
    }
    this.arrowRight.onDown = () => {
      this.snake.setDirection(2)
    }
    
    
  }

  update() {}
}
