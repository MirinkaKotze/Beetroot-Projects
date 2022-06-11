const userName = prompt('Please enter your name:')
const userAge = prompt('Please enter your age:');
const obj1 = {
    name: userName,
    age: userAge,
    greet: function(){
        return (`Hi ${this.name}. I'm ${this.age} years old.`);
    },
}
console.log(obj1.greet());