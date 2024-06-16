const express = require('express')
const VenuController = require('../controller/venueController')

const router = express.Router()

router.route('/')
/**
 * @swagger
 * /api/v1/venue:
 *  get:
 *      tags:
 *          - Venue
 *      summary: this api fetches all the venues
 *      responses:
 *          - 200:
 *              description: Ok
 */
.get(VenuController.getAllVenue)
/**
 * @swagger
 * /api/v1/venue:
 *  post:
 *      tags:
 *          - Venue
 *      summary: this api creates a new venue
 *      parameters:
 *         - in: body
 *           name: data
 *           required: true
 *           schema: 
 *              type: object
 *              properties:
 *                  name:
 *                      type: string
 *                      required: true
 *                  initials:
 *                      type: string
 *      responses:
 *          - 200:
 *              description: ok
 */
.post(VenuController.createVenue)
router.route('/:id')
/**
 * @swagger
 * /api/v1/venue/{id}:
 *  get:
 *     tags:
 *          - Venue
 *     summary: This api gets a single venue
 *     parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: Id of venue
 *     responses:
 *          - 200:
 *              description: ok
 */
.get(VenuController.getOneVenue)
/**
 * @swagger
 * /api/v1/venue/{id}:
 *  post:
 *      tags:
 *          - Venue
 *      summary: This api creates a room in a venue
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: venue id
 *          - in: body
 *            name: data
 *            required: true
 *            schema:
 *              type: object
 *              properties:
 *                  name:
 *                      type: string
 *                  position:
 *                      type: string
 *      responses:
 *          - 200:
 *              description: ok
 */
.post(VenuController.createVenueRoom)
/**
 * @swagger
 * /api/v1/venue/{id}:
 *  delete:
 *      tags:
 *          - Venue
 *      summary: This api deletes a venue   
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: Id of the venue
 *      responses:
 *          - 200:
 *              description: ok
 */
.delete(VenuController.deleteVenue)
/**
 * @swagger
 * /api/v1/venue/{id}:
 *  patch:
 *      tags:
 *        - Venue
 *      summary: This api updates a venue
 *      parameters:
 *          - in: path
 *            name: id
 *            description: Id of the venue
 *            required: true
 *          - in: body
 *            name: data
 *            description: updates data
 *            schema:
 *              type: object
 *              properties:
 *                  name:
 *                     type: string
 *                  initials:
 *                     type: string
 *      responses:
 *          - 200:
 *              description: ok
 */
.patch(VenuController.updateVenue)
router.route('/room/:id')
/**
 * @swagger
 * /api/v1/venue/room/{id}:
 *  patch:
 *      tags:
 *        - Venue
 *      summary: This api updates a room
 *      parameters:
 *          - in: path
 *            name: id
 *            description: Id of the room
 *            required: true
 *          - in: body
 *            name: data
 *            required: true
 *            schema:
 *                type: object
 *                properties:
 *                      name: 
 *                          type: string
 *                      position:
 *                          type: string
 *      responses:
 *          - 200:
 *              description: ok
 */
.patch(VenuController.updateVenueRoom)
/**
 * @swagger
 * /api/v1/venue/room/{id}:
 *  delete:
 *      tags:
 *          - Venue
 *      summary: This api deletes a room
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: Id of the room
 *      responses:
 *          - 200:
 *              description: ok
 */
.delete(VenuController.deleteVenueRoom)

module.exports = router
