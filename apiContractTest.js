const newman = require('newman');
console.log('newman start!');
newman.run({
    collection: require('./APIContractTest.postman_collection.json'),
  reporters: 'cli'
})