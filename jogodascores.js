function getColors() {
    const vetorCores = []

    for(let i = 1; i <= 148; i++){
        const colorName = document.querySelector(`#box${i} > span > a`).innerText.toLowerCase()
        
        vetorCores.push(colorName)
    }

    return vetorCores;
}


function selectColors(quantidade, vetorCores) {
    let vetorSelecionados = []

    if(quantidade > vetorCores.length){
        alert("Você não pode pedir uma quantidade de cores maior do que existe no vetor")
        return;
    }

    for(let i = 0; i < quantidade; i++){
    let i_aleatorio = Math.floor(Math.random()*vetorCores.length)
    let cor_selecionada = vetorCores.splice(i_aleatorio, 1)
    vetorSelecionados = [...vetorSelecionados, ...cor_selecionada]
    }
    return vetorSelecionados
}


function game() {

let vetorCores = selectColors(10, getColors())
    
    alert("Jogo de cores! Selecione uma das cores abaixo:\n")
    
    const cor_computador = vetorCores.splice(Math.floor(Math.random()*vetorCores.length), 1)[0]
let tentativas = 0
    do{
    let cor_escolhida = prompt("Escolha uma cor:\n"  + vetorCores)
        tentativas++
        if(cor_computador == cor_escolhida){
            alert("Ganhou!")
            return
        }else{
            if(tentativas > 2){
                alert("Game Over!")
            }
            alert("Tente novamente")
        }

    }while(tentativas < 3)
}
