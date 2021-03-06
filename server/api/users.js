const router = require('express').Router()
const {User} = require('../db/models')
const {adminsOnly} = require('./utils')
module.exports = router

router.get('/', adminsOnly, async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email', 'firstName', 'lastName', 'cartId', 'imgUrl']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.put('/', async (req, res, next) => {
  const userId = req.body.id
  try {
    await User.update(req.body, {where: {id: userId}})
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findOne({
      attributes: ['id', 'email', 'firstName', 'lastName', 'cartId'],
      where: {
        id: req.params.id
      }
    })
    res.json(user)
  } catch (err) {
    next(err)
  }
})
