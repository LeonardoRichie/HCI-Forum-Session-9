function digitalDecipher(x,y){
const list= x
let numbers= y.toString()
// add the length of number until the length is equal
var Division = Math.floor(list.length / numbers.length)
ResDiv = numbers.repeat(Division-1)
numbers= numbers.concat(ResDiv)
// add the remainder of the number to be equal to length
var Remainder = list.length % numbers.length
for(let i=0;i<Remainder;i++){
numbers=numbers.concat(numbers.charAt(i))}
// minus the list with the number
var newlist=[]
if (list.length == numbers.length){
for(let i = 0; i<list.length;i++){
results = list[i]-numbers.charAt(i)
var letter = String.fromCharCode(results+96)//Change the number to alphabets
newlist.push(letter)
}
}
console.log(newlist.join(""))
}

digitalDecipher([20, 12, 18, 30, 21], 1939)
digitalDecipher([14, 30, 11, 1, 20, 17, 18, 18], 1990)
digitalDecipher([6, 4, 1, 3, 9, 20], 100)