//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Entrada de dados. Lembre-se: O parseInt(()) é importante para a conversão dos valores de entrada(String) para um valor numérico(int).
let monstro = parseInt(gets())
let batalha = parseInt(gets())

//TODO: Implemente a lógica para exibir o xpGanho:
const xpGanho = monstro * batalha * 100

// Imprime a quantidade de XP ganho
print('Voce ganhou ' + xpGanho + ' XP!')
