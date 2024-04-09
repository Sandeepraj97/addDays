const addDays = require('date-fns/addDays')

const getDateAfterXDays = days => {
  const newDays = addDays(new Date(2020, 7, 22), days)
  console.log(`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`)
}

module.exports = getDateAfterXDays
