/* #1 */
var myNum = 10;
var myStr = "строка";
var myBool = true;
var myArr = [1, 2, 3, 4, 5];
var myObj = { first: "First Name", last: "Last Name" };

/* #2 */
var decimal2 = myNum.toFixed(2);

/* #3 */
var i = 10;
console.log(++i);
console.log(i++);
console.log(--i);
console.log(i--);

/* #4 */
var myTest = 20;
myTest += myNum;
console.log("+=", myTest);

myTest -= 10;
console.log("-=", myTest);

myTest *= 2;
console.log("*=", myTest);

myTest /= myNum;
console.log("/=", myTest);

myTest %= 3;
console.log("%=", myTest);

/* #5 */
var myPi = Math.PI;
console.log(Math.PI);

var myRound = Math.round(89.279);
console.log("myRound");

var myRandom = Math.random() * 10;
console.log("myRandom");

var myPow = Math.pow(3, 5);
console.log("myPow");

/* #6  */
var strObj = { str: "Мама мыла раму, рама мыла маму" };
strObj.length = strObj.str.length;
console.log("strObj = ");

/* #7  */

var isRamaPos = strObj.str.indexOf("рама");

console.log("isRamaPos:");

/* #8 */
var strReplace = strObj.str.replace("мыла", "моет");

strReplace = strReplace.replace("рама", "Рама");
strReplace = strReplace.replace("мыла", "держит");
console.log("strReplace:");

/* #9  */

var myString = "Lorem ipsum dolor sit amet.";
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());
