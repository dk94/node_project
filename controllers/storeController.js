const mongoose = require('mongoose');
const Store = mongoose.model('Store');


exports.homePage = (req, res) => {
    res.render('index', { name: req.name });
}

exports.addStore = (req, res) => {
    res.render('editStore', { title:'Add Store' });
}

exports.createStore = async (req,res) => {
    const store = new Store(req.body);
    await store.save();
    req.flash('succes', `Successfully Created ${store.name}.` )
    res.redirect('/');
}