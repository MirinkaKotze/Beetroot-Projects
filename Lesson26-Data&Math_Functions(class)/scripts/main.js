// TASK:
    // 1. Get user name
    // 2. Check if user is one of SE Front-End group
    // 3. If user is member of SE Front-End group show on console message 'Access granted'
    // 3. If no show on console message 'Access declined'

// GROUP 1 - MUZAFFER + MIRINKA
const classroom = [
    "Mirinka",
    "Muzaffer",
    "Rana",
    "Hassen",
    "Mall",
    "Raluca",
    "Haleema",
    "Ioana",
    "Barghavi",
    "Alex",
  ];

function searchName() {
let userName = prompt("Please type your name");
if (classroom.indexOf(userName) == -1) {
    console.log("Access declined");
} else {
    console.log("Access granted");
}
}
searchName();

//   GROUP 2 - IOANA + RANA + MALL
var userName =prompt("Tell me your name")
var nameList = ["Ioana", "Rana", "Hassen", "Mall", "Mirinka", "Raluca", "Haleema", "Muzzafer", "Bharghavi", "Alex"]
if (nameList.includes(userName)){
    console.log("Access granted")
    console.log(new Date())
} else{
    console.log("Access denied")
}

// GROUP 3 - RALUCA + BHARGHAVI
let userName = prompt("What is your name?");
let feList = [
  "Raluca Baceanu",
  "Bharghavi",
  "Haleema Sameena",
  "Hassen Ahmed",
  "Mirinka Kotze",
  "Muzaffer Rende",
  "Pascu Ioana-Georgia",
  " Rana Ashraf",
];
for (let i = 0; i <= feList.length; i++) {
  if (feList[i].includes(userName)) {
    console.log("Access Granted");
    break;
  } else {
    console.log("Access Declined");
    break;
  }
}  

// GROUP 4- HASSAN + HALEEMA
const developer=['Hassan','Haleema','Rucoula','Mirinka'];
var newDeveloper=window.prompt('Enter the developer name');
function findDeveloper(developer,newDeveloper){
    for(var i=0; i<=developer.length; i++){
        if(developer[i]===newDeveloper){
            document.write("Access Granted");
        }else
        {
           document.write("Access Denied");
        }
    }
}
findDeveloper(developer,newDeveloper); (edited) 