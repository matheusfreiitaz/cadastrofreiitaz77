document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (!contactForm) return;
    
    // Criar elemento de mensagem de sucesso
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.style.display = 'none';
    contactForm.parentNode.insertBefore(successMessage, contactForm.nextSibling);
    
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.innerHTML;
        
        try {
            // Mostrar estado de carregamento
            submitButton.disabled = true;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            
            // Usar EmailJS para enviar o formulário
            await emailjs.sendForm(
                'service_your_service_id', 
                'template_your_template_id', 
                contactForm
            );
            
            // Sucesso - resetar formulário e mostrar mensagem
            contactForm.reset();
            successMessage.textContent = 'Mensagem enviada com sucesso! Entrarei em contato em breve.';
            successMessage.style.display = 'block';
            
            // Esconder mensagem após 5 segundos
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
            
        } catch (error) {
            console.error('Erro ao enviar mensagem:', error);
            alert('Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.');
        } finally {
            submitButton.disabled = false;
            submitButton.innerHTML = originalButtonText;
        }
    });
});