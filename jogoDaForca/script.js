const palavra = 'FORCA'; // palavra para exemplo
const container = document.getElementById('palavra-container');

// Cria os quadrados vazios inicialmente
for (let i = 0; i < palavra.length; i++) {
  const div = document.createElement('div');
  div.classList.add('letra-quadrado');
  container.appendChild(div);
}

// Exemplo de preencher as letras (você faria isso conforme o jogador chuta)
const quadrados = container.children;
for (let i = 0; i < palavra.length; i++) {
  quadrados[i].textContent = palavra[i];
  // quadrados[i].classList.add('acertou'); // exemplo de cor
}
function criarTeclado() {
  const linhas = [
    ['Q','W','E','R','T','Y','U','I','O','P'],
    ['A','S','D','F','G','H','J','K','L'],
    ['Z','X','C','V','B','N','M']
  ];

  const tecladoContainer = document.getElementById('teclado-container');

  linhas.forEach(letras => {
    const linhaDiv = document.createElement('div');
    linhaDiv.classList.add('teclado-linha');

    letras.forEach(letra => {
      const botao = document.createElement('button');
      botao.textContent = letra;
      botao.classList.add('tecla');

      botao.addEventListener('click', () => {
        botao.disabled = true; // desativa após clicar
        verificarLetra(letra); // essa é a função que você vai criar ou já tem
      });

      linhaDiv.appendChild(botao);
    });

    tecladoContainer.appendChild(linhaDiv);
  });
}
criarTeclado();
