const amountNumbers = 10;

function fibonacci(num) {
    if (num < 2) 
        return num;
    else 
        return fibonacci(num-1) + fibonacci(num - 2);
}

if (amountNumbers <= 0) 
    console.log('Enter a positive integer.');
else {
    for (let i = 0; i < amountNumbers; i++) {
        console.log(fibonacci(i));
    }
}
