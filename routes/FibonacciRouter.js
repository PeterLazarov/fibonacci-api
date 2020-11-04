const express = require('express');
const FibonacciGenerator = require('peters-fibonacci-generator');
const FibonacciSequence = require('../models/FibonacciSequence');
const FibonacciGetter = require('../utils/FibonacciGetter');

var router = express.Router();

router.get('/', async (req, res) => {
    let size = req.query.n;
    if (size && Number(size) !== NaN && Number(size) > 0) {
        size = Number(size);
        
        let fibonacciResult = await FibonacciGetter.get(size);
        res.status(200).json(fibonacciResult);
    }
    else {
        res.status(403).json('Missing or invalid parameter "n" for fibonacci seuence size');
    }
})

router.post('/', async (req, res) => {
    let size = req.body.n;    
    if (size && Number(size) !== NaN && Number(size) > 0) {
        let sequence = await FibonacciSequence.create({
            size: size,
            multiplicationTable: FibonacciGenerator.generate(size)
        });
        
        res.status(200).json(sequence);
    }
    else {
        res.status(403).json('Missing or invalid parameter "n" for fibonacci seuence size');
    }
})

module.exports = router;