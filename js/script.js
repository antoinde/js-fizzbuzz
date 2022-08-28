//controllo se javascript funziona correttamente
console.log("Javascript works correctly! Have fun! =)");
console.log("----------------------------------------");

//creazione numeri da 1 a 100
for(i=1; i<=100; i++) {

    //stampa FizzBuzz al posto del numero per i multipli sia di 3 che di 5
    if(i%3==0 && i%5==0)
        console.log("FizzBuzz");

    //stampa Fizz al posto del numero per i multipli di 3
    else if(i%3==0)
        console.log("Fizz");

    //stampa Buzz al posto del numero per i multipli di 5
    else if(i%5==0)
        console.log("Buzz");

    //stampa numero normale in tutte le altre occasioni
    else 
        console.log(`${i}`);

}
