import config from "../config.js"
export default class AfterPreload extends Phaser.Scene {
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
        let rectangulo5 = this.add.rectangle(470, 180, 80, 30).setStrokeStyle(1, 0x000000, 0.65)
        rectangulo5.setInteractive()
        rectangulo5.on('pointerdown', () => {
            rectangulo5.setFillStyle(0x00DC3F, 0.65)
            rectangulo6.setFillStyle(0x000000, 0)
            config.isHardMode = false
        })
        this.afterText = this.add.text(445, 168, "FÁCIL", {
            fontFamily: "Comic",
            fontSize: "16px",
            color: "#0078FF",
            stroke: "#000000",
            strokeThickness: 3
        })

        let rectangulo6 = this.add.rectangle(555, 180, 80, 30).setStrokeStyle(1, 0x000000, 0.65)
        rectangulo6.setInteractive()
        rectangulo6.on('pointerdown', () => {
            console.log("ponterdown")
            rectangulo6.setFillStyle(0xDC003F, 0.65)
            rectangulo5.setFillStyle(0x000000, 0)
            config.isHardMode = true
        })
        this.afterText = this.add.text(521, 168, "DIFÍCIL", {
            fontFamily: "Comic",
            fontSize: "16px",
            color: "#0078FF",
            stroke: "#000000",
            strokeThickness: 3
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