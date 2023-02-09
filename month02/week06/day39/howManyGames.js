function howManyGames(p,d,m,s){
    let games = 0;

    while(p > m && s >= p){
        if(games === 0){
            games++;
            s -= p;
        }

        p -= d;
        s -= p;
        games++;
    }
    return games;
}

module.exports = howManyGames;