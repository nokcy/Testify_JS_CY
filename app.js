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


function myFunction(name) {

    console.log("This is my first function " + name)
    
}

myFunction("Nokot");

//Area Of Rectangle Task 9
function AreaOfRectangle(myLength, myWidth){
    const myArea = myLength * myWidth;

    console.log("Area Of The Rectangle is " + myArea)
}

AreaOfRectangle(2,2);




//Area Of Rectangle and Sum
function AreaOfRectangle(myLength, myWidth){
    const sum = myLength * myWidth;
    const myArea = myLength + myWidth;

    return [sum, myArea];

    
}
console.log(AreaOfRectangle(5,5))



//currency Converter 

function converter (dollar){

    const naira = dollar * 1462;
    return naira
}

const nairaValue = converter(240);
console.log(nairaValue)



//Weather Converter 

function TemperatureConvert (ferh){

    const MyTempt = ferh * 189;
    return MyTempt
}

const TemptValue = TemperatureConvert(65);
console.log(TemptValue)




//fucntion scope

const myName = "Nokot";

function greetMe(){

    console.log("good morning " + myName);
}

greetMe();


//Array of friends 

const friends  = ['Sherif', 'Fidel', 'Yohana', 'Desmond', 'Samkay'];
console.log(friends );
// best of friend 
const bestFriend = friends[4];
console.log(bestFriend );



//Array push 

const pushElement = [];

pushElement.push ("Bullah", "John", "pop this");
pushElement.pop();
console.log(pushElement);


//Array Slice 

const monthOfYear = ["jan", "feb", "march", "april", "may", "june", "nov", "dec"];

console.log(monthOfYear.slice(2,3));




// object

const myFirstObj ={
    name: "car",
    age: 23,
    gender: "Male",
    toggleOpenAndClose: function(){
        if (myFirstObj.name==="car"){
            myFirstObj.name="Benz"
        } else {
            myFirstObj.name="Bike"
        }
    }

}


console.log(myFirstObj.name);




//Task 14 My Personal Library 2

const book = {
    title: "Snake under the mango tree",
    author: "Nneka Eze",
    year: 1725,
    reading: false,
    toggleReadingStatus: function() {
        this.reading = !this.reading; 
        console.log("Current reading status:", this.reading); 
    }
};



//Array and object


const Human ={
    name:'nick',
    age: 34,
    siblings:[{
        name:'nokot',
        age: 20
    },

    {
        name:'pagi',
        age: 15
    },

    {
        name:'ponon',
        age: 11
    }

    ]





}

console.log(Human.siblings[1])





// task 15 My Personal Library 3

 
const books = [
    {
        title: "Things Fall Apart",
        description: "A novel about the life of Okonkwo and the Igbo culture.",
        numberOfPages: 209,
        author: "Chinua Achebe",
        reading: true
    },
    {
        title: "Half of a Yellow Sun",
        description: "A novel about the Nigerian Civil War.",
        numberOfPages: 448,
        author: "Chimamanda Ngozi Adichie",
        reading: false
    },
    {
        title: "The Joys of Motherhood",
        description: "A novel about the struggles and resilience of Nigerian women.",
        numberOfPages: 224,
        author: "Buchi Emecheta",
        reading: true
    },
    {
        title: "Purple Hibiscus",
        description: "A novel about family life and politics in Nigeria.",
        numberOfPages: 307,
        author: "Chimamanda Ngozi Adichie",
        reading: false
    }
];

 
for (let i = 0; i < books.length; i++) {
    if (books[i].reading) {
        console.log(books[i]);
    }
}




//Jason file

const myObject = {
    name:"Nokot",
    Age:"23",
    myHight:"45",

}

const MyObj2jSon= JSON.stringify(myObject);
console.log(myObject)
 
console.log(JSON.parse(MyObj2jSon))