import { Game } from "./game.js";
import { Player } from "./player.js";
const change = (e) => {
    const target = e.target;
    const player = new Player("Player", target.id);
    const computer = new Player("Computer", "papel");
    let element = document.getElementById("content");
    const game = new Game(player, computer);
    game.play();
    element.innerText = game.result;
};
document.getElementById("piedra").addEventListener("click", change);
document.getElementById("papel").addEventListener("click", change);
document.getElementById("tijera").addEventListener("click", change);
