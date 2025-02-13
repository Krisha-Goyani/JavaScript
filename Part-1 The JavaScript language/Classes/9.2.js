class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} stands still.`);
  }
}

class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} hides!`);
  }
  stop() {
    super.stop(); // call parent stop
    this.hide(); // and then hide
  }
}

let rabbit = new Rabbit("White Rabbit");
rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.stop(); // White Rabbit stands still. White Rabbit hides!



class Animal1 {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
}
class Rabbit1 extends Animal1 {
  constructor(name, earLength) {
    super(name);
    this.earLength = earLength;
  }
}
let rabbits = new Rabbit("White Rabbit", 10);
console.log(rabbits.name); // White Rabbit
console.log(rabbits.earLength); // 10
