let square = document.getElementsByClassName("square");

for (i = 0; i < square.length; i++) {
    square[i].onclick = (e) => {
        e.path[0].innerHTML = "X"
    }
}

