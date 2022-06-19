let nomePilot = prompt("Nome Piloto")

let velocity = 0

let velocityAcelerate = prompt("Qual velocidade gostaria de acelerar a nave?")

let confirmVelocity = confirm("Estamos acelerando para " + velocityAcelerate + "Km/s")

if(confirmVelocity) {
    velocity = velocityAcelerate
}

if(velocity <=0) {
    alert("Nave está parada. Considere partir e aumentar a velocidade")
} else if(velocity < 40) {
    alert("Você está devagar, podemos aumentar mais")
} else if(velocity < 80) {
    alert("Parece uma boa velocidade para manter")
} else if(velocity < 100) {
    alert("Velocidade alta. Considere diminuir")
} else {
    alert("Velocidade perigosa. Controle automático forçado")
}



