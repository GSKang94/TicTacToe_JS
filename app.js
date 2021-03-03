let gameBoard = (arg) => {
    let square = document.querySelectorAll(".square")
    let playerChoice = () => {
        square.forEach((el) => {
            el.addEventListener("click", (e) => {
                el.textContent = "X"
                compChoice()
            })
        });
    }

    let compChoice = () => {
        let randomNum = Math.floor(Math.random() * 6);
        square[randomNum].textContent = "O"
        // console.log(randomNum);
    }

    return { playerChoice }
}



let game = gameBoard()

game.playerChoice()







// console.log(square);
        // arg.textContent = "O"
        // for (i = 0; i < square.length; i++) {
        //     square[randomNum].textContent = "asdas"
        // }
        // let test = document.querySelector(".square:nth-child(1)")
        // console.log(randomNum);