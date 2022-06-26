const axios = require('axios');
const url = 'http://localhost:3200/api/users';

exports.home = (req, res) => {
    axios.get(url)
        .then(response => {
            res.render('index', { users: response.data });
        })
        .catch(err => res.send(err));
}

exports.add_user = (req, res) => {
    res.render('add_user');
}

exports.update_user = (req, res) => {
    axios.get(url, { params: { id: req.query.id } })
        .then(response => {
            res.render('update_user', { user: response.data });
        })
        .catch(err => res.send(err));
}