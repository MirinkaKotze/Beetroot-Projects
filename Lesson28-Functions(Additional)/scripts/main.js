// ADDITIONAL FUNCTION TASK
// Create a program that find characters duplicates from users string.

function findDublicates() {
    let userString = prompt('Please enter any numbers or letters. Seperated by a comma:');
    let userArray = userString.split(',');
    let userArraySorted = userArray.sort();
    let dublicates = [];
    for (i = 0; i <= userArraySorted.length; i++) {
        if (userArraySorted[i] == userArraySorted[i+1]) {
            dublicates.push(userArraySorted[i])
        }
    }
    alert('Your string ' + userString + ' has ' + dublicates.length + ' dublicates. They are: ' + dublicates)
}
findDublicates()