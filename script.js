var Novamente = 'SIM'
alert('Bem vindo ao melhor JoKenPô! Vamos jogar!')
while (Novamente == 'SIM'){
  var i=0;
  var EscolhaMaquina = Math.floor(Math.random()*3)+1;
  if (EscolhaMaquina == '1'){
    ConversaoM = 'Pedra';
  }
  else if (EscolhaMaquina == '2'){
    ConversaoM = 'Papel';
  }
  else{
    ConversaoM = 'Tesoura';
  }
  while(i<1){
    var EscolhaPessoa = prompt('Escolha entre pedra, papel ou tesoura');
    var Conversao = 0;
    EscolhaPessoa = EscolhaPessoa.toLowerCase();
    if(EscolhaPessoa == 'pedra'){
      Conversa = 1;
      i=1;
    }
    else if (EscolhaPessoa == 'papel'){
      Conversao = 2;
      i=1;
    }
    else if (EscolhaPessoa == 'tesoura'){
      Conversao = 3;
      i=1;
    }
    else{
  alert('Entrada de dado invalida, tente novamente.');
  i=0;
} 
    }
  alert ('Seu oponente escolheu ' + ConversaoM)
  if (Conversao == '1' && EscolhaMaquina == '3'){
      alert('Você ganhou!');
}
  else if (Conversao == '1' && EscolhaMaquina == '2'){
      alert('Você perdeu!');
}
  else if (Conversao == '2' && EscolhaMaquina == '1'){
    alert('Você ganhou!');
}
  else if (Conversao == '2' && EscolhaMaquina == '3'){
  alert('Você perdeu!');
}
  else if (Conversao == '3' && EscolhaMaquina == '1'){
  alert('Você perdeu!');
}
  else if (Conversao == '3' && EscolhaMaquina == '2'){
  alert('Você ganhou!');
}
  else{
    alert('Deu empate, tente mais uma vez!');
}
  Novamente = prompt('Você deseja jogar novamente?');
  Novamente = Novamente.toUpperCase();
}
alert('Adorei jogar com você, até a próxima!');