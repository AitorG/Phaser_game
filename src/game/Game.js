/** 
 * ToDo: DEBERES 
 * Lo que voy a investigar NO ES DE PHASER, ES DE JS EN GENERAL
 * Investigar lo que es el localStorage; como se usa, como guardar objetos y como sacarlos.
 * Cuando sepa lo que es, en el juego, cuando un jugador gana; guardar en el localStorage la info del jugador que luego pinto en el Ranking
 * En el ranking leer el localStorage y pintar esa info :D
 */
import Personaje from "../personaje/Personaje.js"
import config from "../config"
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
    this.counter = 0
    this.explosion
    this.sonidoEstrella
    this.musicaFondo
    this.paso1
    this.paso2
    this.pasoActual = 1
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

    this.personaje = new Personaje (this)
    if (config.personajes == 2) {
      this.personaje2 = new Personaje(this)
    }

    this.anims.create({
      frameRate: 19,
      key: "Explota",
      frames: this.anims.generateFrameNames('Anim_Explosion', {start: 0, end: 19})
    })

    this.cursors = this.input.keyboard.createCursorKeys()
    this.cursors2 = this.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.W,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D
    })
    this.forParaEstrellas(12)
    this.forParaBombas(8)
    if (config.isHardMode == true){
      this.rect = this.add.rectangle(400, 300, 800, 600, 0x000000, 1)
    }

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

    this.explosion = this.sound.add ("Explosion", {loop: false, volume: 0.25})
    this.sonidoEstrella = this.sound.add ("sonido_Estrella", {loop: false, volume: 0.2})
    this.musica_fondo = this.sound.add ("musica_fondo", {loop: true, volume: 0.04})
    this.musica_fondo.play()
    this.paso1 = this.sound.add ("paso1", {loop: false, volume: 0.2})
    this.paso2 = this.sound.add ("paso2", {loop: false, volume: 0.2})

    let joyStick = new VirtualJoystick(this, {
      x: 80,
      y: 520,
      radius: 32,
      base: this.add.image(0,0,"Joystick"),
      thumb: this.add.image(0,0,"Thumb"),
    })
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

    if (config.personajes == 2) {
      let joyStick2 = new VirtualJoystick(this, {
        x: 718,
        y: 520,
        radius: 32,
        base: this.add.image(0,0,"Joystick"),
        thumb: this.add.image(0,0,"Thumb"),
      })
      this.cursorKeys2=joyStick2.createCursorKeys()
      joyStick2.on("update", ()=>{
        this.cursors2.left.isDown = false
        this.cursors2.up.isDown = false
        this.cursors2.right.isDown = false
        this.cursors2.down.isDown = false
        for (const name in this.cursorKeys2) {
          if (this.cursorKeys2[name].isDown) {
            switch (name) {
              case 'left': this.cursors2.left.isDown = true
              break
              case 'up': this.cursors2.up.isDown = true
              break
              case 'right': this.cursors2.right.isDown = true
              break
              case 'down': this.cursors2.down.isDown = true
              break
            }
          } 
        }
      })
    }

  }
