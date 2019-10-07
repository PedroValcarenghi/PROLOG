//Require das Api´s

const TelegramBot = require('node-telegram-bot-api')

//Puxar Pergunta que é uma função de prolog.js

const prolog = require('./Prolog');

//Uso do Token do Telegeram

const TOKEN =
    //#region BoT TOKEM || NÂO MECHER 
    '836807007:AAEA8rBgFFLCvOdpJ9bSz4VG8oNxE7xcR4Q'
    //#endregion

//Construção do BoT

const bot = new TelegramBot(TOKEN, { polling: true });

//Declaração de variaveis.

//Cria a variavel musica
var mus;
var gen;
var i;
var fim;
var resp;
//
function genero(msg) {
    //Recebe o texto da musica
    gen = (msg.text.substring(3));
    mus = 'Música';
    console.log(gen)
    playlist(msg, mus, gen);
};
function musica(msg) {
    //Recebe o texto da musica
    mus = (msg.text.substring(3));
    gen = 'Genero';
    console.log(mus)
    playlist(msg, mus, gen);
};
function playlist(msg, musicas, gen) {
    //Resposta ganhando o return da pergunta que passa o que gosta
    resp = prolog.pergunta(musicas, gen);
    //Passa o array mandando as musicas
    for (i = 0; i < resp.length; i++) {
        bot.sendMessage(msg.chat.id, resp[i])
    }
};
//Boas Vindas 
function start(msg) {
    bot.sendMessage(msg.chat.id, "/M Musica \n \n \t Generos: \n Rock \n Pop \n Alternativo \n Gospel \n MPB \n Funk \n Sertanejo \n Eletrônica \n");
}
//Chamada de Start
bot.onText(/\/start/, (msg) => start(msg));
//Chamada de mostragem
bot.onText(/\/playlist/, (msg) => playlist(msg, mus));
//Chmada Musica
bot.onText(/\/M (.*)/, (msg) => musica(msg));
//Chamada por Genero
bot.onText(/\/G (.*)/, (msg) => genero(msg));







