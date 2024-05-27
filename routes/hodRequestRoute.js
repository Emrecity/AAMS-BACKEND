const express = require('express')
const hodController = require('../controller/hodRequestController')


const router = express.Router()

router.route('/:id')
/**
 * @swagger
 * /api/v1/hod/request/{id}:
 *  post:
 *      tags:
 *          - HODs_Request
 *      summary:
 *      parameters:
 *          - in: path
 *            name: id
 *            type: string
 *            require: true
 *          - in: body
 *            name: request
 *            description: This is request data
 *            schema:
 *              type: object
 *              properties:
 *                  name:
 *                      type: string
 *                  description: 
 *                      type: string
 *                  quantity: 
 *                      type: number
 *                      min: 1
 * 
 *      responses:
 *          201:
 *              description: created
 *          200:
 *              description: success
 */
.post(hodController.createRequest)

/**
 * @swagger
 * /api/v1/hod/request/{id}:
 *  patch:
 *      tags:
 *          - HODs_Request
 *      summary:
 *      consumes:
 *          - application/json
 *      parameters:
 *          - in: path
 *            name: id
 *            type: string
 *            require: true
 *            description: This is the request id
 *          - in: body
 *            name: request
 *            description: This is request data
 *            schema:
 *              type: object
 *              properties:
 *                  name:
 *                      type: string
 *                  description: 
 *                      type: string
 *                  quantity: 
 *                      type: number
 *                      min: 1
 *                  status:
 *                      type: string
 *                      enum: ['accept','pending','decline']
 *                  message:
 *                      type: string
 * 
 *      responses:
 *          201:
 *              description: created
 *          200:
 *              description: success
 */
.patch(hodController.updateRequest)

/**
 * @swagger
 * /api/v1/hod/request/{id}:
 *  delete:
 *      tags:
 *          - HODs_Request
 *      summary:
 *      parameters:
 *          - in: path
 *            name: id
 *            type: string
 *            require: true
 *            description: This is the request id
 *      responses:
 *          201:
 *              description: created
 *          200:
 *              description: success
 */
.delete(hodController.deleteRequest)

module.exports = router