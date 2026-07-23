const mongoose = require('mongoose');
const Trip = require('../models/travlr');
const Model = mongoose.model('trips');

/**
 * GET /api/trips
 * Returns all trips from the database.
 * Public — no authentication required.
 * Responds with 200 and the trip array on success.
 * Responds with 404 and a message if no trips are found.
 * Responds with 500 and a message if the query fails.
 */
const tripsList = async (req, res) => {
  try {
    const q = await Model.find({}).exec();

    if (!q || q.length === 0) {
      return res.status(404).json({ message: 'No trips found' });
    }

    return res.status(200).json(q);
  } catch (err) {
    return res.status(500).json({ message: 'Error retrieving trips', error: err.message });
  }
};

/**
 * GET /api/trips/:tripCode
 * Returns a single trip matching the provided trip code.
 * Public — no authentication required.
 * Responds with 200 and the trip on success.
 * Responds with 404 and a message if no matching trip is found.
 * Responds with 500 and a message if the query fails.
 */
const tripsFindByCode = async (req, res) => {
  try {
    const q = await Model.find({ code: req.params.tripCode }).exec();

    if (!q || q.length === 0) {
      return res.status(404).json({ message: 'Trip not found' });
    }

    return res.status(200).json(q);
  } catch (err) {
    return res.status(500).json({ message: 'Error retrieving trip', error: err.message });
  }
};

/**
 * POST /api/trips
 * Adds a new trip to the database.
 * Protected — requires a valid JWT via the authenticate middleware.
 * Responds with 201 and the new trip on success.
 * Responds with 400 and a message if the save fails.
 * Responds with 500 and a message if an unexpected error occurs.
 */
const tripsAddTrip = async (req, res) => {
  try {
    const newTrip = new Trip({
      code:        req.body.code,
      name:        req.body.name,
      length:      req.body.length,
      start:       req.body.start,
      resort:      req.body.resort,
      perPerson:   req.body.perPerson,
      image:       req.body.image,
      description: req.body.description
    });

    const q = await newTrip.save();

    if (!q) {
      return res.status(400).json({ message: 'Failed to save trip' });
    }

    return res.status(201).json(q);
  } catch (err) {
    return res.status(500).json({ message: 'Error adding trip', error: err.message });
  }
};

/**
 * PUT /api/trips/:tripCode
 * Updates an existing trip identified by trip code.
 * Protected — requires a valid JWT via the authenticate middleware.
 * Responds with 201 and the updated trip on success.
 * Responds with 400 and a message if no matching trip is found.
 * Responds with 500 and a message if the update fails.
 */
const tripsUpdateTrip = async (req, res) => {
  try {
    const q = await Model.findOneAndUpdate(
      { code: req.params.tripCode },
      {
        code:        req.body.code,
        name:        req.body.name,
        length:      req.body.length,
        start:       req.body.start,
        resort:      req.body.resort,
        perPerson:   req.body.perPerson,
        image:       req.body.image,
        description: req.body.description
      },
      { new: true }
    ).exec();

    if (!q) {
      return res.status(400).json({ message: 'Trip not found for update' });
    }

    return res.status(201).json(q);
  } catch (err) {
    return res.status(500).json({ message: 'Error updating trip', error: err.message });
  }
};

/**
 * DELETE /api/trips/:tripCode
 * Removes a trip identified by trip code from the database.
 * Protected — requires a valid JWT via the authenticate middleware.
 * Responds with 200 and a confirmation message on success.
 * Responds with 404 and a message if no matching trip is found.
 * Responds with 500 and a message if the delete fails.
 */
const tripsDeleteTrip = async (req, res) => {
  try {
    const q = await Model.findOneAndDelete({ code: req.params.tripCode }).exec();

    if (!q) {
      return res.status(404).json({ message: 'Trip not found' });
    }

    return res.status(200).json({ message: 'Trip deleted successfully' });
  } catch (err) {
    return res.status(500).json({ message: 'Error deleting trip', error: err.message });
  }
};

module.exports = {
  tripsList,
  tripsFindByCode,
  tripsAddTrip,
  tripsUpdateTrip,
  tripsDeleteTrip
};
