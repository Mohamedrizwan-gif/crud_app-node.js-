const axios = require('axios');

exports.home = (req, res) => {
    let fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    axios.get(fullUrl + 'api/users')
        .then(response => {
            res.render('index', { users: response.data });
        })
        .catch(err => {
            res.send(err)
        });
}

exports.add_user = (req, res) => {
    res.render('add_user');
}

exports.update_user = (req, res) => {
    let fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    axios.get(fullUrl + 'api/users', { params: { id: req.query.id } })
        .then(response => {
            res.render('update_user', { user: response.data });
        })
        .catch(err => res.send(err));
}