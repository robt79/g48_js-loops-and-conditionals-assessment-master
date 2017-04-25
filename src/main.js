// Write a for loop that will print only even numbers from an array:
// For example: question0([ 5, 20, 11, 42, 2, 19 ]) >> [ 20, 42, 2 ]

var myArray = [5, 20, 11, 42, 2, 19];

function question0(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      console.log(array[i]);

    }
  }
}

question0(myArray);

// Write a for loop that doubles each number in the following array. If the
// resulting number is greater than 12, print it to the console:
// For example: [ 2, 4, 8, 16 ] would print the numbers 16 and 32

var numArray = [2, 4, 8, 16];

function question1(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] * 2 > 12) {
      console.log(array[i] * 2);

    }
    //console.log(array[i] * 2);
  }
}
question1(numArray);

// Write a for loop to iterate over every element in the following array:
// [ 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun' ]
//
// Using a switch statement, do the following:
// - If the day is on a weekend, print "Yay, it's the weekend!"
// - If the day is Friday, print "Almost there..."
// - If the day is Monday, print "I hate Mondays more than Garfield."
// - Otherwise, print "Everybody's working for the weekend."
var days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

function question2(array) {
  for (var i = 0; i < days.length; i++) {
    switch (days[i]) {
      case 'Sat':
        console.log("Yay, it's the Weekend");
        break;
      case 'Sun':
        console.log("Yay, it's the Weekend");
        break;
      case 'Fri':
        console.log("Almost there...");
        break;
      case 'Mon':
        console.log("I hate Mondays more than Garfield.");
        break;
      default:
        console.log("Everybody's working for the weekend.");

    }
  }
}
question2(days);




module.exports = {
  question0,
  question1,
  question2
}
