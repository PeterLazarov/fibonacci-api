const express = require('express');
const FibonacciGetter = require('../utils/FibonacciGetter');

var router = express.Router();

router.get('/', async (req, res) => {
    let size = req.query.n;
    if (size && size > 0) {
        let fibonacciResult = await FibonacciGetter.get(size);
        res.status(200).json(fibonacciResult);
    }
    else {
        res.status(403).json('Missing parameter "n" for fibonacci seuence size');
    }
})

router.post('/', async (req, res) => {
    let size = req.body.n;
    if (size && size > 0) {
        let fibonacciResult = await FibonacciGetter.get(size);
        res.status(200).json(fibonacciResult);
    }
    else {
        res.status(403).json('Missing parameter "n" for fibonacci seuence size');
    }
})

module.exports = router;