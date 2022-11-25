const collection = require('../Models');
const Planet = collection.planet;

exports.index = (req, res) => {
    const name = req.query.name;
    const condition = name ? {
        name: {
            $regex: new RegExp(name), $options: 'i'
        }
    } : {}

    Planet.find(condition)
    .then((data) => {
        res.status(200).json(data)
    }).catch((err) => {
        res.status(500).json({
            message: err.message || 'fail retrieving data'
        })
    });
}

exports.findId = (req, res) => {
    const id = req.params.id;

    Planet.findById(id)
    .then((data) => {
        if(!data){
            res.status(404).json({
                message: `${id} not found`
            })
        } else {
            res.status(200).json(data)
        }
    }).catch((err) => {
        res.status(500).json({
            message: err.message || 'fail retrieving data id'
        })
    });
}

exports.create = (req, res) => {
    if(!req.body.name){
        res.status(400).json({
            message: 'Invalid cannot be empty name',
        })
    }

    const planet = new Planet({
        name: req.body.name,
        orderFromSun: req.body.orderFromSun,
        hasRings: req.body.hasRings,
        mainAtmosphere: [req.body.mainAtmosphere],
        surfaceTemperatureC: {
            min: req.body.min,
            max: req.body.max,
            mean: req.body.mean,
        }
    })

    planet.save(planet)
    .then((data) => {
        res.json(data)
    }).catch((err) => {
        res.status(500).json({
            message: err.message || "error while inserting"
        })
    });
}

exports.update = (req, res) => {
    if(!req.body){
        res.status(400).json({
            message: 'Invalid cannot be empty name',
        })
    }
    const id = req.params.id;
    const planet = {
        name: req.body.name,
        orderFromSun: req.body.orderFromSun,
        hasRings: req.body.hasRings,
        mainAtmosphere: [req.body.mainAtmosphere],
        surfaceTemperatureC: {
            min: req.body.min,
            max: req.body.max,
            mean: req.body.mean,
        }
    }

    Planet.findByIdAndUpdate(id, planet, { useFindAndModify: false})
    .then((data) => {
        if(!data){
            res.status(404).json({
                message: `${id} not found`
            })
        } else {
            res.status(200).json({
                message: 'Data updated'
            })
        }
    }).catch((err) => {
        res.status(500).json({
            message: err.message || 'fail update data'
        })
    });
}

exports.delete = (req, res) => {
    const id = req.params.id;

    Planet.findByIdAndRemove(id)
    .then((data) => {
        if(!data){
            res.status(404).json({
                message: `${id} not found`
            })
        } else {
            res.status(200).json({
                message:'data was deleted'
            })
        }
    }).catch((err) => {
        res.status(500).json({
            message: err.message || 'fail deleting data id'
        })
    });
}