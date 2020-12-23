const {Router} = require('express')
const jwt = require('jsonwebtoken')
const Post = require('../models/Post')
const User = require('../models/User')
const auth = require('../middleware/middleware')

const config = require('config')
const router = Router()

// /api/post/posts
router.post(
  '/posts', 
  auth, async (req, res) => {
  try {
    const {title} = req.body
    const user = await User.findById(req.user.userID)
    const post = new Post({title, nickName: user.nickName, user: req.user.userID}).save()
    res.status(201).json({ post })
   
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так!! '})
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

router.get('/alluser', auth,  async (req, res) => {
  try {
    const user = await User.find() 
    res.json(user)
  } catch (e) {

  }
})

module.exports = router