//DEBERES: El juego tiene varias estrellas y varias bombas, no agregar una a una (hacer un for)
/**
 *! hacer un método para agregar estrellas
 *! hacer un método para agregar bombas
 *! los métodos tendrán un parámetro que indique cuántas bombas/estrellas queremos agregar, y agregará tantas bombas y estrellas como indique el método con posiciones aleatorias.
 */
export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'Game' })
  }


// El orden es importante al colocar las imágenes. La última creada es la que se ve por encima del resto.
  create() {
    this.cielo = this.add.image(400, 300, "Cielo")
    this.forParaEstrellas(12)
    this.forParaBombas(12)
    this.plataformas = this.add.image(200 ,585 , "Plataforma")
    this.plataformas = this.add.image(600 ,585 , "Plataforma")
    this.plataformas = this.add.image(600 ,500 , "Plataforma")
    this.plataformas = this.add.image(150 ,400 , "Plataforma")
    this.plataformas = this.add.image(600 ,300 , "Plataforma")
    this.plataformas = this.add.image(150 ,190 , "Plataforma")
    this.plataformas = this.add.image(600 ,100 , "Plataforma")
    this.personaje = this.add.sprite(350, 545,"Personaje")
  }
  forParaEstrellas(cuantasEstrellas){
    for (let cuenta = 0; cuenta < cuantasEstrellas; cuenta++){
    this.estrella = this.add.image((this.getRandomInt(150,610)),(this.getRandomInt(90, 610)),"Estrella")
    }
  }

  forParaBombas(cuantasBombas){
    for (let cuenta = 0; cuenta < cuantasBombas; cuenta++){
      this.bomba = this.add.image((this.getRandomInt(150,610)),(this.getRandomInt(90, 610)),"Bomba")
      }
  }

  /**
   * Método que devuelve un número entero entre el minimo y máximo que reciba por parámetro
   * Para usarlo, let numeroAleatorio = getRandomInt(1, 100) por ejemplo, para un numero entre el 1 y el 100
   */
  getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  update() {}
}
