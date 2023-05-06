const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");


const value = document.querySelector(".value");

const result = {
     "rock": {
          "scissor": true
     },
     "paper": {
          "rock": true
     },
     "scissor": {
          "paper": true
     }
}


const selection = ['rock', 'paper', 'scissor'];
const emoji = ['🪨', '📃', '✂️'];
const emoji_1 = {
     "rock": "🪨",
     "paper": "📃",
     "scissor": "✂️"
}

let userSelection;

rock.addEventListener("click", () => {
     let computerRandom = Math.round(Math.random() * 2);
     userSelection = "rock";

     let random = result[userSelection][selection[computerRandom]]

     if (userSelection === selection[computerRandom]) {
          value.innerHTML = `you and enemy is equal! Because you choose ${userSelection} ${emoji_1[userSelection]} and enemy choose ${selection[computerRandom]} ${emoji[computerRandom]}`;
     } else if (userSelection != selection[computerRandom]) {
          if (random) {
               value.innerHTML = `you win because you choose ${userSelection} ${emoji_1[userSelection]} and enemy choose ${selection[computerRandom]} ${emoji[computerRandom]}`;
          } else {
               value.innerHTML = `you lose because you choose ${userSelection} ${emoji_1[userSelection]} and enemy choose ${selection[computerRandom]} ${emoji[computerRandom]}`;
          }
     }
})


paper.addEventListener("click", () => {
     let computerRandom = Math.round(Math.random() * 2);
     userSelection = "paper";

     let random = result[userSelection][selection[computerRandom]]

     if (userSelection === selection[computerRandom]) {
          value.innerHTML = `you and enemy is equal! Because you choose ${userSelection} ${emoji_1[userSelection]} and enemy choose ${selection[computerRandom]} ${emoji[computerRandom]}`;
     } else if (userSelection != selection[computerRandom]) {
          if (random) {
               value.innerHTML = `you win because you choose ${userSelection} ${emoji_1[userSelection]} and enemy choose ${selection[computerRandom]} ${emoji[computerRandom]}`;
          } else {
               value.innerHTML = `you lose because you choose ${userSelection} ${emoji_1[userSelection]} and enemy choose ${selection[computerRandom]} ${emoji[computerRandom]}`;
          }
     }
})



scissor.addEventListener("click", () => {
     let computerRandom = Math.round(Math.random() * 2);
     userSelection = "scissor";

     let random = result[userSelection][selection[computerRandom]]

     if (userSelection === selection[computerRandom]) {
          value.innerHTML = `you and enemy is equal! Because you choose ${userSelection} ${emoji_1[userSelection]} and enemy choose ${selection[computerRandom]} ${emoji[computerRandom]}`;
     } else if (userSelection != selection[computerRandom]) {
          if (random) {
               value.innerHTML = `you win because you choose ${userSelection} ${emoji_1[userSelection]} and enemy choose ${selection[computerRandom]} ${emoji[computerRandom]}`;
          } else {
               value.innerHTML = `you lose because you choose ${userSelection} ${emoji_1[userSelection]} and enemy choose ${selection[computerRandom]} ${emoji[computerRandom]}`;
          }
     }
})



rock.style.background = "#A0D8B3";
paper.style.background = "#B0DAFF";
scissor.style.background = "#FFEAD2";

let header_rock = document.querySelector(".rock");
let header_paper = document.querySelector(".paper");
let header_scissor = document.querySelector(".scissor");


header_rock.addEventListener("mouseenter", () => {
     header_rock.innerHTML = "石";
})


header_rock.addEventListener("mouseleave", () => {
     header_rock.innerHTML = "Rock";
})


header_paper.addEventListener("mouseenter", () => {
     header_paper.innerHTML = "紙";
})


header_paper.addEventListener("mouseleave", () => {
     header_paper.innerHTML = "Paper";
})



header_scissor.addEventListener("mouseenter", () => {
     header_scissor.innerHTML = "はさみ";
})


header_scissor.addEventListener("mouseleave", () => {
     header_scissor.innerHTML = "Scissor";
})