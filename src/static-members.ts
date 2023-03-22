export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = "Atsushi";
  static lastNamme: string = "Ishida";

  static work() {
    // return "Hey, guys!";
    return `Hey, guys! This is ${this.firstName}`;
  }
}

//let me = new Me();
//console.log(me.isProgrammer);

console.log(Me.isProgrammer);
console.log(Me.work());
