function myResult()
{
    var input=parseFloat(document.getElementById('input').value);
    var inputtype=document.getElementById('inputtype').value;
    var outputtype=document.getElementById('outputtype').value;
    var inputTypeValue,resultTypeValue;
    var outputElement = document.getElementById('output');
    
    var output;
    if(inputtype === "Kilogram" && outputtype=== "Kilogram"){
       
        output=input ; // set answer to the result box
        
    }

    else if(inputtype === "Kilogram" && outputtype==="Gram"){
       
        output = Number(input) * 1000; // set answer to the result box
    }

    else if(inputtype === "Kilogram" && outputtype==="Milligram"){
        
        output = Number(input) * 1000000;     
    }

    else if(inputtype === "Kilogram" && outputtype==="Metric Ton"){
        
        output = Number(input) * 0.001 ; // set answer to the result box
    }

    else if(inputtype === "Kilogram" && outputtype==="Long Ton"){
        
        output = Number(input) *0.0009842073 ; // set answer to the result box
    }
    else if(inputtype === "Kilogram" && outputtype==="Short Ton"){
        
        output = Number(input) *0.0011023122; // set answer to the result box
    }
    else if(inputtype === "Kilogram" && outputtype==="Pound"){
        
        output = Number(input) * 2.2046244202; // set answer to the result box
    }
    else if(inputtype === "Kilogram" && outputtype==="Ounce"){
        
        output= Number(input)* 35.273990723; // set answer to the result box
    }
    else if(inputtype === "Kilogram" && outputtype==="Carrat"){
        
        output = Number(input) *5000 ; // set answer to the result box
    }
    else if(inputtype === "Kilogram" && outputtype==="Atomic Mass Unit"){
        
        output = Number(input) * 6.022136652E+26; // set answer to the result box
    }
    



    else if(inputtype === "Gram" && outputtype==="Kilogram"){
        
        output = Number(input) * 0.001; // set answer to the result box
    }

    else if(inputtype === "Gram" && outputtype==="Gram"){
       
        output = Number(input)  ; // set answer to the result box
    }

    else if(inputtype === "Gram" && outputtype==="Milligram"){
        
        output = Number(input) *1000; // set answer to the result box
    }

    else if(inputtype === "Gram" && outputtype==="Metric Ton"){
         
        output = Number(input)* 0.000001 ;
          // set answer to the result box
    }

    else if(inputtype === "Gram" && outputtype==="Long Ton"){
       
        output = Number(input) * 9.842073304E-7;
          // set answer to the result box
    }
    else if(inputtype === "Gram" && outputtype==="Short Ton"){
       
        output = Number(input) *0.0000011023 ;
          // set answer to the result box
    }
    else if(inputtype === "Gram" && outputtype==="Pound"){
       
        output = Number(input) * 0.0022046244;
          // set answer to the result box
    }
    else if(inputtype === "Gram" && outputtype==="Ounce"){
       
        output = Number(input) * 0.0352739907;
          // set answer to the result box
    }
    else if(inputtype === "Gram" && outputtype ==="Carrat"){
       
        output = Number(input) * 5;
          // set answer to the result box
    }
    else if(inputtype === "Gram" && outputtype==="Atomic Mass Unit"){
       
        output = Number(input) * 6.022136652E+23;
          // set answer to the result box
    }
    


    else if(inputtype === "Milligram" && outputtype==="Kilogram"){
        
        output = Number(input) * 0.000001; // set answer to the result box
    }

    else if(inputtype === "Milligram" && outputtype==="Gram"){
       
        output = Number(input) *0.001; // set answer to the result box
    }

    else if(inputtype === "Milligram" && outputtype==="Milligram"){
        
        output = Number(input) ; // set answer to the result box
    }

    else if(inputtype === "Milligram" && outputtype==="Metric Ton"){
       
        output = Number(input)* 9.999999999E-10;
         // set answer to the result box
    }

    else if(inputtype === "Milligram" && outputtype==="Long Ton"){
        
        output = Number(input) * 9.842073304E-10 ; // set answer to the result box
    }
    else if(inputtype === "Milligram" && outputtype==="Short Ton"){
        
        output = Number(input) * 1.10231221E-9; // set answer to the result box
    }
    else if(inputtype === "Milligram" && outputtype==="Pound"){
        
        output = Number(input) * 0.0000022046; // set answer to the result box
    }
    else if(inputtype === "Milligram" && outputtype==="Ounce"){
        
        output = Number(input) * 0.000035274; // set answer to the result box
    }
    else if(inputtype === "Milligram" && outputtype==="Carrat"){
        
        output = Number(input) *0.005 ; // set answer to the result box
    }
    else if(inputtype === "Milligram" && outputtype==="Atomic Mass Unit"){
        
        output = Number(input) * 602213665200000000000; // set answer to the result box
    }



    else if(inputtype === "Metric Ton" && outputtype==="Kilogram"){
       
        output = Number(input) * 1000; // set answer to the result box
        
    }

    else if(inputtype === "Metric Ton" &&  outputtype==="Gram"){
       
        output = Number(input)* 1000000; // set answer to the result box
    }

    else if(inputtype === "Metric Ton" && outputtype==="Milligram"){
       
        output = Number(input) * 1000000000; // set answer to the result box
    }

    else if(inputtype === "Metric Ton" && outputtype==="Metric Ton"){
        
        output = Number(input); // set answer to the result box
    }

    else if(inputtype === "Metric Ton" && outputtype==="Long Ton"){
         
        output = Number(input) *0.9842073304 ; // set answer to the result box
    }
    else if(inputtype === "Metric Ton" && outputtype==="Short Ton"){
         
        output= Number(input)*1.1023122101 ; // set answer to the result box
    }
    else if(inputtype === "Metric Ton" && outputtype==="Pound"){
         
        output = Number(input)*2204.6244202; // set answer to the result box
    }
    else if(inputtype === "Metric Ton" && outputtype==="Carrat"){
         
        output = Number(input)*5000000; // set answer to the result box
    }
    else if(inputtype === "Metric Ton" && outputtype==="Atomic Mass Unit"){
         
        output = Number(input)*6.022136652E+29; // set answer to the result box
    }
    else if(inputtype === "Metric Ton" && outputtype==="Ounce"){
         
        output = Number(input)*35273.990723; // set answer to the result box
    }
    



    else if(inputtype === "Long Ton" && outputtype==="Kilogram"){
       
        output = Number(input) * 1016.04608; // set answer to the result box
    }

    else if(inputtype === "Long Ton" && outputtype==="Gram"){
       
        output = Number(input) * 1016046.08; // set answer to the result box
    }

    else if(inputtype === "Long Ton" && outputtype==="Milligram"){
       
        output = Number(input) *1016046080 ; // set answer to the result box
    }

    else if(inputtype === "Long Ton" && outputtype==="Metric Ton"){
        
        output = Number(input) * 1.01604608; // set answer to the result box
    }

    else if(inputtype === "Long Ton" && outputtype==="Long Ton"){
         
        output = Number(input); // set answer to the result box
    }
    else if(inputtype === "Long Ton" && outputtype==="Short Ton"){
         
        output = Number(input)*1.12; // set answer to the result box
    }
    else if(inputtype === "Long Ton" && outputtype==="Pound"){
         
        output = Number(input)*2240; // set answer to the result box
    }
    else if(inputtype === "Long Ton" && outputtype==="Ounce"){
         
        output = Number(input) * 35840; // set answer to the result box
    }
    else if(inputtype === "Long Ton" && outputtype==="Carrat"){
         
        output = Number(input)* 5080230.4; // set answer to the result box
    }
    else if(inputtype === "Long Ton" && outputtype==="Atomic Mass Unit"){
         
        output = Number(input) * 6.118768338E+29; // set answer to the result box
    }
    



    else if(inputtype === "Short Ton" && outputtype==="Kilogram"){
       
        output= Number(input) * 907.184; // set answer to the result box
        
    }

    else if(inputtype === "Short Ton" && outputtype==="Gram"){
       
        output = Number(input)*907184; // set answer to the result box
    }

    else if(inputtype === "Short Ton" && outputtype ==="Milligram"){
       
        output = Number(input) *907184000; // set answer to the result box
    }

    else if(inputtype === "Short Ton" && outputtype ==="Metric Ton"){
        
        output = Number(input) * 0.907184; // set answer to the result box
    }

    else if(inputtype === "Short Ton" && outputtype ==="Long Ton"){
         
        output = Number(input)*0.8928571429; // set answer to the result box
    }
    else if(inputtype === "Short Ton" && outputtype==="Short Ton"){
         
        output = Number(input); // set answer to the result box
    }
    else if(inputtype === "Short Ton" && outputtype==="Pound"){
         
        output = Number(input)*2000; // set answer to the result box
    }
    else if(inputtype === "Short Ton" && outputtype==="Ounce"){
         
        output = Number(input) * 32000; // set answer to the result box
    }
    else if(inputtype === "Short Ton" && outputtype==="Carrat"){
         
        output = Number(input)*4535920; // set answer to the result box
    }
    else if(inputtype === "Short Ton" && outputtype==="Atomic Mass Unit"){
         
        output = Number(input)*5.463186016E+29; // set answer to the result box
    }




    else if(inputtype === "Pound" && outputtype==="Kilogram"){
       
        output = Number(input) * 0.453592; // set answer to the result box
        
    }

    else if(inputtype === "Pound" && outputtype==="Gram"){
       
        output = Number(input)*453.592; // set answer to the result box
    }

    else if(inputtype === "Pound" && outputtype==="Milligram"){
       
        output = Number(input) *453592; // set answer to the result box
    }

    else if(inputtype === "Pound" && outputtype==="Metric Ton"){
        
        output = Number(input) *0.000453592; // set answer to the result box
    }

    else if(inputtype === "Pound" && outputtype==="Long Ton"){
         
        output = Number(input)*0.0004464286; // set answer to the result box
    }
    else if(inputtype === "Pound" && outputtype==="Short Ton"){
         
        output = Number(input)* 0.0005; // set answer to the result box
    }
    else if(inputtype === "Pound" && outputtype==="Pound"){
         
        output = Number(input); // set answer to the result box
    }
    else if(inputtype === "Pound" && outputtype==="Ounce"){
         
        output = Number(input) * 16; // set answer to the result box
    }
    else if(inputtype === "Pound" && outputtype==="Carrat"){
         
        output = Number(input)*2267.96; // set answer to the result box
    }
    else if(inputtype === "Pound" && outputtype==="Atomic Mass Unit"){
         
        output = Number(input)*2.731593008E+26; // set answer to the result box
    }
    



    else if(inputtype === "Ounce" && outputtype==="Kilogram"){
       
        output= Number(input) * 0.0283495; // set answer to the result box
      
    }

    else if(inputtype === "Ounce" && outputtype==="Gram"){
       
        output = Number(input) * 28.3495 ; // set answer to the result box
    }

    else if(inputtype === "Ounce" && outputtype==="Milligram"){
       
        output = Number(input) *28349.5 ; // set answer to the result box
    }

    else if(inputtype === "Ounce" && outputtype==="Metric Ton"){
        
        output = Number(input) * 0.0000283495; // set answer to the result box
    }

    else if(inputtype === "Ounce" && outputtype==="Long Ton"){
         
        output = Number(input)*0.0000279018 ; // set answer to the result box
    }
    else if(inputtype === "Ounce" && outputtype==="Short Ton"){
         
        output = Number(input)*0.00003125 ; // set answer to the result box
    }
    else if(inputtype === "Ounce" && outputtype==="Pound"){
         
        output = Number(input)*0.0625; // set answer to the result box
    }
    else if(inputtype === "Ounce" && outputtype==="Ounce"){
         
        output = Number(input); // set answer to the result box
    }
    else if(inputtype === "Ounce" && outputtype==="Carrat"){
         
        output = Number(input) *141.7475; // set answer to the result box
    }
    else if(inputtype === "Ounce" && outputtype==="Atomic Mass Unit"){
         
        output = Number(input)*1.70724563E+25; // set answer to the result box
    }
    
    


    else if(inputtype === "Carrat" && outputtype==="Kilogram"){
       
        output = Number(input) * 0.0002; // set answer to the result box
        
    }

    else if(inputtype === "Carrat" && outputtype==="Gram"){
       
        output = Number(input) *0.2 ; // set answer to the result box
    }

    else if(inputtype === "Carrat" && outputtype==="Milligram"){
       
        output = Number(input) *200 ; // set answer to the result box
    }

    else if(inputtype === "Carrat" && outputtype==="Metric Ton"){
        
        output = Number(input) * 2.E-7; // set answer to the result box
    }

    else if(inputtype === "Carrat" && outputtype==="Long Ton"){
         
        output = Number(input)*1.96841466E-7 ; // set answer to the result box
    }
    else if(inputtype === "Carrat" && outputtype==="Short Ton"){
         
        output = Number(input) *2.20462442E-7 ; // set answer to the result box
    }
    else if(inputtype === "Carrat" && outputtype==="Pound"){
         
        output = Number(input)*0.0004409249 ; // set answer to the result box
    }
    else if(inputtype === "Carrat" && outputtype==="Ounce"){
         
        output = Number(input) *0.0070547981 ; // set answer to the result box
    }
    else if(inputtype === "Carrat" && outputtype==="Carrat"){
         
        output = Number(input) ; // set answer to the result box
    }
    else if(inputtype === "Carrat" && outputtype==="Atomic Mass Unit"){
         
        output = Number(input)*1.20442733E+23; // set answer to the result box
    }
    



    else if(inputtype === "Atomic Mass Unit" && outputtype==="Kilogram"){
       
        output = Number(input) *1.660540199E-27 ; // set answer to the result box
       
    }

    else if(inputtype === "Atomic Mass Unit" && outputtype==="Gram"){
       
        output = Number(input) *1.660540199E-24  ; // set answer to the result box
    }

    else if(inputtype === "Atomic Mass Unit" && outputtype==="Milligram"){
       
        output = Number(input) *1.660540199E-21 ; // set answer to the result box
    }

    else if(inputtype === "Atomic Mass Unit" && outputtype==="Metric Ton"){
        
        output = Number(input) *1.660540199E-30 ; // set answer to the result box
    }

    else if(inputtype === "Atomic Mass Unit" && outputtype==="Long Ton"){
         
        output = Number(input)*1.634315837E-30 ; // set answer to the result box
    }
    else if(inputtype === "Atomic Mass Unit" && outputtype==="Short Ton"){
         
        output = Number(input) * 1.830433737E-30; // set answer to the result box
    }
    else if(inputtype === "Atomic Mass Unit" && outputtype==="Pound"){
         
        output = Number(input) * 3.660867475E-27; // set answer to the result box
    }
    else if(inputtype === "Atomic Mass Unit" && outputtype==="Ounce"){
         
        output = Number(input) * 5.85738796E-26; // set answer to the result box
    }
    else if(inputtype === "Atomic Mass Unit" && outputtype==="Carrat"){
         
        output = Number(input) *8.302700999E-24 ; // set answer to the result box
    }
    else if(inputtype === "Atomic Mass Unit" && outputtype==="Atomic Mass Unit"){
         
        output = Number(input); // set answer to the result box
    }
    outputElement.textContent = output;

}