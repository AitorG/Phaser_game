import Phaser from "phaser"
import Preload from "./preload/Preload"
import AfterPreload from "./afterPreload/AfterPreload.js"
import Ranking from "./ranking/Ranking"
import Game from "./game/Game"

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  scene: [
    Preload,
    AfterPreload,
    Ranking,
    Game
  ],
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity:{
        y: 500
      }
    }
  },
}

const game = new Phaser.Game(config)
 