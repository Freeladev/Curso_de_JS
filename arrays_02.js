// Formas de imprimir os valores de um array:

var num = [3,2,8]
//1ª Forma:
console.log(num)
console.log('------------')
//2ª Forma: (Forma burra)
console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log('------------')
//3ª Forma: (Agora sim!)
for(var ind = 0;ind<=num.length;ind++) {
    console.log (num[ind])
}
console.log('------------')
//4ª Forma: (Agora sim plus!). Esta forma é mais simples e inteligente. Prezar pelo uso dela!
for(var pos in num) {
    console.log (num[pos])
}
console.log('------------')
// Imprimindo o índice do elemento:
var pos = num.indexOf(8)
if (pos == -1) {
    console.log ('O valor não foi encontrado')
} else { 
    console.log (`O valor está na posição ${pos}`)
}