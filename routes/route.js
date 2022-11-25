module.exports = (app) => {
    const planet = require("../App/Controllers/planet.js");

    let router = require('express').Router();
    
    router.get('/', planet.index);
    router.get('/:id', planet.findId);
    router.post('/create', planet.create);
    router.put('/update/:id', planet.update);
    router.delete('/delete/:id', planet.delete);

    app.use('/api/planet', router);
}