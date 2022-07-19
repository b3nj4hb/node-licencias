import app from './app'
const config = require('./libs/config.json')
app.listen(config.port);

console.log('server listen on port: ',config.port);