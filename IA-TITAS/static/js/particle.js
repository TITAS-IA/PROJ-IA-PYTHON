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
})