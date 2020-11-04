const FibonacciGenerator = require('peters-fibonacci-generator');
const db = require('../config/database');
const FibonacciSequence = require('../models/FibonacciSequence');

module.exports = {
    async get(size) {
        let sequenceResult = await FibonacciSequence.findAll({
            where: {
                size: size
            }
        })

        let sequence;
        if (sequenceResult.length > 0) {
            sequence = sequenceResult[0];
        }
        else {
            sequence = {
                size: size,
                multiplicationTable: FibonacciGenerator.generate(size)
            };
        }
        
        return sequence;
    }
};