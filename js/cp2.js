// Função para obter um número aleatório dentro de um determinado intervalo
function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Função para alternar a visibilidade da imagem e alterar a cor do texto
  function desapareceImagem() {
    var divs = document.getElementsByClassName('imagem-div');
    var indiceAleatorio = numeroAleatorio(0, divs.length - 1);
    var divAleatoria = divs[indiceAleatorio];
    var imagem = divAleatoria.getElementsByTagName('img')[0];
    var texto = divAleatoria.getElementsByClassName('imagem-texto')[0];
  
    // Altera a visibilidade da imagem
    imagem.style.display = 'none';
  
    // Altera a cor do texto para preto
    texto.style.color = '#000';
    texto.style.top = '30%'
    // Aguarda 0,5 segundo e depois restaura a visibilidade da imagem e a cor do texto
    setTimeout(function() {
      imagem.style.display = 'block';
      texto.style.color = '#fff';
      texto.style.top = '-70%';
    }, 500);
  }
  
  // Chama a função desapareceImagem() a cada 200 milisegundos
  setInterval(desapareceImagem, 200);

// Variável de controle para verificar o estado atual da ordem das divs
var mudarOrdem = true;

// Event listener para o botão
var inverterBotao = document.getElementById('reverseButton');
inverterBotao.addEventListener('click', inverterDivs);

// Função para inverter a ordem das divs
function inverterDivs() {
  var container = document.querySelector('.container');
  var divs = container.children;

  var divArray = Array.from(divs);


  // Inverte a ordem dos elementos na matriz
  divArray.reverse();

  // Limpa o conteúdo atual do container
  container.innerHTML = '';

  // Adiciona as divs invertidas de volta ao container
  divArray.forEach(function (div, index) {
    container.appendChild(div);
    if (mudarOrdem) {
      div.getElementsByClassName('imagem-texto')[0].textContent = 'Div-' + (divArray.length - index);
    } else {
      div.getElementsByClassName('imagem-texto')[0].textContent = 'Div-' + (index + 1);
    }
  });
  

  // Inverte o valor da variável de controle
  mudarOrdem = !mudarOrdem;
}

var mudarTema = document.getElementById('darkModeToggle');
var darkMode = false; // Variável de controle para verificar o estado do modo escuro

mudarTema.addEventListener('click', mudarTema);

function mudarTema() {
  var container = document.querySelector('body');

  darkMode = !darkMode; // Inverte o estado do modo escuro
  if (darkMode) {
    // Modo escuro ativado, define a cor do modo escuro
    container.style.backgroundColor = 'black';
  } else {
    // Modo escuro desativado, define a cor do modo claro
    container.style.backgroundColor = 'rgb(221, 217, 217)';
  }
// Alterna entre modo escuro e modo claro qusndo botao do tema é pressionado
  var botaoTema = document.getElementById("darkModeToggle");
  if (botaoTema.innerHTML === "Dark Mode") {
    botaoTema.innerHTML = "Light Mode";
  } else {
    botaoTema.innerHTML = "Dark Mode";
  }
}

