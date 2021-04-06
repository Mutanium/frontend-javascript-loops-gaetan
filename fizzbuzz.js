//***BONUSOPDRACHT***
// Log een teller in de console, als de waarde deelbaar is door drie log dan Fizz ipv het getal
// Log bij deelbaar door 5: Buzz en Log bij deelbaar door 3 en 5: FizzBuzz

//Fizz buzz is a group word game for children to teach them about division.[1]
// Players take turns to count incrementally, replacing any number divisible by
// three with the word "fizz", and any number divisible by five with the word "buzz".

//For example, a typical round of fizz buzz would start as follows:
// 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16, 17,
// Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, Fizz Buzz, 31, 32, Fizz, 34, Buzz, Fizz, ...

for(i=1; i<101; i++) {
    if (i%5==0 && i%3==0) {
        console.log("FizzBuzz");
        i++;
    }
    if (i%3==0) {
        console.log("Fizz");
        i++;
    }
    if (i%5==0) {
        console.log("Buzz");
        i++;
    }
    else {
        console.log(i);
    }
}