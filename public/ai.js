export class ComputerAI {
    getChoice() {
        const choices = ['piedra', 'papel', 'tijera'];
        return choices[Math.floor(Math.random() * 3)];
    }
}
