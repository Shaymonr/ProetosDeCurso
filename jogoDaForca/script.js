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
