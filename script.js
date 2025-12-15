document.addEventListener('DOMContentLoaded', () => {
    const snowContainer = document.querySelector('.snow-container');
    const numberOfSnowflakes = 150; // Cantidad de nieve

    for (let i = 0; i < numberOfSnowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');

        // Posición horizontal aleatoria (0% a 100% del ancho)
        const startPosition = Math.random() * 100; 
        snowflake.style.left = `${startPosition}vw`;

        // Tamaño aleatorio (entre 2px y 5px)
        const size = Math.random() * 3 + 2; 
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;

        // Duración de la caída aleatoria (más lento o más rápido)
        const duration = Math.random() * 15 + 10; 
        snowflake.style.animationDuration = `${duration}s`;

        // Retraso para que no caigan todos al mismo tiempo
        const delay = Math.random() * 10; 
        snowflake.style.animationDelay = `${delay}s`;
        
        // Opacidad aleatoria (para efecto de profundidad)
        snowflake.style.opacity = Math.random().toFixed(2);

        snowContainer.appendChild(snowflake);
    }
});