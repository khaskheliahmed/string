// // var userInput = prompt( " Enter city name ");



// // var cleanestCities = ['karachi ','lahore', 'peshawar', ' quetta'];

// // // console.log(cleanestCities)


// // if(userInput.toLowerCase ===  "karachi" ){
// //     console.log("your are live in safe city");

// // }else{
// //     console.log('you are not safe')
// //}























// // var originalNumber = 3.7;
// // var roundedNumber = Math.round(originalNumber);
// // console.log(roundedNumber); // Output: 4





// // var originalNumber = 3.2152;
// // var cailNumber = Math.ceil(cailNumber);
// // console.log(originalNumber);



// // var originalNumber = 4.23;
// // var floorNumber = Math.floor(originalNumber);
// // console.log(floorNumber)

 



var masjid = document.querySelector("#masjid")
var chand  = document.querySelector("#chand")
var result = document.querySelector("#result")
var img  = document.querySelector("#image")


function tossCoin(){ 
var rendomNumber = Math.ceil( Math.random()*2)
if( rendomNumber === 1){
    
       result.innerHTML = ``
       result.innerHTML += `Sorry your loss the Toss`
    
       
         image.innerHTML += ''
         img.src = '../assets/OIP.jpg'
        
        img.src = '../assets/download.jpg'

}else {
result.innerHTML = ``
result.innerHTML += `congrats your are win the Toss `


 image.innerHTML += ''
  img.src = '../assets/download.jpg'
  img.src = '../assets/OIP.jpg'
}
}





















// // var currentdate = new Date();
// // var ahmedBirth  = new Date("augest  8, 2004")

// // var currentMillseconds =  currentdate.getTime();
// // var ahmedMillseonds = ahmedBirth.getTime()

// // var reaminahmedMillsecond = currentMillseconds - ahmedMillseonds;

// // console.log(Math.round(reaminahmedMillsecond /1000 / 60 /60 /24 /365))
















// //  var num = 3;


// // switch (num) {
// //     case 3:
// //         console.log("if 3 chl rha hai")
// //         break;
// //     case 6:
// // console.log("if 6 wala chl rha hai")

// //     default:


// // console.log(" else chal rha hai")
        
// // }













// // let userName = "ahmed "
// // let userName = "ali"
// // userName = "khaskheli"    //resign hoo  rha hai re decalre nhi hoo raha 
// // console.log(userName)



// // const userName = "ahmed "
// // // const userName = "khaskheli"  
// // userName = "khaskheli"
// // console.log(userName)


// //resign be nhi krata hai na ye redecalre krta hai 






// // let button = document.querySelector("#btn");

// // let num =0;

// // function addNumber(){
// //     setInterval( function()  {
// //         num += 1;
// //        console.log(num)
        
// //        button.innerHTML += "0 "
// //     }, 1000);
// // }





// var rightNow = new Date()
// console.log(rightNow)
// console.log(typeof rightNow);
// console.log(rightNow.getDate())
// console.log(rightNow.getDay())
// console.log(rightNow.getHours())
// console.log(rightNow.getMonth())
// console.log(rightNow.getTime())
// console.log(rightNow.getMilliseconds())
// console.log(rightNow.getSeconds())
// console.log(rightNow.getMinutes())
// console.log(rightNow.getFullYear())


// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// console.log(dayNames[rightNow.getDay()]);
















// //apna birth maalooum kroo 












// var currentdate = new Date()
// var ahmedBirth = new Date("augest 8 , 2003");


// var currentMillseconds = currentdate.getTime()
// var ahmedMillseonds = ahmedBirth.getTime()





// var reaminahmedMillsecond = currentMillseconds - ahmedMillseonds;
// console.log(Math.round (reaminahmedMillsecond /1000))












//digital watch


// setInterval(showTime, 1000); 
// function showTime() { 
//   let time = new Date(); 
//   let hour = time.getHours(); 
//   let min = time.getMinutes(); 
//         let sec = time.getSeconds(); 

//   am_pm = "AM"; 

//   if (hour > 12) { 
//     hour -= 12; 
//     am_pm = "PM"; 
//   } 
//   if (hour == 0) { 
//     hr = 12; 
//     am_pm = "AM"; 
//   } 

//   hour = hour < 10 ? "0" + hour : hour; 
//   min = min < 10 ? "0" + min : min; 
//   sec = sec < 10 ? "0" + sec : sec; 

//   let currentTime = hour + ":" 
//     + min + ":" + sec + am_pm; 

//   document.getElementById("clock") 
//     .innerHTML = currentTime; 
// } 

// showTime();









// const timeout = setTimeout(function (){
//     console.log('hello world');
// } , 2500)
// setTimeout(function (){
//     console.log('hello world without variable');
// } , 2500)

// function clears(){
//     clearTimeout(timeout)
// }








// var div = document.querySelector("div")

// for(var i = 1; i<=5; i++){
//   console.log("*")
//   div.innerHTML += '*'
//   for(var j = 1; j<=3; j++){
            
//     div.innerHTML += "*"
//   }
// }


























                                                                                                                                                           