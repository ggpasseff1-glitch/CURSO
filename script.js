// Countdown Timer
function updateCountdown() {
    const now = new Date();
    const endTime = new Date();
    
    // Configurar para terminar em 2 horas e 45 minutos
    endTime.setHours(now.getHours() + 2);
    endTime.setMinutes(now.getMinutes() + 45);
    endTime.setSeconds(now.getSeconds() + 30);
    
    const timeLeft = endTime - now;
    
    if (timeLeft <= 0) {
        document.getElementById('countdown-timer').innerHTML = 
            '<span class="countdown-expired">OFERTA EXPIRADA!</span>';
        return;
    }
    
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Atualizar contador a cada segundo
setInterval(updateCountdown, 1000);
updateCountdown(); // Executar imediatamente

// FAQ Accordion
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isActive = this.classList.contains('active');
            
            // Fechar todas as outras respostas
            document.querySelectorAll('.faq-question').forEach(q => {
                q.classList.remove('active');
                q.nextElementSibling.classList.remove('open');
            });
            
            // Se não estava ativo, abrir esta
            if (!isActive) {
                this.classList.add('active');
                answer.classList.add('open');
            }
        });
    });
    
    // Abrir primeira pergunta por padrão
    if (faqQuestions.length > 0) {
        faqQuestions[0].classList.add('active');
        faqQuestions[0].nextElementSibling.classList.add('open');
    }
});

// Smooth Scroll para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Simulação de download (na página de obrigado)
if (window.location.pathname.includes('obrigado') || window.location.pathname.endsWith('obrigado.html')) {
    // Simular links de download (no Lowify real, você configuraria links reais)
    const downloadMain = document.getElementById('downloadMain');
    const downloadBonus = document.getElementById('downloadBonus');
    
    if (downloadMain) {
        downloadMain.addEventListener('click', function(e) {
            e.preventDefault();
            alert('No Lowify real, este botão baixaria automaticamente o ebook principal. Configure a entrega automática na plataforma Lowify.');
            // No Lowify real: window.location.href = 'LINK_DO_SEU_EBOOK_PRINCIPAL.pdf';
        });
    }
    
    if (downloadBonus) {
        downloadBonus.addEventListener('click', function(e) {
            e.preventDefault();
            alert('No Lowify real, este botão baixaria automaticamente o ebook bônus. Configure a entrega automática na plataforma Lowify.');
            // No Lowify real: window.location.href = 'LINK_DO_SEU_EBOOK_BONUS.pdf';
        });
    }
}

// WhatsApp Click Tracking
document.querySelectorAll('a[href*="whatsapp"]').forEach(link => {
    link.addEventListener('click', function() {
        console.log('Clique no WhatsApp detectado');
        // Você pode adicionar Google Analytics aqui
        // gtag('event', 'click', { 'event_category': 'WhatsApp', 'event_label': 'Suporte' });
    });
});

// Email Click Tracking
document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', function() {
        console.log('Clique no email detectado');
        // Você pode adicionar Google Analytics aqui
        // gtag('event', 'click', { 'event_category': 'Email', 'event_label': 'Suporte' });
    });
});
