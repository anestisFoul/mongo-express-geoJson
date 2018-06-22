const Driver = require('../models/driver');

module.exports =  {
  greeting (req, res) {
    res.send({hi: 'there'});
  },

  index(req, res, next) {
    const {lng, lat} = req.query;
    Driver.geoNear(
      {type: 'Point', coordinates: [ParseFloat(lng), lat]},
      {spherical: true, maxDistance: 10000}
    )
    .then(drivers => res.send(drivers))
    .catch(next);
  },

  create (req, res, next) {
    const driverProps = req.body;

    Driver.create(driverProps)
      .then(driver => {
        res.send(driver);
      })
      .catch(next);
  },

  edit(req, res, next) {
    const driverID = req.params.id;

    Driver.findByIdAndUpdate({_id: driverID}, driverProps).then(() => Driver.findById({_id: driverID}))
      .then(driver => res.send(driver))
      .catch(next);
  },

  delete(req, res, next) {
    const driverID = req.params.id;

    Driver.findByIdAndRemove({_id: driverID},)
      .then(driver => res.status(204).send(driver))
      .catch(next);
  }

};  