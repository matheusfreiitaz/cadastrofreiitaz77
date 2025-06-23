document.addEventListener('DOMContentLoaded', () => {
    // Observador de interseção para animações
    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Animar cards de projeto em sequência
                if (entry.target.classList.contains('projects-grid')) {
                    const cards = entry.target.querySelectorAll('.project-card');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, index * 150);
                    });
                }
                
                // Animar itens de habilidade em sequência
                if (entry.target.classList.contains('skills-grid')) {
                    const items = entry.target.querySelectorAll('.skill-item');
                    items.forEach((item, index) => {
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, index * 100);
                    });
                }
                
                // Animar itens da linha do tempo em sequência
                if (entry.target.classList.contains('timeline')) {
                    const items = entry.target.querySelectorAll('.timeline-item');
                    items.forEach((item, index) => {
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, index * 200);
                    });
                }
            }
        });
    };
    
    // Criar observador
    const observer = new IntersectionObserver(animateOnScroll, {
        threshold: 0.1
    });
    
    // Observar seções
    document.querySelectorAll('.section, .projects-grid, .skills-grid, .timeline').forEach(section => {
        observer.observe(section);
    });
    
    // Animação de flutuação para a imagem do hero
    const heroImage = document.querySelector('.hero-image img');
    if (heroImage) {
        setInterval(() => {
            heroImage.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                heroImage.style.transform = 'translateY(0)';
            }, 1000);
        }, 2000);
    }
});