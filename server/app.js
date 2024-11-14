const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('config');
const authRoutes = require('./routes/auth.routes');

const app = express();

// Налаштування CORS
app.use(cors());

// Додаємо middleware для обробки JSON у вхідних запитах
app.use(express.json());

// Підключення до MongoDB
mongoose.connect(config.get('mongoUrl'))
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Використання маршрутів
app.use('/api/auth', authRoutes);

const PORT = config.get('port') || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
