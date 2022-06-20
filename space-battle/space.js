//two ships
//you attack alien ship
//while alien ship hull > 0, attacks you
//while yur ship hull > 0, attack alien ship
//repeat until a ship is destroyed, if alien ship is destroyed you can go to next ship or game

//if your ship is destroyed you lose
//ship properties (objects)
//hull -> 20 (you) 3-6 (enemy)
//firepower -> 5 (you) 2-4 (enemy)
//accuracy .7 (you) .6-.8(enemy)
// accuracy is random chance between 0-1 that your ship will hit

class USS_HelloWorld {
    constructor() {
      this.hull = 20;
      this.firepower = 5;
      this.accuracy = .7
    }
  
    attack() {
      let rand = Math.random()
      if (rand < this.accuracy) {
        alien.hull -= this.firepower;
        alert(`YOU SUCCESSFULLY HIT YOUR MARK! \n\n THE ENEMY SHIP IS NOW ATTACKING...`)
      } else {
        alert(`YOU MISSED YOUR ATTACK! \n\n THE ENEMY SHIP IS NOW ATTACKING...`)
      }
    }
  }
  
  const humans = new USS_HelloWorld()
  
  
  class AlienShip {
    constructor() {
      this.hull = Math.floor(Math.random() * (7 - 3) + 3)
      this.firepower = Math.floor(Math.random() * (5 - 2) + 2)
      this.accuracy = Math.random() * (.8 - .6) + .6
    }
    attack() {
      let rand = Math.random()
      if (rand < this.accuracy) {
        humans.hull -= this.firepower;
        alert(`YOU WERE HIT! YOUR HULL HAS BEEN WEAKENED!`)
      } else {
        alert(`YOU WERE ABLE TO OUTMANEUVER THE ENEMY! EASY-PEASY!`)
      }
    }
  }
  
  const alien = new AlienShip()
  
  
  const init = () => {
    alert('Welcome to SPACE+++BATTLE!');
    const response = prompt(`Enter 'p' to play or 'q' to exit.`);
    if (response.toLowerCase() === 'q') {
      alert(`Bye bye`)
    } else if (response.toLowerCase() === 'p') {
      alert('On your journey throughout the cosmos, you have come across a horde of hostile alien ships!\n\Commanding the USS HelloWorld, you are forced to attack the alien ships for human glory!\n\The battle rages on!')
      startBattle()
    } else {
      alert(`Please enter a valid response.\n\nTry again!`)
    }
  }
  
  
  const stats = () => {
    alert(`Your Ship's stats === HULL: ${humans.hull} | FIREPOWER: ${humans.firepower} | ACCURACY: ${humans.accuracy*100}%\n\nAlienShip#${alienCount}'s stats === HULL: ${alien.hull} | FIREPOWER: ${alien.firepower} | ACCURACY: ${Math.floor(alien.accuracy*100)}%`)
  }
  
  
  alienCount = 6;
  
  const startBattle = () => {
  
    stats()
  
    while (alienCount > 0) {
      if (alien.hull < 1) {
        alienCount--
      }
  
      if (alienCount > 0 && humans.hull > 0) {
        alien.hull = Math.floor(Math.random() * (7 - 3) + 3)
        alien.firepower = Math.floor(Math.random() * (5 - 2) + 2)
        alien.accuracy = Math.random() * (.8 - .6) + .6
      } else if (alienCount < 1 && humans.hull < 1) {
        return alert(`TIE GAME! IF A SHIP BLOWS UP IN SPACE, DOES IT MAKE A SOUND?`)
      } else if (alienCount < 1 && humans.hull > 0) {
        return alert(`YOU HAVE CONQUERED ALL HOSTILE ALIENS! FOR GLORY!!`)
      } else {
        return alert(`YOU LOST! THE ALIENS ARE NOW TRACING YOUR HOME LOCATION...`)
      }
  
      const response = prompt(`Enter 'a' to attack or 'q' to retreat`)
      if (response.toLowerCase() === 'q') {
        alert(`YOU LOST! THE ALIENS ARE NOW TRACING YOUR HOME LOCATION...`)
        humans.hull = 0;
        humans.firepower = 0;
        humans.accuracy = 0;
        stats()
      } else if (response.toLowerCase() === 'a') {
        engage()
      } else {
        alert(`I don't understand your response.\n\n Try again!`)
      }
  
    }
  
  }
  
  const engage = () => {
    humans.attack();
    alien.attack();
    startBattle();
  }
  
  
  init();