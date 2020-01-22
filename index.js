const {
    actionssdk 
} = require('actions-on-google');
 
const app = actionssdk() 
 
app.intent('actions.intent.MAIN', (conv) => {
    conv.ask('resposta da main')
});

app.intent('actions.intent.TEXT', (conv) => {
    conv.ask('resposta generica')
});

exports.handler = function(event, context, callback) {
    app.handler(event, {}).then((res) => {
        if (res.status != 200) {
            callback(null, {"fulfillmentText": `I got status code: ${res.status}`});
        } else {
            callback(null, res.body);
        }
    }).catch((e) => {
    callback(null, {"fulfillmentText": `There was an error\n${e}`});    
    });
}; 
