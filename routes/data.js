const express = require('express');
const router = express.Router();
const Crypto = require('../models/crypto');

router.get('/', (req, res) => {
    Crypto.find()
    .then(data => res.json(data))
});

module.exports = router;