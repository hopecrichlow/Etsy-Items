// IIFE
(function () {
  
//\\\\\\\\\\\\\\\\\\\\\\\\////////////////////////////\\
//////////////////QUESTION ONE\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\////////////////////////////\\

//Create an array of just the prices

  // items.forEach( function(item) {
  //   console.log(item.price); //price of each item
  // })
var prices = items.map( function (item) {
  return item.price;  //+ ' is for ' + item.title ;
})
console.log(prices);


//Add all of the prices together
var sum = prices.reduce( function (prev, next){
  return prev + next;
})
console.log(sum);

//Divide by total number of items
var avg = sum / prices.length;
console.log(avg);

//Convert it to 2 decimal places
var converted = avg.toFixed(2);
console.log(converted);

//Make it a string
var str = 'The average price is $' + converted;
console.log(str);

//Make it show up on page

  //Find our answer element
var answer1 = document.querySelector('#answer1');
console.log(answer1);

  //Create a node from our above answer ready for the DOM
var textNode = document.createTextNode(str);

  //Append newly created node to our answer element
answer1.appendChild(textNode);

} ());