// task 1

// var result=new Date()
// console.log(result)

// task 2

// var Month =['January',' February','March','april','may','june','july','august','september','october','november','december']

// var result=Month[new Date().getMonth()]
// console.log(result)

// task 3

// var day=['sundey','mondey','teusday','wednesday','thrusday','friday','satruday']

// var result=day[new Date().getDay()]

// console.log("todey is "+ result)

// task 4

// var day=['sundey','mondey','teusday','wednesday','thrusday','friday','satruday']

// var result=day[new Date("july 10, 2022").getDay()]
// if(result==="sundey"){
// alert("its fun day")
// }


// task 5

// var result=new Date("december 15, 2022")

// if( result.getDate() > 0 && result.getDate() <=15 ){
// alert("first fifteen days")
// }
// else{
//     alert("last of tha month")
// }

// task 6

// var todey=new Date()
// var mili=new Date().getTime()
// var minutes=mili/(1000*60*60)
// document.write("Current Date: " + todey+"<br>")
// document.write("Elapsed millisecond since January 1, 1970: " + mili + "<br>")
// document.write("Elapsed minutes since January 1, 1970: " + minutes)

// task 7

// var hours=new Date()
// if(hours.getHours() >0 && hours.getHours() <12){
//     alert("its AM")
// }
// else{
//     alert("its PM")
// }

// task 8

// var date = new Date("Dec 31, 2020")
//     document.write("Later Date " + date);

// task 9

// var todey=new Date().getTime()
// var ramadan=new Date("june 18, 2015").getTime()

// var diff=todey  -   ramadan

// var result=Math.ceil(diff /(1000*60*60*24))
// document.write(result+" "+"days have passed since 1st ramada, 2015")4

// task 10

// var todey=new Date().getTime()
// var old=new Date()
// var set=old.setFullYear(2015)
// var diff = todey - old
// var result=Math.ceil(diff /(1000*60))

// document.write("on refrence date "+old+"<br>")
// document.write(result+" seconds had passed since brgnining of 2015")

// task 11

// var todey=new Date()
// var todey1=new Date()
// var a=todey1.setHours(22)

// document.write("crrunt date: "+todey+"<br>")
// document.write("1  hour ago, it was "+todey1+"<br>")

// 2nd answer

// var date = new Date()
// console.log(date)
// var hourLater = date.getTime()-1000*60*60
// var milisecToTime = new Date(hourLater)
// console.log(milisecToTime)



// task 12 

// var todey1=new Date()
// var b=todey1.setFullYear(1922)
// document.write("100 years back, it was "+todey1)


// task 13

// var todey=new Date().getTime()
// var birth=new Date("december 12, 2003").getTime()
// var birthday=new Date("december 12 2003").getFullYear()


// var diff=todey-birth
// var result=Math.ceil(diff /(1000*60*60*24*365))

// document.write("your age "+result+"<br>")
// document.write("your birth year is "+birthday)4



// task 14
// var user=prompt("enter the your name").toUpperCase()
// var todey=new Date()
//  var Month =['January',' February','March','april','may','june','july','august','september','october','november','december']
// var result=Month[new Date().getMonth()]

// document.write("customer name :"+user+"<br>")
// document.write("month :"+result)
// document.write("<br/>")

// if(todey.getDate() >0  && todey.getDate() <=15){
// document.write("net amount payable (within due date): 6560"+"<br>")
// }

// else{
//     document.write("net amount payable (after due date): 6910")
// }











