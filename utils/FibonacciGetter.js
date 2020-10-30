const FibonacciGenerator = require('peters-fibonacci-generator');
const db = require('../config/database');
const FibonacciSequence = require('../models/FibonacciSequence');

module.exports = {
    async get(size) {
        let sequenceResult = await FibonacciSequence.findAll({
            where: {
                size: registerData.size
            }
        })

        let sequence;
        if (sequenceResult.length > 0) {
            sequence = sequenceResult[0];
        }
        else {
            sequence = await FibonacciSequence.create({
                size: size,
                multiplicationTable: FibonacciSequence.generate(size)
            });
        }
        
        return sequence;
    }
};