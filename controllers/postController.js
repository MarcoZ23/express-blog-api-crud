const posts = require("../data/posts");


const index = (req, res) => {
    res.send('Posts del mio Blog')
}

const show = (req, res) => {
    const id = req.params.id;
    res.send(`Dettagli del post con id: ${id}`);
}

const store = (req, res) => {
    res.send('Creazione di un nuovo post');
}

const update = (req, res) => {
    const id = req.params.id;
    res.send(`Aggiornamento del post con id: ${id}`);
}

const modify = (req, res) => {
    const id = req.params.id;
    res.send(`Modifica del post con id: ${id}`);
}

const destroy = (req, res) => {
    const id = req.params.id;
    res.send(`Eliminazione del post con id: ${id}`);
}



module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}