/**
 * Gets the multiples of 3 or 5 below a specified maximum value
 * then adds those multiples.
 */

function multiplesOf3And5()
{
    var input = document.getElementById("input1");
    var max = input.elements[0].value;
    var output = 0;

    for (var i = 1; i < max; i++)
    {
        if (((i % 3) === 0) || ((i % 5) === 0))
        {
            output += i;
        }
    }
    
    document.getElementById("answer1").innerHTML = output;
}