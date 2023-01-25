/*DEBERES
-Agregar el cuadro verde (food.png)
-El cuadro verde tiene que ir hacia arriba
-Extra: Que los cuadros se choquen entre ellos, cuando se choquen que reboten
*/
import Phaser from "phaser"
import Preload from "./preload/Preload"
import Game from "./game/Game"


const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 400,
  height: 600,
  scene: [
    Preload,
    Game
  ],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 110
      }
    }
  }
}

const game = new Phaser.Game(config)
 