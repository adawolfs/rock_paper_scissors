export class ComputerAI {
    public getChoice(): string {
        const choices = ['piedra', 'papel', 'tijera'];
        return choices[Math.floor(Math.random() * 3)];
    }
}