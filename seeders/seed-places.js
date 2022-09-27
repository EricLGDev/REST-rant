const db = require('../models')

db.Place.create([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/food.jpg',
    founded: 1989
},{
    name: 'Coding Cat Cafe',
    city: 'Phoneix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/food.jpg',
    founded: 2020
}])
.then(() => {
    console.log('Success')
    process.exit()
})
.catch(err => {
    console.log('Failure', err)
    process.exit()
})