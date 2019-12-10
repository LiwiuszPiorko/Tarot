function card(name, description, image) {
    this.name = name;
    this.description = description;
    this.image = image;
  }
  
  var deck = [
    new card('Eremita', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit1.', 'temperance'),
    new card('Kochankowie', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit2.', 'lovers'),
    new card('Kapłanka', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit3.', 'priestess'),
    new card('Trójka mieczy', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit4.', 'three-swords'),
    new card('Trójka denarów', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit5.', 'pentacles'),
    new card('Diabeł', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit6.', 'devil'),
    new card('Król buław', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit7.', 'wands'),
    new card('Dziewiątka mieczy', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit8.', 'nine-swords')
  ];
  
  function getRandom() {
    let randomNumber = Math.floor(Math.random() * deck.length);
    return randomNumber;
  }
  
  document.getElementById("draw").onclick = function () {
    let index = getRandom();
    let currentCard = deck[index];
  
    document.getElementById("image").innerHTML = '<img src="images/' + currentCard.image + '.jpg">';
    document.getElementById("name").innerHTML='<h3>' + currentCard.name + '</h3>';
    document.getElementById("description").innerHTML='<p>' + currentCard.description + '</p>';
  };