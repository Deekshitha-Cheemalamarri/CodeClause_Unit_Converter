function myResult()
{
    var input=parseFloat(document.getElementById('input').value);
    var inputtype=document.getElementById('inputtype').value;
    var outputtype=document.getElementById('outputtype').value;
    var inputTypeValue,resultTypeValue;
    var outputElement = document.getElementById('output');

    var output;
    if(inputtype === 'Celsius' && outputtype=== 'Kelvin'){
       
        output=input + 273.15; // set answer to the result box
        
    }

    else if(inputtype === "Celsius" && outputtype==="Celsius"){
       
        output = Number(input) ; // set answer to the result box
    }

    else if(inputtype === "Celsius" && outputtype==="Fahrenheit"){
        
        output = (input*9/5)+32; // set answer to the result box    
    }



    else if(inputtype === 'Kelvin' && outputtype=== 'Kelvin'){
       
        output=input; // set answer to the result box
        
    }

    else if(inputtype === "Kelvin" && outputtype==="Celsius"){
       
        output = Number(input)  -273.15; // set answer to the result box
    }

    else if(inputtype === "Kelvin" && outputtype==="Fahrenheit"){
        
        output = (input-273.15)*(9/5)+32 ; // set answer to the result box    
    }




    else if(inputtype === 'Fahrenheit' && outputtype=== 'Kelvin'){
       
        output=(Number(input)-32)*5/9+273.15; // set answer to the result box
        
    }

    else if(inputtype === "Fahrenheit" && outputtype==="Celsius"){
       
        output = (Number(input)-32)*5/9; // set answer to the result box
    }

    else if(inputtype === "Fahrenheit" && outputtype==="Fahrenheit"){
        
        output = input ; // set answer to the result box    
    }
    outputElement.textContent = output;
}