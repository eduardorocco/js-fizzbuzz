// programma da 1 a 100 numeri
// multipli 3 FIZZ
// multipli 5 BUZZ
//multipli 3/5 FIZZBUZZ

// numero % 3/5

// PER ogni interazione stampare il numero di interazioni 
// SE il numero di interazione è divisibile per 3 && 5 scrivi fizz buzz
// SE il numero di interazione è divisivile per 3 scrivi fizz
// SE il numero di interazioni è divisible per 5 scrivi buzz


for (let i = 0; i < 100; i++) {

    let num = i + 1

    if (num % 3 == 0 && num % 5 == 0) {
        console.log('FizzBuzz')
    } 
    
    else if  (num % 5 == 0) {
        console.log('Buzz') 
    }

    else if (num % 3 == 0) {
        console.log('Fizz')
    }

    else {
        console.log(num)
    }

 
}