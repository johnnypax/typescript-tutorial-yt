export default class Persona{
    private nome: string | undefined;
    private cognome: string | undefined;
    private eta: number | undefined;
    private risparmi: number = 0;

    constructor(varNome?: string, varCognome?: string){
        this.nome = varNome,
        this.cognome = varCognome;
    }

    setRisparmi(valRisparmi: number) : void {
        if(valRisparmi >= 0)
            this.risparmi = valRisparmi;
        else
            console.log("Errore, risparmio negativo")
    }

    getRisparmi() : number {
        return this.risparmi
    }
}