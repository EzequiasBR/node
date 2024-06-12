function palavraParaBinario(palavra) {
   let resultadoBinario = '';
   for (let i = 0; i < palavra.length; i++) {
     // Converte cada caractere para o código ASCII e depois para binário
     const binario = palavra.charCodeAt(i).toString(2);
     // Adiciona o binário ao resultado, garantindo que cada byte tenha 8 bits
     resultadoBinario += '00000000'.slice(binario.length) + binario + ' ';
   }
   return resultadoBinario.trim();
 }
 
 // Exemplo de uso:
 const palavra = 'Olá, meu nome é Ezequias';
 const binario = palavraParaBinario(palavra);
 console.log(binario); // Saída: 01001111 01101100 11000011 10101001
 
 function binarioParaPalavra(binario) {
   let palavras = '';
   binario.split(' ').forEach(function(byte) {
     palavras += String.fromCharCode(parseInt(byte, 2));
   });
   return palavras;
 }
 
 // Exemplo de uso:
 const binarios = '01001111 01101100 11100001 00101100 00100000 01101101 01100101 01110101 00100000 01101110 01101111 01101101 01100101 00100000 11101001 00100000 01000101 01111010 01100101 01110001 01110101 01101001 01100001 01110011';
 const palavras = binarioParaPalavra(binarios);
 console.log(palavras); // Saída: Olá
 
let texto = "Esta é uma frase. Esta é outra frase; e esta é uma frase com exclamação!";
let frasesArray = texto.split(/(?<=[.;!?])\s+/);

console.log(frasesArray);
// Saída: ["Esta é uma frase.", "Esta é outra frase;", "e esta é uma frase com exclamação!"]
