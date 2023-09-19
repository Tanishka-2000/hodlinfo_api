const mongoose = require('mongoose');
require('dotenv').config();
const Crypto = require("./models/crypto");

mongoose.connect(process.env.MONGODV_URL)
.then(() => {
    console.log('database connected');

    fetch('https://api.wazirx.com/api/v2/tickers')
    .then(response => response.json())
    .then(data => {
    
        const top10data = Object.entries(data).slice(0, 10).map(entry => entry[1]);
        console.log(top10data);

        top10data.forEach(data => {
            const cryptoData = new Crypto({
                base_unit: data.base_unit,
                last: data.last,
                volume: data.volume,
                sell:data.sell,
                buy: data.buy,
                name: data.name
            });
            cryptoData.save()
            .then(() => console.log('data saved'))
        })
    });
})
.catch((err) => console.log('database error', err));
