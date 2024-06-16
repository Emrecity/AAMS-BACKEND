const express = require('express')
const staffController = require('../controller/hodStaffController')

const router = express.Router()

router.route('/:id')
/**
 * @swagger
 * /api/v1/hod/staff/{id}:
 *  post:
 *      tags:
 *          - HODs_Staff
 *      summary: This api creates a staff
 *      parameters:
 *          - in: path
 *            name: id
 *            type: string
 *            required: true
 *            description: This is the hods id
 *          - in: body
 *            name: data
 *            required: true
 *            schema:
 *              type: object
 *              properties:
 *                  title:
 *                      type: string
 *                      enum: ['Mr','Doc','Prof']
 *                  firstname: 
 *                      type: string
 *                  lastname: 
 *                      type: string
 *                  othername:
 *                      type: string
 *                  email:
 *                      type: string
 *                  phone:
 *                      type: string
 *                  gender:
 *                      type: string
 *                      enum: ['male','female']
 *                  office:
 *                      type: string
 *                      
 *      responses:
 *          201:
 *              description: created
 *          200:
 *              description: success
 */
.post(staffController.createStaff)

/**
 * @swagger
 * /api/v1/hod/staff/{id}:
 *  patch:
 *      tags:
 *          - HODs_Staff
 *      summary: This api updates an audit
 *      parameters:
 *          - in: path
 *            name: id
 *            type: string
 *            required: true
 *            description: This is the staff id
 *          - in: body
 *            name: request
 *            description: This is request data
 *            schema:
 *              type: object
 *              properties:
 *                  title:
 *                      type: string
 *                      enum: ['Mr','Doc','Prof']
 *                  firstname: 
 *                      type: string
 *                  lastname: 
 *                      type: string
 *                  othername:
 *                      type: string
 *                  email:
 *                      type: string
 *                  phone:
 *                      type: string
 *                  gender:
 *                      type: string
 *                      enum: ['male','female']
 *                  office:
 *                      type: string
 *      responses:
 *          201:
 *              description: created
 *          200:
 *              description: success
 */
.patch(staffController.updateStaff)

/**
 * @swagger
 * /api/v1/hod/staff/{id}:
 *  delete:
 *      tags:
 *          - HODs_Staff
 *      summary: This api deletes a staff
 *      parameters:
 *          - in: path
 *            name: id
 *            type: string
 *            required: true
 *            description: This is the staff id
 *      responses:
 *          201:
 *              description: created
 *          200:
 *              description: success
 */
.delete(staffController.deleteStaff)

module.exports = router