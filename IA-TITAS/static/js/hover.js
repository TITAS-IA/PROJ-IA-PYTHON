const btn = document.getElementById('btn')

btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    btn.style.setProperty('--x', `${x}px`)
    btn.style.setProperty('--y', `${y}px`)
})

// Adicionar efeito de clique e redirecionamento
btn.addEventListener('click', () => {
    btn.classList.add('clicked')
    window.location.href = '/inicio'
})