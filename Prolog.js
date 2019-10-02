var pl = require('./node_modules/tau-prolog/modules/core.js');
require('./node_modules/tau-prolog/modules/lists.js')(pl)

//Criar Session do Tau-Prolog
var session = pl.create(100);

// Regras Prolog usar "+" entre as linhas e ";" no final
// musica (Nome da Música, Gênero, Artista, Link do Spotify)
var program =
    //alternativo
    "musica('Creep', ['Alternativo', 'Independente'], 'Radiohead', 'https://open.spotify.com/track/6b2oQwSGFkzsMtQruIWm2p?si=P65FyMvbTS6LqMTCGx9_dA')."+
    "musica('Anna Júlia', ['Alternativo', 'Pop'], 'Los Hermanos', 'https://open.spotify.com/track/0aASUtDb1N96NJDwmWj5Gf?si=Cui489eGSnKIu04Bnq5HcA')." +
    "musica('Losin My Religion', ['Alternativo', 'Rock'], 'REM', 'https://open.spotify.com/track/31AOj9sFz2gM0O3hMARRBx?si=YmnX_kNRTz2qP5hM349P9A')." +
    "musica('Everybody Hurts', ['Alternativo', 'Rock'], 'REM', 'https://open.spotify.com/track/6PypGyiu0Y2lCDBN1XZEnP?si=nSRMKMEnT6G6kma_HV70hw')." +
    "musica('Whats up?', ['Alternativo', 'Rock'], '4 Non Blondes', 'https://open.spotify.com/track/0jWgAnTrNZmOGmqgvHhZEm?si=m0UBwIoNRGWxIzCX3ODvyw')." + 
    "musica('Like a Stone', ['Alternativo', 'Rock'], 'Audioslave', 'https://open.spotify.com/track/3YuaBvuZqcwN3CEAyyoaei?si=kqbkvjFiQVSaqh_froIpvA')."+
    "musica('Let Her Go',['Alternativo','Pop','Neofolk'],'Passenger','https://open.spotify.com/track/1RKtWeu7meOKfLS4OikFd8')."+
    "musica('Take Me To Church',['Alternativo','Blues'],'Hozier','https://open.spotify.com/track/70LrxJ5u19umvrXbC19g20')."+
    "musica('Seven Nation Army',['Alternativo','Rock'],'The White Stripes','https://open.spotify.com/track/7rbkDq2MsbWZAPiZv4uaQn')."+
    "musica('Somewhere Only We Know',['Alternativo','Pop'],'Keane','https://open.spotify.com/track/0ll8uFnc0nANY35E0Lfxvg')."+

    //rock
    "musica('Yesterday', ['Rock', 'Pop'], 'Beatles', 'https://open.spotify.com/track/3BQHpFgAp4l80e1XslIjNI?si=Ki5M61xiSLOxAI6PrZd9OA')." +
    "musica('Bohemian Rhapsody', ['Rock', 'Pop'], 'Queen', 'https://open.spotify.com/track/3z8h0TU7ReDPLIbEnYhWZb?si=WAklTnswTg-0PhPAcVBEFA')." +
    "musica('Love Of My Life', ['Rock'], 'Queen', 'https://open.spotify.com/track/4JO4B5UbDaBMX3uKOkWq3T?si=Ok-3mahVQ0KfyrWSggQcXg')." +
    "musica('Sweet Child O Mine', ['Rock', 'Heavy Metal'], 'Guns N Roses', 'https://open.spotify.com/track/7o2CTH4ctstm8TNelqjb51?si=w5BGmVRTTQOv8tK2OV93VQ')." +
    "musica('Californication', ['Rock', 'Alternativo'], 'Red Hot Chili Peppers', 'https://open.spotify.com/track/48UPSzbZjgc449aqz8bxox?si=7drqksWMTbSLMdrHq-ym2A')."+
    "musica('Wish You Were Here',['Rock'],'Pink Floyd','https://open.spotify.com/track/0myeTJ993kXE4vN0IPchcc')."+
    "musica('Another Brick In The Wall',['Rock'],'Pink Floyd','https://open.spotify.com/track/7rPzEczIS574IgPaiPieS3')."+
    "musica('Wonderwall',['Rock','Alternativo'],'Oasis','https://open.spotify.com/track/5qqabIl2vWzo9ApSC317sa')."+
    "musica('Hotel California',['Rock'],'Eagles','https://open.spotify.com/track/40riOy7x9W7GXjyGp4pjAv')."+
    "musica('Nothing Else Matters',['Rock','Heavy Metal'],'Metallica','https://open.spotify.com/track/0nLiqZ6A27jJri2VCalIUs')."+
    
    //pop
    "musica('Meu Abrigo',['Pop'],'Melim','https://open.spotify.com/track/17T7czFcChzCQrJzO4Qn1W')."+
    "musica('Ouvi Dizer',['Pop'], 'Melim','https://open.spotify.com/track/4onTqyC1g15jJFOzHJ7h6q')."+
    "musica('Dois Corações',['Pop'], 'Melim','https://open.spotify.com/track/5hq05mbpGvtUihRa3cPrhQ')."+
    "musica('Pupila',['Pop'], 'Anavitória, 'https://open.spotify.com/track/7Gk5OrMYaMRtT2JmgJVAfk')."+
    "musica('Shalow',['Pop','Rock', 'Country'], ['Lady Gaga','Bradley Cooper'],'https://open.spotify.com/track/6QfS2wq5sSC1xAJCQsTSlj',)."+
    "musica('Photograph',['Pop'], 'Ed Sheeran','https://open.spotify.com/track/1HNkqx9Ahdgi1Ixy2xkKkL')."+
    "musica('The Scientist', ['Pop', 'Rock'],'Coldplay','https://open.spotify.com/track/75JFxkI2RXiU7L9VXzMkle')."+
    "musica('Era uma vez', ['Pop'],'Kell Smith','https://open.spotify.com/track/4xeDAaJVuTCth5f99VVNJF')."+
    "musica('Só Os Loucos Sabem',['Pop','Rock'],'Charlie Brown Jr.','https://open.spotify.com/track/3nI0piSOxAik2RCpHGloB7')."+
    "musica('Malandragem',['Pop','Rock'],'Cássia Eller','https://open.spotify.com/track/2Ktn7Hg3jocizpfzYJKLty')."+
    

    //funk
    "musica('Nossa que isso?', ['Funk'],['WC no Beat', 'Djonga', 'Karol Conka'],'https://open.spotify.com/track/49p8H214EdeK34rrqCXwi9')."+
    "musica('Gaiola é o Troco', ['Funk'],'MC Du Black','https://open.spotify.com/track/3Uq45ipGutypFPmETfaoaH')."+
    "musica('Sensacional',['Funk'], ['WC no Beat', 'Matuê','Nego do Borel'],'https://open.spotify.com/track/2S9UiaHpsdB2s3ZNzCObLQ')."+
    "musica('Evoluiu',['Funk'], ['MC Kevin o Chris','Sodré'],'https://open.spotify.com/track/0WhDotK0QXigmsrlw0DxKK')."+
    "musica('Quando a Vontade Bater',['Funk'], ['Pk', 'PK Delas'],'https://open.spotify.com/track/26WpOBpHiIMoBuMEIwtOCH?si=WrQK5UtRTLWJKQBiHNQEPw')."+
    "musica('Valeu Amigo',['Funk'],'Pikeno e Menor','https://open.spotify.com/track/6RtOX88kgWcYFmsSF7nIa3?si=UKdY_o7_SRmuU9W9QMU-9Q')."+
    "musica('Fico Assim Sem Você',['Funk','Pop'],'Claudinho e Buchecha','https://open.spotify.com/track/1jgSH2KcnT2qVcLMRmEupo')."+
    "musica('Tem Café',['Funk'],['Gaab','MC Hariel'],'https://open.spotify.com/track/4lNriuYNZD2YP2OPG6xOte')."+
    "musica('Cuidado',['Funk','Eletrônica'],'Gaab','https://open.spotify.com/track/0dmw9MBJeUeeEdsFOEbIaC')."+
    "musica('Ela É do Tipo',['Funk'],'MC Kevin o Chris','https://open.spotify.com/track/2x8TNY9KwNvD19gVGs4WOP')."+

    //sertanejo
    "musica('Boate Azul',['Sertanejo'],'Bruno e Marrone','https://open.spotify.com/track/4Z20Nlp53CuArdsy0VbeTb')."+
    "musica('Todo Mundo Vai Sofrer',['Sertanejo'],'Marília Mendonça','https://open.spotify.com/track/4E6RdcCWMiHTu7zy1VTNDo')."+
    "musica('Vou Ter Que Superar',['Sertanejo'],['Matheus e Kauan','Marília Mendonça'],'https://open.spotify.com/track/6sRLrSetyIwIKhW1eMlUNP')."+
    "musica('Quando a Bad Bater',['Sertanejo'],'Luan Santana','https://open.spotify.com/track/1nVIlX3h3Ds9bH6JMQopIU?si=c6TMqZG5TrOP-Ag5PrykHg')."+
    "musica('Tijolão',['Sertanejo'],'Jorge e Mateus','https://open.spotify.com/track/6QwFUcPc5nhsqZuhXUYtV7')."+
    "musica('Evidências',['Sertanejo'],'Chitãozinho & Xororó','https://open.spotify.com/track/6JXWKlylznhLTDdyYO6iwC?si=IMTf1RcUQv-VFKDBZXzk6g')."+
    "musica('Cobaia',['Sertanejo'],['Lauana Prado','Maiara e Maraisa'],'https://open.spotify.com/track/6qDvzHbstT1Tr45okT8eN4?si=DimVZUvyT3mCeVOcjzx5Jg')."+
    "musica('Quarta Cadeira',['Sertanejo'],['Matheus e Kauan','Jorge e Mateus'],'https://open.spotify.com/track/5q0NlM6Pm8Pp3orq7zGiRn?si=aXWFlpHVQvSqffH4R_gQ5Q')."+
    "musica('Dormi Na Praça',['Sertanejo'],'Bruno e Marrone','https://open.spotify.com/track/6r9vc927Uc4qq3Zc0LpO60?si=rtRYUt0xSdq5JPGuhUaqaw')."+
    "musica('Milu',['Sertanejo'],'Gusttavo Lima','https://open.spotify.com/track/1nqaSoiLuqevDes4S18sO7?si=pI5R_V3RRZmHLFydFYOjMg')."+

    //eletronica
    "musica('Get You The Moon',['Eletrônica', 'Dance'],['Kina Beats','Snow'],'https://open.spotify.com/track/4ZLzoOkj0MPWrTLvooIuaa')."+
    "musica('Faded',['Eletrônica','House','Dance'],'Alan Walker','https://open.spotify.com/track/7gHs73wELdeycvS48JfIos')."+
    "musica('Titanium',['Eletrônica','House','Dance'],'David Guetta','https://open.spotify.com/track/0j7pTqhCfMmIgv2e4kf7ZP')."+
    "musica('Wake Me Up',['Eletrônica','Dance','Country'],'Avicii','https://open.spotify.com/track/3B0irDyS69y5eAz15xV2Ee')."+
    "musica('Hear Me Now',['Eletrônica','Dance'],'Alok','https://open.spotify.com/track/39cmB3ZoTOLwOTq7tMNqKa')."+
    "musica('Get Lucky',['Eletrônica','Dance'],'Daft Punk','https://open.spotify.com/track/69kOkLUCkxIZYexIgSG8rq')."+
    "musica('Happier',['Eletrônica','Dance'],'Marshmello,'https://open.spotify.com/track/2dpaYNEQHiRxtZbfNsse99')."+
    "musica('The Nights',['Eletrônica','Dance','House'],'Avicii','https://open.spotify.com/track/0ct6r3EGTcMLPtrXHDvVjc')."+
    "musica('Friends',['Eletrônica','Pop'],['Marshmello','Anne-marie'],'https://open.spotify.com/track/08bNPGLD8AhKpnnERrAc6G')."+
    "musica('Hey Brother',['Eletrônica','Dance'],'Avicii','https://open.spotify.com/track/2byhQfeJR3fPBFjM1ENPgT')."+

    //gospel
    "musica('A Casa É Sua',['Gospel'],'Casa Worship','https://open.spotify.com/track/3h3fui1QXImL2zRcs9v2Lc')."+
    "musica('Não Pare',['Gospel'],'Midian Lima','https://open.spotify.com/track/5CbcLnAFdpeMVVxfIWUPmF')."+
    "musica('Ousado Amor',['Gospel'],'Isaías Saad','https://open.spotify.com/track/1Pf1iSsQ7fpSQa7hG3IwQd')."+
    "musica('Lugar Secreto',['Gospel'],'Gabriela Rocha','https://open.spotify.com/track/5RKekXXd9ltF7zirPXEAb5')."+
    "musica('É Tudo Sobre Você',['Gospel'],'Ministério Morada','https://open.spotify.com/track/1tz9IZ5q3uWYkmQKnQMneO?si=tHowb8s-QZavJ0bn48vjiw')."+
    "musica('Hey Pai',['Gospel'],['Isadora Pompeo','Marcela Tais'],'https://open.spotify.com/track/4al64j4YRSZBSU0xcYC7y3')."+
    "musica('Ninguém Explica Deus',['Gospel'],'Preto No Branco','https://open.spotify.com/track/682XjN6L1Qhs5rXbuGSQKK')."+
    "musica('Em Teus Braços',['Gospel'],'Laura Souguellis','https://open.spotify.com/track/1lymSqz42DeEn03NMn9BiT')."+
    "musica('Sou Casa',['Gospel'],'Elizeu Alves','https://open.spotify.com/track/5TRRTSIsEzdxjG56pKBXvi')."+
    "musica('Jó',['Gospel'],'Midian Lima','https://open.spotify.com/track/4Rl8zW6Jx7fGePFjp9IBh7')."+
    
    //MPB
    "musica('Trem-Bala',['MPB'],'Ana Vilela','https://open.spotify.com/track/66O1SfDryBYk9i3RcV5AXq')."+
    "musica('Sozinho',['MPB'],'Caetano Veloso','https://open.spotify.com/track/6amIJNwZyP28zjn2k1bic6')."+
    "musica('Chão de Giz',['MPB','Pop'],'Zé Ramalho','https://open.spotify.com/track/68mW6JloRbnPziPftal3Nm')."+
    "musica('Velha Infância',['MPB'],'Tribalistas','https://open.spotify.com/track/3KYlOzxN5xO7eEauO1VF06')."+
    "musica('Gostava Tanto de Você',['MPB'],'Tim Maia','https://open.spotify.com/track/6eDMElxeeKXs4DHTb0dGP0')."+
    "musica('Anunciação',['MPB'],'Alceu Valença','https://open.spotify.com/track/661Ns9G25zHdih4qVshBO7')."+
    "musica('Sinônimo',['MPB'],'Zé Ramalho','https://open.spotify.com/track/5wn7dRsPFOd236GySyJqLx')."+
    "musica('Eu Te Devoro',['MPB'],'Djavan','https://open.spotify.com/track/2Px3PZ2qq2uFpRBpfVx8A5')."+
    "musica('Oceano',['MPB'],'Djavan','https://open.spotify.com/track/3l8Hah55x0c1wD13R4ZogI')."+
    "musica('La Belle De Jour',['MPB'],'Alceu Valença','https://open.spotify.com/track/0c8aqUb7e0K9uNhxejfV23').";
session.consult(program);

// Consulta 
session.query("musica(X, Y, Z, A).");

session.answers(x => console.log(pl.format_answer(x)));

