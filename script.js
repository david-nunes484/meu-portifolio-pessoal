// Saudação personalizada com base no horário
window.addEventListener('load', () => {
  const hora = new Date().getHours();
  let saudacao = "Olá";

  if (hora < 12) {
    saudacao = "Bom dia";
  } else if (hora < 18) {
    saudacao = "Boa tarde";
  } else {
    saudacao = "Boa noite";
  }

  alert(`${saudacao}! Bem-vindo(a) ao portfólio do David.`);
});

// Validação do formulário de contato
document.getElementById('form-contato').addEventListener('submit', function(event) {
  const nome = document.getElementById('nome');
  const email = document.getElementById('email');
  const mensagem = document.getElementById('mensagem');

  let erro = false;

  // Função para destacar campos com erro
  function marcarErro(campo) {
    campo.style.border = '2px solid red';
    erro = true;
  }

  // Limpa estilos anteriores
  [nome, email, mensagem].forEach(campo => campo.style.border = '');

  // Verifica se os campos estão preenchidos
  if (nome.value.trim() === '') marcarErro(nome);
  if (email.value.trim() === '') marcarErro(email);
  if (mensagem.value.trim() === '') marcarErro(mensagem);

  if (erro) {
    alert('Por favor, preencha todos os campos corretamente.');
    event.preventDefault(); // Impede envio
  } else {
    alert('Mensagem enviada com sucesso!');
  }
});

// Contador de caracteres na mensagem
const mensagemInput = document.getElementById('mensagem');
const contador = document.createElement('small');
contador.style.display = 'block';
contador.style.marginTop = '5px';
mensagemInput.parentNode.insertBefore(contador, mensagemInput.nextSibling);

mensagemInput.addEventListener('input', () => {
  const total = mensagemInput.value.length;
  contador.textContent = `Caracteres: ${total}/500`;
});