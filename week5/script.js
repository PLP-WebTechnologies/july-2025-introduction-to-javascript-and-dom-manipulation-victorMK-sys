const mango = "During World War II, mangoes were used as a fuel source for tanks due to their high oil content.";
const pineapple = "They contain an enzyme called bromelain, which can break down human proteins, meaning they can 'eat' you back if consumed in large amounts.";
const orange = "The average orange tree can produce around 600 oranges each year.";
const apple = "Apples are made up of about 25% air, which is why they float in water.";
const banana = "Eating bananas can help improve your mood due to their content of tryptophan, which the body converts into serotonin, a natural mood enhancer.";

const cntBtn = document.querySelector('#ctn-btn');
const fruits = document.querySelectorAll('#fruit-op');
const basket = [];

// function to get the fruits user likes and add them to the basket array
function getFruits(nameInput) {
  for (let i = 0; i < fruits.length; i++) {
    if (fruits[i].checked) basket.push(fruits[i].value);
  }
  document.querySelector('#header-title').style.display = 'none';
  document.querySelector('#prompt').style.display = 'none';
  document.querySelector('#fruit-prompt').style.display = 'none';
  document.querySelector('#display-msg').style.display = 'unset';
  document.querySelector('#hello-usr').textContent = `Hello, ${nameInput}`;
  displayFacts();
}

// display an error if no name is provided
function nameError() {
  document.querySelector('#header-title').style.display = 'none';
  document.querySelector('#prompt').style.display = 'none';
  document.querySelector('#fruit-prompt').style.display = 'none';
  document.querySelector('#display-error').style.display = 'unset';
}

// display fruit facts for fruits selected
function displayFacts() {
  if (basket.length > 0) {
    basket.forEach(fruit => {
      const factEl = document.createElement('p');
      if (fruit == 'mango') factEl.textContent = `Mango: ${mango}`;
      if (fruit == 'pineapple') factEl.textContent = `Pineapple: ${pineapple}`;
      if (fruit == 'orange') factEl.textContent = `Orange: ${orange}`;
      if (fruit == 'apple') factEl.textContent = `Apple: ${apple}`;
      if (fruit == 'banana') factEl.textContent = `Banana: ${banana}`;

      document.querySelector('#display-msg').appendChild(factEl);
    });
  }
  else {
    document.querySelector('#fruitdisplay').style.display = 'none';
    const noFruit = document.createElement('div');
    noFruit.textContent = "No fruits selected. That's a bummer... You don't like fruits???";
    document.querySelector('#display-msg').appendChild(noFruit);
  }
}

// event listeners to listen for click events
cntBtn.addEventListener('click', () => {
  const nameInput = document.querySelector('#name-input').value;
  if (nameInput !== "") {
    getFruits(nameInput);
  }
  else {
    nameError();
  }
});