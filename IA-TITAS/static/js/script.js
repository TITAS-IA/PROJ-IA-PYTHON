document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn')
    const starter = document.getElementById('starter')
    
    // Efeito de partículas no background
    const createParticle = () => {
        const particle = document.createElement('div')
        particle.className = 'particle'
        document.body.appendChild(particle)
        
        const size = Math.random() * 5 + 2
        const x = Math.random() * window.innerWidth
        const y = Math.random() * window.innerHeight
        
        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
        `
        
        setTimeout(() => {
            particle.remove()
        }, 7000)
    }
    
    // Criar partículas periodicamente
    setInterval(createParticle, 300)
    
    // Efeito hover no botão
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        
        btn.style.setProperty('--x', `${x}px`)
        btn.style.setProperty('--y', `${y}px`)
    })
    
    // Adicionar efeito de clique
    btn.addEventListener('click', () => {
        btn.classList.add('clicked')
        
        // Simular carregamento
        setTimeout(() => {
            window.location.href = '/inicio'  // ou qualquer outra rota desejada
        }, 500)
    })
    
    // Efeito de parallax suave
    document.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.005
        const moveY = (e.clientY - window.innerHeight / 2) * 0.005
        
        starter.style.transform = `translate(${moveX}px, ${moveY}px)`
    })
})

