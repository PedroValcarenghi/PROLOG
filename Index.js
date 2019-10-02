// https://github.com/yagop/node-telegram-bot-api/blob/master/doc/usage.md#events

//Require das Api´s
const TelegramBot = require('node-telegram-bot-api')

//Uso do Token do Telegeram
const TOKEN = '836807007:AAEA8rBgFFLCvOdpJ9bSz4VG8oNxE7xcR4Q' //BoT TOKEM || NÂO MECHER POR FAVOR

//Construção do BoT
const bot = new TelegramBot(TOKEN, { polling: true });

var pl = require('./node_modules/tau-prolog/modules/core.js');
require('./node_modules/tau-prolog/modules/lists.js')(pl)

//Criar Session do Tau-Prolog
var session = pl.create(100);

// Regras Prolog usar "+" entre as linhas e ";" no final
var program =
    //alternativo
    "musica('Creep', ['Alternativo', 'Independente'], 'Radiohead', 'https://open.spotify.com/track/6b2oQwSGFkzsMtQruIWm2p?si=P65FyMvbTS6LqMTCGx9_dA')." +
    "musica('Anna Júlia', ['Alternativo', 'Pop'], 'Los Hermanos', 'https://open.spotify.com/track/0aASUtDb1N96NJDwmWj5Gf?si=Cui489eGSnKIu04Bnq5HcA')." +
    "musica('Losin My Religion', ['Alternativo', 'Rock'], 'REM', 'https://open.spotify.com/track/31AOj9sFz2gM0O3hMARRBx?si=YmnX_kNRTz2qP5hM349P9A')." +
    "musica('Everybody Hurts', ['Alternativo', 'Rock'], 'REM', 'https://open.spotify.com/track/6PypGyiu0Y2lCDBN1XZEnP?si=nSRMKMEnT6G6kma_HV70hw')." +
    "musica('Whats up?', ['Alternativo', 'Rock'], '4 Non Blondes', 'https://open.spotify.com/track/0jWgAnTrNZmOGmqgvHhZEm?si=m0UBwIoNRGWxIzCX3ODvyw')." +
    "musica('Like a Stone', ['Alternativo', 'Rock'], 'Audioslave', 'https://open.spotify.com/track/3YuaBvuZqcwN3CEAyyoaei?si=kqbkvjFiQVSaqh_froIpvA')." +

    //rock
    "musica('Yesterday', ['Rock', 'Pop'], 'Beatles', 'https://open.spotify.com/track/3BQHpFgAp4l80e1XslIjNI?si=Ki5M61xiSLOxAI6PrZd9OA')" +
    "musica('Bohemian Rhapsody', ['Rock', 'Pop'], 'Queen', 'https://open.spotify.com/track/3z8h0TU7ReDPLIbEnYhWZb?si=WAklTnswTg-0PhPAcVBEFA')" +
    "musica('Love Of My Life', ['Rock'], 'Queen', 'https://open.spotify.com/track/4JO4B5UbDaBMX3uKOkWq3T?si=Ok-3mahVQ0KfyrWSggQcXg')" +
    "musica('Sweet Child O Mine', ['Rock', 'Heavy Metal'], 'Guns N Roses', 'https://open.spotify.com/track/7o2CTH4ctstm8TNelqjb51?si=w5BGmVRTTQOv8tK2OV93VQ')" +
    "musica('Californication', ['Rock', 'Alternativo'], 'Red Hot Chili Peppers', 'https://open.spotify.com/track/48UPSzbZjgc449aqz8bxox?si=7drqksWMTbSLMdrHq-ym2A')";
session.consult(program);

var txt;
//Console log das entradas das menssagens
bot.on('message', (msg) => {
    console.log('msg', msg)
    txt = msg.text
    // Consulta 
    session.query(txt);
});
// Mostra a resposta no bot
bot.on('message', (msg) => session.answers(x => bot.sendMessage(msg.chat.id, pl.format_answer(x))));


