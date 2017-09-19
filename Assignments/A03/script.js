var myIndex = 0;
image();

function image() 
{
    var i;
    var x = document.getElementsByClassName("image");
    for (i = 0; i < x.length; i++) 
    {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(image, 2500);
}

function drop() 
{
    document.getElementById("drop").classList.toggle("display");
}

function drop1() 
{
    document.getElementById("drop1").classList.toggle("display");
}

function drop2() 
{
    document.getElementById("drop2").classList.toggle("display");
}