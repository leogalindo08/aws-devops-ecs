const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World - Deploy AWS!'))
app.listen(80, () => console.log('Server ready'))