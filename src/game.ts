import { ComputerAI } from "./ai.js";
import { Player } from "./player.js";
export class Game {
    constructor(public player1: Player, public player2: Player) {
        console.log('Game is ready...');
    }

    private _result: string = "";

    public get result(): string {
        return this._result;
    }
    public set result(value: string) {
        this._result = value;
    }

    public play() {
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

    getComputerChoice(): string {
        return new ComputerAI().getChoice();
    }

    public stop() {
        console.log('Game is stopped...');
    }

    public pause() {
        console.log('Game is paused...');
    }
}