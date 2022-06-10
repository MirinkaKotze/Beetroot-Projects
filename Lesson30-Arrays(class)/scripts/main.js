// MARIO GAME BLOCKS
// CHALLENGE 1: 
// ##
// ###
// ####
// #####

let buildBlocks = () => {
    const num = prompt("please enter a number");
    const string = "#";
    const emptyString = " ";
    for (let i = 2; i <= num; i++) {
      console.log(emptyString.repeat(num - i) + string.repeat(i));
    }
  };

// CHALLENGE 2:
//    ####
//   ######
//  ########
// ##########

let buildBlocks = () => {
    const num = prompt("please enter a number");
    const string = "#";
    const emptyString = " ";
    for (let i = 2; i <= num; i++) {
      console.log(emptyString.repeat(num - i) + string.repeat(i));
    }
  };