function myResult()
{
    var input=parseFloat(document.getElementById('input').value);
    var inputtype=document.getElementById('inputtype').value;
    var outputtype=document.getElementById('outputtype').value;
    var inputTypeValue,resultTypeValue;
    var outputElement = document.getElementById('output');

    var output;
    if(inputtype === 'Second' && outputtype=== 'Second'){
       
        output=input ; // set answer to the result box
        
    }

    else if(inputtype === "Second" && outputtype==="Millisecond"){
       
        output = Number(input) * 1000; // set answer to the result box
    }

    else if(inputtype === "Second" && outputtype==="Microsecond"){
        
        output = input *1000000; // set answer to the result box    
    }

    else if(inputtype === "Second" && outputtype==="Nanosecond"){
        
        output = Number(input) * 1000000000; // set answer to the result box
    }

    else if(inputtype === "Second" && outputtype==="Picosecond"){
        
        output = Number(input) * 1000000000000; // set answer to the result box
    }
    else if(inputtype === "Second" && outputtype==="Minute"){
        
        output = Number(input) * 0.0166666667; // set answer to the result box
    }
    else if(inputtype === "Second" && outputtype==="Week"){
        
        output = Number(input) * 0.0000016534; // set answer to the result box
    }
    else if(inputtype === "Second" && outputtype==="Hour"){
        
        output= Number(input) * 0.0002777778; // set answer to the result box
    }
    else if(inputtype === "Second" && outputtype==="Day"){
        
        output = Number(input) * 0.0000115741; // set answer to the result box
    }
    else if(inputtype === "Second" && outputtype==="Year"){
        
        output = Number(input) * 3.168808781E-8; // set answer to the result box
    }
    else if(inputtype === "Second" && outputtype==="Month"){
        
        output = Number(input) * 3.802570537E-7; // set answer to the result box
    }


    
    else if(inputtype === 'Millisecond' && outputtype=== 'Millisecond'){
       
        output=input ; // set answer to the result box
        
    }

    else if(inputtype === "Millisecond" && outputtype==="Microsecond"){
       
        output = Number(input) * 1000; // set answer to the result box
    }

    else if(inputtype === "Millisecond" && outputtype==="Nanosecond"){
        
        output = input * 1000000 ; // set answer to the result box    
    }

    else if(inputtype === "Millisecond" && outputtype==="Picosecond"){
        
        output = Number(input) * 1000000000; // set answer to the result box
    }

    else if(inputtype === "Millisecond" && outputtype==="Minute"){
        
        output = Number(input) * 0.0000166667; // set answer to the result box
    }
    else if(inputtype === "Millisecond" && outputtype==="Hour"){
        
        output = Number(input) * 2.777777777E-7; // set answer to the result box
    }
    else if(inputtype === "Millisecond" && outputtype==="Day"){
        
        output = Number(input) * 1.157407407E-8; // set answer to the result box
    }
    else if(inputtype === "Millisecond" && outputtype==="Week"){
        
        output= Number(input) * 1.653439153E-9; // set answer to the result box
    }
    else if(inputtype === "Millisecond" && outputtype==="Month"){
        
        output = Number(input) * 3.802570537E-10; // set answer to the result box
    }
    else if(inputtype === "Millisecond" && outputtype==="Year"){
        
        output = Number(input) * 3.168808781E-11; // set answer to the result box
    }
    else if(inputtype === "Millisecond" && outputtype==="Second"){
        
        output = Number(input) * 0.001; // set answer to the result box
    }

 
    
    else if(inputtype === 'Microsecond' && outputtype=== 'Microsecond'){
       
        output=input; // set answer to the result box
        
    }

    else if(inputtype === "Microsecond" && outputtype==="Second"){
       
        output = Number(input) * 0.000001; // set answer to the result box
    }

    else if(inputtype === "Microsecond" && outputtype==="Nanosecond"){
        
        output = input *1000; // set answer to the result box    
    }

    else if(inputtype === "Microsecond" && outputtype==="Picosecond"){
        
        output = Number(input) * 1000000; // set answer to the result box
    }

    else if(inputtype === "Microsecond" && outputtype==="Minute"){
        
        output = Number(input) * 1.666666666E-8; // set answer to the result box
    }
    else if(inputtype === "Microsecond" && outputtype==="Hour"){
        
        output = Number(input) * 2.777777777E-10; // set answer to the result box
    }
    else if(inputtype === "Microsecond" && outputtype==="Day"){
        
        output = Number(input) * 1.157407407E-11; // set answer to the result box
    }
    else if(inputtype === "Microsecond" && outputtype==="Week"){
        
        output= Number(input) * 1.653439153E-12; // set answer to the result box
    }
    else if(inputtype === "Microsecond" && outputtype==="Month"){
        
        output = Number(input) * 3.802570537E-13; // set answer to the result box
    }
    else if(inputtype === "Microsecond" && outputtype==="Year"){
        
        output = Number(input) * 3.168808781E-14; // set answer to the result box
    }
    else if(inputtype === "Microsecond" && outputtype==="Millisecond"){
        
        output = Number(input) * 0.001; // set answer to the result box
    }



    else if(inputtype === 'Nanosecond' && outputtype=== 'Nanosecond'){
       
        output=input ; // set answer to the result box
        
    }

    else if(inputtype === "Nanosecond" && outputtype==="Second"){
       
        output = Number(input) * 1.E-9; // set answer to the result box
    }

    else if(inputtype === "Nanosecond" && outputtype==="Microsecond"){
        
        output = input *0.001; // set answer to the result box    
    }

    else if(inputtype === "Nanosecond" && outputtype==="Picosecond"){
        
        output = Number(input) * 1000; // set answer to the result box
    }

    else if(inputtype === "Nanosecond" && outputtype==="Minute"){
        
        output = Number(input) * 1.666666666E-11; // set answer to the result box
    }
    else if(inputtype === "Nanosecond" && outputtype==="Hour"){
        
        output = Number(input) * 2.777777777E-13; // set answer to the result box
    }
    else if(inputtype === "Nanosecond" && outputtype==="Day"){
        
        output = Number(input) * 1.157407407E-14; // set answer to the result box
    }
    else if(inputtype === "Nanosecond" && outputtype==="Week"){
        
        output= Number(input) * 1.653439153E-15; // set answer to the result box
    }
    else if(inputtype === "Nanosecond" && outputtype==="Month"){
        
        output = Number(input) * 3.802570537E-16; // set answer to the result box
    }
    else if(inputtype === "Nanosecond" && outputtype==="Year"){
        
        output = Number(input) * 3.168808781E-17; // set answer to the result box
    }
    else if(inputtype === "Nanosecond" && outputtype==="Millisecond"){
        
        output = Number(input) * 0.000001; // set answer to the result box
    }



    else if(inputtype === 'Picosecond' && outputtype=== 'Nanosecond'){
       
        output=input * 0.001; // set answer to the result box
        
    }
    
    else if(inputtype === "Picosecond" && outputtype==="Second"){
       
        output = Number(input) * 1.E-12; // set answer to the result box
    }
    
    else if(inputtype === "Picosecond" && outputtype==="Microsecond"){
        
        output = input *0.000001; // set answer to the result box    
    }
    
    else if(inputtype === "Picosecond" && outputtype==="Picosecond"){
        
        output = Number(input); // set answer to the result box
    }
    
    else if(inputtype === "Picosecond" && outputtype==="Minute"){
        
        output = Number(input) * 1.666666666E-14; // set answer to the result box
    }
    else if(inputtype === "Picosecond" && outputtype==="Hour"){
        
        output = Number(input) * 2.777777777E-16; // set answer to the result box
    }
    else if(inputtype === "Picosecond" && outputtype==="Day"){
        
        output = Number(input) * 1.157407407E-17; // set answer to the result box
    }
    else if(inputtype === "Picosecond" && outputtype==="Week"){
        
        output= Number(input) * 1.653439153E-18; // set answer to the result box
    }
    else if(inputtype === "Picosecond" && outputtype==="Month"){
        
        output = Number(input) * 3.802570537E-19; // set answer to the result box
    }
    else if(inputtype === "Picosecond" && outputtype==="Year"){
        
        output = Number(input) * 3.168808781E-20; // set answer to the result box
    }
    else if(inputtype === "Picosecond" && outputtype==="Millisecond"){
        
        output = Number(input) * 1.E-9; // set answer to the result box
    }



    else if(inputtype === 'Minute' && outputtype=== 'Minute'){
       
        output=input; // set answer to the result box
        
    }
    
    else if(inputtype === "Minute" && outputtype==="Second"){
       
        output = Number(input) * 60; // set answer to the result box
    }
    
    else if(inputtype === "Minute" && outputtype==="Microsecond"){
        
        output = input * 60000000; // set answer to the result box    
    }
    
    else if(inputtype === "Minute" && outputtype==="Picosecond"){
        
        output = Number(input) * 60000000000000; // set answer to the result box
    }
    
    else if(inputtype === "Minute" && outputtype==="Month"){
        
        output = Number(input) * 0.0000228154; // set answer to the result box
    }
    else if(inputtype === "Minute" && outputtype==="Hour"){
        
        output = Number(input) * 0.0166666667; // set answer to the result box
    }
    else if(inputtype === "Minute" && outputtype==="Day"){
        
        output = Number(input) * 0.0006944444; // set answer to the result box
    }
    else if(inputtype === "Minute" && outputtype==="Week"){
        
        output= Number(input) * 0.0000992063; // set answer to the result box
    }
    else if(inputtype === "Minute" && outputtype==="Nanosecond"){
        
        output = Number(input) * 60000000000; // set answer to the result box
    }
    else if(inputtype === "Minute" && outputtype==="Year"){
        
        output = Number(input) * 0.0000019013; // set answer to the result box
    }
    else if(inputtype === "Minute" && outputtype==="Millisecond"){
        
        output = Number(input) * 60000; // set answer to the result box
    }



    else if(inputtype === 'Hour' && outputtype=== 'Hour'){
       
        output=input; // set answer to the result box
        
    }
    
    else if(inputtype === "Hour" && outputtype==="Second"){
       
        output = Number(input) * 3600; // set answer to the result box
    }
    
    else if(inputtype === "Hour" && outputtype==="Microsecond"){
        
        output = input * 3600000000; // set answer to the result box    
    }
    
    else if(inputtype === "Hour" && outputtype==="Picosecond"){
        
        output = Number(input) * 3600000000000000; // set answer to the result box
    }
    
    else if(inputtype === "Hour" && outputtype==="Month"){
        
        output = Number(input) * 0.0013689254; // set answer to the result box
    }
    else if(inputtype === "Hour" && outputtype==="Minute"){
        
        output = Number(input) * 60; // set answer to the result box
    }
    else if(inputtype === "Hour" && outputtype==="Day"){
        
        output = Number(input) * 0.0416666667; // set answer to the result box
    }
    else if(inputtype === "Hour" && outputtype==="Week"){
        
        output= Number(input) * 0.005952381; // set answer to the result box
    }
    else if(inputtype === "Hour" && outputtype==="Nanosecond"){
        
        output = Number(input) * 3600000000000; // set answer to the result box
    }
    else if(inputtype === "Hour" && outputtype==="Year"){
        
        output = Number(input) * 0.0001140771; // set answer to the result box
    }
    else if(inputtype === "Hour" && outputtype==="Millisecond"){
        
        output = Number(input) * 3600000; // set answer to the result box
    }



    else if(inputtype === 'Day' && outputtype=== 'Day'){
       
        output=input; // set answer to the result box
        
    }
    
    else if(inputtype === "Day" && outputtype==="Second"){
       
        output = Number(input) * 86400; // set answer to the result box
    }
    
    else if(inputtype === "Day" && outputtype==="Microsecond"){
        
        output = input * 86400000000; // set answer to the result box    
    }
    
    else if(inputtype === "Day" && outputtype==="Picosecond"){
        
        output = Number(input) * 86400000000000000; // set answer to the result box
    }
    
    else if(inputtype === "Day" && outputtype==="Month"){
        
        output = Number(input) * 0.0328542094; // set answer to the result box
    }
    else if(inputtype === "Day" && outputtype==="Minute"){
        
        output = Number(input) * 1440; // set answer to the result box
    }
    else if(inputtype === "Day" && outputtype==="Hour"){
        
        output = Number(input) * 24; // set answer to the result box
    }
    else if(inputtype === "Day" && outputtype==="Week"){
        
        output= Number(input) * 0.1428571429; // set answer to the result box
    }
    else if(inputtype === "Day" && outputtype==="Nanosecond"){
        
        output = Number(input) * 86400000000000; // set answer to the result box
    }
    else if(inputtype === "Day" && outputtype==="Year"){
        
        output = Number(input) * 0.0027378508; // set answer to the result box
    }
    else if(inputtype === "Day" && outputtype==="Millisecond"){
        
        output = Number(input) * 86400000; // set answer to the result box
    }



    else if(inputtype === 'Week' && outputtype=== 'Week'){
       
        output=input; // set answer to the result box
        
    }
    
    else if(inputtype === "Week" && outputtype==="Second"){
       
        output = Number(input) * 604800; // set answer to the result box
    }
    
    else if(inputtype === "Week" && outputtype==="Microsecond"){
        
        output = input * 604800000000; // set answer to the result box    
    }
    
    else if(inputtype === "Week" && outputtype==="Picosecond"){
        
        output = Number(input) * 604800000000000000; // set answer to the result box
    }
    
    else if(inputtype === "Week" && outputtype==="Month"){
        
        output = Number(input) * 0.2299794661; // set answer to the result box
    }
    else if(inputtype === "Week" && outputtype==="Minute"){
        
        output = Number(input) * 10080; // set answer to the result box
    }
    else if(inputtype === "Week" && outputtype==="Hour"){
        
        output = Number(input) * 168; // set answer to the result box
    }
    else if(inputtype === "Week" && outputtype==="Day"){
        
        output= Number(input) * 7; // set answer to the result box
    }
    else if(inputtype === "Week" && outputtype==="Nanosecond"){
        
        output = Number(input) * 604800000000000; // set answer to the result box
    }
    else if(inputtype === "Week" && outputtype==="Year"){
        
        output = Number(input) * 0.0191649555; // set answer to the result box
    }
    else if(inputtype === "Week" && outputtype==="Millisecond"){
        
        output = Number(input) * 604800000; // set answer to the result box
    }



    else if(inputtype === 'Month' && outputtype=== 'Month'){
       
        output=input; // set answer to the result box
        
    }
    
    else if(inputtype === "Month" && outputtype==="Second"){
       
        output = Number(input) * 2629800; // set answer to the result box
    }
    
    else if(inputtype === "Month" && outputtype==="Microsecond"){
        
        output = input * 2629800000000; // set answer to the result box    
    }
    
    else if(inputtype === "Month" && outputtype==="Picosecond"){
        
        output = Number(input) * 2629800000000000000; // set answer to the result box
    }
    
    else if(inputtype === "Month" && outputtype==="Week"){
        
        output = Number(input) * 4.3482142857; // set answer to the result box
    }
    else if(inputtype === "Month" && outputtype==="Minute"){
        
        output = Number(input) * 43830; // set answer to the result box
    }
    else if(inputtype === "Month" && outputtype==="Hour"){
        
        output = Number(input) * 730.5; // set answer to the result box
    }
    else if(inputtype === "Month" && outputtype==="Day"){
        
        output= Number(input) * 30.4375; // set answer to the result box
    }
    else if(inputtype === "Month" && outputtype==="Nanosecond"){
        
        output = Number(input) * 2629800000000000; // set answer to the result box
    }
    else if(inputtype === "Month" && outputtype==="Year"){
        
        output = Number(input) * 0.0833333333; // set answer to the result box
    }
    else if(inputtype === "Month" && outputtype==="Millisecond"){
        
        output = Number(input) * 2629800000; // set answer to the result box
    }



    else if(inputtype === 'Year' && outputtype=== 'Year'){
       
        output=input; // set answer to the result box
        
    }
    
    else if(inputtype === "Year" && outputtype==="Second"){
       
        output = Number(input) * 31557600; // set answer to the result box
    }
    
    else if(inputtype === "Year" && outputtype==="Microsecond"){
        
        output = input * 31557600000000; // set answer to the result box    
    }
    
    else if(inputtype === "Year" && outputtype==="Picosecond"){
        
        output = Number(input) * 31557600000000000000; // set answer to the result box
    }
    
    else if(inputtype === "Year" && outputtype==="Week"){
        
        output = Number(input) * 52.178571429; // set answer to the result box
    }
    else if(inputtype === "Year" && outputtype==="Minute"){
        
        output = Number(input) * 525960; // set answer to the result box
    }
    else if(inputtype === "Year" && outputtype==="Hour"){
        
        output = Number(input) * 8766; // set answer to the result box
    }
    else if(inputtype === "Year" && outputtype==="Day"){
        
        output= Number(input) * 365.25; // set answer to the result box
    }
    else if(inputtype === "Year" && outputtype==="Nanosecond"){
        
        output = Number(input) * 31557600000000000; // set answer to the result box
    }
    else if(inputtype === "Year" && outputtype==="Month"){
        
        output = Number(input) * 12; // set answer to the result box
    }
    else if(inputtype === "Year" && outputtype==="Millisecond"){
        
        output = Number(input) * 31557600000; // set answer to the result box
    }
    outputElement.textContent = output;

}