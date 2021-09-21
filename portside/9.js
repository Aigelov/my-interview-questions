// #9 --------------------------------------

const test = {
  prop: 'Prop Value',
  print: () => {
    console.log(this.prop);
  }
}

test.print();