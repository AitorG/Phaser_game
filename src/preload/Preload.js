import WebFontFile from "./WebFontFile"

export default class Preload extends Phaser.Scene {
  constructor() {
    super({ key: "Preload" })
  }

  preload() {
     // Create the loading bar background
     let progressBar = this.add.graphics();
     let progressBox = this.add.graphics();
     progressBox.fillStyle(0x222222, 0.8);
     progressBox.fillRect(240, 270, 320, 50);
 
     // Create the loading progress text
     let width = this.cameras.main.width;
     let height = this.cameras.main.height;
     let loadingText = this.make.text({
       x: width / 2,
       y: height / 2 - 50,
       text: 'Loading...',
       style: {
         font: '20px monospace',
         fill: '#ffffff'
       }
     });
     loadingText.setOrigin(0.5, 0.5);
 
     // Create the loading percentage text
     let percentText = this.make.text({
       x: width / 2,
       y: height / 2,
       text: '0%',
       style: {
         font: '18px monospace',
         fill: '#ffffff'
       }
     });
     percentText.setOrigin(0.5, 0.5);
     //Load the assets
    this.load.image("afterPreload", "assets/afterPreload.png")
    this.load.image("Bomba", "assets/bomb.png")
    this.load.image("Plataforma", "assets/platform.png")
    this.load.image("Cielo", "assets/sky.png")
    this.load.image("Estrella", "assets/star.png")
    this.load.image("Corazon", "assets/corazon.png")
    this.load.spritesheet("Personaje", "assets/dude.png", {
      frameWidth: 32,
      frameHeight: 48
    })
    this.load.image("Joystick", "assets/joystick.png")
    this.load.image("Thumb", "assets/thumb.png")
    this.load.image("Game_Over", "assets/game_over.jpg")
    this.load.image("You_Win", "assets/you_win.jpg")
    this.load.audio("Explosion", "assets/107.wav")
    this.load.audio("sonido_Estrella", "assets/sonidoEstrella.wav")
    this.load.audio("musica_fondo", "assets/musica_fondo.mp3")
    this.load.audio("paso1", "assets/23.wav")
    this.load.audio("paso2", "assets/24.wav")
    this.load.spritesheet('Anim_Explosion', 'assets/explosion.png', {frameWidth: 128, frameHeight: 128})
    this.load.image("fondoRanking", "assets/fondoRanking.png")

    this.load.addFile(
      new WebFontFile(this.load, [
        'PermanentMarker',
        'Comic',
        'Arial',
      ])
    )

     // Update the progress bar
     this.load.on('progress', function (value) {
      percentText.setText(parseInt(value * 100) + '%');
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, 300 * value, 30);
    });

    // Start the next scene when everything is loaded
    this.load.on('complete', function () {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
    }, this);
  }

  create() {
    this.scene.stop("Preload")
    this.scene.start("AfterPreload")
  }
}
