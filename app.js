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
                    console.log(str + " Wins");
                }
            }
        }
    }

}