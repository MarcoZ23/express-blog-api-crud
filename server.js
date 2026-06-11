const express = require('express');
const app = express();
const port = 3000;
const notFound = require('./middlewares/notFound');

app.use(express.static('public'));

app.use(express.json());


app.get('/', (req, res) => {
    res.send('Server del mio Blog')
})


app.use('/posts', require('./routers/posts'));

app.use(notFound);


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})


