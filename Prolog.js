

module.exports = {
    pergunta(txt) {
        var pl = require('./node_modules/tau-prolog');
        //Criar Session do Tau-Prolog
        var session = pl.create(100);
        let resp = [];
        // Regras Prolog usar "+" entre as linhas e ";" no final
        // musica (Nome da Música, Gênero, Artista, Link do Spotify)
        var program =
            "humano(joao)." +
            "humano(maria)." +
            "humano(pedro)." +
            "mulher(maria)." +
            "homem(joao)." +
            "homem(pedro).";
        session.consult(program);

        // Consulta 
        session.query("humano(pedro).");
        //Resposta
        session.answers(x => {
                console.log('X == ',x)
                resp.push(x)
               
                
        });
        return (resp)
    }
}
