function principal() {
    let nomesHerois = ['Super Man', 'Batman', 'Mulher Maravilha', 'Flash', 'Lanterna Verde', 'Aquaman', 'Caçador'];
    let vitorias = [77, 5, 40, 98, 215, 33, 25];
    let derrotas = [2, 0, 20, 36, 49, 10, 9];

    for(let i = 0; i < nomesHerois.length; i++) {
        let nome = nomesHerois[i];
        let vitoria = vitorias[i];
        let derrota = derrotas[i];
        let vitoriasTotais = saldoRank(vitoria, derrota);
        let nivelHeroi = niveisDeHerois(vitoriasTotais);
        console.log(`O Herói ${nome} tem um saldo de ${vitoriasTotais} vitórias e está no nível ${nivelHeroi}`);
}
}

function saldoRank(vitoria, derrota) {
    let saldoRankeadas = vitoria - derrota;
    return saldoRankeadas;
}

function niveisDeHerois(vitoriasTotais)  {
    nivel_heroi = '';
    if (vitoriasTotais <= 10) {
        return nivel_heroi = 'Ferro';
    } else if (vitoriasTotais >= 11 && vitoriasTotais <= 20) {
        return nivel_heroi = 'Bronze';
    } else if (vitoriasTotais >= 21 && vitoriasTotais <= 50) {
        return nivel_heroi = 'Prata';
    } else if (vitoriasTotais >= 51 && vitoriasTotais <= 80) {
        return nivel_heroi = 'Ouro';
    } else if (vitoriasTotais >= 81 && vitoriasTotais <= 90) {
        return nivel_heroi = 'Diamante';
    } else if (vitoriasTotais >= 91 && vitoriasTotais <= 100) {
        return nivel_heroi = 'Lendário';
    } else {
        return nivel_heroi = 'Imortal'
    }
}

principal();