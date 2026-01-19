// Конфигурационный файл для frontend приложения
// ВАЖНО: Этот файл нужно обновить с реальным URL вашего Render сервера перед деплоем

// URL для WebSocket соединения
// Для локальной разработки
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
  window.BACKEND_WS_URL = 'localhost:3000';
} else {
  // Для продакшена ОБЯЗАТЕЛЬНО укажите реальный URL вашего Render сервера
  // ВАЖНО: WebSocket соединения должны идти на BACKEND сервер (на Render), а не на FRONTEND (на Netlify)
  // URL frontend: https://wondrous-jalebi-bde9b9.netlify.app/ (НЕ использовать для WebSocket!)
  // URL backend: должен быть на Render (например: your-app-name.onrender.com)
  //
  // Чтобы найти URL вашего Render сервера:
  // 1. Зайдите на https://dashboard.render.com/
  // 2. Найдите ваш веб-сервис для ai-call-backend
  // 3. Скопируйте URL из поля "Public URL"
  // Пример: 'https://your-app-name.onrender.com' (без https:// в начале!)
  window.BACKEND_WS_URL = 'VASH_REALNYI_RENDER_SERVER_URL.onrender.com'; // ЗАМЕНИТЕ НА ВАШ РЕАЛЬНЫЙ URL СЕРВЕРА
}