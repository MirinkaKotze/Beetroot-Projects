function createCounter() {
    let counter = 0;
    return {
        clear: function () {
                    counter = 0;
                    return counter
                    },
        show: function () {                   
                    return counter
                    },
        increase: function () {
                    counter++;
                    return counter
                    },
        decrease: function () {
                    counter--;
                    return counter
                    },
        createdDate: function () {
                    const date = new Date();
                    return date
        }             
    }
};

const myCounter1 = createCounter();
const myCounter2 = createCounter();

// // 
//Create a counter interface
// const myCounter1 = createCounter();
// myCounter1.clear()
// myCounter1.increase()
// myCounter1.decrease()
// myCounter1.show()