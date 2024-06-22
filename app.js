alert("Hello World")

 
 const subject = "JavaScript";
 const thisNumber = 67
 const age = 23;

 alert(age);


 console.log(age);

 console.log(age+20);

 console.log(typeof(subject));
 console.log(typeof(thisNumber));


 console.log(4<=4);


 const printMe = age===23 && thisNumber===607;

 console.log (printMe);

 const priprintThemntMe = age===23 || thisNumber===67;

 console.log (priprintThemntMe);


// Basic if statement 
 if (age>=24) {
    console.log("You are eligible to vote");
    
 } else {
    console.log("gettat");
    
 }

//Even and Odd Number
const number = 74;
 if (number % 2 === 0) {
    console.log(number + " is an Even Number");
    
 } else {
    console.log(number + " is an Odd Number");
 }


 //Switch Statement 
 
 const Day = "wednesday"
switch (Day) {

    case "Tuesday":
        console.log('The week just start na')
        break;

    case "wednesday":
        console.log('Its mid week')
        break;

    case "Thursday":
        console.log('They Smell weekend abi')
        break;

    case "Thursday":
        console.log('They Smell weekend abi')
        break;


    case "Friday":
        console.log('TGIF Things')
        break;


    default:
        console.log('Week just start')
        break;
}


// while statemt 

let star = 1;
while (star <= 8) {
    console.log(star + " Start")
    star = star+1
    
}


//for lops 

for (let number=0; number<= 20; number = number+1){

    if(number % 2 !== 0 ) {
    
        console.log(number + " number is an Odd number")
    }
}