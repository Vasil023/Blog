const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv').config();
const path = require('path'); // Додано для роботи з шляхами
const { createProxyMiddleware } = require('http-proxy-middleware');
const authRoutes = require('./routes/auth.routes');
const recipeRoutes = require('./routes/recipe.routes');

const url = process.env.MONGODB_URI || 'mongodb+srv://myblogactivation:cyKjAufKOSA9lLGW@cooking.bgsxm.mongodb.net/test?retryWrites=true&w=majority&appName=cooking';
const PORT = process.env.PORT || 3000; // Використовуємо process.env.PORT для Heroku

const corsOptions = {
  origin: 'http://localhost:3000', // або ваш фронтенд домен
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // Якщо ви працюєте з cookie або автентифікацією
};


const app = express();

// Проксі для API запитів, якщо це локальне середовище
if (process.env.NODE_ENV === 'development') {
  app.use('/api', createProxyMiddleware({
    target: 'http://localhost:3000', // Ваш API сервер, якщо він працює на іншому порту
    changeOrigin: true,
    pathRewrite: { '^/api': '' }, // Перезаписуємо шлях, якщо потрібно
  }));
}

// Статичні файли
app.use(express.static(path.join('client', 'dist')));

// Налаштування CORS
app.use(cors(corsOptions));

// Middleware для обробки JSON у вхідних запитах
app.use(express.json({ limit: '50mb' })); // Обмеження, якщо потрібно

// Підключення до MongoDB
mongoose.connect(url)
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Вихід з програми, якщо не вдалося підключитись до бази
  });

// Використання маршрутів з різними префіксами
app.use('/api/auth', authRoutes);
app.use('/api/recipes', recipeRoutes);

// Catch-all route for SPA (обробка запитів до фронтенду)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
