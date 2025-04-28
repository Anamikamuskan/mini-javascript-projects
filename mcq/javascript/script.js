var question = new Array("Q1. Which one of the following river flows between Vindhyan and Satpura ranges?","Q2. The Central Rice Research Station is situated in?","Q3. Who among the following wrote Sanskrit grammar?","Q4. Which among the following headstreams meets the Ganges in last?","Q5. The metal whose salts are sensitive to light is?");
    
var option1 = new Array ("Narmada","Chennai","Kalidasa","Alaknanda","Zinc");
var option2 = new Array ("Mahanadi","Cuttack","Charak","Pindar","Silver");
var option3 = new Array ("Son","Bangalore","Panini","Mandakini","Copper");
var option4 = new Array ("Netravati","Quilon","Aryabhatt","Bhagirathi","Aluminum");
var correctAns = new Array("Narmada","Cuttack","Panini","Bhagirathi","Silver");

var x=-1;
function nextQue()
{

    x++;
    document.getElementById("s1").innerHTML= question[x];
    
    document.getElementById("1").innerHTML = option1[x]+'<input type="radio" id="ch1" class="checkbox" name="Answer"> ';
    document.getElementById("2").innerHTML = option2[x]+'<input type="radio" id="ch2" class="checkbox" name="Answer"> ';
    document.getElementById("3").innerHTML = option3[x]+'<input type="radio" id="ch3" class="checkbox" name="Answer"> ';
    document.getElementById("4").innerHTML = option4[x]+'<input type="radio" id="ch4" class="checkbox" name="Answer"> ';

    if(x > question.length-2)
    {
        document.getElementById("next").style.display="none";
        document.getElementById("submit").style.display="block"; 

    }
}
function preQue()
{
    if(x>=1)
    {
        x--;
        document.getElementById("s1").innerHTML= question[x];
            
        document.getElementById("1").innerHTML = option1[x]+'<input type="radio" id="ch1" class="checkbox" name="Answer"> ';
        document.getElementById("2").innerHTML = option2[x]+'<input type="radio" id="ch2" class="checkbox" name="Answer"> ';
        document.getElementById("3").innerHTML = option3[x]+'<input type="radio" id="ch3" class="checkbox" name="Answer"> ';
        document.getElementById("4").innerHTML = option4[x]+'<input type="radio" id="ch4" class="checkbox" name="Answer"> ';
       
        document.getElementById("submit").style.display="none";   
        document.getElementById("next").style.display="block";
    }
    
}



function submit()
{   
    x=-1 ; 
    document.getElementById("result").style.display = "block";
    document.getElementById("content").style.display = "none";

}

function refresh()
{
    x = -1;
    document.getElementById("start").style.display = "block";
    document.getElementById("result").style.display = "none";

}




function start()
{  
    document.getElementById("content").style.display = "block";
    document.getElementById("next").style.display="block";
    document.getElementById("start").style.display = "none";
    document.getElementById("submit").style.display="none";
}

