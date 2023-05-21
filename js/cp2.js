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
    // Aguarda 0,5 segundo e depois restaura a visibilidade da imagem e a cor do texto
    setTimeout(function() {
      image.style.display = 'block';
      text.style.color = '#fff';
      text.style.top = '-70%';
    }, 500);
  }
  
  // Chama a função toggleImageVisibility a cada 200 milisegundos
  setInterval(toggleImageVisibility, 200);

// Variável de controle para verificar o estado atual da ordem das divs
var reverseOrder = false;

// Event listener para o botão
var reverseButton = document.getElementById('reverseButton');
reverseButton.addEventListener('click', reverseDivs);

// Função para inverter a ordem das divs
function reverseDivs() {
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
    if (reverseOrder) {
      div.getElementsByClassName('imagem-texto')[0].textContent = 'Div-' + (divArray.length - index);
    } else {
      div.getElementsByClassName('imagem-texto')[0].textContent = 'Div-' + (index + 1);
    }
  });

  // Inverte o valor da variável de controle
  reverseOrder = !reverseOrder;
}


// var darkModeToggle = document.getElementById('darkModeToggle');
// darkModeToggle.addEventListener('click', toggleDarkMode);

// function toggleDarkMode() {
//   var container = document.querySelector('.container');
  
//   // Verifica se o modo escuro está ativado
//   if (container.style.backgroundColor === 'rgb(221, 217, 217)') {
//     // Modo escuro ativado, define a cor do modo escuro
//     container.style.backgroundColor = 'black';
//     darkModeToggle.innerText = 'Light Mode';
//   } else {
//     // Modo escuro desativado, remove a cor do modo escuro
//     container.style.backgroundColor = 'rgb(221, 217, 217)';
//     darkModeToggle.textContent = 'Dark Mode';
//   }
// }

var darkModeToggle = document.getElementById('darkModeToggle');
var isDarkMode = false; // Variável de controle para verificar o estado do modo escuro

darkModeToggle.addEventListener('click', toggleDarkMode);

function toggleDarkMode() {
  var container = document.querySelector('.container');

  isDarkMode = !isDarkMode; // Inverte o estado do modo escuro

  if (isDarkMode) {
    // Modo escuro ativado, define a cor do modo escuro
    container.style.backgroundColor = 'black';
    darkModeToggle.innerHTML = 'Light Mode';
  } else {
    // Modo escuro desativado, define a cor do modo claro
    container.style.backgroundColor = 'rgb(221, 217, 217)';
    darkModeToggle.innerHTML = 'Dark Mode';
  }
}

