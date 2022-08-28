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

// BONUS 1  
for(i=1; i<=100; i++) {
    //creare nuovo elemento
    let newelement = document.createElement('span');
    //cosa contiene l'elemento?
    newelement.append('FIZZYBUZZY');
    //aggiungo classe all'elemento
    if(i%3==0 && i%5==0)
        newelement.classList.add("fizzbuzz");
    else if(i%3==0)
        newelement.classList.add("fizz");
    else if(i%5==0)
        newelement.classList.add("buzz");
    //punto il luogo dove inserire il nuovo elemento:    document.getElementById("container")
    let location = document.getElementById("container");
    //inserisco l'elemento
    location.append(newelement);
}