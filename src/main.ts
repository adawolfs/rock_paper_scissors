import { Game } from "./game.js";
import { Player } from "./player.js";

const change = (e: Event) =>{
    const target = e.target as HTMLButtonElement;
    const player: Player = new Player("Player", target.id);
    const computer: Player = new Player("Computer", "papel");
    let element = document.getElementById("content");

    const game: Game = new Game(player, computer)
    game.play();
    element!.innerText = game.result;
}

document.getElementById("piedra")!.addEventListener("click", change);
document.getElementById("papel")!.addEventListener("click", change);
document.getElementById("tijera")!.addEventListener("click", change);