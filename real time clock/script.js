function startClock()
{
    var d = new Date();
    var hour = d.getHours();
    var minute = d.getMinutes();
    var second = d.getSeconds();
    var ampm = "AM";
    
    if(hour>12)
        ampm = "PM";

    document.getElementById("h").innerHTML  = (hour %12 || 12).toString().padStart(2,"0");
    document.getElementById("m").innerHTML  = minute.toString().padStart(2,"0");
    document.getElementById("s").innerHTML  = second.toString().padStart(2,"0");
    document.getElementById("ampm").innerHTML  =  ampm;   

    document.getElementsByClassName("hour").style.transform = `rotate(${hour*30+minute/2+second/120 }deg)`;
    document.getElementsByClassName("minute").style.transform = `rotate(${minute * 6+second/10}deg)`;
    document.getElementsByClassName("second").style.transform = `rotate(${second * 6}deg)`;

} 
