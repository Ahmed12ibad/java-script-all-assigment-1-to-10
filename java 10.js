// task 1

// function Current(){
// var todey=new Date()
// var Hours=todey.getHours()
// var Minutes=todey.getMinutes()
// var second=todey.getSeconds()
// document.write("crrent time :" +Hours+":"+Minutes+":"+second )
// }
// Current()

// task 2

// function fullname(firts,second){
// var f=alert(firts+second)
// var g=alert(second+firts)
// console.log(f+g)
// }
// fullname("ahmed","shayan")

// task 3
// var a=+prompt("enter the number")
// var b=+prompt("enter the number")
// function number(){
// return a+b
// }
// console.log(number(a,b)*2)

// task 4

// function calculate(){
//  var b=+prompt("enter the calculate")
//  var c=+prompt("enter the calculate")
//  return b-c
// }
// console.log(calculate())

// task 5

// function squires(){
//  var b=+prompt("enter the number")
// return b*b
// }
// document.write(squires())


// task 6

// function factorial(){

// var factorial=+prompt("enter the number")

// var diff=1

// if(factorial <=0){
// alert("ap 0 se bara number lkho")
// }
// else if(factorial >=1){

//     for(var i=1; i <=factorial; i++){
      
// diff *= i 

// document.write(i+"*")
//     }
// document.write(" = "+diff)

// }


// }
// factorial()

// task 7

// function counting(){
//     var start=+prompt("enter tha start counting")
//     var end=+prompt("enter the mex counting")
//     for(var i=start; i >=end;i--){
// document.write([i]+" hello"+"<br>")
//     }
//   }
//   counting()

// }
// counting()


// task 8 
// var a=+prompt("")
// var b=+prompt("")
// function squreroot(a,b){
// var base=a*b
// var prep=a*b
// var plus=base+prep
// var result=Math.sqrt(plus)
// return result
// }
// var root=  squreroot(a,b)
// console.log(root)

// // 2nd

// function hyp(base,prep){


//     var squareBase = base * base;
//     var sqaureprep =  prep * prep;


//     var sumOfBasePrep = sqaureprep + squareBase;

//     var SqaureRoot = Math.sqrt(sumOfBasePrep);

//     return SqaureRoot;
// }
// var Hypo = hyp(5,5);
// console.log(Hypo)

// task 9


// function calculate(a,b){
// var height=a
// var widht=b
// return height*widht
// }
// console.log(calculate (10,10))



// task 10
// function palindrome(){
//  var text = '';
//     var userInput = prompt("Enter a string");

//     for (var i = userInput.length - 1; i >= 0; i--) { 
//         text += userInput[i]; 
//     }
//     document.write(text)

//     if(text===userInput){
//         alert("its palindrome"+"  "+text);
//     }
//     else{
//         alert("its not palindrome"+"  "+text);
//     }
//     }
//     palindrome()

// task 11
// var upper="the quik brown box"
// function uppercase(){
// return upper
// }console.log(uppercase().toUpperCase())


//   task 12



// function find(){
// var str = "web development"
//     var splitArrayValue = str.split(' ');
  
//     var  storeWord = "";

//     for(var i = 0; i < splitArrayValue.length; i++){
//       if(splitArrayValue[i].length > storeWord.length){
//         storeWord = splitArrayValue[i];
//        }
//     }
//    return storeWord
//    }
//    console.log(find())

// task 13

// function count(find){
// var abc="opi in the chat op the opt"
// counti=0
// for(var i=0; i < abc.length;i++){
//     if(abc.slice(i,i+1)===find){
// counti++
//     }
// }
// return counti

// }
// console.log(count("o"))

// task 14 ////////////

// var radius = prompt("Enter radius of Circle");
// function calcCircumference(radius) {
//     var calc = 2 * 3.142 * radius;
//     var result = alert("The circumference is " + calc);
//     return result;
// }

// function calcArea(radius) {
//     var calc = 3.142 * radius * radius;
//     var result = alert("The area is " + calc);
//     return result;
// }
// calcCircumference(radius);
// calcArea(radius)






