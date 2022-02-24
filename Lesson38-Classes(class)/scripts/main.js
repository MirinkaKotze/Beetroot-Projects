// Creating class / Template
class Card {
  // Constructing Object
  constructor(element) {
    this.element = element;
  }
  // Methods / Functions
  render() {
    var div = document.createElement('div');
    var h1 = document.createElement('h1');
    h1.innerText = 'hello';      
    div.appendChild(h1);
    this.element.appendChild(div);
  }

  chanceColor(){
    this.element.style.color = 'red';
  }

  changeSize(){
    this.element.style.fontSize = 'x-large';
  }
}
// Getting attachment point in HTML
const el = document.getElementById('entryPoint');
// Create new card by using Card class/template 
const card = new Card(el);
// Calling methods on new template created.
card.render();
card.chanceColor();

const el2 = document.getElementById('entryPoint2');
const card2 = new Card(el2);
card2.render();
card2.changeSize()