import Phaser from "phaser"
import Preload from "./preload/Preload"
import Game from "./game/Game"


const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  scene: [
    Preload,
    Game
  ],
  physics: {
    default: 'arcade',
    arcade: {
      gravity:{
        y: 100
      }
    }
  }
}

const game = new Phaser.Game(config)
 