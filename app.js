let gameBoard = (arg) => {
    let turnHistory = [];
    let square = document.querySelectorAll(".square");
    let playerChoice = () => {
        square.forEach((el, i) => {
            el.addEventListener("click", (e) => {
                turnHistory.push(i);
                // To avoid clicking the same square twice
                el.classList.add("disableClick")
                el.textContent = "X"
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
            } else {
                compChoice()
            }
        }
    };
    return { playerChoice }
}

let game = gameBoard()

game.playerChoice()






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