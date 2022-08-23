let users_score = 0;
let comps_score = 0;
const userscore_span = document.getElementById("user_score");
const compscore_span = document.getElementById("comp_score");
const scoreboard_div = document.querySelector(".score_board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function compChoice() {
    const choice = ["r", "p", "s"];
    const randomnum = Math.floor(Math.random() * 3);
    changeImageComp(choice[randomnum]);
    console.log(1,choice[randomnum]);
    return choice[randomnum];
    
}
function toword(word){
    if (word === 'r') return "Rock";
    if (word === 'p') return "Paper";
    if (word === 's') return "Scissor";
}

function win(userc,compc){
    users_score ++;
    userscore_span.innerHTML=users_score;
    compscore_span.innerHTML=comps_score;
    result_p.innerHTML=toword(userc)+" Beats "+toword(compc)+".You Win 😁!"
    
}
function loose(userc,compc){
    comps_score ++;
    userscore_span.innerHTML=users_score;
    compscore_span.innerHTML=comps_score;
    result_p.innerHTML=toword(userc)+" won't Beats "+toword(compc)+".You Loose 🥺!"
}
function draw(userc,compc){
    userscore_span.innerHTML=users_score;
    compscore_span.innerHTML=comps_score;
    result_p.innerHTML="You and computer choose "+toword(compc)+".Draw 🙄!"
}

let comp = 0;

function Game(userChoice) {
    comp = compChoice();
    console.log(comp)   
    if (comp === userChoice){
        draw(userChoice,comp)
    }
    else if(comp === 'r' && userChoice=== 'p'){

        win(userChoice,comp);
    }
    else if(comp === 'r' && userChoice=== 's'){
        loose(userChoice,comp);
    }
    else if(comp === 'p' && userChoice=== 'r'){   
        loose(userChoice,comp);
    }
    else if(comp === 's' && userChoice=== 'p'){  
        loose(userChoice,comp);
    }
    else if(comp === 'p' && userChoice=== 's'){
        win(userChoice,comp);
    }
    else if(comp === 's' && userChoice=== 'r'){
        win(userChoice,comp);  
    }
    
}


function main() {

    rock_div.addEventListener('click', function () {
        Game("r");
        changeImage("r");
        color('r',comp);
        
    })
    paper_div.addEventListener('click', function () {
        Game("p");
        changeImage("p");
        color('p',comp);
    })
    scissor_div.addEventListener('click', function () {
        Game("s");
        changeImage("s");
        color('s',comp);
    })
}
main();

function changeImage(user) {
    var image = document.getElementById('myImage');
    if (user === 'r') {
        image.src = "rock.png";
    }
    if (user === 'p') {
        image.src = "paper (1).png";
    }
    if (user === 's') {
        image.src = "scissor.png";
    }
    }
function changeImageComp(com) {
    var image = document.getElementById('comImage');
    if (com === 'r') {
        image.src = "rock.png";
    }
    if (com === 'p') {
        image.src = "paper (1).png";
    }
    if (com === 's') {
        image.src = "scissor.png";
    }
    }
    function color(u,c){
        console.log(u,c,"yyyy")
        switch (u+c){
            case "rs":
            case "pr":
            case "sp":
                document.getElementById(u).style.backgroundColor = "green";
                setTimeout(function(){
                    document.getElementById(u).style.backgroundColor = "black";
                },200)
                break;
            case "sr":
            case "rp":
            case "ps":
                document.getElementById(u).style.backgroundColor = "red";
                setTimeout(function(){
                    document.getElementById(u).style.backgroundColor = "black";
                },200)
                break;
            case "ss":
            case "rr":
            case "pp":
                document.getElementById(u).style.backgroundColor = "blue";
                setTimeout(function(){
                    document.getElementById(u).style.backgroundColor = "black";
                },200)
                break;
            
        }
    
    }
    const r=document.getElementById("r");
    r.addEventListener('click',function(){
        color('r',comp);   
    })
    const p=document.getElementById("p");
    p.addEventListener('click',function(){
        color('p',comp);
    })
    const s=document.getElementById("s");
    s.addEventListener('click',function(){
        color('s',comp);
    })
    
    