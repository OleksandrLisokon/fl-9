const express = require('express')
const bodyParser = require('body-parser')
const deleteAuth = require('./middlewares/delete-authorization')
const router = express.Router()
const car = require('./handlers/car')

router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())
router.use(deleteAuth)

router.post('/', car.addCar)
router.get('/', car.getCars)
router.get('/:id', car.getCarById)
router.put('/:id', car.updateCar)
router.delete('/:id', car.deleteCar)

module.exports = router


