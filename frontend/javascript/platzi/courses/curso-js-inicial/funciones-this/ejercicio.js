// Crear Objetos Super Campeones

function superCampeones(name, team, position) {
  this.name = name,
  this.team = team,
  this.position = position,
  this.isCaptain = false,
  this.displayInfo = () => {
    console.log(
      `Información Jugador de Super Campeones:
        Nombre: ${this.name}
        Equipo: ${this.team}
        Posición: ${this.position}
        ${this.isCaptain ? 'Es Capitán' : 'No es Capitán'}
      `);
  };

  this.becomeCaptain = () => {
    this.isCaptain = true;
    console.log(`${this.name} es capitán del equipo ${this.team}`);
  };
}

const oliver = new superCampeones('Oliver Atom', 'Niupi', 'Volante Creativo - Delantero');
const benjiPrice = new superCampeones('Benji Price', 'San Francis', 'Arquero');
const bruceHarper = new superCampeones('Bruce Harper', 'Niupi', 'Defensa');
const tomMisaki = new superCampeones('Tom Misaki', 'Niupi', 'Volante');
const steveHyuga = new superCampeones('Steve Hyuga', 'Franco Canadiense', 'Delantero');
const andyJohnson = new superCampeones('Andy Johnson', 'Colegio Alemán', 'Delantero');

oliver.becomeCaptain();
oliver.displayInfo();
benjiPrice.becomeCaptain();
benjiPrice.displayInfo();
bruceHarper.displayInfo();
tomMisaki.displayInfo();
steveHyuga.becomeCaptain();
steveHyuga.displayInfo();
andyJohnson.becomeCaptain();
andyJohnson.displayInfo();
