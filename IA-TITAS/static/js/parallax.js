const starter = document.getElementById('starter')

document.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.005
    const moveY = (e.clientY - window.innerHeight / 2) * 0.005
    
    starter.style.transform = `translate(${moveX}px, ${moveY}px)`
})