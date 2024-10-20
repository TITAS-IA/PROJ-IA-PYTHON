var Password = document.getElementById('password')
var ConfirmPassword = document.getElementById('confirm-password')
var Error = document.getElementById('error')
var SubmitButton = document.querySelector('button[type="submit"]')

// Inicialmente, oculta a mensagem de erro
Error.style.display = 'none'

SubmitButton.addEventListener('click', function(event) {
    // Previne o envio do formulário
    event.preventDefault()

    // Verifica se as senhas coincidem
    if (Password.value !== ConfirmPassword.value) {
        Error.style.display = 'block'
        Error.style.color = 'red'
    } else {
        Error.style.display = 'none' // Oculta a mensagem de erro
        window.location.href = 'home.html' // Redireciona para home.html
    }
})

var showPasswordCheckbox = document.getElementById('show-password')

showPasswordCheckbox.addEventListener('change', function() {
    if (showPasswordCheckbox.checked) {
        Password.type = 'text'; // Muda o tipo para 'text' para mostrar a senha
        ConfirmPassword.type = 'text'; // Também muda o tipo do campo de confirmação
    } else {
        Password.type = 'password'; // Volta para 'password' para ocultar a senha
        ConfirmPassword.type = 'password'; // Também volta para 'password' no campo de confirmação
    }
});
