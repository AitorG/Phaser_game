export default class AfterPreload extends Phaser.Scene{
    constructor() {
        super({ key: 'AfterPreload' })
        this.afterText = ""
    }
    create() {
        this.add.image(400, 300, "afterPreload")
        this.afterText = this.add.text(250, 340, "PULSA PARA EMPEZAR", { 
            fontFamily: "Comic",
            fontSize: "30px",
            color: "#0078FF"
         })
         this.tweens.add({
            targets: this.afterText,
            alpha: 0.3,
            yoyo: true, //para que haga el efecto hacia delante y hacia atrás
            duration: 300, // duración del tween
            repeat: -1 // el numero de veces que se ejecuta, -1 para infinitas
          }) 
    }
}