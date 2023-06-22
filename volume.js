function myResult()
{
    var input=parseFloat(document.getElementById('input').value);
    var inputtype=document.getElementById('inputtype').value;
    var outputtype=document.getElementById('outputtype').value;
    var inputTypeValue,resultTypeValue;
    var outputElement = document.getElementById('output');
    
    var output;
    if(inputtype === "centi" && outputtype=== "centi"){
       
        output=input ; // set answer to the result box
        
    }

    else if(inputtype === "centi" && outputtype==="milli"){
       
        output = Number(input) * 1000; // set answer to the result box
    }

    else if(inputtype === "centi" && outputtype==="kilo"){
        
        output = number(input) * 9.999999999E-16; // set answer to the result box    
    }

    else if(inputtype === "centi" && outputtype==="meter"){
        
        output = Number(input) * 0.000001 ; // set answer to the result box
    }

    else if(inputtype === "centi" && outputtype==="tablespoon"){
        
        output = Number(input) * 0.0676280773 ; // set answer to the result box
    }
    else if(inputtype === "centi" && outputtype==="teaspoon"){
        
        output = Number(input) * 0.2028842318; // set answer to the result box
    }
    else if(inputtype === "centi" && outputtype==="itablespoon"){
        
        output = Number(input) * 0.0563121276; // set answer to the result box
    }
    else if(inputtype === "centi" && outputtype==="iteaspoon"){
        
        output= Number(input)* 0.1689363827; // set answer to the result box
    }
    else if(inputtype === "centi" && outputtype==="liter"){
        
        output = Number(input) * 0.001 ; // set answer to the result box
    }
    else if(inputtype === "centi" && outputtype==="milliliter"){
        
        output = Number(input) * 1; // set answer to the result box
    }
    else if(inputtype === "centi" && outputtype==="gallon"){
        
        output = Number(input) * 0.0002641722; // set answer to the result box
    }
    else if(inputtype === "centi" && outputtype==="quart"){
        
        output = Number(input) * 0.0010566887; // set answer to the result box
    }
    else if(inputtype === "centi" && outputtype==="pint"){
        
        output = Number(input) * 0.0021133774; // set answer to the result box
    }
    else if(inputtype === "centi" && outputtype==="cup"){
        
        output = Number(input) * 0.0042267548; // set answer to the result box
    }
    else if(inputtype === "centi" && outputtype==="ounce"){
        
        output = Number(input) * 0.0338140386; // set answer to the result box
    }
    else if(inputtype === "centi" && outputtype==="iquart"){
        
        output = Number(input) * 0.000879877; // set answer to the result box
    }
    else if(inputtype === "centi" && outputtype==="ipint"){
        
        output = Number(input) * 0.001759754; // set answer to the result box
    }
    else if(inputtype === "centi" && outputtype==="igallon"){
        
        output = Number(input) * 0.0002199692; // set answer to the result box
    }
    else if(inputtype === "centi" && outputtype==="iounce"){
        
        output = Number(input) * 0.0351950797; // set answer to the result box
    }
    else if(inputtype === "centi" && outputtype==="mile"){
        
        output = Number(input) * 2.399128636E-16; // set answer to the result box
    }
    else if(inputtype === "centi" && outputtype==="yard"){
        
        output = Number(input) * 0.000001308; // set answer to the result box
    }
    else if(inputtype === "centi" && outputtype==="foot"){
        
        output = Number(input) * 0.0000353147; // set answer to the result box
    }
    else if(inputtype === "centi" && outputtype==="inch"){
        
        output = Number(input) * 0.0610237441; // set answer to the result box
    }
    


    else if(inputtype === "kilo" && outputtype=== "centi"){
       
        output=input *1000000000000000; // set answer to the result box
        
    }
    
    else if(inputtype === "kilo" && outputtype==="milli"){
       
        output = Number(input) * 1000000000000000000; // set answer to the result box
    }
    
    else if(inputtype === "kilo" && outputtype==="kilo"){
        
        output = number(input); // set answer to the result box    
    }
    
    else if(inputtype === "kilo" && outputtype==="meter"){
        
        output = Number(input) * 1000000000; // set answer to the result box
    }
    
    else if(inputtype === "kilo" && outputtype==="tablespoon"){
        
        output = Number(input) * 67628077275645 ; // set answer to the result box
    }
    else if(inputtype === "kilo" && outputtype==="teaspoon"){
        
        output = Number(input) * 202884231826936; // set answer to the result box
    }
    else if(inputtype === "kilo" && outputtype==="itablespoon"){
        
        output = Number(input) * 56312127564566; // set answer to the result box
    }
    else if(inputtype === "kilo" && outputtype==="iteaspoon"){
        
        output= Number(input)* 168936382693699; // set answer to the result box
    }
    else if(inputtype === "kilo" && outputtype==="liter"){
        
        output = Number(input) * 1000000000000; // set answer to the result box
    }
    else if(inputtype === "kilo" && outputtype==="milliliter"){
        
        output = Number(input) * 1000000000000000; // set answer to the result box
    }
    else if(inputtype === "kilo" && outputtype==="gallon"){
        
        output = Number(input) * 264172176858; // set answer to the result box
    }
    else if(inputtype === "kilo" && outputtype==="quart"){
        
        output = Number(input) * 1056688707432; // set answer to the result box
    }
    else if(inputtype === "kilo" && outputtype==="pint"){
        
        output = Number(input) * 2113377414864; // set answer to the result box
    }
    else if(inputtype === "kilo" && outputtype==="cup"){
        
        output = Number(input) * 4226754829728; // set answer to the result box
    }
    else if(inputtype === "kilo" && outputtype==="ounce"){
        
        output = Number(input) * 33814038637823; // set answer to the result box
    }
    else if(inputtype === "kilo" && outputtype==="iquart"){
        
        output = Number(input) * 879876993196; // set answer to the result box
    }
    else if(inputtype === "kilo" && outputtype==="ipint"){
        
        output = Number(input) * 1759753986393; // set answer to the result box
    }
    else if(inputtype === "kilo" && outputtype==="igallon"){
        
        output = Number(input) * 219969248299; // set answer to the result box
    }
    else if(inputtype === "kilo" && outputtype==="iounce"){
        
        output = Number(input) * 35195079727854; // set answer to the result box
    }
    else if(inputtype === "kilo" && outputtype==="mile"){
        
        output = Number(input) * 0.2399128636; // set answer to the result box
    }
    else if(inputtype === "kilo" && outputtype==="yard"){
        
        output = Number(input) * 1307950619.3; // set answer to the result box
    }
    else if(inputtype === "kilo" && outputtype==="foot"){
        
        output = Number(input) * 35314666721; // set answer to the result box
    }
    else if(inputtype === "kilo" && outputtype==="inch"){
        
        output = Number(input) * 61023744094732; // set answer to the result box
    }



    else if(inputtype === "milli" && outputtype=== "centi"){
       
        output=input * 0.001; // set answer to the result box
        
    }
    
    else if(inputtype === "milli" && outputtype==="kilo"){
       
        output = Number(input) * 1.E-18; // set answer to the result box
    }
    
    else if(inputtype === "milli" && outputtype==="milli"){
        
        output = number(input); // set answer to the result box    
    }
    
    else if(inputtype === "milli" && outputtype==="meter"){
        
        output = Number(input) * 1.E-9; // set answer to the result box
    }
    
    else if(inputtype === "milli" && outputtype==="tablespoon"){
        
        output = Number(input) * 0.0000676281; // set answer to the result box
    }
    else if(inputtype === "milli" && outputtype==="teaspoon"){
        
        output = Number(input) *0.0002028842; // set answer to the result box
    }
    else if(inputtype === "milli" && outputtype==="itablespoon"){
        
        output = Number(input) * 0.0000563121; // set answer to the result box
    }
    else if(inputtype === "milli" && outputtype==="iteaspoon"){
        
        output= Number(input)* 0.0001689364; // set answer to the result box
    }
    else if(inputtype === "milli" && outputtype==="liter"){
        
        output = Number(input) * 0.000001; // set answer to the result box
    }
    else if(inputtype === "milli" && outputtype==="milliliter"){
        
        output = Number(input) * 0.001; // set answer to the result box
    }
    else if(inputtype === "milli" && outputtype==="gallon"){
        
        output = Number(input) * 2.641721768E-7; // set answer to the result box
    }
    else if(inputtype === "milli" && outputtype==="quart"){
        
        output = Number(input) * 0.0000010567; // set answer to the result box
    }
    else if(inputtype === "milli" && outputtype==="pint"){
        
        output = Number(input) * 0.0000021134; // set answer to the result box
    }
    else if(inputtype === "milli" && outputtype==="cup"){
        
        output = Number(input) * 0.0000042268; // set answer to the result box
    }
    else if(inputtype === "milli" && outputtype==="ounce"){
        
        output = Number(input) * 0.000033814; // set answer to the result box
    }
    else if(inputtype === "milli" && outputtype==="iquart"){
        
        output = Number(input) * 8.798769931E-7; // set answer to the result box
    }
    else if(inputtype === "milli" && outputtype==="ipint"){
        
        output = Number(input) * 0.0000017598; // set answer to the result box
    }
    else if(inputtype === "milli" && outputtype==="igallon"){
        
        output = Number(input) * 2.199692482E-7; // set answer to the result box
    }
    else if(inputtype === "milli" && outputtype==="iounce"){
        
        output = Number(input) * 0.0000351951; // set answer to the result box
    }
    else if(inputtype === "milli" && outputtype==="mile"){
        
        output = Number(input) * 2.399128636E-19; // set answer to the result box
    }
    else if(inputtype === "milli" && outputtype==="yard"){
        
        output = Number(input) * 1.307950619E-9; // set answer to the result box
    }
    else if(inputtype === "milli" && outputtype==="foot"){
        
        output = Number(input) * 3.531466672E-8; // set answer to the result box
    }
    else if(inputtype === "milli" && outputtype==="inch"){
        
        output = Number(input) * 0.0000610237; // set answer to the result box
    }



    else if(inputtype === "meter" && outputtype=== "centi"){
       
        output=input * 1000000; // set answer to the result box
        
    }
    
    else if(inputtype === "meter" && outputtype==="kilo"){
       
        output = Number(input) * 1.E-9; // set answer to the result box
    }
    
    else if(inputtype === "meter" && outputtype==="milli"){
        
        output = number(input) * 1000000000 ; // set answer to the result box    
    }
    
    else if(inputtype === "meter" && outputtype==="meter"){
        
        output = Number(input); // set answer to the result box
    }
    
    else if(inputtype === "meter" && outputtype==="tablespoon"){
        
        output = Number(input) * 67628.077276; // set answer to the result box
    }
    else if(inputtype === "meter" && outputtype==="teaspoon"){
        
        output = Number(input) * 202884.23183; // set answer to the result box
    }
    else if(inputtype === "meter" && outputtype==="itablespoon"){
        
        output = Number(input) * 56312.127565; // set answer to the result box
    }
    else if(inputtype === "meter" && outputtype==="iteaspoon"){
        
        output= Number(input)* 168936.38269; // set answer to the result box
    }
    else if(inputtype === "meter" && outputtype==="liter"){
        
        output = Number(input) * 1000 ; // set answer to the result box
    }
    else if(inputtype === "meter" && outputtype==="milliliter"){
        
        output = Number(input) * 1000000; // set answer to the result box
    }
    else if(inputtype === "meter" && outputtype==="gallon"){
        
        output = Number(input) * 264.17217686; // set answer to the result box
    }
    else if(inputtype === "meter" && outputtype==="quart"){
        
        output = Number(input) * 1056.6887074; // set answer to the result box
    }
    else if(inputtype === "meter" && outputtype==="pint"){
        
        output = Number(input) * 2113.3774149; // set answer to the result box
    }
    else if(inputtype === "meter" && outputtype==="cup"){
        
        output = Number(input) * 4226.7548297; // set answer to the result box
    }
    else if(inputtype === "meter" && outputtype==="ounce"){
        
        output = Number(input) * 33814.038638; // set answer to the result box
    }
    else if(inputtype === "meter" && outputtype==="iquart"){
        
        output = Number(input) * 879.8769932; // set answer to the result box
    }
    else if(inputtype === "meter" && outputtype==="ipint"){
        
        output = Number(input) * 1759.7539864; // set answer to the result box
    }
    else if(inputtype === "meter" && outputtype==="igallon"){
        
        output = Number(input) * 219.9692483; // set answer to the result box
    }
    else if(inputtype === "meter" && outputtype==="iounce"){
        
        output = Number(input) * 35195.079728; // set answer to the result box
    }
    else if(inputtype === "meter" && outputtype==="mile"){
        
        output = Number(input) * 2.399128636E-10; // set answer to the result box
    }
    else if(inputtype === "meter" && outputtype==="yard"){
        
        output = Number(input) * 1.3079506193; // set answer to the result box
    }
    else if(inputtype === "meter" && outputtype==="foot"){
        
        output = Number(input) * 35.314666721; // set answer to the result box
    }
    else if(inputtype === "meter" && outputtype==="inch"){
        
        output = Number(input) * 61023.744095; // set answer to the result box
    }



    else if(inputtype === "liter" && outputtype=== "centi"){
       
        output=input * 1000; // set answer to the result box
        
    }
    
    else if(inputtype === "liter" && outputtype==="kilo"){
       
        output = Number(input) * 1.E-12; // set answer to the result box
    }
    
    else if(inputtype === "liter" && outputtype==="milli"){
        
        output = number(input) * 1000000 ; // set answer to the result box    
    }
    
    else if(inputtype === "liter" && outputtype==="meter"){
        
        output = Number(input) * 0.001; // set answer to the result box
    }
    
    else if(inputtype === "liter" && outputtype==="tablespoon"){
        
        output = Number(input) * 67.628077276; // set answer to the result box
    }
    else if(inputtype === "liter" && outputtype==="teaspoon"){
        
        output = Number(input) * 202.88423183; // set answer to the result box
    }
    else if(inputtype === "liter" && outputtype==="itablespoon"){
        
        output = Number(input) * 56.312127565; // set answer to the result box
    }
    else if(inputtype === "liter" && outputtype==="iteaspoon"){
        
        output= Number(input)* 168.93638269; // set answer to the result box
    }
    else if(inputtype === "liter" && outputtype==="liter"){
        
        output = Number(input); // set answer to the result box
    }
    else if(inputtype === "liter" && outputtype==="milliliter"){
        
        output = Number(input) * 1000; // set answer to the result box
    }
    else if(inputtype === "liter" && outputtype==="gallon"){
        
        output = Number(input) * 0.2641721769; // set answer to the result box
    }
    else if(inputtype === "liter" && outputtype==="quart"){
        
        output = Number(input) * 1.0566887074; // set answer to the result box
    }
    else if(inputtype === "liter" && outputtype==="pint"){
        
        output = Number(input) * 2.1133774149; // set answer to the result box
    }
    else if(inputtype === "liter" && outputtype==="cup"){
        
        output = Number(input) * 4.2267548297; // set answer to the result box
    }
    else if(inputtype === "liter" && outputtype==="ounce"){
        
        output = Number(input) * 33.814038638; // set answer to the result box
    }
    else if(inputtype === "liter" && outputtype==="iquart"){
        
        output = Number(input) * 0.8798769932; // set answer to the result box
    }
    else if(inputtype === "liter" && outputtype==="ipint"){
        
        output = Number(input) * 1.7597539864; // set answer to the result box
    }
    else if(inputtype === "liter" && outputtype==="igallon"){
        
        output = Number(input) * 0.2199692483; // set answer to the result box
    }
    else if(inputtype === "liter" && outputtype==="iounce"){
        
        output = Number(input) * 35.195079728; // set answer to the result box
    }
    else if(inputtype === "liter" && outputtype==="mile"){
        
        output = Number(input) * 2.399128636E-13; // set answer to the result box
    }
    else if(inputtype === "liter" && outputtype==="yard"){
        
        output = Number(input) * 0.0013079506; // set answer to the result box
    }
    else if(inputtype === "liter" && outputtype==="foot"){
        
        output = Number(input) * 0.0353146667; // set answer to the result box
    }
    else if(inputtype === "liter" && outputtype==="inch"){
        
        output = Number(input) * 61.023744095; // set answer to the result box
    }



    else if(inputtype === "milliliter" && outputtype=== "centi"){
       
        output=input * 1; // set answer to the result box
        
    }
    
    else if(inputtype === "milliliter" && outputtype==="kilo"){
       
        output = Number(input) * 9.999999999E-16; // set answer to the result box
    }
    
    else if(inputtype === "milliliter" && outputtype==="milli"){
        
        output = number(input) * 1000 ; // set answer to the result box    
    }
    
    else if(inputtype === "milliliter" && outputtype==="meter"){
        
        output = Number(input) * 0.000001; // set answer to the result box
    }
    
    else if(inputtype === "milliliter" && outputtype==="tablespoon"){
        
        output = Number(input) * 0.0676280773; // set answer to the result box
    }
    else if(inputtype === "milliliter" && outputtype==="teaspoon"){
        
        output = Number(input) * 0.2028842318; // set answer to the result box
    }
    else if(inputtype === "milliliter" && outputtype==="itablespoon"){
        
        output = Number(input) * 0.0563121276; // set answer to the result box
    }
    else if(inputtype === "milliliter" && outputtype==="iteaspoon"){
        
        output= Number(input)* 0.1689363827; // set answer to the result box
    }
    else if(inputtype === "milliliter" && outputtype==="liter"){
        
        output = Number(input) * 0.001; // set answer to the result box
    }
    else if(inputtype === "milliliter" && outputtype==="milliliter"){
        
        output = Number(input); // set answer to the result box
    }
    else if(inputtype === "milliliter" && outputtype==="gallon"){
        
        output = Number(input) * 0.0002641722; // set answer to the result box
    }
    else if(inputtype === "milliliter" && outputtype==="quart"){
        
        output = Number(input) * 0.0010566887; // set answer to the result box
    }
    else if(inputtype === "milliliter" && outputtype==="pint"){
        
        output = Number(input) * 0.0021133774; // set answer to the result box
    }
    else if(inputtype === "milliliter" && outputtype==="cup"){
        
        output = Number(input) * 0.0042267548; // set answer to the result box
    }
    else if(inputtype === "milliliter" && outputtype==="ounce"){
        
        output = Number(input) * 0.0338140386; // set answer to the result box
    }
    else if(inputtype === "milliliter" && outputtype==="iquart"){
        
        output = Number(input) * 0.000879877; // set answer to the result box
    }
    else if(inputtype === "milliliter" && outputtype==="ipint"){
        
        output = Number(input) * 0.001759754; // set answer to the result box
    }
    else if(inputtype === "milliliter" && outputtype==="igallon"){
        
        output = Number(input) * 0.0002199692; // set answer to the result box
    }
    else if(inputtype === "milliliter" && outputtype==="iounce"){
        
        output = Number(input) * 0.0351950797; // set answer to the result box
    }
    else if(inputtype === "milliliter" && outputtype==="mile"){
        
        output = Number(input) * 2.399128636E-16; // set answer to the result box
    }
    else if(inputtype === "milliliter" && outputtype==="yard"){
        
        output = Number(input) * 0.000001308; // set answer to the result box
    }
    else if(inputtype === "milliliter" && outputtype==="foot"){
        
        output = Number(input) * 0.0000353147; // set answer to the result box
    }
    else if(inputtype === "milliliter" && outputtype==="inch"){
        
        output = Number(input) * 0.0610237441; // set answer to the result box
    }



    else if(inputtype === "gallon" && outputtype=== "centi"){
       
        output=input * 3785.41; // set answer to the result box
        
    }
    
    else if(inputtype === "gallon" && outputtype==="kilo"){
       
        output = Number(input) * 3.78541E-12; // set answer to the result box
    }
    
    else if(inputtype === "gallon" && outputtype==="milli"){
        
        output = number(input) * 3785410 ; // set answer to the result box    
    }
    
    else if(inputtype === "gallon" && outputtype==="meter"){
        
        output = Number(input) * 0.00378541; // set answer to the result box
    }
    
    else if(inputtype === "gallon" && outputtype==="tablespoon"){
        
        output = Number(input) * 256; // set answer to the result box
    }
    else if(inputtype === "gallon" && outputtype==="teaspoon"){
        
        output = Number(input) * 768; // set answer to the result box
    }
    else if(inputtype === "gallon" && outputtype==="itablespoon"){
        
        output = Number(input) * 213.1644908; // set answer to the result box
    }
    else if(inputtype === "gallon" && outputtype==="iteaspoon"){
        
        output= Number(input)* 639.49347241; // set answer to the result box
    }
    else if(inputtype === "gallon" && outputtype==="liter"){
        
        output = Number(input) * 3.78541; // set answer to the result box
    }
    else if(inputtype === "gallon" && outputtype==="milliliter"){
        
        output = Number(input) * 63785.41; // set answer to the result box
    }
    else if(inputtype === "gallon" && outputtype==="gallon"){
        
        output = Number(input); // set answer to the result box
    }
    else if(inputtype === "gallon" && outputtype==="quart"){
        
        output = Number(input) * 4; // set answer to the result box
    }
    else if(inputtype === "gallon" && outputtype==="pint"){
        
        output = Number(input) * 8; // set answer to the result box
    }
    else if(inputtype === "gallon" && outputtype==="cup"){
        
        output = Number(input) * 16; // set answer to the result box
    }
    else if(inputtype === "gallon" && outputtype==="ounce"){
        
        output = Number(input) * 128; // set answer to the result box
    }
    else if(inputtype === "gallon" && outputtype==="iquart"){
        
        output = Number(input) * 3.3306951688; // set answer to the result box
    }
    else if(inputtype === "gallon" && outputtype==="ipint"){
        
        output = Number(input) * 6.6613903376; // set answer to the result box
    }
    else if(inputtype === "gallon" && outputtype==="igallon"){
        
        output = Number(input) * 0.8326737922; // set answer to the result box
    }
    else if(inputtype === "gallon" && outputtype==="iounce"){
        
        output = Number(input) * 133.22780675; // set answer to the result box
    }
    else if(inputtype === "gallon" && outputtype==="mile"){
        
        output = Number(input) * 9.081685531E-13; // set answer to the result box
    }
    else if(inputtype === "gallon" && outputtype==="yard"){
        
        output = Number(input) * 0.0049511294; // set answer to the result box
    }
    else if(inputtype === "gallon" && outputtype==="foot"){
        
        output = Number(input) * 0.1336804926; // set answer to the result box
    }
    else if(inputtype === "gallon" && outputtype==="inch"){
        
        output = Number(input) * 230.99989113; // set answer to the result box
    }



    else if(inputtype === "quart" && outputtype=== "centi"){
       
        output=input * 946.3525; // set answer to the result box
        
    }
    
    else if(inputtype === "quart" && outputtype==="kilo"){
       
        output = Number(input) * 9.463525E-13; // set answer to the result box
    }
    
    else if(inputtype === "quart" && outputtype==="milli"){
        
        output = number(input) * 946352.5; // set answer to the result box    
    }
    
    else if(inputtype === "quart" && outputtype==="meter"){
        
        output = Number(input) * 0.0009463525; // set answer to the result box
    }
    
    else if(inputtype === "quart" && outputtype==="tablespoon"){
        
        output = Number(input) * 64 ; // set answer to the result box
    }
    else if(inputtype === "quart" && outputtype==="teaspoon"){
        
        output = Number(input) * 192; // set answer to the result box
    }
    else if(inputtype === "quart" && outputtype==="itablespoon"){
        
        output = Number(input) * 53.291122701; // set answer to the result box
    }
    else if(inputtype === "quart" && outputtype==="iteaspoon"){
        
        output= Number(input)* 159.8733681; // set answer to the result box
    }
    else if(inputtype === "quart" && outputtype==="liter"){
        
        output = Number(input) * 0.9463525; // set answer to the result box
    }
    else if(inputtype === "quart" && outputtype==="milliliter"){
        
        output = Number(input) * 946.3525; // set answer to the result box
    }
    else if(inputtype === "quart" && outputtype==="quart"){
        
        output = Number(input); // set answer to the result box
    }
    else if(inputtype === "quart" && outputtype==="gallon"){
        
        output = Number(input) * 0.25; // set answer to the result box
    }
    else if(inputtype === "quart" && outputtype==="pint"){
        
        output = Number(input) * 2; // set answer to the result box
    }
    else if(inputtype === "quart" && outputtype==="cup"){
        
        output = Number(input) * 4; // set answer to the result box
    }
    else if(inputtype === "quart" && outputtype==="ounce"){
        
        output = Number(input) * 32; // set answer to the result box
    }
    else if(inputtype === "quart" && outputtype==="igallon"){
        
        output = Number(input) * 0.2081684481; // set answer to the result box
    }
    else if(inputtype === "quart" && outputtype==="ipint"){
        
        output = Number(input) * 1.6653475844; // set answer to the result box
    }
    else if(inputtype === "quart" && outputtype==="iquart"){
        
        output = Number(input) * 0.8326737922; // set answer to the result box
    }
    else if(inputtype === "quart" && outputtype==="iounce"){
        
        output = Number(input) * 33.306951688; // set answer to the result box
    }
    else if(inputtype === "quart" && outputtype==="mile"){
        
        output = Number(input) * 2.270421382E-13; // set answer to the result box
    }
    else if(inputtype === "quart" && outputtype==="yard"){
        
        output = Number(input) * 0.0012377823; // set answer to the result box
    }
    else if(inputtype === "quart" && outputtype==="foot"){
        
        output = Number(input) * 0.0334201231; // set answer to the result box
    }
    else if(inputtype === "quart" && outputtype==="inch"){
        
        output = Number(input) * 57.749972783; // set answer to the result box
    }



    else if(inputtype === "pint" && outputtype=== "centi"){
       
        output=input * 473.17625; // set answer to the result box
        
    }
    
    else if(inputtype === "pint" && outputtype==="kilo"){
       
        output = Number(input) * 4.7317625E-13; // set answer to the result box
    }
    
    else if(inputtype === "pint" && outputtype==="milli"){
        
        output = number(input) * 473176.25; // set answer to the result box    
    }
    
    else if(inputtype === "pint" && outputtype==="meter"){
        
        output = Number(input) * 0.0004731763; // set answer to the result box
    }
    
    else if(inputtype === "pint" && outputtype==="tablespoon"){
        
        output = Number(input) * 32; // set answer to the result box
    }
    else if(inputtype === "pint" && outputtype==="teaspoon"){
        
        output = Number(input) * 96; // set answer to the result box
    }
    else if(inputtype === "pint" && outputtype==="itablespoon"){
        
        output = Number(input) * 26.645561351; // set answer to the result box
    }
    else if(inputtype === "pint" && outputtype==="iteaspoon"){
        
        output= Number(input) * 79.936684052; // set answer to the result box
    }
    else if(inputtype === "pint" && outputtype==="liter"){
        
        output = Number(input) * 0.47317625; // set answer to the result box
    }
    else if(inputtype === "pint" && outputtype==="milliliter"){
        
        output = Number(input) * 473.17625; // set answer to the result box
    }
    else if(inputtype === "pint" && outputtype==="pint"){
        
        output = Number(input); // set answer to the result box
    }
    else if(inputtype === "pint" && outputtype==="gallon"){
        
        output = Number(input) * 0.125; // set answer to the result box
    }
    else if(inputtype === "pint" && outputtype==="quart"){
        
        output = Number(input) * 0.5; // set answer to the result box
    }
    else if(inputtype === "pint" && outputtype==="cup"){
        
        output = Number(input) * 2; // set answer to the result box
    }
    else if(inputtype === "pint" && outputtype==="ounce"){
        
        output = Number(input) * 16; // set answer to the result box
    }
    else if(inputtype === "pint" && outputtype==="iquart"){
        
        output = Number(input) * 0.4163368961; // set answer to the result box
    }
    else if(inputtype === "pint" && outputtype==="igallon"){
        
        output = Number(input) * 0.104084224; // set answer to the result box
    }
    else if(inputtype === "pint" && outputtype==="ipint"){
        
        output = Number(input) * 0.8326737922; // set answer to the result box
    }
    else if(inputtype === "pint" && outputtype==="iounce"){
        
        output = Number(input) * 16.653475844; // set answer to the result box
    }
    else if(inputtype === "pint" && outputtype==="mile"){
        
        output = Number(input) * 1.135210691E-13; // set answer to the result box
    }
    else if(inputtype === "pint" && outputtype==="yard"){
        
        output = Number(input) * 0.0006188912; // set answer to the result box
    }
    else if(inputtype === "pint" && outputtype==="foot"){
        
        output = Number(input) * 0.0167100616; // set answer to the result box
    }
    else if(inputtype === "pint" && outputtype==="inch"){
        
        output = Number(input) * 28.874986392; // set answer to the result box
    }

   
    else if(inputtype === "itablespoon" && outputtype=== "centi"){
       
        output=input *17.758164063; // set answer to the result box
        
    }
    
    else if(inputtype === "itablespoon" && outputtype==="kilo"){
       
        output = Number(input) * 1.775816406E-14; // set answer to the result box
    }
    
    else if(inputtype === "itablespoon" && outputtype==="milli"){
        
        output = number(input) * 17758.164063; // set answer to the result box    
    }
    
    else if(inputtype === "itablespoon" && outputtype==="meter"){
        
        output = Number(input) * 0.0000177582 ; // set answer to the result box
    }
    
    else if(inputtype === "itablespoon" && outputtype==="tablespoon"){
        
        output = Number(input) * 1.2009504915; // set answer to the result box
    }
    else if(inputtype === "itablespoon" && outputtype==="teaspoon"){
        
        output = Number(input) * 3.6028514745; // set answer to the result box
    }
    else if(inputtype === "itablespoon" && outputtype==="cup"){
        
        output = Number(input) * 0.0750594057; // set answer to the result box
    }
    else if(inputtype === "itablespoon" && outputtype==="iteaspoon"){
        
        output= Number(input)* 3; // set answer to the result box
    }
    else if(inputtype === "itablespoon" && outputtype==="liter"){
        
        output = Number(input) * 0.0177581641; // set answer to the result box
    }
    else if(inputtype === "itablespoon" && outputtype==="milliliter"){
        
        output = Number(input) * 17.758164063; // set answer to the result box
    }
    else if(inputtype === "itablespoon" && outputtype==="itablespoon"){
        
        output = Number(input); // set answer to the result box
    }
    else if(inputtype === "itablespoon" && outputtype==="gallon"){
        
        output = Number(input) * 0.0046912129; // set answer to the result box
    }
    else if(inputtype === "itablespoon" && outputtype==="quart"){
        
        output = Number(input) * 0.0187648514; // set answer to the result box
    }
    else if(inputtype === "itablespoon" && outputtype==="pint"){
        
        output = Number(input) * 0.0375297029; // set answer to the result box
    }
    else if(inputtype === "itablespoon" && outputtype==="ounce"){
        
        output = Number(input) * 0.6004752457; // set answer to the result box
    }
    else if(inputtype === "itablespoon" && outputtype==="iquart"){
        
        output = Number(input) * 0.015625; // set answer to the result box
    }
    else if(inputtype === "itablespoon" && outputtype==="igallon"){
        
        output = Number(input) * 0.00390625; // set answer to the result box
    }
    else if(inputtype === "itablespoon" && outputtype==="ipint"){
        
        output = Number(input) * 0.03125; // set answer to the result box
    }
    else if(inputtype === "itablespoon" && outputtype==="iounce"){
        
        output = Number(input) * 0.625; // set answer to the result box
    }
    else if(inputtype === "itablespoon" && outputtype==="mile"){
        
        output = Number(input) * 4.260411993E-15; // set answer to the result box
    }
    else if(inputtype === "itablespoon" && outputtype==="yard"){
        
        output = Number(input) * 0.0000232268; // set answer to the result box
    }
    else if(inputtype === "itablespoon" && outputtype==="foot"){
        
        output = Number(input) * 0.0006271236; // set answer to the result box
    }
    else if(inputtype === "itablespoon" && outputtype==="inch"){
        
        output = Number(input) * 1.0836696593; // set answer to the result box
    }


    else if(inputtype === "iteaspoon" && outputtype=== "centi"){
       
        output=input *5.9193880208; // set answer to the result box
        
    }
    
    else if(inputtype === "iteaspoon" && outputtype==="kilo"){
       
        output = Number(input) * 5.91938802E-15; // set answer to the result box
    }
    
    else if(inputtype === "iteaspoon" && outputtype==="milli"){
        
        output = number(input) * 5919.3880208; // set answer to the result box    
    }
    
    else if(inputtype === "iteaspoon" && outputtype==="meter"){
        
        output = Number(input) * 0.0000059194; // set answer to the result box
    }
    
    else if(inputtype === "iteaspoon" && outputtype==="tablespoon"){
        
        output = Number(input) * 0.4003168305 ; // set answer to the result box
    }
    else if(inputtype === "iteaspoon" && outputtype==="teaspoon"){
        
        output = Number(input) * 1.2009504915; // set answer to the result box
    }
    else if(inputtype === "iteaspoon" && outputtype==="cup"){
        
        output = Number(input) * 0.0250198019; // set answer to the result box
    }
    else if(inputtype === "iteaspoon" && outputtype==="itablespoon"){
        
        output= Number(input)* 0.3333333333; // set answer to the result box
    }
    else if(inputtype === "iteaspoon" && outputtype==="liter"){
        
        output = Number(input) * 0.005919388; // set answer to the result box
    }
    else if(inputtype === "iteaspoon" && outputtype==="milliliter"){
        
        output = Number(input) * 5.9193880208; // set answer to the result box
    }
    else if(inputtype === "iteaspoon" && outputtype==="iteaspoon"){
        
        output = Number(input); // set answer to the result box
    }
    else if(inputtype === "iteaspoon" && outputtype==="gallon"){
        
        output = Number(input) * 0.0015637376; // set answer to the result box
    }
    else if(inputtype === "iteaspoon" && outputtype==="quart"){
        
        output = Number(input) * 0.0062549505; // set answer to the result box
    }
    else if(inputtype === "iteaspoon" && outputtype==="pint"){
        
        output = Number(input) * 0.012509901; // set answer to the result box
    }
    else if(inputtype === "iteaspoon" && outputtype==="ounce"){
        
        output = Number(input) * 0.2001584152; // set answer to the result box
    }
    else if(inputtype === "iteaspoon" && outputtype==="iquart"){
        
        output = Number(input) * 0.0052083333; // set answer to the result box
    }
    else if(inputtype === "iteaspoon" && outputtype==="igallon"){
        
        output = Number(input) * 0.0013020833; // set answer to the result box
    }
    else if(inputtype === "iteaspoon" && outputtype==="ipint"){
        
        output = Number(input) * 0.0104166667; // set answer to the result box
    }
    else if(inputtype === "iteaspoon" && outputtype==="iounce"){
        
        output = Number(input) * 0.2083333333; // set answer to the result box
    }
    else if(inputtype === "iteaspoon" && outputtype==="mile"){
        
        output = Number(input) * 1.420137331E-15; // set answer to the result box
    }
    else if(inputtype === "iteaspoon" && outputtype==="yard"){
        
        output = Number(input) * 0.0000077423; // set answer to the result box
    }
    else if(inputtype === "iteaspoon" && outputtype==="foot"){
        
        output = Number(input) * 0.0002090412; // set answer to the result box
    }
    else if(inputtype === "iteaspoon" && outputtype==="inch"){
        
        output = Number(input) * 0.3612232198; // set answer to the result box
    }


    else if(inputtype === "teaspoon" && outputtype=== "centi"){
       
        output=input * 4.9289192708; // set answer to the result box
        
    }
    
    else if(inputtype === "teaspoon" && outputtype==="kilo"){
       
        output = Number(input) * 4.92891927E-15; // set answer to the result box
    }
    
    else if(inputtype === "teaspoon" && outputtype==="milli"){
        
        output = number(input) * 4928.9192708; // set answer to the result box    
    }
    
    else if(inputtype === "teaspoon" && outputtype==="meter"){
        
        output = Number(input) * 0.0000049289 ; // set answer to the result box
    }
    
    else if(inputtype === "teaspoon" && outputtype==="tablespoon"){
        
        output = Number(input) * 0.3333333333 ; // set answer to the result box
    }
    else if(inputtype === "teaspoon" && outputtype==="teaspoon"){
        
        output = Number(input); // set answer to the result box
    }
    else if(inputtype === "teaspoon" && outputtype==="cup"){
        
        output = Number(input) * 0.0208333333; // set answer to the result box
    }
    else if(inputtype === "teaspoon" && outputtype==="itablespoon"){
        
        output= Number(input)* 0.2775579307; // set answer to the result box
    }
    else if(inputtype === "teaspoon" && outputtype==="liter"){
        
        output = Number(input) * 0.0049289193; // set answer to the result box
    }
    else if(inputtype === "teaspoon" && outputtype==="milliliter"){
        
        output = Number(input) * 4.9289192708; // set answer to the result box
    }
    else if(inputtype === "teaspoon" && outputtype==="iteaspoon"){
        
        output = Number(input) * 0.8326737922; // set answer to the result box
    }
    else if(inputtype === "teaspoon" && outputtype==="gallon"){
        
        output = Number(input) * 0.0013020833; // set answer to the result box
    }
    else if(inputtype === "teaspoon" && outputtype==="quart"){
        
        output = Number(input) * 0.0052083333; // set answer to the result box
    }
    else if(inputtype === "teaspoon" && outputtype==="pint"){
        
        output = Number(input) * 0.0104166667; // set answer to the result box
    }
    else if(inputtype === "teaspoon" && outputtype==="ounce"){
        
        output = Number(input) * 0.1666666667; // set answer to the result box
    }
    else if(inputtype === "teaspoon" && outputtype==="iquart"){
        
        output = Number(input) * 0.0043368427; // set answer to the result box
    }
    else if(inputtype === "teaspoon" && outputtype==="igallon"){
        
        output = Number(input) * 0.0010842107; // set answer to the result box
    }
    else if(inputtype === "teaspoon" && outputtype==="ipint"){
        
        output = Number(input) * 0.0086736853; // set answer to the result box
    }
    else if(inputtype === "teaspoon" && outputtype==="iounce"){
        
        output = Number(input) * 0.1734737067; // set answer to the result box
    }
    else if(inputtype === "teaspoon" && outputtype==="mile"){
        
        output = Number(input) * 1.182511136E-15; // set answer to the result box
    }
    else if(inputtype === "teaspoon" && outputtype==="yard"){
        
        output = Number(input) * 0.0000064468; // set answer to the result box
    }
    else if(inputtype === "teaspoon" && outputtype==="foot"){
        
        output = Number(input) * 0.0001740631; // set answer to the result box
    }
    else if(inputtype === "teaspoon" && outputtype==="inch"){
        
        output = Number(input) * 0.3007811082; // set answer to the result box
    }



    else if(inputtype === "tablespoon" && outputtype=== "centi"){
       
        output=input * 14.786757812; // set answer to the result box
        
    }
    
    else if(inputtype === "tablespoon" && outputtype==="kilo"){
       
        output = Number(input) * 1.478675781E-14; // set answer to the result box
    }
    
    else if(inputtype === "tablespoon" && outputtype==="milli"){
        
        output = number(input) * 14786.757812; // set answer to the result box    
    }
    
    else if(inputtype === "tablespoon" && outputtype==="meter"){
        
        output = Number(input) * 0.0000147868; // set answer to the result box
    }
    
    else if(inputtype === "tablespoon" && outputtype==="teaspoon"){
        
        output = Number(input) * 3; // set answer to the result box
    }
    else if(inputtype === "tablespoon" && outputtype==="tablespoon"){
        
        output = Number(input); // set answer to the result box
    }
    else if(inputtype === "tablespoon" && outputtype==="cup"){
        
        output = Number(input) * 0.0625; // set answer to the result box
    }
    else if(inputtype === "tablespoon" && outputtype==="itablespoon"){
        
        output= Number(input)* 0.8326737922; // set answer to the result box
    }
    else if(inputtype === "tablespoon" && outputtype==="liter"){
        
        output = Number(input) * 0.0147867578; // set answer to the result box
    }
    else if(inputtype === "tablespoon" && outputtype==="milliliter"){
        
        output = Number(input) * 14.786757812; // set answer to the result box
    }
    else if(inputtype === "tablespoon" && outputtype==="itablespoon"){
        
        output = Number(input) * 0.8326737922; // set answer to the result box
    }
    else if(inputtype === "tablespoon" && outputtype==="gallon"){
        
        output = Number(input) * 0.00390625; // set answer to the result box
    }
    else if(inputtype === "tablespoon" && outputtype==="quart"){
        
        output = Number(input) * 0.015625; // set answer to the result box
    }
    else if(inputtype === "tablespoon" && outputtype==="pint"){
        
        output = Number(input) * 0.03125; // set answer to the result box
    }
    else if(inputtype === "tablespoon" && outputtype==="ounce"){
        
        output = Number(input) * 0.5; // set answer to the result box
    }
    else if(inputtype === "tablespoon" && outputtype==="iquart"){
        
        output = Number(input) * 0.013010528; // set answer to the result box
    }
    else if(inputtype === "tablespoon" && outputtype==="igallon"){
        
        output = Number(input) * 0.003252632; // set answer to the result box
    }
    else if(inputtype === "tablespoon" && outputtype==="ipint"){
        
        output = Number(input) * 0.026021056; // set answer to the result box
    }
    else if(inputtype === "tablespoon" && outputtype==="iounce"){
        
        output = Number(input) * 0.5204211201; // set answer to the result box
    }
    else if(inputtype === "tablespoon" && outputtype==="mile"){
        
        output = Number(input) * 3.54753341E-15; // set answer to the result box
    }
    else if(inputtype === "tablespoon" && outputtype==="yard"){
        
        output = Number(input) * 0.0000193403; // set answer to the result box
    }
    else if(inputtype === "tablespoon" && outputtype==="foot"){
        
        output = Number(input) * 0.0005221894; // set answer to the result box
    }
    else if(inputtype === "tablespoon" && outputtype==="inch"){
        
        output = Number(input) * 0.9023433247; // set answer to the result box
    }



    else if(inputtype === "ounce" && outputtype=== "centi"){
       
        output=input * 29.573515625; // set answer to the result box
        
    }
    
    else if(inputtype === "ounce" && outputtype==="kilo"){
       
        output = Number(input) * 2.957351562E-14; // set answer to the result box
    }
    
    else if(inputtype === "ounce" && outputtype==="milli"){
        
        output = number(input) * 29573.515625; // set answer to the result box    
    }
    
    else if(inputtype === "ounce" && outputtype==="meter"){
        
        output = Number(input) * 0.0000295735; // set answer to the result box
    }
    
    else if(inputtype === "ounce" && outputtype==="teaspoon"){
        
        output = Number(input) * 6; // set answer to the result box
    }
    else if(inputtype === "ounce" && outputtype==="ounce"){
        
        output = Number(input); // set answer to the result box
    }
    else if(inputtype === "ounce" && outputtype==="cup"){
        
        output = Number(input) * 0.125; // set answer to the result box
    }
    else if(inputtype === "ounce" && outputtype==="iounce"){
        
        output= Number(input)* 1.0408422403; // set answer to the result box
    }
    else if(inputtype === "ounce" && outputtype==="liter"){
        
        output = Number(input) * 0.0295735156; // set answer to the result box
    }
    else if(inputtype === "ounce" && outputtype==="milliliter"){
        
        output = Number(input) * 29.573515625; // set answer to the result box
    }
    else if(inputtype === "ounce" && outputtype==="itablespoon"){
        
        output = Number(input) * 1.6653475844; // set answer to the result box
    }
    else if(inputtype === "ounce" && outputtype==="gallon"){
        
        output = Number(input) * 0.0078125; // set answer to the result box
    }
    else if(inputtype === "ounce" && outputtype==="quart"){
        
        output = Number(input) * 0.03125; // set answer to the result box
    }
    else if(inputtype === "ounce" && outputtype==="pint"){
        
        output = Number(input) * 0.0625; // set answer to the result box
    }
    else if(inputtype === "ounce" && outputtype==="tablespoon"){
        
        output = Number(input) * 2; // set answer to the result box
    }
    else if(inputtype === "ounce" && outputtype==="iquart"){
        
        output = Number(input) * 0.026021056; // set answer to the result box
    }
    else if(inputtype === "ounce" && outputtype==="igallon"){
        
        output = Number(input) * 0.006505264; // set answer to the result box
    }
    else if(inputtype === "ounce" && outputtype==="ipint"){
        
        output = Number(input) * 0.052042112; // set answer to the result box
    }
    else if(inputtype === "ounce" && outputtype==="iteaspoon"){
        
        output = Number(input) * 4.9960427532; // set answer to the result box
    }
    else if(inputtype === "ounce" && outputtype==="mile"){
        
        output = Number(input) * 7.095066821E-15; // set answer to the result box
    }
    else if(inputtype === "ounce" && outputtype==="yard"){
        
        output = Number(input) * 0.0000386807; // set answer to the result box
    }
    else if(inputtype === "ounce" && outputtype==="foot"){
        
        output = Number(input) * 0.0010443788; // set answer to the result box
    }
    else if(inputtype === "ounce" && outputtype==="inch"){
        
        output = Number(input) * 1.8046866495; // set answer to the result box
    }



    else if(inputtype === "igallon" && outputtype=== "centi"){
       
        output=input * 4546.09; // set answer to the result box
        
    }
    
    else if(inputtype === "igallon" && outputtype==="kilo"){
       
        output = Number(input) * 4.54609E-12; // set answer to the result box
    }
    
    else if(inputtype === "igallon" && outputtype==="milli"){
        
        output = number(input) * 4546090; // set answer to the result box    
    }
    
    else if(inputtype === "igallon" && outputtype==="meter"){
        
        output = Number(input) * 0.00454609; // set answer to the result box
    }
    
    else if(inputtype === "igallon" && outputtype==="teaspoon"){
        
        output = Number(input) * 922.32997747 ; // set answer to the result box
    }
    else if(inputtype === "igallon" && outputtype==="igallon"){
        
        output = Number(input); // set answer to the result box
    }
    else if(inputtype === "igallon" && outputtype==="cup"){
        
        output = Number(input) * 19.215207864; // set answer to the result box
    }
    else if(inputtype === "igallon" && outputtype==="iounce"){
        
        output= Number(input)* 160; // set answer to the result box
    }
    else if(inputtype === "igallon" && outputtype==="liter"){
        
        output = Number(input) * 4.54609; // set answer to the result box
    }
    else if(inputtype === "igallon" && outputtype==="milliliter"){
        
        output = Number(input) * 4546.09; // set answer to the result box
    }
    else if(inputtype === "igallon" && outputtype==="itablespoon"){
        
        output = Number(input) * 256; // set answer to the result box
    }
    else if(inputtype === "igallon" && outputtype==="gallon"){
        
        output = Number(input) * 1.2009504915; // set answer to the result box
    }
    else if(inputtype === "igallon" && outputtype==="quart"){
        
        output = Number(input) * 4.803801966; // set answer to the result box
    }
    else if(inputtype === "igallon" && outputtype==="pint"){
        
        output = Number(input) * 9.6076039319; // set answer to the result box
    }
    else if(inputtype === "igallon" && outputtype==="tablespoon"){
        
        output = Number(input) * 307.44332582; // set answer to the result box
    }
    else if(inputtype === "igallon" && outputtype==="iquart"){
        
        output = Number(input) * 4; // set answer to the result box
    }
    else if(inputtype === "igallon" && outputtype==="ounce"){
        
        output = Number(input) * 153.72166291; // set answer to the result box
    }
    else if(inputtype === "igallon" && outputtype==="ipint"){
        
        output = Number(input) * 8; // set answer to the result box
    }
    else if(inputtype === "igallon" && outputtype==="iteaspoon"){
        
        output = Number(input) * 768; // set answer to the result box
    }
    else if(inputtype === "igallon" && outputtype==="mile"){
        
        output = Number(input) * 1.09066547E-12; // set answer to the result box
    }
    else if(inputtype === "igallon" && outputtype==="yard"){
        
        output = Number(input) * 0.0059460612; // set answer to the result box
    }
    else if(inputtype === "igallon" && outputtype==="foot"){
        
        output = Number(input) * 0.1605436532; // set answer to the result box
    }
    else if(inputtype === "igallon" && outputtype==="inch"){
        
        output = Number(input) * 277.41943279; // set answer to the result box
    }


    else if(inputtype === "iquart" && outputtype=== "centi"){
       
        output=input * 1136.5225; // set answer to the result box
        
    }
    
    else if(inputtype === "iquart" && outputtype==="kilo"){
       
        output = Number(input) * 1.1365225E-12; // set answer to the result box
    }
    
    else if(inputtype === "iquart" && outputtype==="milli"){
        
        output = number(input) * 1136522.5; // set answer to the result box    
    }
    
    else if(inputtype === "iquart" && outputtype==="meter"){
        
        output = Number(input) * 0.0011365225; // set answer to the result box
    }
    
    else if(inputtype === "iquart" && outputtype==="liter"){
        
        output = Number(input) * 1.1365225; // set answer to the result box
    }
    else if(inputtype === "iquart" && outputtype==="milliliter"){
        
        output = Number(input) * 1136.5225; // set answer to the result box
    }
    else if(inputtype === "iquart" && outputtype==="gallon"){
        
        output = Number(input) * 0.3002376229; // set answer to the result box
    }
    else if(inputtype === "iquart" && outputtype==="quart"){
        
        output= Number(input)* 1.2009504915; // set answer to the result box
    }
    else if(inputtype === "iquart" && outputtype==="pint"){
        
        output = Number(input) * 2.401900983; // set answer to the result box
    }
    else if(inputtype === "iquart" && outputtype==="cup"){
        
        output = Number(input) * 4.803801966; // set answer to the result box
    }
    else if(inputtype === "iquart" && outputtype==="ounce"){
        
        output = Number(input) * 38.430415728; // set answer to the result box
    }
    else if(inputtype === "iquart" && outputtype==="tablespoon"){
        
        output = Number(input) * 76.860831456; // set answer to the result box
    }
    else if(inputtype === "iquart" && outputtype==="teaspoon"){
        
        output = Number(input) * 230.58249437; // set answer to the result box
    }
    else if(inputtype === "iquart" && outputtype==="igallon"){
        
        output = Number(input) * 0.25; // set answer to the result box
    }
    else if(inputtype === "iquart" && outputtype==="iquart"){
        
        output = Number(input); // set answer to the result box
    }
    else if(inputtype === "iquart" && outputtype==="ipint"){
        
        output = Number(input) * 2; // set answer to the result box
    }
    else if(inputtype === "iquart" && outputtype==="iounce"){
        
        output = Number(input) * 40; // set answer to the result box
    }
    else if(inputtype === "iquart" && outputtype==="itablespoon"){
        
        output = Number(input) * 64; // set answer to the result box
    }
    else if(inputtype === "iquart" && outputtype==="iteaspoon"){
        
        output = Number(input) * 192; // set answer to the result box
    }
    else if(inputtype === "iquart" && outputtype==="mile"){
        
        output = Number(input) * 2.726663675E-13; // set answer to the result box
    }
    else if(inputtype === "iquart" && outputtype==="yard"){
        
        output = Number(input) * 0.0014865153; // set answer to the result box
    }
    else if(inputtype === "iquart" && outputtype==="foot"){
        
        output = Number(input) * 0.0401359133; // set answer to the result box
    }
    else if(inputtype === "iquart" && outputtype==="inch"){
        
        output = Number(input) * 69.354858198; // set answer to the result box
    }

    
    else if(inputtype === "ipint" && outputtype=== "centi"){
       
        output=input * 568.26125; // set answer to the result box
        
    }
    
    else if(inputtype === "ipint" && outputtype==="kilo"){
       
        output = Number(input) * 5.6826125E-13; // set answer to the result box
    }
    
    else if(inputtype === "ipint" && outputtype==="milli"){
        
        output = number(input) * 568261.25; // set answer to the result box    
    }
    
    else if(inputtype === "ipint" && outputtype==="meter"){
        
        output = Number(input) * 0.0005682613; // set answer to the result box
    }
    
    else if(inputtype === "ipint" && outputtype==="liter"){
        
        output = Number(input) * 0.56826125; // set answer to the result box
    }
    else if(inputtype === "ipint" && outputtype==="milliliter"){
        
        output = Number(input) * 568.26125; // set answer to the result box
    }
    else if(inputtype === "ipint" && outputtype==="gallon"){
        
        output = Number(input) * 0.1501188114; // set answer to the result box
    }
    else if(inputtype === "ipint" && outputtype==="quart"){
        
        output= Number(input)* 0.6004752457; // set answer to the result box
    }
    else if(inputtype === "ipint" && outputtype==="pint"){
        
        output = Number(input) * 1.2009504915; // set answer to the result box
    }
    else if(inputtype === "ipint" && outputtype==="cup"){
        
        output = Number(input) * 2.401900983; // set answer to the result box
    }
    else if(inputtype === "ipint" && outputtype==="ounce"){
        
        output = Number(input) * 19.215207864; // set answer to the result box
    }
    else if(inputtype === "ipint" && outputtype==="tablespoon"){
        
        output = Number(input) * 38.430415728; // set answer to the result box
    }
    else if(inputtype === "ipint" && outputtype==="teaspoon"){
        
        output = Number(input) * 115.29124718; // set answer to the result box
    }
    else if(inputtype === "ipint" && outputtype==="igallon"){
        
        output = Number(input) * 0.125; // set answer to the result box
    }
    else if(inputtype === "ipint" && outputtype==="iquart"){
        
        output = Number(input) * 0.5; // set answer to the result box
    }
    else if(inputtype === "ipint" && outputtype==="ipint"){
        
        output = Number(input) ; // set answer to the result box
    }
    else if(inputtype === "ipint" && outputtype==="iounce"){
        
        output = Number(input) * 20; // set answer to the result box
    }
    else if(inputtype === "ipint" && outputtype==="itablespoon"){
        
        output = Number(input) * 32; // set answer to the result box
    }
    else if(inputtype === "ipint" && outputtype==="iteaspoon"){
        
        output = Number(input) * 96; // set answer to the result box
    }
    else if(inputtype === "ipint" && outputtype==="mile"){
        
        output = Number(input) * 1.363331837E-13; // set answer to the result box
    }
    else if(inputtype === "ipint" && outputtype==="yard"){
        
        output = Number(input) * 0.0007432577; // set answer to the result box
    }
    else if(inputtype === "ipint" && outputtype==="foot"){
        
        output = Number(input) * 0.0200679567; // set answer to the result box
    }
    else if(inputtype === "ipint" && outputtype==="inch"){
        
        output = Number(input) * 0.0200679567; // set answer to the result box
    }



    else if(inputtype === "iounce" && outputtype=== "centi"){
       
        output=input *28.4130625; // set answer to the result box
        
    }
    
    else if(inputtype === "iounce" && outputtype==="kilo"){
       
        output = Number(input) * 2.84130625E-14; // set answer to the result box
    }
    
    else if(inputtype === "iounce" && outputtype==="milli"){
        
        output = number(input) * 28413.0625; // set answer to the result box    
    }
    
    else if(inputtype === "iounce" && outputtype==="meter"){
        
        output = Number(input) * 0.0000284131; // set answer to the result box
    }
    
    else if(inputtype === "iounce" && outputtype==="liter"){
        
        output = Number(input) * 0.0284130625; // set answer to the result box
    }
    else if(inputtype === "iounce" && outputtype==="milliliter"){
        
        output = Number(input) * 28.4130625; // set answer to the result box
    }
    else if(inputtype === "iounce" && outputtype==="gallon"){
        
        output = Number(input) * 0.0075059406; // set answer to the result box
    }
    else if(inputtype === "iounce" && outputtype==="quart"){
        
        output= Number(input)* 0.0300237623; // set answer to the result box
    }
    else if(inputtype === "iounce" && outputtype==="pint"){
        
        output = Number(input) * 0.0600475246; // set answer to the result box
    }
    else if(inputtype === "iounce" && outputtype==="cup"){
        
        output = Number(input) * 0.1200950491; // set answer to the result box
    }
    else if(inputtype === "iounce" && outputtype==="ounce"){
        
        output = Number(input) * 0.9607603932; // set answer to the result box
    }
    else if(inputtype === "iounce" && outputtype==="tablespoon"){
        
        output = Number(input) * 1.9215207864; // set answer to the result box
    }
    else if(inputtype === "iounce" && outputtype==="teaspoon"){
        
        output = Number(input) * 5.7645623592; // set answer to the result box
    }
    else if(inputtype === "iounce" && outputtype==="igallon"){
        
        output = Number(input) * 0.00625; // set answer to the result box
    }
    else if(inputtype === "iounce" && outputtype==="iquart"){
        
        output = Number(input) * 0.025; // set answer to the result box
    }
    else if(inputtype === "iounce" && outputtype==="ipint"){
        
        output = Number(input) * 0.05; // set answer to the result box
    }
    else if(inputtype === "iounce" && outputtype==="iounce"){
        
        output = Number(input); // set answer to the result box
    }
    else if(inputtype === "iounce" && outputtype==="itablespoon"){
        
        output = Number(input) * 1.6; // set answer to the result box
    }
    else if(inputtype === "iounce" && outputtype==="iteaspoon"){
        
        output = Number(input) * 4.8; // set answer to the result box
    }
    else if(inputtype === "iounce" && outputtype==="mile"){
        
        output = Number(input) * 6.816659189E-15; // set answer to the result box
    }
    else if(inputtype === "iounce" && outputtype==="yard"){
        
        output = Number(input) * 0.0000371629; // set answer to the result box
    }
    else if(inputtype === "iounce" && outputtype==="foot"){
        
        output = Number(input) * 0.0010033978; // set answer to the result box
    }
    else if(inputtype === "iounce" && outputtype==="inch"){
        
        output = Number(input) * 1.7338714549; // set answer to the result box
    }


    else if(inputtype === "mile" && outputtype=== "centi"){
       
        output=input * 4168180000000000; // set answer to the result box
        
    }
    
    else if(inputtype === "mile" && outputtype==="kilo"){
       
        output = Number(input) * 4.16818; // set answer to the result box
    }
    
    else if(inputtype === "mile" && outputtype==="milli"){
        
        output = number(input) * 4168179999999999500; // set answer to the result box    
    }
    
    else if(inputtype === "mile" && outputtype==="meter"){
        
        output = Number(input) * 4168180000; // set answer to the result box
    }
    
    else if(inputtype === "mile" && outputtype==="liter"){
        
        output = Number(input) * 4168180000000; // set answer to the result box
    }
    else if(inputtype === "mile" && outputtype==="milliliter"){
        
        output = Number(input) * 4168180000000000; // set answer to the result box
    }
    else if(inputtype === "mile" && outputtype==="gallon"){
        
        output = Number(input) * 1101117184136; // set answer to the result box
    }
    else if(inputtype === "mile" && outputtype==="quart"){
        
        output= Number(input)* 4404468736544; // set answer to the result box
    }
    else if(inputtype === "mile" && outputtype==="pint"){
        
        output = Number(input) * 8808937473087; // set answer to the result box
    }
    else if(inputtype === "mile" && outputtype==="cup"){
        
        output = Number(input) * 17617874946175; // set answer to the result box
    }
    else if(inputtype === "mile" && outputtype==="ounce"){
        
        output = Number(input) * 140942999569399; // set answer to the result box
    }
    else if(inputtype === "mile" && outputtype==="tablespoon"){
        
        output = Number(input) * 281885999138799; // set answer to the result box
    }
    else if(inputtype === "mile" && outputtype==="teaspoon"){
        
        output = Number(input) * 845657997416396; // set answer to the result box
    }
    else if(inputtype === "mile" && outputtype==="igallon"){
        
        output = Number(input) * 916871421375; // set answer to the result box
    }
    else if(inputtype === "mile" && outputtype==="iquart"){
        
        output = Number(input) * 3667485685501; // set answer to the result box
    }
    else if(inputtype === "mile" && outputtype==="ipint"){
        
        output = Number(input) * 7334971371002; // set answer to the result box
    }
    else if(inputtype === "mile" && outputtype==="iounce"){
        
        output = Number(input) * 146699427420047; // set answer to the result box
    }
    else if(inputtype === "mile" && outputtype==="itablespoon"){
        
        output = Number(input) * 234719083872075; // set answer to the result box
    }
    else if(inputtype === "mile" && outputtype==="iteaspoon"){
        
        output = Number(input) * 704157251616224; // set answer to the result box
    }
    else if(inputtype === "mile" && outputtype==="mile"){
        
        output = Number(input); // set answer to the result box
    }
    else if(inputtype === "mile" && outputtype==="yard"){
        
        output = Number(input) * 5451773612.4; // set answer to the result box
    }
    else if(inputtype === "mile" && outputtype==="foot"){
        
        output = Number(input) * 147197887535; // set answer to the result box
    }
    else if(inputtype === "mile" && outputtype==="inch"){
        
        output = Number(input) * 254357949660781; // set answer to the result box
    }



    else if(inputtype === "yard" && outputtype=== "centi"){
       
        output=input * 764554.85798; // set answer to the result box
        
    }
    
    else if(inputtype === "yard" && outputtype==="kilo"){
       
        output = Number(input) * 7.645548579E-10; // set answer to the result box
    }
    
    else if(inputtype === "yard" && outputtype==="milli"){
        
        output = number(input) * 764554857.98; // set answer to the result box    
    }
    
    else if(inputtype === "yard" && outputtype==="meter"){
        
        output = Number(input) * 0.764554858; // set answer to the result box
    }
    
    else if(inputtype === "yard" && outputtype==="liter"){
        
        output = Number(input) * 764.55485798; // set answer to the result box
    }
    else if(inputtype === "yard" && outputtype==="milliliter"){
        
        output = Number(input) * 764554.85798; // set answer to the result box
    }
    else if(inputtype === "yard" && outputtype==="gallon"){
        
        output = Number(input) * 201.97412116; // set answer to the result box
    }
    else if(inputtype === "yard" && outputtype==="quart"){
        
        output= Number(input)* 807.89648464; // set answer to the result box
    }
    else if(inputtype === "yard" && outputtype==="pint"){
        
        output = Number(input) * 1615.7929693; // set answer to the result box
    }
    else if(inputtype === "yard" && outputtype==="cup"){
        
        output = Number(input) * 3231.5859386; // set answer to the result box
    }
    else if(inputtype === "yard" && outputtype==="ounce"){
        
        output = Number(input) * 25852.687509; // set answer to the result box
    }
    else if(inputtype === "yard" && outputtype==="tablespoon"){
        
        output = Number(input) * 51705.375017; // set answer to the result box
    }
    else if(inputtype === "yard" && outputtype==="teaspoon"){
        
        output = Number(input) * 155116.12505; // set answer to the result box
    }
    else if(inputtype === "yard" && outputtype==="igallon"){
        
        output = Number(input) * 168.17855739; // set answer to the result box
    }
    else if(inputtype === "yard" && outputtype==="iquart"){
        
        output = Number(input) * 672.71422958; // set answer to the result box
    }
    else if(inputtype === "yard" && outputtype==="ipint"){
        
        output = Number(input) * 1345.4284592; // set answer to the result box
    }
    else if(inputtype === "yard" && outputtype==="iounce"){
        
        output = Number(input) * 26908.569183; // set answer to the result box
    }
    else if(inputtype === "yard" && outputtype==="itablespoon"){
        
        output = Number(input) * 43053.710693; // set answer to the result box
    }
    else if(inputtype === "yard" && outputtype==="iteaspoon"){
        
        output = Number(input) * 129161.13208; // set answer to the result box
    }
    else if(inputtype === "yard" && outputtype==="mile"){
        
        output = Number(input) * 1.834265453E-10; // set answer to the result box
    }
    else if(inputtype === "yard" && outputtype==="yard"){
        
        output = Number(input); // set answer to the result box
    }
    else if(inputtype === "yard" && outputtype==="foot"){
        
        output = Number(input) * 27; // set answer to the result box
    }
    else if(inputtype === "yard" && outputtype==="inch"){
        
        output = Number(input) * 46656; // set answer to the result box
    }


    else if(inputtype === "foot" && outputtype=== "centi"){
       
        output=input * 28316.846592; // set answer to the result box
        
    }
    
    else if(inputtype === "foot" && outputtype==="kilo"){
       
        output = Number(input) * 2.831684659E-11; // set answer to the result box
    }
    
    else if(inputtype === "foot" && outputtype==="milli"){
        
        output = number(input) * 28316846.592; // set answer to the result box    
    }
    
    else if(inputtype === "foot" && outputtype==="meter"){
        
        output = Number(input) * 0.0283168466; // set answer to the result box
    }
    
    else if(inputtype === "foot" && outputtype==="liter"){
        
        output = Number(input) * 28.316846592; // set answer to the result box
    }
    else if(inputtype === "foot" && outputtype==="milliliter"){
        
        output = Number(input) * 28316.846592; // set answer to the result box
    }
    else if(inputtype === "foot" && outputtype==="gallon"){
        
        output = Number(input) * 7.480523006; // set answer to the result box
    }
    else if(inputtype === "foot" && outputtype==="quart"){
        
        output= Number(input)* 29.922092024; // set answer to the result box
    }
    else if(inputtype === "foot" && outputtype==="pint"){
        
        output = Number(input) * 59.844184048; // set answer to the result box
    }
    else if(inputtype === "foot" && outputtype==="cup"){
        
        output = Number(input) * 119.6883681; // set answer to the result box
    }
    else if(inputtype === "foot" && outputtype==="ounce"){
        
        output = Number(input) * 957.50694476; // set answer to the result box
    }
    else if(inputtype === "foot" && outputtype==="tablespoon"){
        
        output = Number(input) * 1915.0138895; // set answer to the result box
    }
    else if(inputtype === "foot" && outputtype==="teaspoon"){
        
        output = Number(input) * 5745.0416686; // set answer to the result box
    }
    else if(inputtype === "foot" && outputtype==="igallon"){
        
        output = Number(input) * 6.228835459; // set answer to the result box
    }
    else if(inputtype === "foot" && outputtype==="iquart"){
        
        output = Number(input) * 24.915341836; // set answer to the result box
    }
    else if(inputtype === "foot" && outputtype==="ipint"){
        
        output = Number(input) * 49.830683672; // set answer to the result box
    }
    else if(inputtype === "foot" && outputtype==="iounce"){
        
        output = Number(input) * 996.61367345; // set answer to the result box
    }
    else if(inputtype === "foot" && outputtype==="itablespoon"){
        
        output = Number(input) * 1594.5818775; // set answer to the result box
    }
    else if(inputtype === "foot" && outputtype==="iteaspoon"){
        
        output = Number(input) * 4783.7456325; // set answer to the result box
    }
    else if(inputtype === "foot" && outputtype==="mile"){
        
        output = Number(input) * 6.793575755E-12; // set answer to the result box
    }
    else if(inputtype === "foot" && outputtype==="yard"){
        
        output = Number(input) * 0.037037037; // set answer to the result box
    }
    else if(inputtype === "foot" && outputtype==="foot"){
        
        output = Number(input); // set answer to the result box
    }
    else if(inputtype === "foot" && outputtype==="inch"){
        
        output = Number(input) * 1728; // set answer to the result box
    }



    else if(inputtype === "inch" && outputtype=== "centi"){
       
        output=input * 16.387064; // set answer to the result box
        
    }
    
    else if(inputtype === "inch" && outputtype==="kilo"){
       
        output = Number(input) * 1.6387064E-14; // set answer to the result box
    }
    
    else if(inputtype === "inch" && outputtype==="milli"){
        
        output = number(input) * 16387.064; // set answer to the result box    
    }
    
    else if(inputtype === "inch" && outputtype==="meter"){
        
        output = Number(input) * 0.0000163871; // set answer to the result box
    }
    
    else if(inputtype === "inch" && outputtype==="liter"){
        
        output = Number(input) * 0.016387064; // set answer to the result box
    }
    else if(inputtype === "inch" && outputtype==="milliliter"){
        
        output = Number(input) * 16.387064; // set answer to the result box
    }
    else if(inputtype === "inch" && outputtype==="gallon"){
        
        output = Number(input) * 0.0043290064; // set answer to the result box
    }
    else if(inputtype === "inch" && outputtype==="quart"){
        
        output= Number(input)* 0.0173160255; // set answer to the result box
    }
    else if(inputtype === "inch" && outputtype==="pint"){
        
        output = Number(input) * 0.034632051; // set answer to the result box
    }
    else if(inputtype === "inch" && outputtype==="cup"){
        
        output = Number(input) * 0.0692641019; // set answer to the result box
    }
    else if(inputtype === "inch" && outputtype==="ounce"){
        
        output = Number(input) * 0.5541128153; // set answer to the result box
    }
    else if(inputtype === "inch" && outputtype==="tablespoon"){
        
        output = Number(input) * 1.1082256305; // set answer to the result box
    }
    else if(inputtype === "inch" && outputtype==="teaspoon"){
        
        output = Number(input) * 3.3246768915; // set answer to the result box
    }
    else if(inputtype === "inch" && outputtype==="igallon"){
        
        output = Number(input) * 0.0036046501; // set answer to the result box
    }
    else if(inputtype === "inch" && outputtype==="iquart"){
        
        output = Number(input) * 0.0144186006; // set answer to the result box
    }
    else if(inputtype === "inch" && outputtype==="ipint"){
        
        output = Number(input) * 0.0288372012; // set answer to the result box
    }
    else if(inputtype === "inch" && outputtype==="iounce"){
        
        output = Number(input) * 0.576744024; // set answer to the result box
    }
    else if(inputtype === "inch" && outputtype==="itablespoon"){
        
        output = Number(input) * 0.9227904384; // set answer to the result box
    }
    else if(inputtype === "inch" && outputtype==="iteaspoon"){
        
        output = Number(input) * 2.7683713151; // set answer to the result box
    }
    else if(inputtype === "inch" && outputtype==="mile"){
        
        output = Number(input) * 3.931467451E-15; // set answer to the result box
    }
    else if(inputtype === "inch" && outputtype==="yard"){
        
        output = Number(input) * 0.0000214335; // set answer to the result box
    }
    else if(inputtype === "inch" && outputtype==="foot"){
        
        output = Number(input) * 0.0005787037; // set answer to the result box
    }
    else if(inputtype === "inch" && outputtype==="inch"){
        
        output = Number(input) ; // set answer to the result box
    }

    outputElement.textContent = output;
}