

module.exports = {
    pergunta(txt) {
        var pl = require('./node_modules/tau-prolog');
        //Criar Session do Tau-Prolog
        var session = pl.create(100);
        let resp = [];
        // Regras Prolog usar "+" entre as linhas e ";" no final
        // musica (Nome da Música, Gênero, Artista, Link do Spotify)
        var program =
        "musica('Creep', ['Alternativo', 'Independente'], 'Radiohead', 'https://open.spotify.com/track/6b2oQwSGFkzsMtQruIWm2p?si=P65FyMvbTS6LqMTCGx9_dA').";
        session.consult(program);

        // Consulta 
        session.query("musica(X,Y,Z,A).");
        //Resposta
        session.answers(x => {
                console.log('X == ',pl.format_answer(x))
                resp.push(x)
               
                
        });
        return (resp)
    }
}
