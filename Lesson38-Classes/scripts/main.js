// TASK:
// CREATE A CLASS:
// const myUser = new UserCard(element, age, name, avatarUrl, description);
// myUser.render();

// POINTERS
const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");

// CREATING CLASS
class Card {
  // Constructing Object
  constructor(element, name, age, avatarUrl, quote) {
    this.element = element;
    this.name = name;
    this.age = age;
    this.avatarUrl = avatarUrl;
    this.quote = quote;
  }
  // Methods / Functions
  render() {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card__container");

    const cardWrapper = document.createElement("div");
    cardWrapper.classList.add("card__wrapper");

    const cardImage = document.createElement("img");
    cardImage.classList.add("card__image");
    cardImage.setAttribute("src", this.avatarUrl);
    cardImage.setAttribute("alt", this.name);

    const cardTextWrapper = document.createElement("div");
    cardTextWrapper.classList.add("card__text--wrapper");

    const cardName = document.createElement("h1");
    cardName.classList.add("card__text--name");
    cardName.innerText = `My name is ${this.name}!`;

    const cardAge = document.createElement("h2");
    cardAge.classList.add("card__text--age");
    cardAge.innerText = `And I am ${this.age} years old..`;

    const cardQuote = document.createElement("h2");
    cardQuote.classList.add("card__text--quote");
    cardQuote.innerText = `" ${this.quote} "`;

    cardTextWrapper.appendChild(cardName);
    cardTextWrapper.appendChild(cardAge);

    cardWrapper.appendChild(cardImage);
    cardWrapper.appendChild(cardTextWrapper);

    cardContainer.appendChild(cardWrapper);
    cardContainer.appendChild(cardQuote);

    this.element.appendChild(cardContainer);
  }
}

// Create new user Cards
const donald = new Card(
  card1,
  "Donald Duck",
  10,
  "https://img.etimg.com/thumb/msid-58980271,width-1200,height-900/magazines/panache/some-fun-facts-about-disneys-most-popular-character-donald-duck.jpg",
  "Live each day as if it`s the first day of your life."
);
const mickey = new Card(
  card2,
  "Mickey Mouse",
  15,
  "https://s7.orientaltrading.com/is/image/OrientalTrading/VIEWER_ZOOM/mickey-mouse-dance-cardboard-stand-up~13612583",
  "All you need is a little bit of magic."
);
const nemo = new Card(
  card3,
  "Nemo",
  "3",
  "https://assets.puzzlefactory.pl/puzzle/166/172/original.jpg",
  "When life gets you down, you know what you gotta do? Just keep swimming."
);

// Calling methods on new template created.
donald.render();
mickey.render();
nemo.render();
