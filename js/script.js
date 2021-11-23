// scrivere un programma che stampi in console i numeri da 1 a 100;
for (let RowNumber = 1; RowNumber <= 100; RowNumber++) {
  // se il numero è moltiplo di 3 e 5 mostra fizzbuzz 
  if ((RowNumber % 3 == 0) && (RowNumber % 5 == 0)) {
    console.log('FizzBuzz');

    // se il numero è divisibile per 3 mostra fizz
  } else if (RowNumber % 3 == 0) {
    console.log('Fizz');

    // se il numero è divisibile per 5 mostra buzz
  } else if (RowNumber % 5 == 0) {
    console.log('Buzz');

    // se il numero non soddisfa le condizioni sopra, allora mostra il numero 
  } else {
    console.log(RowNumber);
  }
}

// 2. Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
const list = document.querySelector('ul.number_list');
for (let RowNumber = 1; RowNumber <= 100; RowNumber++) {
  // se il numero è moltiplo di 3 e 5 mostra fizzbuzz 
  if ((RowNumber % 3 == 0) && (RowNumber % 5 == 0)) {
    const ItemList = document.createElement('li');
    ItemList.append(RowNumber);
    // cambio del testo
    ItemList.innerHTML = 'fizzbuzz';
    // aggiunta del colore 
    ItemList.classList.add('red');
    list.append(ItemList);
    // se il numero è divisibile per 3 mostra fizz
  } else if (RowNumber % 3 == 0) {
    const ItemList = document.createElement('li');
    ItemList.append(RowNumber);
    // cambio del testo
    ItemList.innerHTML = 'fizz';
    // aggiunta del colore 
    ItemList.classList.add('green');
    list.append(ItemList);

    // se il numero è divisibile per 5 mostra buzz
  } else if (RowNumber % 5 == 0) {
    const ItemList = document.createElement('li');
    ItemList.append(RowNumber);
    // cambio del testo
    ItemList.innerHTML = 'buzz';
    // aggiunta del colore 
    ItemList.classList.add('yellow');
    list.append(ItemList);

    // se il numero non soddisfa le condizioni sopra, allora mostra il numero 
  } else {
    const ItemList = document.createElement('li');
    ItemList.append(RowNumber);
    list.append(ItemList);
  }
}



