// Add Game Logic


const onNewGame = () => {
    console.log("New Game Button clicked");
};


const onCellClick = (e) => {
    console.log("Cell clicked");
};

window.addEventListener("DOMContentLoaded", () => {
    // console.log("DOM Content Loaded");
    const newGameButton = document.getElementById("new-game");
    newGameButton.addEventListener("click", onNewGame );
    const cells = document.querySelectorAll(".cell");
    // console.log(cells);
    cells.forEach ((cell) => {
        cell.addEventListener("click", onCellClick);

    });
});