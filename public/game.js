import { ComputerAI } from "./ai.js";
export class Game {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this._result = "";
        console.log('Game is ready...');
    }
    get result() {
        return this._result;
    }
    set result(value) {
        this._result = value;
    }
    play() {
        console.log('Game is running...');
        this.player2.choice = this.getComputerChoice();
        switch (this.player1.choice) {
            case 'piedra':
                if (this.player2.choice === 'piedra') {
                    this.result = 'Empate';
                }
                else if (this.player2.choice === 'papel') {
                    this.result = 'Perdiste';
                }
                else {
                    this.result = 'Ganaste';
                }
                break;
            case 'papel':
                if (this.player2.choice === 'piedra') {
                    this.result = 'Ganaste';
                }
                else if (this.player2.choice === 'papel') {
                    this.result = 'Empate';
                }
                else {
                    this.result = 'Perdiste';
                }
                break;
            case 'tijera':
                if (this.player2.choice === 'piedra') {
                    this.result = 'Perdiste';
                }
                else if (this.player2.choice === 'papel') {
                    this.result = 'Ganaste';
                }
                else {
                    this.result = 'Empate';
                }
                break;
        }
    }
    getComputerChoice() {
        return new ComputerAI().getChoice();
    }
    stop() {
        console.log('Game is stopped...');
    }
    pause() {
        console.log('Game is paused...');
    }
}
