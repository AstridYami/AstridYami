const express = require('express');
const router = express.Router();

// Controllers
const authController = require('../controllers/authentication');
const tripsController = require('../controllers/trips');

// Authentication middleware extracted to its own module
// See app_api/middleware/authenticate.js
const { authenticate } = require('../middleware/authenticate');

/**
 * Authentication routes — public, no token required.
 * POST /api/login    — returns a JWT on successful credential check
 * POST /api/register — creates a new user account
 */
router
  .route('/login')
  .post(authController.login);

router
  .route('/register')
  .post(authController.register);

/**
 * Trips collection routes.
 * GET  /api/trips — public, returns all trips
 * POST /api/trips — protected, adds a new trip (requires valid JWT)
 */
router
  .route('/trips')
  .get(tripsController.tripsList)
  .post(authenticate, tripsController.tripsAddTrip);

/**
 * Single trip routes — identified by trip code.
 * GET    /api/trips/:tripCode — public, returns one trip
 * PUT    /api/trips/:tripCode — protected, updates a trip (requires valid JWT)
 * DELETE /api/trips/:tripCode — protected, removes a trip (requires valid JWT)
 */
router
  .route('/trips/:tripCode')
  .get(tripsController.tripsFindByCode)
  .put(authenticate, tripsController.tripsUpdateTrip)
  .delete(authenticate, tripsController.tripsDeleteTrip);

module.exports = router;
