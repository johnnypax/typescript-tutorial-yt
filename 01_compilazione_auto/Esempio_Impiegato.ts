class Impiegato{
    nome: string;
    cognome: string;
    eta: number;
    reparto: string;

    constructor(varNome: string, varCognome: string, varEta: number, varReparto: string){
        this.nome = varNome;
        this.cognome = varCognome;
        this.eta = varEta;
        this.reparto = varReparto;
    }

    stampa(): void{
        console.log(`[Impiegato] ${this.nome} ${this.cognome} ${this.eta}`)
    }
}

let gio = new Impiegato("Giovanni", "Pace", 37);
gio.stampa();