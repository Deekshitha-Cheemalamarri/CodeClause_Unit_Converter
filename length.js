function myResult()
{
    var input=parseFloat(document.getElementById('input').value);
    var inputtype=document.getElementById('inputtype').value;
    var outputtype=document.getElementById('outputtype').value;
    var inputTypeValue,resultTypeValue;
    var outputElement = document.getElementById('output');

    var output;
    if(inputtype === 'Meter' && outputtype=== 'Centimeter'){
       
        output=input * 100; // set answer to the result box
        
    }

    else if(inputtype === "Meter" && outputtype==="Kilometer"){
       
        output = Number(input) * 0.001; // set answer to the result box
    }

    else if(inputtype === "Meter" && outputtype==="Meter"){
        
        output = input ; // set answer to the result box    
    }

    else if(inputtype === "Meter" && outputtype==="Inch"){
        
        output = Number(input) * 39.37007874; // set answer to the result box
    }

    else if(inputtype === "Meter" && outputtype==="Feet"){
        
        output = Number(input) * 3.280839895; // set answer to the result box
    }
    else if(inputtype === "Meter" && outputtype==="Millimeter"){
        
        output = Number(input) *1000; // set answer to the result box
    }
    else if(inputtype === "Meter" && outputtype==="Micrometer"){
        
        output = Number(input) * 1000000; // set answer to the result box
    }
    else if(inputtype === "Meter" && outputtype==="Light Year"){
        
        output= Number(input) * 1.057008707E-16; // set answer to the result box
    }
    else if(inputtype === "Meter" && outputtype==="Mile"){
        
        output = Number(input) * 0.0006213689; // set answer to the result box
    }
    else if(inputtype === "Meter" && outputtype==="Yard"){
        
        output = Number(input) * 1.0936132983; // set answer to the result box
    }
    else if(inputtype === "Meter" && outputtype==="Nanometer"){
        
        output = Number(input) * 1000000000; // set answer to the result box
    }





    else if(inputtype === "Centimeter" && outputtype==="Meter"){
        
        output = Number(input) * 0.01; // set answer to the result box
    }

    else if(inputtype === "Centimeter" && outputtype==="Kilometer"){
       
        output = Number(input) * 0.00001; // set answer to the result box
    }

    else if(inputtype === "Centimeter" && outputtype==="Centimeter"){
        
        output = Number(input); // set answer to the result box
    }

    else if(inputtype === "Centimeter" && outputtype==="Inch"){
         
        output= Number(input)*0.3937007874;
          // set answer to the result box
    }

    else if(inputtype === "Centimeter" && outputtype==="Feet"){
       
        output = Number(input) * 0.032808399;
          // set answer to the result box
    }
    else if(inputtype === "Centimeter" && outputtype==="Yard"){
       
        output = Number(input) * 0.010936133;
          // set answer to the result box
    }
    else if(inputtype === "Centimeter" && outputtype==="Millimeter"){
       
        output = Number(input) *10;
          // set answer to the result box
    }
    else if(inputtype === "Centimeter" && outputtype==="Micrometer"){
       
        output = Number(input) * 10000;
          // set answer to the result box
    }
    else if(inputtype === "Centimeter" && outputtype ==="Light Year"){
       
        output = Number(input) * 1.057008707E-18;
          // set answer to the result box
    }
    else if(inputtype === "Centimeter" && outputtype==="Mile"){
       
        output = Number(input) * 0.0000062137;
          // set answer to the result box
    }
    else if(inputtype === "Centimeter" && outputtype==="Nanometer"){
       
        output = Number(input) * 10000000;
          // set answer to the result box
    }




    else if(inputtype === "Kilometer" && outputtype==="Meter"){
        
        output = Number(input) * 1000; // set answer to the result box
    }

    else if(inputtype === "Kilometer" && outputtype==="Kilometer"){
       
        output = Number(input); // set answer to the result box
    }

    else if(inputtype === "Kilometer" && outputtype==="Centimeter"){
        
        output = Number(input) * 100000; // set answer to the result box
    }

    else if(inputtype === "Kilometer" && outputtype==="Inch"){
       
        output = Number(input)* 39370.07874;
          // set answer to the result box
    }

    else if(inputtype === "Kilometer" && outputtype==="Feet"){
        
        output = Number(input) * 3280.839895; // set answer to the result box
    }
    else if(inputtype === "Kilometer" && outputtype==="Yard"){
        
        output = Number(input) * 1093.6132983; // set answer to the result box
    }
    else if(inputtype === "Kilometer" && outputtype==="Mile"){
        
        output = Number(input) * 0.6213688756; // set answer to the result box
    }
    else if(inputtype === "Kilometer" && outputtype==="Light Year"){
        
        output = Number(input) * 1.057008707E-13; // set answer to the result box
    }
    else if(inputtype === "Kilometer" && outputtype==="Millimeter"){
        
        output = Number(input) * 1000000; // set answer to the result box
    }
    else if(inputtype === "Kilometer" && outputtype==="Micrometer"){
        
        output = Number(input) * 1000000000; // set answer to the result box
    }
    else if(inputtype === "Kilometer" && outputtype ==="Nanometer"){
        
        output = Number(input) * 1000000000000; // set answer to the result box
    }




    else if(inputtype === "Inch" && outputtype==="Meter"){
       
        output = Number(input) * 0.0254; // set answer to the result box
       
    }

    else if(inputtype === "Inch" &&  outputtype==="Kilometer"){
       
        output = Number(input)*0.0000254; // set answer to the result box
    }

    else if(inputtype === "Inch" && outputtype==="Centimeter"){
       
        output = Number(input) * 2.54; // set answer to the result box
    }

    else if(inputtype === "Inch" && outputtype==="Inch"){
        
        output = Number(input); // set answer to the result box
    }

    else if(inputtype === "Inch" && outputtype==="Feet"){
         
        output = Number(input)*0.0833333333; // set answer to the result box
    }
    else if(inputtype === "Inch" && outputtype==="Mile"){
         
        output= Number(input)* 0.0000157828; // set answer to the result box
    }
    else if(inputtype === "Inch" && outputtype==="Yard"){
         
        output = Number(input)*0.0277777778; // set answer to the result box
    }
    else if(inputtype === "Inch" && outputtype==="Millimeter"){
         
        output = Number(input)*25.4; // set answer to the result box
    }
    else if(inputtype === "Inch" && outputtype==="Micrometer"){
         
        output = Number(input)*25400; // set answer to the result box
    }
    else if(inputtype === "Inch" && outputtype==="Light Year"){
         
        output = Number(input)*2.684802117E-18; // set answer to the result box
    }
    else if(inputtype === "Inch" && outputtype==="Nanometer"){
         
        output = Number(input)*25400000; // set answer to the result box
    }




    else if(inputtype === "Feet" && outputtype==="Meter"){
       
        output = Number(input) * 0.3048; // set answer to the result box
    }

    else if(inputtype === "Feet" && outputtype==="Kilometer"){
       
        output = Number(input) * 0.0003048; // set answer to the result box
    }

    else if(inputtype === "Feet" && outputtype==="Centimeter"){
       
        output = Number(input) * 30.48; // set answer to the result box
    }

    else if(inputtype === "Feet" && outputtype==="Inch"){
        
        output = Number(input) * 12; // set answer to the result box
    }

    else if(inputtype === "Feet" && outputtype==="Feet"){
         
        output = Number(input); // set answer to the result box
    }
    else if(inputtype === "Feet" && outputtype==="Mile"){
         
        output = Number(input)*0.0001893932; // set answer to the result box
    }
    else if(inputtype === "Feet" && outputtype==="Yard"){
         
        output = Number(input)*0.3333333333; // set answer to the result box
    }
    else if(inputtype === "Feet" && outputtype==="Millimeter"){
         
        output = Number(input) * 304.8; // set answer to the result box
    }
    else if(inputtype === "Feet" && outputtype==="Micrometer"){
         
        output = Number(input)*304800; // set answer to the result box
    }
    else if(inputtype === "Feet" && outputtype==="Light Year"){
         
        output = Number(input) * 3.22176254E-17; // set answer to the result box
    }
    else if(inputtype === "Feet" && outputtype==="Nanometer"){
         
        output = Number(input) * 304800000; // set answer to the result box
    }





    else if(inputtype === "Millimeter" && outputtype==="Meter"){
       
        output = Number(input) * 0.001; // set answer to the result box
        
    }

    else if(inputtype === "Millimeter" && outputtype==="Kilometer"){
       
        output = Number(input)*0.000001; // set answer to the result box
    }

    else if(inputtype === "Millimeter" && outputtype ==="Centimeter"){
       
        output = Number(input) *0.1; // set answer to the result box
    }

    else if(inputtype === "Millimeter" && outputtype ==="Inch"){
        
        output = Number(input) * 0.0393700787; // set answer to the result box
    }

    else if(inputtype === "Millimeter" && outputtype ==="Feet"){
         
        output = Number(input)*0.0032808399; // set answer to the result box
    }
    else if(inputtype === "Millimeter" && outputtype==="Mile"){
         
        output = Number(input)* 6.213688756E-7; // set answer to the result box
    }
    else if(inputtype === "Millimeter" && outputtype==="Yard"){
         
        output = Number(input)*0.0010936133; // set answer to the result box
    }
    else if(inputtype === "Millimeter" && outputtype==="Millimeter"){
         
        output = Number(input); // set answer to the result box
    }
    else if(inputtype === "Millimeter" && outputtype==="Micrometer"){
         
        output = Number(input)*1000; // set answer to the result box
    }
    else if(inputtype === "Millimeter" && outputtype==="Light Year"){
         
        output = Number(input)*1.057008707E-19; // set answer to the result box
    }
    else if(inputtype === "Millimeter" && outputtype==="Nanometer"){
         
        output = Number(input)*1000000; // set answer to the result box
    }



    else if(inputtype === "Micrometer" && outputtype==="Meter"){
       
        output= Number(input) * 0.000001; // set answer to the result box
        
    }

    else if(inputtype === "Micrometer" && outputtype==="Kilometer"){
       
        output = Number(input)* 9.999999999E-10; // set answer to the result box
    }

    else if(inputtype === "Micrometer" && outputtype==="Centimeter"){
       
        output = Number(input) *0.0001; // set answer to the result box
    }

    else if(inputtype === "Micrometer" && outputtype==="Inch"){
        
        output = Number(input) *0.0000393701; // set answer to the result box
    }

    else if(inputtype === "Micrometer" && outputtype==="Feet"){
         
        output = Number(input)*0.0000032808; // set answer to the result box
    }
    else if(inputtype === "Micrometer" && outputtype==="Mile"){
         
        output = Number(input)* 6.213688756E-10; // set answer to the result box
    }
    else if(inputtype === "Micrometer" && outputtype==="Yard"){
         
        output = Number(input)*0.0000010936; // set answer to the result box
    }
    else if(inputtype === "Micrometer" && outputtype==="Millimeter"){
         
        output = Number(input) * 0.001; // set answer to the result box
    }
    else if(inputtype === "Micrometer" && outputtype==="Micrometer"){
         
        output = Number(input); // set answer to the result box
    }
    else if(inputtype === "Micrometer" && outputtype==="Light Year"){
         
        output = Number(input)*1.057008707E-22; // set answer to the result box
    }
    else if(inputtype === "Micrometer" && outputtype==="Nanometer"){
         
        output = Number(input)*1000; // set answer to the result box
    }




    else if(inputtype === "Mile" && outputtype==="Meter"){
       
        output = Number(input) * 1609.35; // set answer to the result box
        
    }

    else if(inputtype === "Mile" && outputtype==="Kilometer"){
       
        output = Number(input) *  1.60935; // set answer to the result box
    }

    else if(inputtype === "Mile" && outputtype==="Centimeter"){
       
        output = Number(input) * 160935; // set answer to the result box
    }

    else if(inputtype === "Mile" && outputtype==="Inch"){
        
        output = Number(input) * 63360.23622; // set answer to the result box
    }

    else if(inputtype === "Mile" && outputtype==="Feet"){
         
        output = Number(input)* 5280.019685; // set answer to the result box
    }
    else if(inputtype === "Mile" && outputtype==="Mile"){
         
        output = Number(input); // set answer to the result box
    }
    else if(inputtype === "Mile" && outputtype==="Yard"){
         
        output = Number(input)*1760.0065617; // set answer to the result box
    }
    else if(inputtype === "Mile" && outputtype==="Millimeter"){
         
        output = Number(input) * 1609350; // set answer to the result box
    }
    else if(inputtype === "Mile" && outputtype==="Micrometer"){
         
        output = Number(input) * 1609350000; // set answer to the result box
    }
    else if(inputtype === "Mile" && outputtype==="Light Year"){
         
        output = Number(input)*1.701096963E-13; // set answer to the result box
    }
    else if(inputtype === "Mile" && outputtype==="Nanometer"){
         
        output = Number(input)*1609350000000; // set answer to the result box
    }
    


    else if(inputtype === "Yard" && outputtype==="Meter"){
       
        output= Number(input) * 0.9144; // set answer to the result box
       
    }

    else if(inputtype === "Yard" && outputtype==="Kilometer"){
       
        output = Number(input) *  0.0009144; // set answer to the result box
    }

    else if(inputtype === "Yard" && outputtype==="Centimeter"){
       
        output = Number(input) * 91.44; // set answer to the result box
    }

    else if(inputtype === "Yard" && outputtype==="Inch"){
        
        output = Number(input) * 36; // set answer to the result box
    }

    else if(inputtype === "Yard" && outputtype==="Feet"){
         
        output = Number(input)* 3; // set answer to the result box
    }
    else if(inputtype === "Yard" && outputtype==="Mile"){
         
        output = Number(input) * 0.0005681797; // set answer to the result box
    }
    else if(inputtype === "Yard" && outputtype==="Yard"){
         
        output = Number(input); // set answer to the result box
    }
    else if(inputtype === "Yard" && outputtype==="Millimeter"){
         
        output = Number(input) * 914.4; // set answer to the result box
    }
    else if(inputtype === "Yard" && outputtype==="Micrometer"){
         
        output = Number(input) * 914400; // set answer to the result box
    }
    else if(inputtype === "Yard" && outputtype==="Light Year"){
         
        output = Number(input)*9.665287622E-17; // set answer to the result box
    }
    else if(inputtype === "Yard" && outputtype==="Nanometer"){
         
        output = Number(input)*914400000; // set answer to the result box
    }



    else if(inputtype === "Light Year" && outputtype==="Meter"){
       
        output = Number(input) * 9460660000000000; // set answer to the result box
        
    }

    else if(inputtype === "Light Year" && outputtype==="Kilometer"){
       
        output = Number(input) *  9460660000000; // set answer to the result box
    }

    else if(inputtype === "Light Year" && outputtype==="Centimeter"){
       
        output = Number(input) * 946066000000000000; // set answer to the result box
    }

    else if(inputtype === "Light Year" && outputtype==="Inch"){
        
        output = Number(input) * 372466929133858300; // set answer to the result box
    }

    else if(inputtype === "Light Year" && outputtype==="Feet"){
         
        output = Number(input)* 31038910761154856; // set answer to the result box
    }
    else if(inputtype === "Light Year" && outputtype==="Mile"){
         
        output = Number(input) * 5878559666946; // set answer to the result box
    }
    else if(inputtype === "Light Year" && outputtype==="Yard"){
         
        output = Number(input) * 10346303587051618; // set answer to the result box
    }
    else if(inputtype === "Light Year" && outputtype==="Millimeter"){
         
        output = Number(input) * 9460660000000000000; // set answer to the result box
    }
    else if(inputtype === "Light Year" && outputtype==="Micrometer"){
         
        output = Number(input) * 9.46066E+21; // set answer to the result box
    }
    else if(inputtype === "Light Year" && outputtype==="Light Year"){
         
        output = Number(input); // set answer to the result box
    }
    else if(inputtype === "Light Year" && outputtype==="Nanometer"){
         
        output = Number(input)* 9.460659999E+24; // set answer to the result box
    }



    else if(inputtype === "Nanometer" && outputtype==="Meter"){
       
        output = Number(input) * 1.E-9 ; // set answer to the result box
        
    }

    else if(inputtype === "Nanometer" && outputtype==="Kilometer"){
       
        output = Number(input) * 1.E-12 ; // set answer to the result box
    }

    else if(inputtype === "Nanometer" && outputtype==="Centimeter"){
       
        output = Number(input) * 1.E-7; // set answer to the result box
    }

    else if(inputtype === "Nanometer" && outputtype==="Inch"){
        
        output = Number(input) * 3.937007874E-8; // set answer to the result box
    }

    else if(inputtype === "Nanometer" && outputtype==="Feet"){
         
        output = Number(input)* 3.280839895E-9; // set answer to the result box
    }
    else if(inputtype === "Nanometer" && outputtype==="Mile"){
         
        output = Number(input)* 6.213688756E-13; // set answer to the result box
    }
    else if(inputtype === "Nanometer" && outputtype==="Yard"){
         
        output = Number(input)* 1.093613298E-9; // set answer to the result box
    }
    else if(inputtype === "Nanometer" && outputtype==="Millimeter"){
         
        output = Number(input) * 0.000001; // set answer to the result box
    }
    else if(inputtype === "Nanometer" && outputtype==="Micrometer"){
         
        output = Number(input) * 0.001; // set answer to the result box
    }
    else if(inputtype === "Nanometer" && outputtype==="Light Year"){
         
        output = Number(input)* 1.057008707E-25; // set answer to the result box
    }
    else if(inputtype === "Nanometer" && outputtype==="Nanometer"){
         
        output = Number(input); // set answer to the result box
    }
    outputElement.textContent = output;

}