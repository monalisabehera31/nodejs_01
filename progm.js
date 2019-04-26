function fibonacci(a) {
  var firstNum = 1;
  var secondNum = 1;

  if (a == 1) {
    console.log(firstNum);
  }
  if (a > 1) {
    console.log(firstNum);
    for (var i = 1; i <= a; i++) {
      console.log(secondNum);
      var temp = secondNum;
      secondNum = firstNum + secondNum;
      firstNum = temp;
    }
  }
}

function isEven(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
module.exports.fib = fibonacci;
module.exports.isEven=isEven;