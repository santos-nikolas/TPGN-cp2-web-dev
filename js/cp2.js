// Função para obter um número aleatório dentro de um determinado intervalo
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Função para alternar a visibilidade da imagem e alterar a cor do texto
  function toggleImageVisibility() {
    var divs = document.getElementsByClassName('imagem-div');
    var randomIndex = getRandomNumber(0, divs.length - 1);
    var randomDiv = divs[randomIndex];
    var image = randomDiv.getElementsByTagName('img')[0];
    var text = randomDiv.getElementsByClassName('imagem-texto')[0];
  
    // Altera a visibilidade da imagem
    image.style.display = 'none';
  
    // Altera a cor do texto para preto
    text.style.color = '#000';
    text.style.top = '30%'
    // Aguarda 1,5 segundos e depois restaura a visibilidade da imagem e a cor do texto
    setTimeout(function() {
      image.style.display = 'block';
      text.style.color = '#fff';
      text.style.top = '-70%';
    }, 500);
  }
  
  // Chama a função toggleImageVisibility a cada 0,5 segundos
  setInterval(toggleImageVisibility, 200);
  