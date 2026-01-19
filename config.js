// Конфигурационный файл для frontend приложения
// ВАЖНО: Этот файл нужно обновить с реальным URL вашего Render сервера перед деплоем

// URL для WebSocket соединения
// Для локальной разработки
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
  window.BACKEND_WS_URL = 'localhost:3000';
} else {
  // Для продакшена используем реальный URL Render сервера
    // ВАЖНО: WebSocket соединения должны идти на BACKEND сервер (на Render), а не на FRONTEND (на Netlify)
    // URL frontend: https://wondrous-jalebi-bde9b9.netlify.app/ (НЕ использовать для WebSocket!)
    // URL backend: https://ai-call-backend-esj7.onrender.com (реальный URL сервера)
    //
    // Используем реальный URL Render сервера
    window.BACKEND_WS_URL = 'ai-call-backend-esj7.onrender.com'; // Реальный URL сервера
}