let Userdb = require('../model/model');

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Content can't be empty" });
        return;
    }
    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    });
    user.save(user)
        .then(data => {
            res.redirect('/');
            // res.send(data);
        })
        .catch(err => res.status(500).send({ message: err.message }));
}

exports.find = (req, res) => {
    const id = req.query.id;
    if (id) {
        Userdb.findById(id)
            .then(data => {
                if (!data) {
                    res.status(404).send({ message: 'Not found user with id: ' + id });
                }
                else {
                    res.send(data);
                }
            })
    }
    else {
        Userdb.find()
            .then(user => res.send(user))
            .catch(err => res.status(500).send({ message: err.message }));
    }
}

exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: 'data cannot be empty' });
        return
    }
    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `cannot update user with ${id}.Maybe user not found!` });
            }
            else {
                res.send(data);
            }
        })
        .catch(err => res.status(500).send({ message: err.message }));
}

exports.delete = (req, res) => {
    const id = req.params.id;
    Userdb.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `cannot delete with id ${id}` });
            }
            else {
                res.send({ message: 'User was deleted successfully' });
            }
        })
        .catch(err => res.status(500).send({ message: err.message }));
}