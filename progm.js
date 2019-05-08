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


 function  isPrime(num){
   var  temp;
   var isPrime = new Boolean(true);
  for(var i=2; i<=num/2; i++)
  {
     temp=num%i;
     if(temp==0)
     {
        isPrime=false;
        break;
     }
  }
  //If isPrime is true then the number is prime else not
  if(isPrime)
  console.log(num + " is a Prime Number");
else
  console.log(num + " is not a Prime Number");
 }

function AddTwoNumbers2 (num1,num2){
    return num1+num2;
  }
module.exports.fib = fibonacci;
module.exports.isEven=isEven;
module.exports.AddTwoNumbers2=AddTwoNumbers2;
module.exports.isPrime=isPrime;