const api = require('binance');
const express = require('express');
const app = express();

const binanceRest = new api.BinanceRest({
    key: '60FfavJmYR8jNaEnyj3ehKJH1BlFIujzZI3f23M7RQOxyskjE8qo7gB5gCNRIJql',
    secret: 'ycnJxEwD96d7F82PDC6coRQxgvTZO3DPZ4C2Oo9qGnW3uuPpzxNz4bJIBOCU6CZd',
    timeout: 15000,
    recvWindow: 10000,
    disableBeautification: false,

    handleDrift: false,

    baseUrl: 'https://api.binance.com/',

    requestOptions: {}

});



app.get('/', (req, res) =>{
    console.log(binanceRest)
     binanceRest
    .aggTrades({
        symbol: 'BNBBTC'
    })
    .then(data => {
        console.log(`Sucess ${data}`);  res.send(data);
    })
    .catch(err => {
        console.error(`Error ${err}`);
        res.send(err);
    });


});
app.post('/ethbtc', (req, res) =>{
    console.log(binanceRest)
     binanceRest
    .historicalTrades({
        symbol: 'ETHBTC'
    })
    .then(data => {
        console.log(`Sucess ${data}`);  res.send(data);
    })
    .catch(err => {
        console.error(`Error ${err}`);
        res.send(err);
    });


});

app.delete('/asdf', (req, res) =>{
    console.log(binanceRest)
     binanceRest
    .trades({
        symbol: 'ETHBTC'
    })
    .then(data => {
        console.log(`Sucess ${data}`);  res.send(data);
    })
    .catch(err => {
        console.error(`Error ${err}`);
        res.send(err);
    });


});
 app.listen(3000, () => console.log('listening on port 3000...'));
