// #8 --------------------------------------

class Test {
  constructor(str) {
    this.prop = str;
  }
  print() {
    console.log(this.prop);
  }
}

const foo = new Test('bingo!');
setTimeout(foo.print, 2000);