export default class AfterPreload extends Phaser.Scene{
    constructor() {
        super({ key: 'AfterPreload' })
        this.afterText = ""
    }
    create() {
        let botonEmpezar = this.add.image(400, 300, "afterPreload").setDisplaySize(800, 600)
        this.afterText = this.add.text(270, 340, "PULSA PARA EMPEZAR", { 
            fontFamily: "Comic",
            fontSize: "26px",
            color: "#0078FF",
            stroke: "#000000",
            strokeThickness: 3
         })
         this.tweens.add({
            targets: this.afterText,
            alpha: 0.3,
            yoyo: true, //para que haga el efecto hacia delante y hacia atrás
            duration: 300, // duración del tween
            repeat: -1 // el numero de veces que se ejecuta, -1 para infinitas
          }) 
        let rectangulo = this.add.rectangle(415, 360, 370, 50).setStrokeStyle(1, 0x000000, 0.65)
        rectangulo.setInteractive()
        rectangulo.on('pointerdown', () => {
            this.scene.transition({
                target: 'Game'
            })
        })
        this.afterText = this.add.text(350, 280, "RANKING", { 
            fontFamily: "Comic",
            fontSize: "26px",
            color: "#0078FF",
            stroke: "#000000",
            strokeThickness: 3
         })
        let rectangulo1 = this.add.rectangle(415, 300, 370, 50).setStrokeStyle(1, 0x000000, 0.65)
        rectangulo1.setInteractive()
        rectangulo1.on('pointerdown', () => {
             
         })
        this.afterText = this.add.text(250, 220, "SONIDO", { 
            fontFamily: "Comic",
            fontSize: "26px",
            color: "#0078FF",
            stroke: "#000000",
            strokeThickness: 3
         })
        let rectangulo2 = this.add.rectangle(415, 240, 370, 50).setStrokeStyle(1, 0x000000, 0.65)
        rectangulo2.setInteractive()
        rectangulo2.on('pointerdown', () => {
             
         })
        this.afterText = this.add.text(250, 160, "DIFICULTAD", { 
            fontFamily: "Comic",
            fontSize: "26px",
            color: "#0078FF",
            stroke: "#000000",
            strokeThickness: 3
         })
        let rectangulo3 = this.add.rectangle(415, 180, 370, 50).setStrokeStyle(1, 0x000000, 0.65)
        rectangulo3.setInteractive()
        rectangulo3.on('pointerdown', () => {
             
         })
         this.afterText = this.add.text(250, 100, "NOMBRE:", { 
            fontFamily: "Comic",
            fontSize: "26px",
            color: "#0078FF",
            stroke: "#000000",
            strokeThickness: 3
         })
        let rectangulo4 = this.add.rectangle(415, 120, 370, 50).setStrokeStyle(1, 0x000000, 0.65)
        rectangulo4.setInteractive()
        rectangulo4.on('pointerdown', () => {
             
         })
    }
}