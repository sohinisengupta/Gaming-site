console.log("hello");
const box = document.getElementById("first");
const box2 = document.getElementById("second");
const box3 = document.getElementById("third");
const box4 = document.getElementById("forth");
const box5 = document.getElementById("fifth");
const box6 = document.getElementById("six");
const box7 = document.getElementById("seven");
const box8 = document.getElementById("eight");
const box9 = document.getElementById("nine");
const reset = document.getElementById("reset");
const score = document.getElementById("score");

function resetf() {
    box.innerHTML = ''
    box2.innerHTML = ''
    box3.innerHTML = ''
    box4.innerHTML = ''
    box5.innerHTML = ''
    box6.innerHTML = ''
    box7.innerHTML = ''
    box8.innerHTML = ''
    box9.innerHTML = ''
    count = 0;
}
reset.addEventListener('click', function () {
    resetf();
})
let count = 0;
let numb = 0;

function pos(b) {
    if (count <= 9) {

        if (numb === 'box') {
            box.innerHTML = b
        }
        if (numb === 'box2') {
            box2.innerHTML = b
            console.log(2);
        }
        if (numb === 'box3') {
            box3.innerHTML = b;
            console.log(2);
            
        }
        if (numb === 'box4') {
            box4.innerHTML = b
        }
        if (numb === 'box5') {
            box5.innerHTML = b
        }
        if (numb === 'box6') {
            box6.innerHTML = b
        }
        if (numb === 'box7') {
            box7.innerHTML = b
        }
        if (numb === 'box8') {
            box8.innerHTML = b
        }
        if (numb === 'box9') {
            box9.innerHTML = b
        }
    }
    else {
        alert('Match Draw');
        resetf();
    }
    console.log(3);
     
}
function sign() {
    
    if (count % 2 === 0) {
        pos('X');
        score.innerHTML = 'Now O turn';
        
    }
    else {
        pos('O');
        score.innerHTML = 'Now X turn';
    }
    count++;
    checkwin();
}

box.addEventListener('click', function () {

    numb = 'box'
    sign();
    
})
box2.addEventListener('click', function () {
    numb = 'box2'
    sign();
})
box3.addEventListener('click', function () {
    numb = 'box3'
    console.log(1)
    sign();
    
    
    
})
box4.addEventListener('click', function () {
    numb = 'box4'
    sign();
})
box5.addEventListener('click', function () {
    numb = 'box5'
    sign();
})
box6.addEventListener('click', function () {
    numb = 'box6'
    sign();
})
box7.addEventListener('click', function () {
    numb = 'box7'
    sign();
})
box8.addEventListener('click', function () {
    numb = 'box8'
    sign();
})
box9.addEventListener('click', function () {
    numb = 'box9'
    sign();
})

function win(){
    
    setTimeout(function(){
        alert('Game over')
        resetf();
        },100)
}



function checkwin() {
    if (box.innerHTML != '' && box2.innerHTML != '' && box3.innerHTML != '' && 
    box.innerHTML == box2.innerHTML && box2.innerHTML == box3.innerHTML){
        score.innerHTML = (box.innerHTML+' is win');
         win();
          
    }
    else if (box4.innerHTML != '' && box5.innerHTML != '' && box6.innerHTML != '' && 
    box4.innerHTML == box5.innerHTML && box5.innerHTML == box6.innerHTML){
        score.innerHTML = (box4.innerHTML+' is win');
         win();  
    }
    else if (box7.innerHTML != '' && box8.innerHTML != '' && box9.innerHTML != '' && 
    box7.innerHTML == box8.innerHTML && box8.innerHTML == box9.innerHTML){
        score.innerHTML = (box7.innerHTML+' is win');
         win();  
    }
    else if (box.innerHTML != '' && box4.innerHTML != '' && box7.innerHTML != '' && 
    box.innerHTML == box4.innerHTML && box4.innerHTML == box7.innerHTML){
        score.innerHTML = (box7.innerHTML+' is win');
         win();  
    }
    else if (box2.innerHTML != '' && box5.innerHTML != '' && box8.innerHTML != '' && 
    box2.innerHTML == box5.innerHTML && box5.innerHTML == box8.innerHTML){
        score.innerHTML = (box8.innerHTML+' is win');
         win();  
    }
    else if (box3.innerHTML != '' && box6.innerHTML != '' && box9.innerHTML != '' && 
    box3.innerHTML == box6.innerHTML && box6.innerHTML == box9.innerHTML){
        score.innerHTML = (box9.innerHTML+' is win');
         win();  
    }
    else if (box.innerHTML != '' && box5.innerHTML != '' && box9.innerHTML != '' && 
    box.innerHTML == box5.innerHTML && box5.innerHTML == box9.innerHTML){
        score.innerHTML = (box9.innerHTML+' is win');
         win();  
    }
    else if (box3.innerHTML != '' && box5.innerHTML != '' && box7.innerHTML != '' && 
    box3.innerHTML == box5.innerHTML && box5.innerHTML == box7.innerHTML){
        score.innerHTML = (box9.innerHTML+' is win');
         win();  
    }
    
}
