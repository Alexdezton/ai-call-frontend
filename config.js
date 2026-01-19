// Конфигурационный файл для frontend приложения

// URL для WebSocket соединения
// Для локальной разработки
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
  window.BACKEND_WS_URL = 'localhost:3000';
} else {
  // Для продакшена укажите URL вашего Render сервера
  // Пример: 'your-app-name.onrender.com'
  window.BACKEND_WS_URL = 'ai-call-backend-xxx.onrender.com'; // ЗАМЕНИТЕ НА ВАШ РЕАЛЬНЫЙ URL
}