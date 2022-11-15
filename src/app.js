const app = require('./server/server')
require('dotenv').config()
require('./database/database')

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log('Listening to ' + PORT)
})