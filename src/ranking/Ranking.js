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

    const arrayJugadoresRanking = JSON.parse(localStorage.getItem("jugadores"))
    console.log(arrayJugadoresRanking)
    arrayJugadoresRanking.sort((a, b) => b.points - a.points)
    for ( let cuenta = 1; cuenta <= arrayJugadoresRanking.length; cuenta++ ) {
      const jugador = arrayJugadoresRanking[cuenta - 1]
      this.agregarJugador(cuenta, jugador.name, jugador.points, jugador.time, jugador.dificulty, jugador.players)
    }
    const element = document.getElementById('name')
    element.style.display = 'none'
  }
// FIN DEL CREATE
  agregarJugador(posicion, name, points, time, dificulty, jugadores) {
    this.add.text(20, 100 + (50 * this.jugadores), posicion, {
      fontFamily: "Comic",
      fontSize: "17px",
      color: "#FFFFFF",
      stroke: '#000000',
      strokeThickness: 3
    })
    this.add.text(150, 100 + (50 * this.jugadores), name, {
      fontFamily: "Comic",
      fontSize: "17px",
      color: "#FFFFFF",
      stroke: '#000000',
      strokeThickness: 3
    })
    this.add.text(270, 100 + (50 * this.jugadores), points, {
      fontFamily: "Comic",
      fontSize: "17px",
      color: "#FFFFFF",
      stroke: '#000000',
      strokeThickness: 3
    })
    this.add.text(390, 100 + (50 * this.jugadores), time, {
      fontFamily: "Comic",
      fontSize: "17px",
      color: "#FFFFFF",
      stroke: '#000000',
      strokeThickness: 3
    })
    this.add.text(510, 100 + (50 * this.jugadores), dificulty, {
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