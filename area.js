function myResult()
{
    var input=parseFloat(document.getElementById('input').value);
    var inputtype=document.getElementById('inputtype').value;
    var outputtype=document.getElementById('outputtype').value;
    var inputTypeValue,resultTypeValue;
    var outputElement = document.getElementById('output');

    var output;
    if(inputtype === 'Square Meter' && outputtype=== 'Square Centimeter'){
       
        output=input * 10000;   
        
    }

    else if(inputtype === "Square Meter" && outputtype==="Square Kilometer"){
       
        output = Number(input) * 0.000001;   
    }

    else if(inputtype === "Square Meter" && outputtype==="Square Meter"){
        
        output = input ;       
    }

    else if(inputtype === "Square Meter" && outputtype==="Square Inch"){
        
        output = Number(input) * 1550.0031;   
    }

    else if(inputtype === "Square Meter" && outputtype==="Square Feet"){
        
        output = Number(input) * 10.763910417;   
    }
    else if(inputtype === "Square Meter" && outputtype==="Square Millimeter"){
        
        output = Number(input) /0.0000010000;   
    }
    else if(inputtype === "Square Meter" && outputtype==="Square Micrometer"){
        
        output = Number(input) / 0.0000000000010000;   
    }
    else if(inputtype === "Square Meter" && outputtype==="Hectare"){
        
        output= Number(input) /10000;   
    }
    else if(inputtype === "Square Meter" && outputtype==="Square Mile"){
        
        output = Number(input) * 3.861018768E-7;   
    }
    else if(inputtype === "Square Meter" && outputtype==="Square Yard"){
        
        output = Number(input) * 1.1959900463;   
    }
    else if(inputtype === "Square Meter" && outputtype==="Acre"){
        
        output = Number(input) * 0.0002471054;   
    }





    else if(inputtype === "Square Centimeter" && outputtype==="Square Meter"){
        
        output = Number(input) * 0.0001;   
    }

    else if(inputtype === "Square Centimeter" && outputtype==="Square Kilometer"){
       
        output = Number(input) * 0.0000000001;   
    }

    else if(inputtype === "Square Centimeter" && outputtype==="Square Centimeter"){
        
        output = Number(input);   
    }

    else if(inputtype === "Square Centimeter" && outputtype==="Square Inch"){
         
        output = Number(input)*0.15500031;
            
    }

    else if(inputtype === "Square Centimeter" && outputtype==="Square Feet"){
       
        output = Number(input) * 0.001076391;
            
    }
    else if(inputtype === "Square Centimeter" && outputtype==="Square Yard"){
       
        output = Number(input) * 0.000119599;
            
    }
    else if(inputtype === "Square Centimeter" && outputtype==="Square Millimeter"){
       
        output = Number(input) *100;
            
    }
    else if(inputtype === "Square Centimeter" && outputtype==="Square Micrometer"){
       
        output = Number(input) * 100000000;
            
    }
    else if(inputtype === "Square Centimeter" && outputtype ==="Hectare"){
       
        output = Number(input) / 100000000;
            
    }
    else if(inputtype === "Square Centimeter" && outputtype==="Square Mile"){
       
        output = Number(input) * 3.861018768E-11;
            
    }
    else if(inputtype === "Square Centimeter" && outputtype==="Acre"){
       
        output = Number(input) * 2.471053814E-8;
            
    }




    else if(inputtype === "Square Kilometer" && outputtype==="Square Meter"){
        
        output = Number(input) * 1000000;   
    }

    else if(inputtype === "Square Kilometer" && outputtype==="Square Kilometer"){
       
        output = Number(input);   
    }

    else if(inputtype === "Square Kilometer" && outputtype==="Square Centimeter"){
        
        output = Number(input) * 10000000000;   
    }

    else if(inputtype === "Square Kilometer" && outputtype==="Square Inch"){
       
        output = Number(input) * 1550003100;
            
    }

    else if(inputtype === "Square Kilometer" && outputtype==="Square Feet"){
        
        output = Number(input) * 10763910.417;   
    }
    else if(inputtype === "Square Kilometer" && outputtype==="Square Yard"){
        
        output = Number(input) * 1195990.0463;   
    }
    else if(inputtype === "Square Kilometer" && outputtype==="Square Mile"){
        
        output = Number(input) * 0.3861018768;   
    }
    else if(inputtype === "Square Kilometer" && outputtype==="Hectare"){
        
        output = Number(input) * 100;   
    }
    else if(inputtype === "Square Kilometer" && outputtype==="Square Millimeter"){
        
        output = Number(input) * 1000000000000;   
    }
    else if(inputtype === "Square Kilometer" && outputtype==="Square Micrometer"){
        
        output = Number(input) * 1000000000000000000;   
    }
    else if(inputtype === "Square Kilometer" && outputtype ==="Acre"){
        
        output = Number(input) * 247.10538147;   
    }




    else if(inputtype === "Square Inch" && outputtype==="Square Meter"){
       
        output = Number(input) * 0.00064516;   
        
    }

    else if(inputtype === "Square Inch" &&  outputtype==="Square Kilometer"){
       
        output = Number(input)/1550003100.0062;   
    }

    else if(inputtype === "Square Inch" && outputtype==="Square Centimeter"){
       
        output = Number(input) * 6.4516;   
    }

    else if(inputtype === "Square Inch" && outputtype==="Square Inch"){
        
        output = Number(input);   
    }

    else if(inputtype === "Square Inch" && outputtype==="Square Feet"){
         
        output = Number(input)*0.0069444444;   
    }
    else if(inputtype === "Square Inch" && outputtype==="Square Mile"){
         
        output= Number(input)* 2.490974868E-10;   
    }
    else if(inputtype === "Square Inch" && outputtype==="Square Yard"){
         
        output = Number(input)*0.0007716049;   
    }
    else if(inputtype === "Square Inch" && outputtype==="Square Millimeter"){
         
        output = Number(input)*645.16;   
    }
    else if(inputtype === "Square Inch" && outputtype==="Square Micrometer"){
         
        output = Number(input)*645160000;   
    }
    else if(inputtype === "Square Inch" && outputtype==="Hectare"){
         
        output = Number(input)/15500000;   
    }
    else if(inputtype === "Square Inch" && outputtype==="Acre"){
         
        output = Number(input)*1.594225079E-7;   
    }




    else if(inputtype === "Square Feet" && outputtype==="Square Meter"){
       
        output = Number(input) * 0.09290304;   
    }

    else if(inputtype === "Square Feet" && outputtype==="Square Kilometer"){
       
        output = Number(input) * 9.290304E-8;   
    }

    else if(inputtype === "Square Feet" && outputtype==="Square Centimeter"){
       
        output = Number(input) * 929.0304;   
    }

    else if(inputtype === "Square Feet" && outputtype==="Square Inch"){
        
        output = Number(input) * 144;   
    }

    else if(inputtype === "Square Feet" && outputtype==="Square Feet"){
         
        output = Number(input);   
    }
    else if(inputtype === "Square Feet" && outputtype==="Square Mile"){
         
        output = Number(input)*3.58700381E-8;   
    }
    else if(inputtype === "Square Feet" && outputtype==="Square Yard"){
         
        output = Number(input)*0.1111111111;   
    }
    else if(inputtype === "Square Feet" && outputtype==="Square Millimeter"){
         
        output = Number(input) * 92903.04;   
    }
    else if(inputtype === "Square Feet" && outputtype==="Square Micrometer"){
         
        output = Number(input)*92903040000;   
    }
    else if(inputtype === "Square Feet" && outputtype==="Hectare"){
         
        output = Number(input) * 0.0000092903;   
    }
    else if(inputtype === "Square Feet" && outputtype==="Acre"){
         
        output = Number(input) * 0.0000229568;   
    }




    else if(inputtype === "Square Millimeter" && outputtype==="Square Meter"){
       
        output= Number(input) * 0.000001;   
     
    }

    else if(inputtype === "Square Millimeter" && outputtype==="Square Kilometer"){
       
        output = Number(input)*0.000000000001;   
    }

    else if(inputtype === "Square Millimeter" && outputtype ==="Square Centimeter"){
       
        output = Number(input) * 0.01;   
    }

    else if(inputtype === "Square Millimeter" && outputtype ==="Square Inch"){
        
        output = Number(input) * 0.0015500031;   
    }

    else if(inputtype === "Square Millimeter" && outputtype ==="Square Feet"){
         
        output = Number(input)*0.0000107639;   
    }
    else if(inputtype === "Square Millimeter" && outputtype==="Square Mile"){
         
        output = Number(input)* 3.861018768E-13;   
    }
    else if(inputtype === "Square Millimeter" && outputtype==="Square Yard"){
         
        output = Number(input)*0.000001196;   
    }
    else if(inputtype === "Square Millimeter" && outputtype==="Square Millimeter"){
         
        output = Number(input);   
    }
    else if(inputtype === "Square Millimeter" && outputtype==="Square Micrometer"){
         
        output = Number(input)*1000000;   
    }
    else if(inputtype === "Square Millimeter" && outputtype==="Hectare"){
         
        output = Number(input)*9.999999999E-11;   
    }
    else if(inputtype === "Square Millimeter" && outputtype==="Acre"){
         
        output = Number(input)*2.471053814E-10;   
    }



    else if(inputtype === "Square Micrometer" && outputtype==="Square Meter"){
       
        output = Number(input) * 0.000000000001;   
        
    }

    else if(inputtype === "Square Micrometer" && outputtype==="Square Kilometer"){
       
        output = Number(input)*1.E-18;   
    }

    else if(inputtype === "Square Micrometer" && outputtype==="Square Centimeter"){
       
        output = Number(input) *9.999999999E-9;   
    }

    else if(inputtype === "Square Micrometer" && outputtype==="Square Inch"){
        
        output = Number(input) *0.0000000015500031;   
    }

    else if(inputtype === "Square Micrometer" && outputtype==="Square Feet"){
         
        output = Number(input)*0.0000000000107639104;   
    }
    else if(inputtype === "Square Micrometer" && outputtype==="Square Mile"){
         
        output = Number(input)* 0.000000000000000000386101876;   
    }
    else if(inputtype === "Square Micrometer" && outputtype==="Square Yard"){
         
        output = Number(input)*0.00000000000119599004;   
    }
    else if(inputtype === "Square Micrometer" && outputtype==="Square Millimeter"){
         
        output = Number(input) * 0.000001;   
    }
    else if(inputtype === "Square Micrometer" && outputtype==="Square Micrometer"){
         
        output = Number(input);   
    }
    else if(inputtype === "Square Micrometer" && outputtype==="Hectare"){
         
        output = Number(input)*0.0000000000000001;   
    }
    else if(inputtype === "Square Micrometer" && outputtype==="Acre"){
         
        output = Number(input)*0.0000000000000002471053814;   
    }




    else if(inputtype === "Square Mile" && outputtype==="Square Meter"){
       
        output = Number(input) * 2589990;   
        
    }

    else if(inputtype === "Square Mile" && outputtype==="Square Kilometer"){
       
        output = Number(input) *  2.58999;   
    }

    else if(inputtype === "Square Mile" && outputtype==="Square Centimeter"){
       
        output = Number(input) * 25899900000;   
    }

    else if(inputtype === "Square Mile" && outputtype==="Square Inch"){
        
        output = Number(input) * 4014492529;   
    }

    else if(inputtype === "Square Mile" && outputtype==="Square Feet"){
         
        output = Number(input)* 27878420.34;   
    }
    else if(inputtype === "Square Mile" && outputtype==="Square Mile"){
         
        output = Number(input);   
    }
    else if(inputtype === "Square Mile" && outputtype==="Square Yard"){
         
        output = Number(input)*3097602.26;   
    }
    else if(inputtype === "Square Mile" && outputtype==="Square Millimeter"){
         
        output = Number(input) * 2589990000000;   
    }
    else if(inputtype === "Square Mile" && outputtype==="Square Micrometer"){
         
        output = Number(input) * 2589990000000000;   
    }
    else if(inputtype === "Square Mile" && outputtype==="Hectare"){
         
        output = Number(input)*258.999;   
    }
    else if(inputtype === "Square Mile" && outputtype==="Acre"){
         
        output = Number(input)*640.00046695;   
    }
    


    else if(inputtype === "Square Yard" && outputtype==="Square Meter"){
       
        output = Number(input) * 0.83612736; 
    }

    else if(inputtype === "Square Yard" && outputtype==="Square Kilometer"){
       
        output = Number(input) *  0.00000083612736;   
    }

    else if(inputtype === "Square Yard" && outputtype==="Square Centimeter"){
       
        output = Number(input) * 8361.2736;   
    }

    else if(inputtype === "Square Yard" && outputtype==="Square Inch"){
        
        output = Number(input) * 1296;   
    }

    else if(inputtype === "Square Yard" && outputtype==="Square Feet"){
         
        output = Number(input)* 9;   
    }
    else if(inputtype === "Square Yard" && outputtype==="Square Mile"){
         
        output = Number(input) * 0.0000003228303429;   
    }
    else if(inputtype === "Square Yard" && outputtype==="Square Yard"){
         
        output = Number(input);   
    }
    else if(inputtype === "Square Yard" && outputtype==="Square Millimeter"){
         
        output = Number(input) * 836127.36;   
    }
    else if(inputtype === "Square Yard" && outputtype==="Square Micrometer"){
         
        output = Number(input) * 836127360000;   
    }
    else if(inputtype === "Square Yard" && outputtype==="Hectare"){
         
        output = Number(input)*0.0000836127;   
    }
    else if(inputtype === "Square Yard" && outputtype==="Acre"){
         
        output = Number(input)*0.0002066116;   
    }



    else if(inputtype === "Hectare" && outputtype==="Square Meter"){
       
        output = Number(input) * 10000;   
        
    }

    else if(inputtype === "Hectare" && outputtype==="Square Kilometer"){
       
        output = Number(input) *  0.01;   
    }

    else if(inputtype === "Hectare" && outputtype==="Square Centimeter"){
       
        output = Number(input) * 100000000;   
    }

    else if(inputtype === "Hectare" && outputtype==="Square Inch"){
        
        output = Number(input) * 15500031;   
    }

    else if(inputtype === "Hectare" && outputtype==="Square Feet"){
         
        output = Number(input)* 107639.10417;   
    }
    else if(inputtype === "Hectare" && outputtype==="Square Mile"){
         
        output = Number(input) * 0.0038610188;   
    }
    else if(inputtype === "Hectare" && outputtype==="Square Yard"){
         
        output = Number(input) * 11959.900463;   
    }
    else if(inputtype === "Hectare" && outputtype==="Square Millimeter"){
         
        output = Number(input) * 10000000000;   
    }
    else if(inputtype === "Hectare" && outputtype==="Square Micrometer"){
         
        output = Number(input) * 10000000000000000;   
    }
    else if(inputtype === "Hectare" && outputtype==="Hectare"){
         
        output = Number(input);   
    }
    else if(inputtype === "Hectare" && outputtype==="Acre"){
         
        output = Number(input)* 2.4710538147;   
    }



    else if(inputtype === "Acre" && outputtype==="Square Meter"){
       
        output = Number(input) * 4046.8564224 ;   
        
    }

    else if(inputtype === "Acre" && outputtype==="Square Kilometer"){
       
        output = Number(input) * 0.0040468564 ;   
    }

    else if(inputtype === "Acre" && outputtype==="Square Centimeter"){
       
        output = Number(input) * 40468564.224;   
    }

    else if(inputtype === "Acre" && outputtype==="Square Inch"){
        
        output = Number(input) * 6272640;   
    }

    else if(inputtype === "Acre" && outputtype==="Square Feet"){
         
        output = Number(input)* 43560;   
    }
    else if(inputtype === "Acre" && outputtype==="Square Mile"){
         
        output = Number(input)* 0.0015624989;   
    }
    else if(inputtype === "Acre" && outputtype==="Square Yard"){
         
        output = Number(input)* 4840;   
    }
    else if(inputtype === "Acre" && outputtype==="Square Millimeter"){
         
        output = Number(input) * 4046856422.4;   
    }
    else if(inputtype === "Acre" && outputtype==="Square Micrometer"){
         
        output = Number(input) * 4046856422400000;   
    }
    else if(inputtype === "Acre" && outputtype==="Hectare"){
         
        output = Number(input)* 0.4046856422;   
    }
    else if(inputtype === "Acre" && outputtype==="Acre"){
         
        output = Number(input);   
    }
    outputElement.textContent = output;

}