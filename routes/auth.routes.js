const {Router} = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const {check, validationResult} = require('express-validator')
const User = require('../models/User')
const router = Router()

// /api/auth/register
router.post(
  '/register',
  [
    check('email', 'Неверный email').isEmail(),
    check('password', 'Минимум 6 символов').isLength({min: 6})
  ],
   async (req, res) => {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()){
        return res.status(400).json({
          errors: errors.array(),
          message: 'Некорректные данные'
        })
      }

      const {email, password} = req.body
      const users = await User.findOne({ email })

      if (users) {
      return res.status(400).json({ message: 'Такой пользователь уже существует' })
      }
      const hashedPasswod = await bcrypt.hash(password, 10)
      const user = new User ({email, password: hashedPasswod})

      await user.save()

      res.status(201).json({message: 'Пользователь создан'})
    } catch (e) {
      res.status(500).json({ message: 'Что-то пошло не так '})
    }
})
// login
router.post(
  '/login',
  [
    check('email', 'Введите правильний email').normalizeEmail().isEmail(),
    check('password', 'Введите пароль').exists()
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()){
        return res.status(400).json({
          errors: errors.array(),
          message: 'Некорректные данные при входе'
        })
      }
    
    const {email, password} = req.body
    const user = await User.findOne({ email })

    if(!user) {
      return res.status(400).json({ message: 'Пользователь не неайден' })
    }

    const isPassword = await bcrypt.compare(password, user.password)

    if (!isPassword) {
      return res.status(400).json({ message: 'Неверный пароль' })
    }

    const token = jwt.sign(
      {userID: user.id},
      config.get('jwtSecretKey'),
      { expiresIn: '1h' }
    )
    res.json({ token, userID: user.id })
      
    } catch (e) {
       res.status(500).json({ message: 'Что-то пошло не так '})
    }
})

module.exports = router