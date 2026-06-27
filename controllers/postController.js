const posts = require("../data/posts");
const connection = require("../database/connection");


const index = (req, res) => {

    const sql = 'SELECT * FROM posts';
    connection.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: true, message: 'Errore interno del server' });
        }
        console.log(results);
        res.json(results);
    });

}

const show = (req, res) => {
    const postsId = parseInt(req.params.id);
    const thisPost = posts.find(post => post.id === postsId);
    if (!thisPost) {
        return res.status(404).json({ error: true, message: "404 Post non trovato" });
    }
    res.json(thisPost);
}

const store = (req, res) => {

    const newId = posts[posts.length - 1].id + 1;
    const newPost = {
        id: newId,
        ...req.body
    }
    posts.push(newPost);
    console.log(posts);
    res.status(201).json(newPost);
}


const update = (req, res) => {
    const postsId = parseInt(req.params.id);
    const thisPost = posts.find(post => post.id === postsId);

    if (!thisPost) {
        return res.status(404).json({ error: true, message: "404 Post non trovato" });
    }

    thisPost.title = req.body.title || thisPost.title;
    thisPost.content = req.body.content || thisPost.content;
    thisPost.image = req.body.image || thisPost.image;
    thisPost.tags = req.body.tags || thisPost.tags;

    console.log(thisPost);
    res.status(200).json(thisPost);
}

const modify = (req, res) => {
    const postsId = req.params.id;
    res.send(`Modifica del post con id: ${postsId}`);
}

const destroy = (req, res) => {
    const postsId = parseInt(req.params.id);
    connection.query('DELETE FROM posts WHERE id = ?', [postsId], (err, results) => {
        if (err) {
            return res.status(500).json({ error: true, message: 'Errore interno del server' });
            res.sendStatus(204);
        }
        res.sendStatus(204);
    });
}



module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}