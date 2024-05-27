const express = require('express')
const Controller = require('../controller/departmentController')

const router = express.Router()

router.route('/')
/**
 * @swagger
 * /api/v1/department:
 *  get:
 *      tags:
 *          - Department
 *      summary: This api fetches all department data in the db
 *      responses:
 *          200:
 *              description: ok
 */
.get(Controller.getAllDepartment)

/**
 * @swagger
 * /api/v1/department:
 *  post:
 *      tags:
 *         - Department
 *      summary: This api creates a new department
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
 *          200:
 *              description: OK
 */
.post(Controller.createDepartment)

router.route('/:id')

/**
 * @swagger
 * /api/v1/department/{id}:
 *  get:
 *      tags:
 *        - Department
 *      summary: This api fetches a department
 *      parameters:
 *          - in: path
 *            name: id
 *            description: id of the department
 *            required: true
 *      responses:
 *          200:
 *             description: Ok
 */
.get(Controller.getOneDepartment)

/**
 * @swagger
 * /api/v1/department/{id}:
 *  put:
 *      tags:
 *         - Department
 *      summary: This api updates a department
 *      parameters:
 *         - in: path
 *           name: id
 *           description: id of the department
 *           required: true
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
 *          200:
 *              description: OK
 */
.put(Controller.updateDepartment)

/**
 * @swagger
 * /api/v1/department/{id}:
 *  delete:
 *      tags:
 *        - Department
 *      summary: This api deletes a department
 *      parameters:
 *          - in: path
 *            name: id
 *            description: id of the department
 *            required: true
 *      responses:
 *          200:
 *             description: Ok
 */
.delete(Controller.deleteDepartment)

module.exports = router