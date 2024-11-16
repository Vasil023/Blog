const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('config');
const authRoutes = require('./routes/auth.routes');
const recipeRoutes = require('./routes/recipe.routes');

const app = express();

// Налаштування CORS
app.use(cors());

// Middleware для обробки JSON у вхідних запитах
app.use(express.json({ limit: '10mb' })); // Обмеження, якщо потрібно

// Підключення до MongoDB
mongoose.connect(config.get('mongoUrl'))
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Використання маршрутів з різними префіксами
app.use('/api/auth', authRoutes);
app.use('/api/recipes', recipeRoutes);

// Catch-all route for SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

const PORT = config.get('port') || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
