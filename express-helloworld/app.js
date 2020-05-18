var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Olá Mundo!\n');
});

app.get('/mars', function (req, res) {
  res.send('Olá Marte!\n');
});

app.get('/Isadora', function (req, res) {
  res.send('Olá Isadora, tudo bem? Você tem 8 anos, mas completará 9 aninhos no dia 11 de junho. Você está crescendo e está maravilhosa. Continue estudando, não pare de ler os livros e foque em matemática. Seus pais te amam demais!!!\n');
});

app.get('/Gabriel', function (req, res) {
  res.send('Oi Biel, você está bem? Estou sabendo que você acabou de completar 2 aninhos ... uau ... O seu bolo de chocolate da Patrulha Canina com os personagens estava uma delícia, certo?\n');
});

app.get('/Joao', function (req, res) {
  res.send('Como você está João? Logo, você completará 5 anos. Você está cuidando bem da vovó? O Gabriel e a Isadora estão morrendo de saudades de todos vocês.\n');
});

app.get('/Ana', function (req, res) {
  res.send('Oi ... Tudo bem contigo hoje? Vai para onde agora? Depois me ligue, ok?\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});