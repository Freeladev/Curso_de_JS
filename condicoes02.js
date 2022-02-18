/*var idade = 10
if (idade < 16 || idade > 65) {
    console.log('não precisa votar')
} else if (idade >= 18) {
    console.log ('Você precisa votar')
} else {
    console.log ('Você tem o direito de votar, mas não o dever')
}*/

var agora = new Date()
var hora = agora.getHours()

if (hora >= 0 && hora < 12) {
    console.log('Bom dia!')
}else if (hora >= 12 && hora < 18){
    console.log ('Boa tarde')
} else {
    console.log ('Boa noite')
}