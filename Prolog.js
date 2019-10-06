module.exports = {
    pergunta(like, dislike) {
        like = 'Alternativo';
        var pl = require('./node_modules/tau-prolog');
        //Criar Session do Tau-Prolog
        var session = pl.create(100);
        let musicas = [];
        // Regras Prolog usar "+" entre as linhas e ";" no final
        // musica (Nome da Música, Gênero, Artista, Link do Spotify)
        var program =

            "musica('Creep', 'Alternativo', 'Radiohead', 'https://open.spotify.com/track/6b2oQwSGFkzsMtQruIWm2p?si=P65FyMvbTS6LqMTCGx9_dA')." +
            "musica('Anna Júlia', 'Alternativo', 'Los Hermanos', 'https://open.spotify.com/track/0aASUtDb1N96NJDwmWj5Gf?si=Cui489eGSnKIu04Bnq5HcA')." +
            "musica('Losin My Religion', 'Pop', 'REM', 'https://open.spotify.com/track/31AOj9sFz2gM0O3hMARRBx?si=YmnX_kNRTz2qP5hM349P9A')." +

            "play(Z) :- musica(_,_,_,Z), Y=" + like + ".";

        session.consult(program);
        // Consulta 
        session.query("musica(_,Genero,_,Musica).");
        //Resposta
        var resp = [];
        var callback = function (answer) { resp.push(pl.format_answer(answer)); };

        session.answer(callback);
        session.answer(callback);
        session.answer(callback);   
        session.answer(callback); 
        return (resp);
    }
}
