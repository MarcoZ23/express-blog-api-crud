const posts = require("../data/posts");


const index = (req, res) => {
    res.json(posts)
}

const show = (req, res) => {
    const postsId = parseInt(req.params.id);
    const thisPost = posts.find(post => post.id === postsId);
    if (!thisPost) {
        return res.status(404).send('Post non trovato');
    }
    res.json(thisPost);
}

const store = (req, res) => {
    res.send('Creazione di un nuovo post');
}

const update = (req, res) => {
    const postsId = req.params.id;
    res.send(`Aggiornamento del post con id: ${postsId}`);
}

const modify = (req, res) => {
    const postsId = req.params.id;
    res.send(`Modifica del post con id: ${postsId}`);
}

const destroy = (req, res) => {
    const postsId = parseInt(req.params.id);
    const thisPost = posts.find(post => post.id === postsId);
    if (!thisPost) {
        return res.status(404).json({ error: "true", message: "404 Post non trovato" });
    }
    const index = posts.indexOf(thisPost);
    posts.splice(index, 1);

    console.log(posts);
    res.sendStatus(204);
}



module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}