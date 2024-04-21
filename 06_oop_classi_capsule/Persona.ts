export default class Persona{
    nome: string | undefined;
    cognome: string | undefined;
    eta: number | undefined;

    constructor(varNome?: string, varCognome?: string){
        this.nome = varNome,
        this.cognome = varCognome
    }
}