
const Password = document.getElementById('password')
const ConfirmPassword = document.getElementById('confirm-password')
const Error = document.getElementById('error')
const SubmitButton = document.querySelector('button[type="submit"]')
const Nickname = document.getElementById('name')
const showPasswordCheckbox = document.getElementById('show-password')
var i = 0, u = 0, l = 0
// Inicialmente, oculta a mensagem de erro
Error.style.display = 'none'

SubmitButton.addEventListener('click', function (event) {
    // Previne o envio do formulário
    event.preventDefault()

    // Verifica se o nickname está vazio
    if (Nickname.value.trim() === '') {
        alert('Por favor, insira seu nome')
    } else {
        if (i < 1){
            i++
        }
    }
    // Verifica se as senhas estão vazias
    if (Password.value.trim() === '' || ConfirmPassword.value.trim() === '') {
        alert('Por favor, insira sua senha')
    } else {
        if (u < 1){
            u++
        }
    }
    // Verifica se as senhas coincidem
    if (Password.value !== ConfirmPassword.value) {
        Error.style.display = 'block'
        Error.style.color = 'red'
    } else {
        Error.style.display = 'none' // Oculta a mensagem de erro
        if (l < 1){
            l++
        }
    }
    // Se tudo estiver correto, redireciona
    if (i == 1 && u == 1 && l == 1) {
        window.location.href = 'home.html'
    }

})

showPasswordCheckbox.addEventListener('change', function () {
    if (showPasswordCheckbox.checked) {
        Password.type = 'text' // Muda o tipo para 'text' para mostrar a senha
        ConfirmPassword.type = 'text'
    } else {
        Password.type = 'password' // Volta para 'password' para ocultar a senha
        ConfirmPassword.type = 'password'
    }
})
