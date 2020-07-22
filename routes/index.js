let router = require('express').Router()

router.use('/api/user', require('./user'))
router.use('/api/certificate', require('./certificate'))

router.get('/api', (req, res) => {
  res.send('Please read documentation for the API.')
})

router.get('/', (req, res) => {
  res.redirect('/api')
})

router.get('*', (req, res) => {
  res.status(404).send({
    error: 404
  })
})

module.exports = router
