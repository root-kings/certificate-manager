let router = require('express').Router()

// Controllers -----

const certificateController = require('../controllers/certificate')

router.get('/', certificateController.index_get)

router.get('/about', (req, res) => {
  res.send('certificate about')
})

router.get('/dashboard', certificateController.certificates_dashboard_get)
router.get('/templates', certificateController.certificates_templates_get)

module.exports = router
