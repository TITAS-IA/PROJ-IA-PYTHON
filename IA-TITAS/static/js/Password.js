const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const errorMessage = document.getElementById('error');
const submitButton = document.querySelector('button[type="submit"]');
const nicknameInput = document.getElementById('name');
const showPasswordCheckbox = document.getElementById('show-password');
const inputs = [nicknameInput, passwordInput, confirmPasswordInput];

// Inicialmente, oculta a mensagem de erro
errorMessage.style.display = 'none';

submitButton.addEventListener('click', function (event) {
    // Previne o envio do formulário
    event.preventDefault();

    let isNicknameValid = false;
    let arePasswordsFilled = false;
    let doPasswordsMatch = false;

    // Verifica se o nickname está vazio
    if (nicknameInput.value.trim() === '') {
        alert('Por favor, insira seu nome');
    } else {
        isNicknameValid = true;
    }

    // Verifica se as senhas estão vazias
    if (passwordInput.value.trim() === '' || confirmPasswordInput.value.trim() === '') {
        alert('Por favor, insira sua senha');
    } else {
        arePasswordsFilled = true;
    }

    // Verifica se as senhas coincidem
    if (passwordInput.value !== confirmPasswordInput.value) {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'As senhas não coincidem.';
        errorMessage.style.color = 'red';
    } else {
        errorMessage.style.display = 'none'; // Oculta a mensagem de erro
        doPasswordsMatch = true;
    }

    // Se tudo estiver correto, redireciona
    if (isNicknameValid && arePasswordsFilled && doPasswordsMatch) {
        window.location.href = 'home.html';
    }
});

// Função para mudar o foco para o próximo campo ao pressionar "Enter"
inputs.forEach((input, index) => {
    input.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevenir envio do formulário
            if (index < inputs.length - 1) {
                inputs[index + 1].focus(); // Vai para o próximo input
            } else {
                submitButton.click(); // Aciona o botão de envio no último input
            }
        }
    });
});

// Função para mostrar/ocultar a senha
showPasswordCheckbox.addEventListener('change', function () {
    const passwordType = showPasswordCheckbox.checked ? 'text' : 'password';
    passwordInput.type = passwordType;
    confirmPasswordInput.type = passwordType;
});
