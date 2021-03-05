(function gameBoard() {
    let totalHistory = [];
    let playerHistory = [];
    let compHistory = [];
    let square = document.querySelectorAll(".square");

    let playerChoice = () => {
        square.forEach((el, i) => {
            el.addEventListener("click", () => {
                totalHistory.push(i);
                // To avoid clicking the same square twice
                el.classList.add("disableClick")
                el.textContent = "X"
                playerHistory.push(+el.id);
                checkWinner(playerHistory, "Human")
                compChoice()
            })
        })
    };
    let compChoice = () => {
        let randomNum = Math.floor(Math.random() * 9);
        if (totalHistory.length <= 8) {
            // To add new unique no. to array
            if (!totalHistory.includes(randomNum)) {
                totalHistory.push(randomNum)
                square[randomNum].classList.add("disableClick")
                square[randomNum].textContent = "O"
                compHistory.push(+square[randomNum].id);
            } else {
                compChoice()
            }
        }
        checkWinner(compHistory, "Computer")
    };
    playerChoice();
})()

let checkWinner = (arr, str) => {
    // Magic square
    for (i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {
            for (k = j + 1; k < arr.length; k++) {
                if ((arr[i] + arr[j] + arr[k]) === 15) {
                    alert(str + " Wins");
                }
            }
        }
    }

}












    // console.log(game.playerHistory);
    // console.log(game.compHistory);
    // if ((p1 + p2 + p3) === 15) {
    //     console.log('You win!');
    // } else if ((p2 + p3 + p4) === 15) {
    //     console.log('You Win!!');
    // } else if ((p3 + p4 + p5) === 15) {
    //     console.log('You Win');
    // } else if ((p1 + p3 + p4) === 15) {
    //     console.log('You Win');
    // } else if ((p1 + p4 + p5) === 15) {
    //     console.log('You Win!!!');
    // } else if ((p2 + p4 + p5) === 15) {
    //     console.log('You Win');
    // } else if ((c1 + c2 + c3) === 15) {
    //     console.log('Comp Wins');
    // } else if ((c2 + c3 + c4) === 15) {
    //     console.log('Comp wins');
    // } else if ((c1 + c3 + c4) === 15) {
    //     console.log('Comp wins');
    // } else if ((c1 + c2 + c4) === 15) {
    //     console.log('Comp wins');
    // }







// let winner = () => {
//     let winnerScore = 15;
//     let [a, , b, , c, , d, , e] = totalHistory;
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