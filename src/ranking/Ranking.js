export default class Ranking extends Phaser.Scene {
  constructor() {
      super({ key: 'Ranking' })
      this.jugadores = 0
  }

  create() {
    this.add.image(0, 0, 'fondoRanking').setOrigin(0)

    this.add.text(20, 50, 'POSICIÓN', {       
      fontFamily: "Comic",
      fontSize: "18px",
      color: "#FFFF44",
      stroke: '#000000',
      strokeThickness: 4 
    })

    this.add.text(150, 50, 'NOMBRE', {       
      fontFamily: "Comic",
      fontSize: "18px",
      color: "#FFFF44",
      stroke: '#000000',
      strokeThickness: 4 
    })

    this.add.text(270, 50, 'PUNTOS', {       
      fontFamily: "Comic",
      fontSize: "18px",
      color: "#FFFF44",
      stroke: '#000000',
      strokeThickness: 4 
    })

    this.add.text(390, 50, 'TIEMPO', {       
      fontFamily: "Comic",
      fontSize: "18px",
      color: "#FFFF44",
      stroke: '#000000',
      strokeThickness: 4 
    })

    this.add.text(510, 50, 'DIFICULTAD', {       
      fontFamily: "Comic",
      fontSize: "18px",
      color: "#FFFF44",
      stroke: '#000000',
      strokeThickness: 4 
    })

    this.add.text(670, 50, 'JUGADORES', {       
      fontFamily: "Comic",
      fontSize: "18px",
      color: "#FFFF44",
      stroke: '#000000',
      strokeThickness: 4 
    })

    this.agregarJugador(1, "mariano", 47, "dificil", 86, 2)
    this.agregarJugador(1, "mariano", 47, "dificil", 86, 2)
    this.agregarJugador(1, (localStorage.getItem("name")), (localStorage.getItem("points")), (localStorage.getItem("dificulty")), (localStorage.getItem("time")), (localStorage.getItem("players")))

  }
// FIN DEL CREATE
  agregarJugador(posicion, nombre, puntos, dificultad, tiempo, jugadores) {
    this.add.text(20, 100 + (50 * this.jugadores), posicion, {
      fontFamily: "Comic",
      fontSize: "17px",
      color: "#FFFFFF",
      stroke: '#000000',
      strokeThickness: 3
    })
    this.add.text(150, 100 + (50 * this.jugadores), nombre, {
      fontFamily: "Comic",
      fontSize: "17px",
      color: "#FFFFFF",
      stroke: '#000000',
      strokeThickness: 3
    })
    this.add.text(270, 100 + (50 * this.jugadores), puntos, {
      fontFamily: "Comic",
      fontSize: "17px",
      color: "#FFFFFF",
      stroke: '#000000',
      strokeThickness: 3
    })
    this.add.text(390, 100 + (50 * this.jugadores), tiempo, {
      fontFamily: "Comic",
      fontSize: "17px",
      color: "#FFFFFF",
      stroke: '#000000',
      strokeThickness: 3
    })
    this.add.text(510, 100 + (50 * this.jugadores), dificultad, {
      fontFamily: "Comic",
      fontSize: "17px",
      color: "#FFFFFF",
      stroke: '#000000',
      strokeThickness: 3
    })
    this.add.text(670, 100 + (50 * this.jugadores), jugadores, {
      fontFamily: "Comic",
      fontSize: "17px",
      color: "#FFFFFF",
      stroke: '#000000',
      strokeThickness: 3
    })
    this.jugadores ++
  }
}