function setVH() {
    // Устанавливаем CSS-переменную --vh на основе текущей высоты окна
    document.documentElement.style.setProperty('--vh', `${window.innerHeight / 100}px`);
}

// Вызываем функцию при загрузке страницы
setVH();

// Обновляем значение при изменении размеров окна
window.addEventListener('resize', setVH);
