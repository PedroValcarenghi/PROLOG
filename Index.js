//Require das Api´s

const TelegramBot = require('node-telegram-bot-api')

//Puxar Pergunta que é uma função de prolog.js

const prologfile = require('./Prolog');

//Uso do Token do Telegeram

const TOKEN =
    //#region BoT TOKEM || NÂO MECHER 

    //Herokus 
    '836807007:AAEA8rBgFFLCvOdpJ9bSz4VG8oNxE7xcR4Q'
//#endregion

//Construção do BoT

const express = require('express')

const PORT = process.env.PORT || 5000

express()
    .listen(PORT, () => console.log(`Listening on ${PORT}`))

const bot = new TelegramBot(TOKEN, { polling: true });

//Declaração de variaveis.

//Cria a variavel musica
var mus;
//Cria a variavel genero
var gen;
//Cria a variavel cantor
var cant;

var i;
var fim;
var resp;
//
function genero(msg) {
    //Recebe o texto da musica
    gen = (msg.text.substring(3));
    mus = 'Musica';
    cant = 'Cantor';
    console.log('Genero', gen)
    prolog(msg, mus, gen, cant);
};
function musica(msg) {
    //Recebe o texto da musica
    mus = (msg.text.substring(3));
    gen = 'Genero';
    cant = 'Cantor';
    console.log('Música', mus)
    prolog(msg, mus, gen, cant);
};
function cantor(msg) {
    //Recebe o texto da musica
    cant = (msg.text.substring(3));
    gen = 'Genero';
    mus = 'Musica';
    console.log('Cantor', cant)
    prolog(msg, mus, gen, cant);
};
function prolog(msg, musicas, gen, cant) {
    //Resposta ganhando o return da pergunta que passa o que gosta
    resp = prologfile.pergunta(musicas, gen, cant);
    //Passa o array mandando as musicas
    for (i = 0; i < resp.length; i++) {
        bot.sendMessage(msg.chat.id, resp[i])
    }
};
function all(msg) {
    prolog(msg, 'X', 'Y', 'Z');


}
//Boas Vindas 
function start(msg) {
    bot.sendMessage(msg.chat.id, "/M Musica \n /G Generos \n \n \t Generos: \n Rock \n Pop \n Alternativo \n Gospel \n MPB \n Funk \n Sertanejo \n Eletrônica \n");
}
//Chamada de Start
bot.onText(/\/start/, (msg) => start(msg));
//Chamada de mostragem
bot.onText(/\/playlist/, (msg) => all(msg));
//Chmada Musica
bot.onText(/\/M (.*)/, (msg) => musica(msg));
//Chamada por Genero
bot.onText(/\/G (.*)/, (msg) => genero(msg));
//Chamada por Cantor
bot.onText(/\/C (.*)/, (msg) => cantor(msg));



