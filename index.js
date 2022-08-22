var read = require('readline-sync')

console.log('Welcome to Aircraft Quiz?')
console.log()
console.log('Quiz of 5 questions; each 1 mark; no negative mark')
console.log()

//var user=prompt("Enter name:")
var user = read.question("Enter name:")
// console.log(user)

var q1 = {
  q: "Largest Aircraft in the World(across all categories):",
  a: "Antonov"
}

var q2 = {
  q: "King of the Skies:",
  a: "A380"
}

var q3 = {
  q: "India's biggest airline:",
  a: "Indigo"
}

var q4 = {
  q: "Fastest Aircraft in the World():",
  a: "Lockheed"
}

var q5 = {
  q: "Queen of the Skies:",
  a: "B747"
}

var highScore = 1
var userScore = 0

console.log()
console.log("Let's begin!!!")
console.log("High Score:" + highScore)
console.log("\nKindly answer in one word\n")

var a1 = read.question(q1.q)
var a1Lower = a1.toLowerCase()
if (a1Lower === 'antonov' || a1Lower === 'an 225 mriya' || a1Lower === 'an-225 mriya' || a1Lower === 'an 225') {
  userScore++
}

var a2 = read.question(q2.q)
var a2Lower = a2.toLowerCase()
if (a2Lower === 'a380' || a2Lower === 'airbus a380' || a2Lower === 'airbus a 380' || a2Lower === 'a 380') {
  userScore++
}

var a3 = read.question(q3.q)
var a3Lower = a3.toLowerCase()
if (a3Lower === 'indigo') {
  userScore++
}

var a4 = read.question(q4.q)
var a4Lower = a4.toLowerCase()
if (a4Lower === 'lockeed' || a2Lower === 'sr 71' || a4Lower === 'sr-71' || a4Lower === 'blackbird' || a4Lower === 'lockheed sr 71' || a4Lower === 'sr71' || a4Lower === 'sr71 blackbird' || a4Lower === 'lockheed sr-71 blackbird') {
  userScore++
}

var a5 = read.question(q5.q)
var a5Lower = a5.toLowerCase()
if (a5Lower === 'b747' || a5Lower === 'b 747' || a5Lower === 'boeing 747' || a5Lower === '747') {
  userScore++
}

console.log("\nEnd of Quiz")
console.log("\nFinal Score:" + userScore)

if (userScore > highScore) {
  console.log("\nHIGHSCORE...YAYY!!!")
}

else if (userScore == 5) {
  console.log("MAXIMUM SCORE")
}

console.log("Thank you for participating.")