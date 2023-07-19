/*DEBERES: Crear un fichero a parte que sea una clase, la vamos a llamar Personaje, y tiene que heredar (extender) de Phaser.GameObjects.Container.

El container tendrá que tener un ancho y un alto (this.width y this.height) que habrá que establecerlos en el constructor. El ancho y el alto deberían de ser iguales al tamaño de la imagen del personaje.

En el constructor de Personaje, la primera línea debería ser llamar al constructor del padre del que hereda, es decir, de Container. Esto se hace poniendo una línea nada más empezar el constructor que sea: super() y dentro del paréntesis los parámetros que pide

Importar esta clase desde el juego (clase Game) y instanciarla, de forma que se vea el personaje. El personaje actual no hay que quitarlo, así que se verán dos.

Dentro del container, tenemos que generar la imagen del personaje, para hacer esto te puedes basar en cómo está hecho en el Game.js. Cuando tengas la imagen creada, para agregarla al container, sería this.add(this.imagen)

Para que el container se vea dentro del Game, una vez importado e instanciado, dentro de la clase Personaje.js hay que meter esta linea al final del constructor: this.scene.add.existing(this)

Cuando vayas a crear el personaje dentro de Game.js, es decir, hacer algo como new Personaje(), ten en cuenta los parámetros que van dentro de los paréntesis de Personaje(), que son fundamentales para que se cree bien.

Como final, conseguir que se vea este segundo personaje dentro del juego 
*/

export default class Personaje extends Phaser.GameObjects.Container {
  constructor(scene) {
    super(scene)
    this.width = 32 
    this.height = 48
    this.scene.add.existing(this)
  }

  create(){
    this.add(this.image)
    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("Personaje2", { start: 0, end: 3 }),
      frameRate: 15,
      repeat: -1
    })
    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("Personaje2", { start: 5, end: 8 }),
      frameRate: 15,
      repeat: -1
    })
    this.anims.create({
      key: "turn",
      frames: [{ key: "Personaje2", frame: 4 }],
      frameRate: 15,
      repeat: -1
    })
  }

}