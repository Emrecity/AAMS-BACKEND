const express = require('express')
const Controller = require('../controller/hodAuditController')


const router = express.Router()

router.route('/:id')
/**
 * @swagger
 * /api/v1/hod/audit/{id}:
 *  post:
 *      tags:
 *          - HODs_Audit
 *      summary: This api creates an audit
 *      parameters:
 *          - in: path
 *            name: id
 *            type: string
 *            required: true
 *            description: This is the hods id
 *          - in: body
 *            name: request
 *            description: This is request data
 *            required: true
 *            schema:
 *              type: object
 *              properties:
 *                  dateOfPurchase:
 *                      type: string
 *                  nameAndDescription: 
 *                      type: string
 *                  quantity: 
 *                      type: number
 *                      min: 1
 *                  finance:
 *                      type: string
 *                  identificationId:
 *                      type: string
 *                  user:
 *                      type: string
 *                  location:
 *                      type: string
 *                  remarks:
 *                      type: string
 *                      enum: ['healthy','under repair','not functional']
 *      responses:
 *          201:
 *              description: created
 *          200:
 *              description: success
 */
.post(Controller.createAudit)

/**
 * @swagger
 * /api/v1/hod/audit/{id}:
 *  patch:
 *      tags:
 *          - HODs_Audit
 *      summary: This api updates an audit
 *      parameters:
 *          - in: path
 *            name: id
 *            type: string
 *            required: true
 *            description: This is the audit id
 *          - in: body
 *            name: request
 *            description: This is request data
 *            schema:
 *              type: object
 *              properties:
 *                  dateOfPurchase:
 *                      type: string
 *                  nameAndDescription: 
 *                      type: string
 *                  quantity: 
 *                      type: number
 *                      min: 1
 *                  finance:
 *                      type: string
 *                  identificationId:
 *                      type: string
 *                  user:
 *                      type: string
 *                  location:
 *                      type: string
 *                  remarks:
 *                      type: string
 *                      enum: ['healthy','under repair','not functional']
 *      responses:
 *          201:
 *              description: created
 *          200:
 *              description: success
 */
.patch(Controller.updateAudit)

/**
 * @swagger
 * /api/v1/hod/audit/{id}:
 *  delete:
 *      tags:
 *          - HODs_Audit
 *      summary: This api deletes an audit
 *      parameters:
 *          - in: path
 *            name: id
 *            type: string
 *            required: true
 *            description: This is the audit id
 *      responses:
 *          201:
 *              description: created
 *          200:
 *              description: success
 */
.delete(Controller.deleteAudit)

module.exports = router