// FIN DEL CREATE

  forParaEstrellas(cuantasEstrellas){
    for (let cuenta = 0; cuenta < cuantasEstrellas; cuenta++){
      const estrella = this.physics.add.image((this.getRandomInt(30,750)),(this.getRandomInt(30, 500)),"Estrella")
      estrella.setBounceY(0.5)
      this.physics.add.collider(estrella, this.plataformas)
      this.physics.add.overlap(this.personaje.cuerpo, estrella, this.recogerEstrellas, null, this)
      if (config.personajes == 2) {
        this.physics.add.overlap(this.personaje2.cuerpo, estrella, this.recogerEstrellas, null, this)
      }
      this.estrellas.push(estrella)
    }
  }

  recogerEstrellas(personaje, estrella){
    if (estrella){
      this.puntosEstrella = this.puntosEstrella + 1
      this.puntuacionText.setText('Puntuación: ' + this.puntosEstrella)
      estrella.disableBody(true, true)
      this.collectStar()
      this.sonidoEstrella.play()
      if (this.puntosEstrella == 12 - this.cuantasBombas){
        console.log("YOU WON!")
        this.youWin()
      }
    }
  }

  eatBomb(player, bomb) {
    if (config.isHardMode == true){
      this.counter = this.counter - 0.1
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
      bomba.setVelocityX(this.getRandomInt(-150, 150))
      bomba.setVelocityY(-200)
      bomba.setGravityY(-500)
      this.physics.add.collider(bomba, this.personaje.cuerpo, () => {
        bomba.disableBody(true, true)
        this.eatBomb()
        this.explosion.play()
        this.vidas = this.vidas - 1
        this.cuantasBombas ++
        this.quitarCorazones(this.vidas)
        if(this.vidas <= 0){
          console.log("GAME OVER")
          this.gameOver()
        }
      })
      if (config.personajes == 2) {
        this.physics.add.collider(bomba, this.personaje2.cuerpo, () => {
          bomba.disableBody(true, true)
          this.eatBomb()
          this.explosion.play()
          this.vidas = this.vidas - 1
          this.cuantasBombas ++
          this.quitarCorazones(this.vidas)
          if(this.vidas <= 0){
            console.log("GAME OVER")
            this.gameOver()
          }
        })
      }
      
      this.physics.add.collider(bomba, this.plataformas)
      this.bombas.push(bomba)
    }
    this.physics.add.collider(this.bombas, this.bombas)
  }

  collectStar(player, star) {
    if (config.isHardMode == true){
      this.counter = this.counter +0.125
    }
}

  gameOver() {
    this.gameOverImage = this.add.image(400, 300, "Game_Over")
    this.cameras.main.setAlpha(1)
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

  reproducirPaso() {
    if (this.personaje.cuerpo.body.blocked.down || (config.personajes == 2 && this.personaje2.cuerpo.body.blocked.down)) {
      if (this.pasoActual == 1) {
        if (!this.paso2.isPlaying) {
          this.paso1.play()
          this.pasoActual = 2
        }
      } else {
        if (!this.paso1.isPlaying) {
          this.paso2.play()
          this.pasoActual = 1
        }
      }
    }
  }

  update(time, delta) {
    if (config.isHardMode == true){
      this.rect.setAlpha(0+ (Math.round(((Date.now() - this.now) / 1000) * 100) / 1000) -this.counter)
      console.log((Math.round(((Date.now() - this.now) / 1000) * 100) / 1000))
    }

    if (config.personajes == 2) {
      if (this.cursors2){
        if (this.cursors2.left.isDown){
          this.personaje2.cuerpo.setVelocityX(-160)
          this.personaje2.cuerpo.anims.play("left", true)
          this.reproducirPaso()
        }
        else if (this.cursors2.right.isDown){
          this.personaje2.cuerpo.setVelocityX(160)
          this.personaje2.cuerpo.anims.play("right", true)
          this.reproducirPaso()
        }
        else{
          this.personaje2.cuerpo.setVelocityX(0)
          this.personaje2.cuerpo.anims.play("turn", true)
        }
        if (this.cursors2.up.isDown && this.personaje2.cuerpo.body.touching.down){
          this.personaje2.cuerpo.setVelocityY(-370)
        }
      }
    }

    if (this.cursors){
      if (this.cursors.left.isDown){
        this.personaje.cuerpo.setVelocityX(-160)
        this.personaje.cuerpo.anims.play("left", true)
        this.reproducirPaso()
      }
      else if (this.cursors.right.isDown){
        this.personaje.cuerpo.setVelocityX(160)
        this.personaje.cuerpo.anims.play("right", true)
        this.reproducirPaso()
      }
      else{
        this.personaje.cuerpo.setVelocityX(0)
        this.personaje.cuerpo.anims.play("turn", true)
      }
      if (this.cursors.up.isDown && this.personaje.cuerpo.body.touching.down){
        this.personaje.cuerpo.setVelocityY(-370)
      }
    }
    this.tiempo.setText('Tiempo: ' + Math.round(((Date.now() - this.now) / 1000) * 100) / 100 + 's')
    this.fps.setText('FPS: ' + Math.round(this.game.loop.actualFps))
  }
}