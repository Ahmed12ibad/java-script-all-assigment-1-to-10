//task 1

// var user1=prompt("enter the first name")
// var user2=prompt("enter the last name")
// var fullname=user1+=user2
// console.log(fullname)

//task 2

// var user=prompt("enter the favorite moble  name")
// var final=user.length
// document.write("<h3>"+user+"<br/>"+".length"+" "+final+"<h3/>")

//task 3

// var name="pakistan"
// var index=name.indexOf("n")
// document.write("<h3>"+"string :"+name+"<h3/>")
// document.write("<br>")
// document.write("index of 'n' :"+index)

//task 4

// var name="hello world"
// var last=name.lastIndexOf("l")
// document.write("string :"+" "+name)
// document.write("<br>")
// document.write("last index of of 'l'"+" "+last)

//task 5

// var name="pakistani"
// var index=name.charAt(3)
// document.write("string :"+" "+name)
// document.write("<br>")
// document.write("character at index 3:"+" "+index)


//task 6

// var user1=prompt("enter the first name")
// var user2=prompt("enter the last name")
// var fullname=user1.concat(user2)
// console.log(fullname)


//task 7

// var city="karachi lahore"
// var rep=city.replace("karachi","multan")
// document.write("city"+" "+city)
// document.write("<br>")
// document.write("replace"+" "+rep)


//task 8

// var name= "“Ali and Sami are best friends. They play cricket and football together.;"
// var all=name.replace(/and/g,"&")
// document.write("<h3>"+"name"+" "+name+"<h3/>")
// document.write("<br>")
// document.write("<h3>"+"change name"+" "+all+"<h3/>")

//task 9

// var velue="500"
// var newvelue=+velue
// console.log(velue)
// console.log(newvelue)

//task 10

// var user=prompt("enter the food").toUpperCase()
// document.write("<h3>"+user+"<h3/>")

//task 11

// var user=prompt("enter the name")
// document.write("number"+" "+user+"<br>")
// document.write("title case"+" ")
// var user=user.split(" ")
// for(var i=0; i < user.length; i ++){
//  user[i]=user[i].charAt(0).toUpperCase()+user[i].slice(1)+" "
//  document.write(user[i])
// }

//task 12 sukr he

// var num="35.36"
// var sip=num.split("")
// var lice =sip.splice(2,1) 
// document.write("number"+" "+num+"<br>")
// document.write("result"+" "+sip.join(""))

// 2nd answer

// var num="35.36"
// var rep=num.replace(".","")
// document.write("number"+" "+num+"<br>")
// document.write("result"+" "+rep)


// task 13 

// var username=prompt("enter the password")
// flag = false
// var username=username.split('')
// for(var i=0; i < username.length; i++){
// if(username[i]==="@"&&username[i]==="/"){
//     flag = true
// alert("please enter velid username")    
// }

// }
// if(flag===false){
// alert("velid your password")

// }



// task 14 


// var bekry=['cake', 'apple pie', 'cookie', 'chips', 'patties']

// var user=prompt("enter the food name").toLowerCase()
// flag=false
// for(var i=0; i < bekry.length; i++){
//     if(user===bekry[i]){
// document.write("index"+" "+i+" "+user+" "+"is avelible")
// flag=true

//     }

// }

// if(flag===false){
// document.write(user+" "+"not avelible")
// }



// task 15



//  var user = prompt("Enter the password");

//  if(user.charCodeAt(0) >= 48 && user.charCodeAt(0) <= 57){
//     alert("ap number se star na karo")
//      }
//  if(user.length <= 6){
//     alert("password 6 se chota mat rakho")
//  }
 
// Number1=false
// Number2=false
// invalid=false

// for(var i=0; i <= user.length; i++){
// if(user.charCodeAt(i) >= 48 && user.charCodeAt(i) <= 57 ){
// Number1=true
// }
// else if(user.charCodeAt(i) >= 90 && user.charCodeAt(i) <=122 || user.charCodeAt(i) >=65 && user.charCodeAt(i) <=90){
//     Number2=true
// }
// else{
//     invalid=true
// }
// }
// if(Number1&&Number2&&invalid){
//     alert("correct password")
// }
// else{
//     alert("password apka galat he ")
// }






// task 16 


// var name="university of karachi"
// for(var i=0; i < name.length; i++){
// document.write("<h3>"+" "+name[i]+"<br>")
// }



// task 17

 //var name=prompt("")
// var ahmed= name.charAt(name.length -1)
// document.write("user input ;"+" "+name)
// document.write("<br>")
// document.write( "last character input ;"+" "+ahmed)


// task 18

// count=0
// var text="the quick browm fox jumps over the lazy the dog"

// for(var i=0; i < text.length; i++){
// if (text.slice(i,i+3)==="the"){
//     count++
// }
// }
// console.log(count)
// document.write("<h2>"+text.split("the").join("football")+"<h2/>")


