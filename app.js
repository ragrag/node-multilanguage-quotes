const translate = require('@k3rn31p4nic/google-translate-api');
const fetch = require('node-fetch');

const getQuote = async function getQuote(lang){
const getQuotePromise = new Promise((resolve,reject)=>{
     fetch('http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en')
    .then(res => res.json())
    .then(data => {
        translate(data.quoteText, {from: 'en', to: lang}).then(res => {
            resolve(res.text)
        }).catch(err => {
            reject(err);
        });
    })
    .catch(err => reject(err));
})

const quote = await getQuotePromise;  
return quote;

}


module.exports = getQuote;