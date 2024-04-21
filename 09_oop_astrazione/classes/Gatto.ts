import Animale from "./Animale";

export default class Gatto extends Animale{
    
    colore: string;

    versoEmesso(): void {
        console.log("Miau Miau")
    }

}