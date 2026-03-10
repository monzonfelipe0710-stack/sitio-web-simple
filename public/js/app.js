const inputElement = document.getElementById('text-input');
const buttonElement = document.getElementById('theme-toggle');

// Lógica de la caja de texto
inputElement.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const text = inputElement.value.trim();
        if (text) {
            alert(`Texto ingresado: ${text}`);
            inputElement.value = '';
        }
    }
});

// Lógica de rotación de temas
const themes = ['blanco', 'negro', 'celeste'];
let currentThemeIndex = 0;

buttonElement.addEventListener('click', () => {
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    document.documentElement.setAttribute('data-theme', themes[currentThemeIndex]);
});