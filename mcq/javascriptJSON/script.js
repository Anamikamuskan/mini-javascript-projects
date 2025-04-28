var question = [["Q1. Which one of the following river flows between Vindhyan and Satpura ranges?","Q2. The Central Rice Research Station is situated in?","Q3. Who among the following wrote Sanskrit grammar?","Q4. Which among the following headstreams meets the Ganges in last?","Q5. The metal whose salts are sensitive to light is?"],

["Narmada","Mahanadi","son","Netravati","Narmada"],
["Chennai","Cuttack","Bangalore","Quilon","Cuttack"],
["Kalidas","Charak","Panini","Aryabhatt","Panini"],
["Alkananda","Pindar","Mandakini","Bhagirathi","Bhagirathi"],
["Zinc","Silver","Copper","Aluminium","Silver"]

];
//correct answers = question[0-4][4];
var x=0;
var y=-1;
function nextQue()
{
    x++;
    y++;
    document.getElementById("s1").innerHTML= question[0][y];
    
    document.getElementById("1").innerHTML = question[x][0]+'<input type="radio" id="ch1" class="checkbox" name="Answer"> ';
    document.getElementById("2").innerHTML = question[x][1]+'<input type="radio" id="ch2" class="checkbox" name="Answer"> ';
    document.getElementById("3").innerHTML = question[x][2]+'<input type="radio" id="ch3" class="checkbox" name="Answer"> ';
    document.getElementById("4").innerHTML = question[x][3]+'<input type="radio" id="ch4" class="checkbox" name="Answer"> ';
    
    if(y >= 4)
        {
            document.getElementById("save").style.display="none";
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

function refresh()
{
    document.getElementById("start").style.display = "block";
    document.getElementById("result").style.display = "none";

}


function submit()
{   
    x=0 ; 
    y=-1;
    document.getElementById("result").style.display = "block";
    document.getElementById("content").style.display = "none";

}


function start()
{  
    document.getElementById("content").style.display = "block";
    document.getElementById("next").style.display="block";
    document.getElementById("start").style.display = "none";
    document.getElementById("submit").style.display="none";
}