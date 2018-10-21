const fs = require('fs')
let getData = () => {
  return JSON.parse(fs.readFileSync('./db/data.json', 'utf8'))
}


exports.getCars = (req, res) => {
  let cars = getData()
  res.status(200).send(cars)
}

exports.getCarById = (req, res) => {
  let cars = getData()
  const car = cars.find(
    car => car.id === Number(req.params.id)
  )
  if (car) res.status(200).send(car)
  else res.status(404).send({message: 'ID was not found'})
}

exports.addCar = (req, res) => {
  const newCar = {
    id: req.body.id,
    brand: req.body.brand,
    model: req.body.model,
    engineVolume: req.body.engineVolume,
    year: req.body.year
  }
  let cars = getData()
  const car = cars.find(
    car => car.id === newCar.id
  )
  if (car) res.status(409).send({message: 'Car already exists.'})
  else {
    cars.push(newCar)
    fs.writeFileSync('./db/data.json', JSON.stringify(cars)) 
    res.status(201).send(newCar)
  }
}

exports.updateCar = (req, res) => {
  let cars = getData()
  const car = cars.find(
    car => car.id === Number(req.params.id)
  )
  if (!car) res.status(404).send({message: 'ID was not found'})
  else {
    car.brand = req.body.brand
    car.model = req.body.model
    car.engineVolume = req.body.engineVolume
    car.year = req.body.year
    fs.writeFileSync('./db/data.json', JSON.stringify(cars))
    res.status(200).send(car)
  }
}

exports.deleteCar = (req, res) => {
  let cars = getData()
  const car = cars.find(
    car => car.id === Number(req.params.id)
  )
  if (!car) res.status(404).send({message: 'ID was not found'})
  else {
    const index = cars.indexOf(car)
    cars.splice(index, 1)
    fs.writeFileSync('./db/data.json', JSON.stringify(cars))
    res.status(200).send({message: 'The car has been successfully removed'})
  }
}