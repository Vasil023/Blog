const {Router} = require('express')
const jwt = require('jsonwebtoken')
const Post = require('../models/Post')
const User = require('../models/User')
const auth = require('../middleware/middleware')
const config = require('config')
// const {check, validationResult} = require('express-validator')
const router = Router()

// TODO
// Зробити валідацію

// /api/post/posts
router.post(
  '/posts', 
  auth, async (req, res) => {
  try {
    // const baseUrl = config.get('baseUrl')
    const {title} = req.body
    const post = new Post({title, nickName, user: req.user.userID})
    console.log(post)
    await post.save()
    res.status(201).json({ post})
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так '})
  }
})

router.get('/', auth,  async (req, res) => {
  try {
    const post = await Post.find({user: req.user.userID}) 
    res.json(post)
  } catch (e) {

  }
})

router.get('/all', auth,  async (req, res) => {
  try {
    const post = await Post.find() 
    res.json(post)
  } catch (e) {

  }
})

module.exports = router