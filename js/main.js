// *Consegna:

// *Scrivi un programma che stampi i numeri da 1 a 100,
// *ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// *Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.


// *Prima di partire a scrivere codice poniamoci qualche domanda:
// *Come faccio a sapere se un numero è divisibile per?
// *Abbiamo visto qualcosa di particolare che possiamo usare?

// *Consigli del giorno:
// *1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// *2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
// *Buon lavoro e buon divertimento! 


//!prima creo 2 variabili string con il testo (fizz e buzz)
const fizz = 'Fizz';
const buzz = 'Buzz';

//!creo un ciclo for che mi permetta di controlare tutti i numeri di 1 a 100 

for (let i = 1; i < 101; i++){
//!poi creero un if per sapere se se il valore che cè dentro del i del ciclo in quel comento e divisibile tra il numero voluto 

//!dopo aver confermato se il nuemro e divisibile per il numero dato sia 3, 5 o tutti due stampero il testo adeguo 

if (i % 3 === 0 && i % 5 === 0){
    console.log (fizz + buzz);
}
else if (i % 5 === 0){
    console.log (buzz);
}
else if (i % 3 === 0){
    console.log (fizz);
}
else{
//! per ultimo se il numero non e divisibile per nessuno dei valori precedenti no si stampera il testo solo il numero 
    console.log (i);
};

}