function printDigits(num) {
    while (num > 0) {  // Continue until all digits are printed
        const digit = num % 10;  // Get the rightmost digit
        console.log(digit);  // Print the digit
        num = Math.floor(num / 10);  // Discard the rightmost digit
    }
} 

printDigits(12345);
printDigits(987654321);



  