// IIFE
(function () {

//////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\////////////////////////////\\
//////////////////QUESTION ONE\\\\\\\\\\\\\\\\\\\\\\\\\\
//////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\////////////////////////////\\

//Create an array of just the prices
var prices = items.map( function (item) {
  return item.price; 
});
  console.log(prices);

//Add all of the prices together
var sum = prices.reduce( function (prev, next){
  return prev + next;
});
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
});
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
//////////////////QUESTION FIVE\\\\\\\\\\\\\\\\\\\\\\\\\
//////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//\\\\\\\\\\\\\\\\\\\\\\\\////////////////////////////\\

//Filter to find items with eight or more materials
var stuff = items.filter(function(item){
  return item.materials.length >= 8;
});
  console.log(stuff);

//Map titles
var stuffTitle = stuff.map(function(item){
  return item.title;
});
  console.log(stuffTitle);

//Map materials
var stuffMaterials = stuff.map(function(item){
  return item.materials;
});
  console.log(stuffMaterials);

//Create strings
var str5First = stuffTitle[0] + 'has 9 materials:';
  console.log(str5First);

var materials5First = stuffMaterials[0];
  console.log(stuffMaterials[0]);
  /////////////////////////////
var str5Second = stuffTitle[1] + 'has 13 materials:';
  console.log(str5Second);

var materials5Second = stuffMaterials[1];
  console.log(stuffMaterials[1]);

//Make it show up on page
  //Find our answer element
var answer5First = document.querySelector('#answer5First');
  console.log(answer5First);

var answer5m1 = document.querySelector('#answer5m1');
  console.log(answer5m1);

var answer5m2 = document.querySelector('#answer5m2');
  console.log(answer5m2);

var answer5m3 = document.querySelector('#answer5m3');
  console.log(answer5m3);

var answer5m4 = document.querySelector('#answer5m4');
  console.log(answer5m4);

var answer5m5 = document.querySelector('#answer5m5');
  console.log(answer5m5);

var answer5m6 = document.querySelector('#answer5m6');
  console.log(answer5m6);

var answer5m7 = document.querySelector('#answer5m7');
  console.log(answer5m7);

var answer5m8 = document.querySelector('#answer5m8');
  console.log(answer5m8);

var answer5m9 = document.querySelector('#answer5m9');
  console.log(answer5m9);
  /////////////////////////////////////////////////
var answer5Second = document.querySelector('#answer5Second');
  console.log(answer5Second);

var answer5m10 = document.querySelector('#answer5m10');
  console.log(answer5m10);

var answer5m11 = document.querySelector('#answer5m11');
  console.log(answer5m11);

var answer5m12 = document.querySelector('#answer5m12');
  console.log(answer5m12);

var answer5m13 = document.querySelector('#answer5m13');
  console.log(answer5m13);

var answer5m14 = document.querySelector('#answer5m14');
  console.log(answer5m14);

var answer5m15 = document.querySelector('#answer5m15');
  console.log(answer5m15);

var answer5m7 = document.querySelector('#answer5m7');
  console.log(answer5m7);

var answer5m8 = document.querySelector('#answer5m8');
  console.log(answer5m8);

var answer5m9 = document.querySelector('#answer5m9');
  console.log(answer5m9);

  //Create a node from our above answer ready for the DOM
var textNode5First = document.createTextNode(str5First);
var textNode5m1 = document.createTextNode(materials5First[0]);
var textNode5m2 = document.createTextNode(materials5First[1]);
var textNode5m3 = document.createTextNode(materials5First[2]);
var textNode5m4 = document.createTextNode(materials5First[3]);
var textNode5m5 = document.createTextNode(materials5First[4]);
var textNode5m6 = document.createTextNode(materials5First[5]);
var textNode5m7 = document.createTextNode(materials5First[6]);
var textNode5m8 = document.createTextNode(materials5First[7]);
var textNode5m9 = document.createTextNode(materials5First[8]);

var textNode5Second = document.createTextNode(str5Second);
var textNode5m10 = document.createTextNode(materials5Second[0]);
var textNode5m11 = document.createTextNode(materials5Second[1]);
var textNode5m12 = document.createTextNode(materials5Second[2]);
var textNode5m13 = document.createTextNode(materials5Second[3]);
var textNode5m14 = document.createTextNode(materials5Second[4]);
var textNode5m15 = document.createTextNode(materials5Second[5]);
var textNode5m16 = document.createTextNode(materials5Second[6]);
var textNode5m17 = document.createTextNode(materials5Second[7]);
var textNode5m18 = document.createTextNode(materials5Second[8]);
var textNode5m19 = document.createTextNode(materials5Second[9]);
var textNode5m20 = document.createTextNode(materials5Second[10]);
var textNode5m21 = document.createTextNode(materials5Second[11]);
var textNode5m22 = document.createTextNode(materials5Second[12]);

  //Append newly created node to our answer element
answer5First.appendChild(textNode5First);
answer5m1.appendChild(textNode5m1);
answer5m2.appendChild(textNode5m2);
answer5m3.appendChild(textNode5m3);
answer5m4.appendChild(textNode5m4);
answer5m5.appendChild(textNode5m5);
answer5m6.appendChild(textNode5m6);
answer5m7.appendChild(textNode5m7);
answer5m8.appendChild(textNode5m8);
answer5m9.appendChild(textNode5m9);

answer5Second.appendChild(textNode5Second);
answer5m10.appendChild(textNode5m10);
answer5m11.appendChild(textNode5m11);
answer5m12.appendChild(textNode5m12);
answer5m13.appendChild(textNode5m13);
answer5m14.appendChild(textNode5m14);
answer5m15.appendChild(textNode5m15);
answer5m16.appendChild(textNode5m16);
answer5m17.appendChild(textNode5m17);
answer5m18.appendChild(textNode5m18);
answer5m19.appendChild(textNode5m19);
answer5m20.appendChild(textNode5m20);
answer5m21.appendChild(textNode5m21);
answer5m22.appendChild(textNode5m22);



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