function contar() {

    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')

    //Verificar if
    if (fim.length == 0 || passo.length > fim.length) {
        window.alert('Caiu no primeiro if')
        resultado.innerHTML = (`Verifique os dados informados e tente novamente.`)

    } else {
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (i < f) {
            resultado.innerHTML = ``
            for (let c = i; c <= f; c += p) {
                resultado.innerHTML += `${c} \u{2714}`
            }
        } else {
            resultado.innerHTML = ``
            for (let c = i; c >= f; c -= p) {
                resultado.innerHTML = `${c}\u{2714}`

            }
        }
    }

}
