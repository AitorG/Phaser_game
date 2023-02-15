//DEBERES: Las bombas deben moverse de por el mapa (aleatoriamente), ponerle velocidadX y velocidadY y hacerle un bounce para que rebote. Tienen que rebotar con los bordes del mundo y con las plataformas.

export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'Game' })
    this.estrellas  = []
    this.bombas = []
  }


// El orden es importante al colocar las imágenes. La última creada es la que se ve por encima del resto.
  create() {
    this.cielo = this.add.image(400, 300, "Cielo")

    this.plataformas = this.physics.add.staticGroup()
    this.plataformas.create(200 ,585 , "Plataforma")
    this.plataformas.create(600 ,585 , "Plataforma")
    this.plataformas.create(600 ,500 , "Plataforma")
    this.plataformas.create(150 ,400 , "Plataforma")
    this.plataformas.create(600 ,300 , "Plataforma")
    this.plataformas.create(150 ,190 , "Plataforma")
    this.plataformas.create(600 ,100 , "Plataforma")

    this.personaje = this.physics.add.sprite(350, 545,"Personaje")
    this.personaje.setBounce(0.2)
    this.personaje.setCollideWorldBounds(true)
    this.physics.add.collider(this.personaje, this.plataformas)

    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("Personaje", { start: 0, end: 3 }),
      frameRate: 15,
      repeat: -1
    })
    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("Personaje", { start: 5, end: 8 }),
      frameRate: 15,
      repeat: -1
    })
    this.anims.create({
      key: "turn",
      frames: [{ key: "Personaje", frame: 4 }],
      frameRate: 15,
      repeat: -1
    })

    this.cursors = this.input.keyboard.createCursorKeys()

    this.forParaEstrellas(12)
    this.forParaBombas(8)

  }

  forParaEstrellas(cuantasEstrellas){
    for (let cuenta = 0; cuenta < cuantasEstrellas; cuenta++){
      const estrella = this.physics.add.image((this.getRandomInt(30,750)),(this.getRandomInt(30, 500)),"Estrella")
      estrella.setBounceY(0.5)
      this.physics.add.collider(estrella, this.plataformas)
      this.physics.add.overlap(this.personaje, estrella, this.recogerEstrellas)
      this.estrellas.push(estrella)
    }
  }

  recogerEstrellas(personaje, estrella){
    if (estrella){
      estrella.disableBody(true, true)
    }
  }
  

  forParaBombas(cuantasBombas){
    for (let cuenta = 0; cuenta < cuantasBombas; cuenta++){
      const bomba = this.physics.add.image((this.getRandomInt(30,750)),(this.getRandomInt(30, 500)),"Bomba")
      bomba.setCollideWorldBounds(true)
      bomba.setBounceY(1)
      bomba.setBounceX(1)
      bomba.setVelocityX(15)
      bomba.setVelocityY(-100)
      this.physics.add.collider(bomba, this.personaje, function() {
        console.log('¡Colision detectada!');
      });
      this.physics.add.collider(bomba, this.plataformas)
      this.bombas.push(bomba)
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

  update() {
    if (this.cursors){
      if (this.cursors.left.isDown){
        this.personaje.setVelocityX(-160)
        this.personaje.anims.play("left", true)
      }
      else if (this.cursors.right.isDown){
        this.personaje.setVelocityX(160)
        this.personaje.anims.play("right", true)
      }
      else{
        this.personaje.setVelocityX(0)
        this.personaje.anims.play("turn", true)
      }
      if (this.cursors.up.isDown && this.personaje.body.touching.down){
        this.personaje.setVelocityY(-330)
      }
    }
  }
}
