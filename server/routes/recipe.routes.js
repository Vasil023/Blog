// routes/auth.js
const { Router } = require('express');
const Recipe = require('../models/Recipe');
const upload = require("../upload")
const router = Router();


// Маршрут для створення рецепту з зображенням
router.post('/create', upload.single('image'), async (req, res) => {
  try {

    const { title, description, point, image, isChecked, isDone, isCooking } = req.body;

    // Перевірка наявності title та description
    if (!title || !description) {
      return res.status(400).json({ message: 'Title and description are required' });
    }

    // Створення нового рецепту
    const newRecipe = new Recipe({
      title,
      description,
      image, // Додаємо шлях до зображення
      point,
      isDone,
      isCooking
    });

    await newRecipe.save(); // Зберігаємо рецепт в базі даних

    res.status(201).json({ message: 'Recipe created successfully', recipe: newRecipe });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong while creating the recipe' });
  }
});

// Маршрут для оновлення рецепту по ID
router.put('/update/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, image, isChecked, isDone, isCooking } = req.body;

    // Знаходимо рецепт за ID
    const recipe = await Recipe.findById(id);
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    // Оновлення поля рецепту
    recipe.title = title || recipe.title;
    recipe.description = description || recipe.description;
    recipe.image = image || recipe.image; // Якщо зображення не передане, не змінюємо
    recipe.isDone = isDone || recipe.isDone;
    recipe.isCooking = isCooking || recipe.isCooking;
    recipe.isChecked = isChecked;

    // Збереження оновленого рецепту
    await recipe.save();

    res.json({ message: 'Recipe updated successfully', recipe });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong while updating the recipe' });
  }
});

// Маршрут для отримання всіх рецептів
router.get('/get-all', async (req, res) => {
  try {
    const recipes = await Recipe.find(); // Отримуємо всі рецепти з бази даних

    if (!recipes || recipes.length === 0) {
      return res.json([]);
    }

    res.status(200).json({ recipes });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong while fetching recipes' });
  }
});


module.exports = router;
