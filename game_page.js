player1_name= localStorage.getItem("player1_name");
player2_name= localStorage.getItem("player2_name");


document.getElementById("p1_name").innerHTML=player1_name + " : ";
document.getElementById("p2_name").innerHTML=player2_name + " : ";

p1_score = 0;
p2_score = 0;

document.getElementById("score1").innerHTML = p1_score;
document.getElementById("score2").innerHTML = p2_score;

document.getElementById("qturn").innerHTML = "Question Turn - " + player1_name;
document.getElementById("aturn").innerHTML = "Answer Turn - " +   player2_name;