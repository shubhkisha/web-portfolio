var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");

document.getElementById("show1").onclick = function() {
    box1.style.display = 'block';
    box2.style.display = 'none';
    box3.style.display = 'none';   
}

document.getElementById("show2").onclick = function() {
    box1.style.display = 'none';
    box2.style.display = 'block';
    box3.style.display = 'none'; 
}

document.getElementById("show3").onclick = function() {
    box1.style.display = 'none';
    box2.style.display = 'none';
    box3.style.display = 'block'; 
}

document.getElementById("showAll").onclick = function() {
    box1.style.display = 'block';
    box2.style.display = 'block';
    box3.style.display = 'block'; 
}