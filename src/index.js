import Phaser from "phaser"
import Preload from "./preload/Preload"
import Game from "./game/Game"


const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 800,
  scene: [
    Preload,
    Game
  ],
  physics: {
    default: 'arcade',
  }
}

const game = new Phaser.Game(config)
 