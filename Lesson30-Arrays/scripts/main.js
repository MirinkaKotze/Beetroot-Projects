



// {{REMOVE BEFORE ADDING!!!!}} X 3




// LESSON 30 - ARRAYS
// ALL HOMEWORK WRAPPER
function wrapperInput() {
    userInput = parseInt(prompt(`Choose the number that is corresponding to the code you want to run: \n1. Display groceries list \n2. Add item to groceries list \n3. Mark purchased items \n4. Print shopping receipt \n5. Receipt total \n6. Most expensive item on receipt \n7. Average price per item \n8. Adding styles \n9. Display all the classrooms \n10. Display classrooms for a faculty. \n11. Find group in classroom list. \n12. Sort classrooms according to seats. \n13. Sort classrooms alphabetically`));
    if (userInput === 1) {
        displayGroceriesList(groceriesList)
    }
    else if (userInput === 2) {
        addItem(groceriesList)
    }
    else if (userInput === 3) {
        purchased(groceriesList)
    }
    else if (userInput === 4) {
        printReceipt(shopReceipt)
    }
    else if (userInput === 5) {
        receiptTotal(shopReceipt)
    }
    else if (userInput === 6) {
        expensiveItem(shopReceipt)
    }
    else if (userInput === 7) {
        averageItem(shopReceipt)
    }
    else if (userInput === 8) {
        styles(cssStyles, message)     
    }
    else if (userInput === 9) {
        displayClassrooms(classrooms)
    }
    else if (userInput === 10) {
       displayFacultyClassrooms(classrooms)
    }
    else if (userInput === 11) {
        findGroup(classrooms, group)
    }
    else if (userInput === 12) {
        sortWithSeats(classrooms)
    }
    else if (userInput === 13) {
        sortAlphabetically(classrooms)
    }
}
wrapperInput()

// INDIVIDUAL HOMEWORK
// 1. Create a “groceries list” array. 
// Each element of the array is an object that contains the name of a product, an amount needed and whether it is bought or not. 
// Write a few functions for working with this array: 
//  - Display the entire list, so that the not yet purchased items go before the bought ones. 
//  - Adding a purchase to the list. Note that if a product already exists, 
//    the amount needs to be increased in the existing purchase, not in a new one. 
//  - Purchasing a product. The function accepts the name of a product and marks it as bought.

const groceriesList = [
    {
        name: 'Bread',
        amount: 25,
        brought: 'No'
    },
    {
        name: 'Milk',
        amount: 15,
        brought: 'Yes',
    },
    {
        name: 'Appels',
        amount: 5,
        brought: 'No',
    }
]

function displayGroceriesList() {
    const broughtItems = groceriesList.filter(groceriesList => groceriesList.brought === 'Yes');
    const nonBroughtItems = groceriesList.filter(groceriesList => groceriesList.brought === 'No');
    const newGroceriesList = nonBroughtItems.concat(broughtItems);
    console.log(`The sorted groceries list is: `); 
    console.log(newGroceriesList) ;  
}
// displayGroceriesList(groceriesList)

function addItem() {
    const newItem = {
        name: prompt('What item do you want to add?'),
        amount: Number(prompt('What is the amount of the item?')),
        brought: prompt('Have you already brought this item? Yes or No'),
    }
    const newItemSearch = groceriesList.find(groceriesList => groceriesList.name == newItem.name);
    if (newItemSearch) {
        const itemIndex = groceriesList.findIndex(groceriesList => groceriesList.name == newItem.name);
        groceriesList[itemIndex].amount = newItem.amount;
        groceriesList[itemIndex].brought = newItem.brought;
        console.log(`${newItem.name} was already on your list. The amount was updated to ${newItem.amount} and the brought status was changed to ${newItem.brought}. The new groceries list is: `);
        console.log(groceriesList);
    }
    else {
        groceriesList.push(newItem);
        console.log(`${newItem.name} is now added to your list. Your updated list is: `);
        console.log(groceriesList);
    }   
}
// addItem(groceriesList)

