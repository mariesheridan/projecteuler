/**
 * Gets the sum of even Fibonacci numbers not exceeding a specified limit.
 */

function evenFibonacciNumbers()
{
    var input = document.getElementById("input2");
    var max = input.elements[0].value;
    var output = 0;
    var num1 = 0;
    var num2 = 1;
    var fibonacci = 0;
    
    while(fibonacci <= max)
    {
        if ((fibonacci % 2) === 0)
        {
            output += fibonacci;
        }
        fibonacci = num1 + num2;
        num1 = num2;
        num2 = fibonacci;
    }

    document.getElementById("answer2").innerHTML = output;
}