let gameBoard = () => {
    let turnHistory = [];
    let playerHistory = [];
    let compHistory = [];
    let square = document.querySelectorAll(".square");

    let playerChoice = () => {
        square.forEach((el, i) => {
            el.addEventListener("click", () => {
                turnHistory.push(i);
                // To avoid clicking the same square twice
                el.classList.add("disableClick")
                el.textContent = "X"
                playerHistory.push(+el.id);

                compChoice()
            })
        })
    };
    let compChoice = () => {
        let randomNum = Math.floor(Math.random() * 9);
        if (turnHistory.length <= 8) {
            if (!turnHistory.includes(randomNum)) {
                turnHistory.push(randomNum)
                square[randomNum].classList.add("disableClick")
                square[randomNum].textContent = "O"
                compHistory.push(+square[randomNum].id);
                // console.log("comp", compHistory);
            } else {
                compChoice()
            }
        }
        checkWinner()
    };
    return { playerChoice, playerHistory, compHistory }
}

let game = gameBoard()

game.playerChoice()

let checkWinner = () => {
    let [p1, p2, p3, p4, p5] = game.playerHistory;
    let [c1, c2, c3, c4] = game.compHistory;
    // console.log(game.compHistory);
    if ((p1 + p2 + p3) === 15) {
        console.log('You win!');
    } else if ((p2 + p3 + p4) === 15) {
        console.log('You Win!!');
    } else if ((p3 + p4 + p5) === 15) {
        console.log('You Win');
    } else if ((c1 + c2 + c3) === 15) {
        console.log('Comp Win');
    } else if ((c2 + c3 + c4) === 15) {
        console.log('Comp Win!');
    }
}





// let winner = () => {
//     let winnerScore = 15;
//     let [a, , b, , c, , d, , e] = turnHistory;
    // switch (winnerScore) {
    //     case a + b + c:
    //         console.log('You won');
    //         break
    //     case b + c + d:
    //         console.log('You won!');
    //         break
    //     case c + d + e:
    //         console.log('You Won!!!');
    //         break
    //     default:
    //         console.log('Game is still going');
    //         break
    // }
    // if ((a + b + c) = winnerScore) {
    //     console.log('You won');
    // }
//     console.log(a, b, c);
//     console.log(a + b + c);
// }
// if (num.length === 0) {
//     console.log(num);
//     num.push(randomNum)
//     console.log(num.length);
// }

// else {
//     console.log(num);
//     let lastNum = num[num.length - 1];
//     num.map(el => {
//         if (el !== randomNum) {
//             num.push(randomNum)
//         }

//     })
// }

// square[lastNum].textContent = "O"
// console.log(square);
        // arg.textContent = "O"
        // for (i = 0; i < square.length; i++) {
        //     square[randomNum].textContent = "asdas"
        // }
        // let test = document.querySelector(".square:nth-child(1)")
        // console.log(randomNum);