function purchased() {
    const broughtItem = prompt(`What item did you buy?`);
    const newItemSearch = groceriesList.find(groceriesList => groceriesList.name == broughtItem);
    if (newItemSearch) {
        const itemIndex = groceriesList.findIndex(groceriesList => groceriesList.name == broughtItem);
        groceriesList[itemIndex].brought = 'Yes';
        console.log(`${broughtItem}'s status has been changes to brought. The updated groceries list is:`);
        console.log(groceriesList)
    }
    else {
        console.log(`${broughtItem} was not on your list.`)
    }
}
// purchased(groceriesList)


// 2. Create an array that describes a shop receipt. Each element of the array consists of the name of the product, 
// an amount bought, and price per item. Write the following functions. 
//  - Print the receipt out on the screen.
//  - Counting the sum of the purchase.
//  - Extracting the most expensive item on the receipt.
//  - Counting an average item price on the receipt.

const shopReceipt = [
    ['ITEM', 'AMOUNT', 'PRICE'],
    ['Bread',   2,       25],
    ['Milk',    1,       15],
    ['Appels',  4,       5],
]

function printReceipt() {    
    document.write(`${shopReceipt[0][0]}  ${shopReceipt[0][1]}  ${shopReceipt[0][2]}`);
    document.write('<br>');   
    document.write(`${shopReceipt[1][0]}  ${shopReceipt[1][1]}  ${shopReceipt[1][2]}`);
    document.write('<br>'); 
    document.write(`${shopReceipt[2][0]}  ${shopReceipt[2][1]}  ${shopReceipt[2][2]}`);
    document.write('<br>');
    document.write(`${shopReceipt[3][0]}  ${shopReceipt[3][1]}  ${shopReceipt[3][2]}`);
}
// printReceipt(shopReceipt)

// --{{DISPLAY INDIVIUAL ARRAY'S ON THE CONSOLE}}--
// function printReceipt() {    
//     shopReceipt.forEach(function(entry) {
//         console.log(entry);
//     });
// }
// printReceipt(shopReceipt)

function receiptTotal() {
    const totalPerItem1 = shopReceipt[1][1] * shopReceipt[1][2];
    const totalPerItem2 = shopReceipt[2][1] * shopReceipt[2][2];
    const totalPerItem3 = shopReceipt[3][1] * shopReceipt[3][2];
    const totalCost = totalPerItem1 + totalPerItem2 + totalPerItem3;
    console.log(`The total of all the items is: ${totalCost}`);
}
// receiptTotal(shopReceipt)

function expensiveItem() {
    if (
        shopReceipt[1][2] > shopReceipt[2][2] &&
        shopReceipt[1][2] > shopReceipt[3][2]
    ) {
        console.log(`The most expensive item is: ${shopReceipt[1][0]}`)
    }
    else if (
        shopReceipt[2][2] > shopReceipt[1][2] &&
        shopReceipt[2][2] > shopReceipt[3][2]
    ) {
        console.log(`The most expensive item is: ${shopReceipt[2][0]}`)
    }
    else if (
        shopReceipt[3][2] > shopReceipt[1][2] &&
        shopReceipt[3][2] > shopReceipt[2][2]
    ) {
        console.log(`The most expensive item is: ${shopReceipt[3][0]}`)
    }    
}
// expensiveItem(shopReceipt)

function averageItem() {
    const totalPerItem1 = shopReceipt[1][1] * shopReceipt[1][2];
    const totalPerItem2 = shopReceipt[2][1] * shopReceipt[2][2];
    const totalPerItem3 = shopReceipt[3][1] * shopReceipt[3][2];
    const totalCost = totalPerItem1 + totalPerItem2 + totalPerItem3;
    const totalItems = shopReceipt[1][1] + shopReceipt[2][1] + shopReceipt[3][1];
    const averageItem = (totalCost / totalItems).toFixed(2);
    console.log(`The average price per item is: ${averageItem} `)
}
// averageItem(shopReceipt)

// 3. Create an array of css-styles (color, font size, alignment, underline etc.) 
// Each element of the array is an object consisting of two properties: style name and style value, 
// Write a function that accepts the style array and a text and puts out this text via document.write() in 
// the <p></p> tags, adding the style attribute with all the styles in the array to the opening tag.

