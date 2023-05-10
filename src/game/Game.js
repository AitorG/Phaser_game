//DEBERES: El texto de pulse para jugar tiene que quedar centradito, el de ranking también (hecho)
//Pintar los botones de fácil y difícil dentro de dificultad, cuando pinches en alguna que el boton se coloree, si el otro a sido previamente seleccionado que se descolore
import VirtualJoystick from 'phaser3-rex-plugins/plugins/virtualjoystick'

export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'Game' })
    this.estrellas  = []
    this.bombas = []
    this.vidas = 3
    this.corazones = []
    this.puntosEstrella = 0
    this.now = 0
    this.cuantasBombas = 0
  }


// El orden es importante al colocar las imágenes. La última creada es la que se ve por encima del resto.
  create() {
    this.now = Date.now()
    this.cielo = this.add.image(400, 300, "Cielo")

    this.plataformas = this.physics.add.staticGroup()
    this.plataformas.create(200, 585, "Plataforma")
    this.plataformas.create(600, 585, "Plataforma")
    this.plataformas.create(600, 500, "Plataforma")
    this.plataformas.create(150, 400, "Plataforma")
    this.plataformas.create(600, 300, "Plataforma")
    this.plataformas.create(150, 190, "Plataforma")
    this.plataformas.create(600, 100, "Plataforma")

    this.corazones.push(this.corazon1 = this.add.image(30, 30, "Corazon"))
    this.corazones.push(this.corazon2 = this.add.image(80, 30, "Corazon"))
    this.corazones.push(this.corazon3 = this.add.image(130, 30, "Corazon"))

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

    this.puntuacionText = this.add.text(650, 5, "Puntuación: 0", { 
      fontFamily: "Comic",
      fontSize: "18px",
      color: "#FFFFFF",
      stroke: '#000000',
      strokeThickness: 4
    })

    this.tiempo = this.add.text(460, 5, "Tiempo: 0.00s", { 
      fontFamily: "Comic",
      fontSize: "18px",
      color: "#FFFF44",
      stroke: '#000000',
      strokeThickness: 4
    })

    this.fps = this.add.text(260, 5, "FPS: 30", { 
      fontFamily: "Comic",
      fontSize: "18px",
      color: "#FFFF44",
      stroke: '#000000',
      strokeThickness: 4
    })

    var joyStick = new VirtualJoystick(this, {
      x: 80,
      y: 520,
      radius: 32,
      base: this.add.image(0,0,"Joystick"),
      thumb: this.add.image(0,0,"Thumb"),
    });
    this.cursorKeys=joyStick.createCursorKeys()
    joyStick.on("update", ()=>{
      this.cursors.left.isDown = false
      this.cursors.up.isDown = false
      this.cursors.right.isDown = false
      this.cursors.down.isDown = false
      for (const name in this.cursorKeys) {
        if (this.cursorKeys[name].isDown) {
          switch (name) {
            case 'left': this.cursors.left.isDown = true
            break
            case 'up': this.cursors.up.isDown = true
            break
            case 'right': this.cursors.right.isDown = true
            break
            case 'down': this.cursors.down.isDown = true
            break
          }
        } 
      }
    })

  }
// FIN DEL CREATE

  forParaEstrellas(cuantasEstrellas){
    for (let cuenta = 0; cuenta < cuantasEstrellas; cuenta++){
      const estrella = this.physics.add.image((this.getRandomInt(30,750)),(this.getRandomInt(30, 500)),"Estrella")
      estrella.setBounceY(0.5)
      this.physics.add.collider(estrella, this.plataformas)
      this.physics.add.overlap(this.personaje, estrella, this.recogerEstrellas, null, this)
      this.estrellas.push(estrella)
    }
  }

  recogerEstrellas(personaje, estrella){
    if (estrella){
      this.puntosEstrella = this.puntosEstrella + 1
      this.puntuacionText.setText('Puntuación: ' + this.puntosEstrella)
      estrella.disableBody(true, true)
      if (this.puntosEstrella == 12 - this.cuantasBombas){
        console.log("YOU WON!")
        this.youWin()
      }
    }
  }

  quitarCorazones(cualCorazon){
    this.corazones[cualCorazon].setVisible(false)
    this.puntosEstrella -= 1
    this.puntuacionText.setText('Puntuación: ' + this.puntosEstrella)
  }

  forParaBombas(cuantasBombas){
    for (let cuenta = 0; cuenta < cuantasBombas; cuenta++){
      const bomba = this.physics.add.image((this.getRandomInt(30,750)),(this.getRandomInt(30, 500)),"Bomba")
      bomba.setCollideWorldBounds(true)
      bomba.setBounceY(1)
      bomba.setBounceX(1)
      bomba.setVelocityX(15)
      bomba.setVelocityY(-100)
      this.physics.add.collider(bomba, this.personaje, () => {
        bomba.disableBody(true, true)
        this.vidas = this.vidas - 1
        this.cuantasBombas ++
        this.quitarCorazones(this.vidas)
        if(this.vidas <= 0){
          console.log("GAME OVER")
          this.gameOver()
        }
      })
      this.physics.add.collider(bomba, this.plataformas)
      this.bombas.push(bomba)
    }
  }

  gameOver() {
    this.gameOverImage = this.add.image(400, 300, "Game_Over")
    this.scene.pause("Game")
    setTimeout(()=>{
      location.reload()
    }, 3000)
  }

  youWin() {
    this.youWinImage = this.add.image(400, 300, "You_Win")
    this.youWinText = this.add.text(100, 200, "PUNTUACIÓN: " + this.puntosEstrella, { 
      fontFamily: "Comic",
      fontSize: "70px",
      color: "#0078FF",
      stroke: '#000000',
      strokeThickness: 4
   })
   this.tweens.add({
      targets: this.youWinImage,
      alpha: 0.3,
      yoyo: true, //para que haga el efecto hacia delante y hacia atrás
      duration: 300, // duración del tween
      repeat: -1 // el numero de veces que se ejecuta, -1 para infinitas
    }) 
    this.timeText = this.add.text(100, 300, "TIEMPO: " + (Math.round(((Date.now() - this.now) / 1000) * 100) / 100), { 
      fontFamily: "Comic",
      fontSize: "70px",
      color: "#0078FF",
      stroke: '#000000',
      strokeThickness: 4
   })
   this.tweens.add({
      targets: this.timeText,
      alpha: 0.3,
      yoyo: true, //para que haga el efecto hacia delante y hacia atrás
      duration: 300, // duración del tween
      repeat: -1 // el numero de veces que se ejecuta, -1 para infinitas
    }) 
    this.scene.pause("Game")
    setTimeout(()=>{
      location.reload()
    }, 6000)
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

  update(time, delta) {
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
        this.personaje.setVelocityY(-170)
      }
    }
    this.tiempo.setText('Tiempo: ' + Math.round(((Date.now() - this.now) / 1000) * 100) / 100 + 's')
    this.fps.setText('FPS: ' + Math.round(this.game.loop.actualFps))
  }
}
