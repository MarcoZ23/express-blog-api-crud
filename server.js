const express = require('express');
const app = express();
const port = 3000;


app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})

app.get('/', (req, res) => {
    res.send('Server del mio Blog')
})


app.use('/posts', require('./routers/posts'));