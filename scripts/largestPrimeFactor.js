var isPrime = function(num)
{
    var f1 = 1;
    var f2 = num;
    var factors = [];
    var result = true;

    if (num > 1)
    {
        for (var i = 1; (i < f2); i++)
        {
            if((num % i) === 0)
            {
                f1 = i;
                f2 = num / i;
                factors.push(f1);
                factors.push(f2);
                if (factors.length > 2)
                {
                    result = false;
                    break;
                }
            }
        }
    }
    return result;
}

function largestPrimeFactor()
{
    var input = document.getElementById("input3");
    var number = input.elements[0].value;
    var factor1 = 1;
    var factor2 = number;
    var largestPrime = 2;

    for (var i = 1; i < factor2; i++)
    {
        console.log("-------------------------------");
        if((number % i) === 0)
        {
            factor1 = i;
            factor2 = number / i;
            console.log("factor1 = " + factor1);
            console.log("factor2 = " + factor2);
            if(isPrime(factor2))
            {
                largestPrime = factor2;
                break;
            }
            else if(isPrime(factor1))
            {
                largestPrime = factor1;
            }
            console.log("largestPrime = " + largestPrime);
        }
    }

    document.getElementById("answer3").innerHTML = largestPrime;
}