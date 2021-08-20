// Variables
// Numbers
let firstnum = 4.74;
//Boolean
let wearsGlasses = false;
//Console Logging
console.log(firstnum)
//Strings
let favHockeyTeam = "Columbus Blue Jackets";
let favFootballTeam = 'Cincinnati Bengasls';
let favFood = `Pizza`;
//Concatenation of Strings
let favTeams = "Columbus Blue Jackets" + " Cincinnati Bengals " + firstnum
console.log(favTeams)

//Arrays
let randomthings = ["carrots", "bananas", false, 8, 9, 4];
console.log(randomthings)
console.log(randomthings[0])

//Objects
let cartooncharacter = {
    //key    value
    "name": "Patrick Star",
    "home": "Under a rock",
    "fav_number": 24,
}
console.log(cartooncharacter)
console.log(cartooncharacter.home) //or
console.log(cartooncharacter["home"])

//For Loops (1-100)
for(let num = 1; num < 101; num++) {
    console.log(num);
}

//While Loop
let num = 1;
while(num <= 100) {
    console.log(num)
    num++;
}