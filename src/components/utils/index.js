/**
 * Converts value to string.
 * 
 * @param {number} value
 * @returns {string}
 */
export const convertNumberToString = (value) => {
  return `${value}`
}

convertNumberToString(1100)

/**
 * Create sentence from array of objects.
 * 
 * @param {$utils.MixedData} data
 * @returns {string}
 */
export const mixMultipleData = (data) => {
  return `Hey ${data.name || 'username'}! Are you ${
    data.age
  }? I see you like ${data.fruits.map((fruit) => Object.values(fruit))} calories.`
}

mixMultipleData({
  name: 'Jack',
  age: 18,
  fruits: [
    {
      name: 'avocados',
      calories: 600,
    },
  ],
})

// /**
//  * JsDoc style array/object description or use interfaces ex: interface.d.ts
//  * 
//  * @typedef {Object} MixedData
//  * @prop {string} [name]
//  * @prop {number} age
//  * @prop {string[]} fruits
//  */
