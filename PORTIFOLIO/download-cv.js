document.addEventListener('DOMContentLoaded', function() {
    const downloadCvButton = document.getElementById('download-cv');
    
    if (!downloadCvButton) return;
    
    downloadCvButton.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Criar link temporário para download
        const link = document.createElement('a');
        link.href = 'assets/images/cv.pdf';
        link.download = 'Matheus_Freitas_Curriculo.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Feedback visual
        const originalText = downloadCvButton.innerHTML;
        downloadCvButton.innerHTML = '<i class="fas fa-check"></i> Download iniciado!';
        
        setTimeout(() => {
            downloadCvButton.innerHTML = originalText;
        }, 3000);
    });
});