//Modulo para exportar para Inde.js
module.exports = {
    //Função pergunta
    pergunta(like, dislike) {
        //Like para teste :
        //like = 'Alternativo';
        //Cria a variavel pl contendo os modulos do tau
        var pl = require('./node_modules/tau-prolog');
        //Criar Session do Tau-Prolog
        var session = pl.create(100);
        //Cria uma vairivel para testar se a um false.
        var fim = -1;
        // Regras Prolog usar "+" entre as linhas e ";" no final
        // musica (Nome da Música, Gênero, Artista, Link do Spotify)
        var program =
            //alternativo
            "musica('Creep', ['Alternativo', 'Independente'], 'Radiohead', 'https://open.spotify.com/track/6b2oQwSGFkzsMtQruIWm2p?si=P65FyMvbTS6LqMTCGx9_dA')." +
            "musica('Anna Júlia', ['Alternativo', 'Pop'], 'Los Hermanos', 'https://open.spotify.com/track/0aASUtDb1N96NJDwmWj5Gf?si=Cui489eGSnKIu04Bnq5HcA')." +
            "musica('Losin My Religion', ['Alternativo', 'Rock'], 'REM', 'https://open.spotify.com/track/31AOj9sFz2gM0O3hMARRBx?si=YmnX_kNRTz2qP5hM349P9A')." +
            "musica('Everybody Hurts', ['Alternativo', 'Rock'], 'REM', 'https://open.spotify.com/track/6PypGyiu0Y2lCDBN1XZEnP?si=nSRMKMEnT6G6kma_HV70hw')." +
            "musica('Whats up?', ['Alternativo', 'Rock'], '4 Non Blondes', 'https://open.spotify.com/track/0jWgAnTrNZmOGmqgvHhZEm?si=m0UBwIoNRGWxIzCX3ODvyw')." +
            "musica('Like a Stone', ['Alternativo', 'Rock'], 'Audioslave', 'https://open.spotify.com/track/3YuaBvuZqcwN3CEAyyoaei?si=kqbkvjFiQVSaqh_froIpvA')." +
            "musica('Let Her Go',['Alternativo','Pop','Neofolk'],'Passenger','https://open.spotify.com/track/1RKtWeu7meOKfLS4OikFd8')." +
            "musica('Take Me To Church',['Alternativo','Blues'],'Hozier','https://open.spotify.com/track/70LrxJ5u19umvrXbC19g20')." +
            "musica('Seven Nation Army',['Alternativo','Rock'],'The White Stripes','https://open.spotify.com/track/7rbkDq2MsbWZAPiZv4uaQn')." +
            "musica('Somewhere Only We Know',['Alternativo','Pop'],'Keane','https://open.spotify.com/track/0ll8uFnc0nANY35E0Lfxvg')." +

            "play(Z) :- musica(_,_,_,Z), Y=" + like + ".";

        session.consult(program);
        //TO-DO



        // Consulta -- Ainda não termindada--
        session.query("musica(_,Genero,_,Musica).");




        //TO- DO
        //Array de Resposta
        var resp = [];
        //Variavel callback para respostas pois o tau e assincrono
        var callback = function (answer) { resp.push(pl.format_answer(answer)); };
        //laço para chamar todas as respostas
        do {
            //Vê se a um false no array

            fim = resp.indexOf('false.');

            //teste por segurança 
            if (fim == -1) {
                session.answer(callback);
            }

        } while (fim == -1);
        //Retirar o 'false.' atraves do splice 
        resp.splice(fim);
        //retorna o array com as musicas
        return (resp);
    }
}
