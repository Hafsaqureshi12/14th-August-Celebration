
window.addEventListener('DOMContentLoaded', (event) => {
    const textElements = document.querySelectorAll('.text-container p');
    
    textElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }, index * 500); 
    });
});

// 
