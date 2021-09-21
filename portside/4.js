// #4 --------------------------------------

var x = 100;

test();

function test() {
  var x;
  if (false) {
    var x = 199;
  }
  console.log(x);
}