// var word = "bottles";
// var count = 10;
// while (count > 0) {
//   if (count == 1) {
//     var word = "bottle";
//     console.log(count + " " + word + " of beer on the wall");
//     console.log(count + " " + word + " of beer,");
//     console.log("Take one down, pass it around,");
//     console.log(count + " " + word + " of beer on the wall.");
//   }

//   console.log(count + " " + word + " of beer on the wall");
//   console.log(count + " " + word + " of beer,");
//   console.log("Take one down, pass it around,");
//   count = count - 1;
//   if (count > 0) {
//     console.log(count + " " + word + " of beer on the wall.");
//   } else {
//     console.log("No more " + word + " of beer on the wall.");
//   }
// }

// let location1 = 3;
// let location2 = 4;
// let location3 = 5;
// let hits = 0;
// let guess;
// let nrOfGuesses = 0;
// let isHit = false;

// while (isHit == false) {
//   guess = prompt("enter a number: ");
//   if (guess < 0 || guess > 6) {
//     alert("Enter a valid number");
//   } else {
//     nrOfGuesses++;
//     if (guess == location1 || guess == location2 || guess == location3) {
//       alert("hit");
//       hits++;

//       if (hits == 3) {
//         isHit = true;
//         alert("you won");
//       }
//     } else {
//       alert("miss");
//     }
//   }
// }

// let stats = alert(nrOfGuesses + "guesses");

// let x = 5;
// let y = Math.floor(Math.random() * 10);
// console.log(y);

// let location1;
// if (0 <= y && y < 7) {
//   location1 == y;
//   console.log(y);
// }

// function dog(name, weight) {
//   if (weight > 20) {
//     console.log(`${name} says WOOF WOOF`);
//   } else {
//     console.log(`${name} says woof woof`);
//   }
// }

// dog("pablo", "21");

// function fn(x) {
//   x = 2;
// }

// let y = 5;
// fn(y);

// console.log(y);
// let x = 10;

// function fn(a) {
//   let z = 20;
// }

// fn(2);

// console.log(x + z);

// let y = 2;
// let sum = x + y;
// let x = 4;
// console.log(sum);

// function clunk(times) {
//   var num = times;
//   while (num > 0) {
//     display("clunk");
//     num = num - 1;
//   }
// }

var x = 1;
function fn() {
  x = 2;
}

fn();

console.log(x);
