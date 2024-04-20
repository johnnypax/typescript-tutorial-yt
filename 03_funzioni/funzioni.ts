// function saluta(nome: string) : string {
//     return `Ciao, ${nome}`;
// }

// console.log( saluta("Giovanni") );
// console.log( saluta("Mario") );

//---------------------------------- ARROW

// const saluta = (nome: string) : string => {
//     return `Ciao, ${nome}`;
// }

// console.log( saluta("Giovanni") );
// console.log( saluta("Mario") );

//---------------------------------- ARROW PARAMETRI

// const somma = (numUno: number, numDue: number): number => {
//     return numUno + numDue;
// }

// console.log( somma(12, 6) );

//---------------------------------- PARAMETRI OPZIONALI

// const ringrazia = (nome: string, titolo?: string): void  => {
//     if(titolo)
//         console.log(`Ciao, ${titolo} ${nome}`)
//     else
//         console.log(`Ciao, ${nome}`)
// }

// console.log( ringrazia("Giovanni Pace", "Dott. Ing.") );
// console.log( ringrazia("Giovanni Pace") );

//---------------------------------- PARAMETRI DI DEFAULT

const ringrazia = (nome: string, titolo: string = "Sig./Sig.ra"): void => {
    console.log(`Ciao, ${nome} ${titolo}`);
}

console.log( ringrazia("Giovanni Pace", "Dott. Ing.") );
console.log( ringrazia("Giovanni Pace") );