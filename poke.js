//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Entrada de dados. Lembre-se: O parseInt(()) é importante para a conversão dos valores de entrada(String) para um valor numérico(int).
let escolhaDoTreinador = parseInt(gets())
let pokemonEscolhido

//TODO: Implemente as condições necessárias para a solução do desafio. Utilize a tabela de exemplos para identificar a escolha do treinador:
switch (pokemonEscolhido) {
  case escolhaDoTreinador === 1:
    pokemonEscolhido = 'Bulbasur'
    break
  case escolhaDoTreinador === 2:
    pokemonEscolhido = 'Charmander'
    break
  case escolhaDoTreinador === 4:
    pokemonEscolhido = 'Pikachu'
    break
  case escolhaDoTreinador === 5:
    pokemonEscolhido = 'Mewtwo'
}

print('Voce escolheu o ' + pokemonEscolhido + ' como seu Pokemon inicial.')
