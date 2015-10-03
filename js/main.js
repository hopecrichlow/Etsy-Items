// IIFE
(function () {



//////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\////////////////////////////\\
//////////////////QUESTION ONE\\\\\\\\\\\\\\\\\\\\\\\\\\
//////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
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



//////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\////////////////////////////\\
//////////////////QUESTION TWO\\\\\\\\\\\\\\\\\\\\\\\\\\
//////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\////////////////////////////\\



//Create an array for the items 
var range2 = [];

//Push all items with qualifying prices into the array
items.forEach( function (item) {
  if (item.price > 14 && item.price < 18) {
    range2.push(item);
} return range2;
})
console.log(range2);

//Map the titles of the items
var titles2 = range2.map( function(item) {
  return item.title;
});
console.log(titles2);

//Make it show up on page

  //Different arrays to give each item its own line
var titles2First = [];
var titles2Second = [];
var titles2Third = [];

titles2First.push(titles2[0]);
console.log(titles2First);

titles2Second.push(titles2[1]);
console.log(titles2Second);

titles2Third.push(titles2[2]);
console.log(titles2Third);

  //Find our answer element
var answer2First = document.querySelector('#answer2First');
console.log(answer2First);
var answer2Second = document.querySelector('#answer2Second');
console.log(answer2Second);
var answer2Third = document.querySelector('#answer2Third');
console.log(answer2Third);

  //Create a node from our above answer ready for the DOM
var textNode2First = document.createTextNode(titles2First);
var textNode2Second = document.createTextNode(titles2Second);
var textNode2Third = document.createTextNode(titles2Third);

  //Append newly created node to our answer element
answer2First.appendChild(textNode2First);
answer2Second.appendChild(textNode2Second);
answer2Third.appendChild(textNode2Third);



//////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\////////////////////////////\\
//////////////////QUESTION THREE\\\\\\\\\\\\\\\\\\\\\\\\
//////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\////////////////////////////\\



//Filter items by currency
var british = items.filter( function(item){
  return item.currency_code === "GBP";
});
console.log(british);

//Map title
var britishTitle = british.map(function(item){
  return item.title;
});
console.log(britishTitle);

//Map price
var britishPrice = british.map(function(item){
  return item.price;
});
console.log(britishPrice);

//Construct string
var str3 = britishTitle + ' costs \xA3' + britishPrice;
console.log(str3);

//Make it show up on page

  //Find our answer element
var answer3 = document.querySelector('#answer3');
console.log(answer3);

  //Create a node from our above answer ready for the DOM
var textNode3 = document.createTextNode(str3);

  //Append newly created node to our answer element
answer3.appendChild(textNode3);



//////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\////////////////////////////\\
//////////////////QUESTION FOUR\\\\\\\\\\\\\\\\\\\\\\\\\
//////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\////////////////////////////\\



//Create an array for wood items
var wooden = items.filter( function(item){
  return item.materials.indexOf('wood') !== -1;
});
console.log(wooden);

//Map titles
var woodenTitle = wooden.map(function(item){
  return item.title;
});
console.log(woodenTitle);

//Construct strings
var str4First = woodenTitle[0] + 'is made of wood.';
console.log(str4First);

var str4Second = woodenTitle[1] + 'is made of wood.';
console.log(str4Second);

var str4Third = woodenTitle[2] + 'is made of wood.';
console.log(str4Third);

var str4Fourth = woodenTitle[3] + 'is made of wood.';
console.log(str4Fourth);

var str4Fifth = woodenTitle[4] + 'is made of wood.';
console.log(str4Fifth);

//Make it show up on page

  //Find our answer element
var answer4First = document.querySelector('#answer4First');
console.log(answer4First);
var answer4Second = document.querySelector('#answer4Second');
console.log(answer4Second);
var answer4Third = document.querySelector('#answer4Third');
console.log(answer4Third);
var answer4Fourth = document.querySelector('#answer4Fourth');
console.log(answer4Fourth);
var answer4Fifth = document.querySelector('#answer4Fifth');
console.log(answer4Fifth);

  //Create a node from our above answer ready for the DOM
var textNode4First = document.createTextNode(str4First);
var textNode4Second = document.createTextNode(str4Second);
var textNode4Third = document.createTextNode(str4Third);
var textNode4Fourth = document.createTextNode(str4Fourth);
var textNode4Fifth = document.createTextNode(str4Fifth);

  //Append newly created node to our answer element
answer4First.appendChild(textNode4First);
answer4Second.appendChild(textNode4Second);
answer4Third.appendChild(textNode4Third);
answer4Fourth.appendChild(textNode4Fourth);
answer4Fifth.appendChild(textNode4Fifth);



//////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\////////////////////////////\\
//////////////////QUESTION FIFTH\\\\\\\\\\\\\\\\\\\\\\\\\
//////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\////////////////////////////\\



// var lotsOfStuff = items.forEach( function (item) {
//   if (item.materials.length >= 8) {
// } return lotsOfStuff;
// })
// console.log(lotsOfStuff);

//////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\////////////////////////////\\
//////////////////QUESTION SIX\\\\\\\\\\\\\\\\\\\\\\\\\\
//////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\////////////////////////////\\



//Filter and find items made by seller
var homemade = items.filter( function(item){
  return item.who_made === "i_did";
});
console.log(homemade);

//Count the number of items
console.log(homemade.length);

//Construct string
var str6 = homemade.length + ' were made by their sellers';
console.log(str6);

//Make it show up on page

  //Find our answer element
var answer6 = document.querySelector('#answer6');
console.log(answer6);

  //Create a node from our above answer ready for the DOM
var textNode6 = document.createTextNode(str6);

  //Append newly created node to our answer element
answer6.appendChild(textNode6);




} ());