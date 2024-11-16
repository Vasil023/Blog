const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv').config();
const authRoutes = require('./routes/auth.routes');
const recipeRoutes = require('./routes/recipe.routes');

const url = dotenv.parsed.ATLAS_URL || '';
const port = dotenv.parsed.PORT || 3000;

const app = express();

// Налаштування CORS
app.use(cors());

// Middleware для обробки JSON у вхідних запитах
app.use(express.json({ limit: '10mb' })); // Обмеження, якщо потрібно

// Підключення до MongoDB
mongoose.connect(url)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Використання маршрутів з різними префіксами
app.use('/api/auth', authRoutes);
app.use('/api/recipes', recipeRoutes);

// Catch-all route for SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

const PORT = port || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
