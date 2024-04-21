export default abstract class Animale{
    hasPelo: boolean

    abstract versoEmesso(): void;

    dormi(): void {
        console.log("zzzzzzzzZZZZZZ")
    }
}