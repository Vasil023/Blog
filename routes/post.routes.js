const {Router} = require('express')
const Post = require('../models/Post')
// const {check, validationResult} = require('express-validator')
const router = Router()

// TODO
// Зробити валідацію

// /api/post/posts
router.post(
  '/posts', 
  // [
  //   check('title', 'Поле не может быть пустим').notEmpty(),
  //   check('descr', 'Поле не может быть пустим').notEmpty()
  // ],
  async (req, res) => {
  try {
    const {title, descr} = req.body
    const post = new Post({title, descr})
    await post.save()
    res.status(201).json({ message: 'Пост создан' })
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так '})
  }
})