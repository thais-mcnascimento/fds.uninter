let botao = document.getElementById('meuBotao');
const mensagem = document.getElementById("mensagem");

  botao.addEventListener('click', function() {
    mensagem.innerHTML = "Não olhe para trás!😱";
    botao.style.backgroundColor = 'red';
    botao.style.color = 'black';
  });

