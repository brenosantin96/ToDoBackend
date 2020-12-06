const mongoose = require('mongoose');
const Todos = require('../models/Todos');

module.exports = {

    async Todoindex(req, res){
        const todos = await Todos.find();
        res.json(todos);
    },

    async TodogetItem(req, res){
        const todo = await Todos.findById(req.params.id);
        res.json(todo);
    },

    async Todopost (req, res){
        const todos = await Todos.create(req.body);
        res.json(todos);
    },

    async Todoatualizar(req, res){
        const todos = await Todos.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(todos);

    },

    async TododeleteItem(req, res){
        const todos = await Todos.findByIdAndDelete(req.params.id);
        res.send();
    }


}



