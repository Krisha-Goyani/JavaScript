let calculator = {
    sum(){
        return this.a + this.b;
    },
    mul(){
        return this.a * this.b;
    }, 
    read(){
        this.a = 9;
        this.b = 6
    }
};
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());


let ladder = {
    step: 0,
    up() {
      this.step++;
      return this; // Enables chaining
    },
    down() {
      this.step--;
      return this; // Enables chaining
    },
    showStep() {
      console.log(this.step); // Use console.log instead of alert for better usability
      return this; // Enables chaining
    }
  };
  
  // Example of method chaining:
  ladder.up().up().up().down().showStep().down().showStep(); // Shows 1 then 0
  