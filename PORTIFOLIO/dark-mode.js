document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const darkModeStyle = document.getElementById('dark-mode-style');
    const icon = darkModeToggle.querySelector('i');
    
    // Verificar preferência do sistema
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Verificar preferência salva ou usar a do sistema
    const savedMode = localStorage.getItem('darkMode') || (systemPrefersDark ? 'enabled' : 'disabled');
    
    if (savedMode === 'enabled') {
        enableDarkMode();
    }
    
    // Alternar modo escuro
    darkModeToggle.addEventListener('click', function() {
        if (darkModeStyle.disabled) {
            enableDarkMode();
            localStorage.setItem('darkMode', 'enabled');
        } else {
            disableDarkMode();
            localStorage.setItem('darkMode', 'disabled');
        }
    });
    
    // Atualizar quando a preferência do sistema mudar
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (localStorage.getItem('darkMode') === null) {
            if (e.matches) {
                enableDarkMode();
            } else {
                disableDarkMode();
            }
        }
    });
    
    function enableDarkMode() {
        darkModeStyle.disabled = false;
        icon.classList.replace('fa-moon', 'fa-sun');
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    
    function disableDarkMode() {
        darkModeStyle.disabled = true;
        icon.classList.replace('fa-sun', 'fa-moon');
        document.documentElement.setAttribute('data-theme', 'light');
    }
});