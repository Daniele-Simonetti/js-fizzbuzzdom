// scrivere un programma che stampi in console i numeri da 1 a 100;
for (let RowNumber = 1; RowNumber <= 100; RowNumber++) {
  // 1.Per i multipli di 3 stampi “Fizz” al posto del numero 
  if (RowNumber % 3 == 0) {
      console.log('Fizz');
  } else if (RowNumber % 5 == 0) {
      // per i multipli di 5 stampi Buzz.
      console.log('Buzz');
  } else if (RowNumber % 3 == 0) && (RowNumber % 5 == 0) {
    // Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
      console.log('FizzBuzz');
  } else {
    // stampa del numero normale
    console.log(RowNumber);
  } 
}

// 2. Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.

// 3. Applica uno stile differente a seconda del valore dell’indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.