const message = 'Hello world!!'
const cssStyles = [
    {
        color: 'blue'
    },
    {
        backgroundColor: 'lightblue',
    },
    {
        border: '1px dotted #0000FF',
    },
    {
        fontSize: 'x-large',    
    },
]

function styles(styles, text) {
    const element = document.getElementById('js-styles');
    element.innerHTML = text;
    Object.assign(element.style,cssStyles[0]) 
    Object.assign(element.style,cssStyles[1])  
    Object.assign(element.style,cssStyles[2])  
    Object.assign(element.style,cssStyles[3])  
}
// styles(cssStyles, message)


// --{{ADDING STYLES WITH AN OBJECT (NOT OBJECT-ARRAY):}}--
// const message = 'Hello world!!'
// const cssStyles = {
//     color: 'pink',
//     backgroundColor: 'lightblue',
//     border: '1px dotted #0000FF',
//     fontSize: 'x-large',       
// }

// function styles(styles, text) {
//     const element = document.getElementById('js-styles');
//     element.innerHTML = text;
//     Object.assign(element.style,cssStyles) 
// }
// styles(cssStyles, message)


// 4. Create an array of academy classrooms.
// A classroom object consists of a name, a number of seats (10 to 20) and the faculty it is meant for. 
// Write a few functions for working with it.
//  - Display all the classrooms.
//  - Display all the classrooms for a given faculty.
//  - Display only the classrooms that would fit a given group. A group object contains a name, the number of students, and the faculty name.
//  - A function for sorting all the classrooms by number of seats.
//  - A function for sorting all the classrooms by name in alphabetical order.

const classrooms = [
    { 
        name: 'Monkeys',
        seats: 12,
        faculty: 'Nature',
    },
    {
        name: 'Spaceship',
        seats: 15,
        faculty: 'Space',
    },
    {
        name: 'Explotions',
        seats: 19,
        faculty: 'Sience',
    },
    {
        name: 'Hippos',
        seats: 17,
        faculty: 'Nature',
    },
] 

function displayClassrooms () {
    console.log(`All the classrooms are: ${classrooms[0].name},  ${classrooms[1].name},  ${classrooms[2].name},  ${classrooms[3].name}.`);    
}
// displayClassrooms(classrooms)

function displayFacultyClassrooms() {
    const userFaculty = prompt(`Which faculty's classroom do you want to see? \n${classrooms[0].faculty} or \n${classrooms[1].faculty} or \n${classrooms[2].faculty}`)
    for (i = 0; i <= classrooms.length; i++) {
        if (userFaculty == classrooms[i].faculty) {
           console.log(`All the classrooms in the faculty ${userFaculty} is: ${classrooms[i].name}`);            
        }
    }
}
// displayFacultyClassrooms(classrooms)

const group = {
    name: 'Spaceship',
    seats: 15,
    faculty: 'Space',
}

function findGroup(array, object) {
    for (i = 0; i <= classrooms.length; i++) {
        if (
            group.name == classrooms[i].name &&
            group.seats == classrooms[i].seats &&
            group.faculty == classrooms[i].faculty
            )
        {
            console.log(`The classroom that fit the given group is: ${classrooms[i].name}`)
        }        
    }    
}
// findGroup(classrooms, group)

function sortWithSeats() {
    const sortSeats = classrooms.sort(function(x, y) {
        return parseFloat(x.seats) - parseFloat(y.seats)
     })
     console.log(`All the classrooms in seats order are: ${sortSeats[0].name},  ${sortSeats[1].name},  ${sortSeats[2].name},  ${sortSeats[3].name}.`);
     
}
// sortWithSeats(classrooms)


function sortAlphabetically() {
    const classroomNames = [classrooms[0].name, classrooms[1].name, classrooms[2].name, classrooms[3].name];
    const alphabeticalNames = classroomNames.sort();
    console.log(`The classroom names in alphabetical order is: ${alphabeticalNames}.`);
}
// sortAlphabetically(classrooms)
