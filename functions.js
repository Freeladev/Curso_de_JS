function parimp(n) {
    if (n%2==0) {
        return 'Par'
    } else {
        return 'Impar'
    }
}
var res = parimp(4)
console.log(res)

console.log('------------')

function soma(n1, n2) {
    return n1 + n2
}
console.log(soma(2, 5)) //Neste caso, se não for dado um número para algum dos parâmetros, o resultado apresentado será um NaN, pq a este parâmetro não valorado será atribuído um undefined.

//Como saída é possível atribuir um valor automático para esta situação:
console.log('------------')
function soma(n1=0, n2=3) {
    return n1 + n2
}
console.log(soma(2)) //Aqui o resultado apresentado será 5 pq como o n2 não recebeu valor algum a ele será atribuído o valor 3.
console.log('------------')
//É possível tbm incluir uma fucntion em uma variável:
var v = function(x) {
    return x*2
}
console.log(v(3))