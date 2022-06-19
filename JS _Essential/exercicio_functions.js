//função para desacelarar a nave
function slowDown(velocity, printer) {
    let deceleration = 20

//laço de repetição que verifica a nave enquanto a velocidade for maior que zero
    while(velocity > 0) {
        printer(velocity)
        velocity -= deceleration
    } 

    alert("Nave parada. As comportas podem ser abertas.")

}

//variável para velocidade da nave
let spaceshipVelocity = 150

slowDown(spaceshipVelocity, function(velocity) {
    console.log("Velocidade atual: " + velocity)
})
