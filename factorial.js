var num = 5; 

var factorial = 1;

for (var i = 1; i <= num; i++) {
    factorial *= i;
}
document.writeln("The factorial of", num, "is:", factorial);