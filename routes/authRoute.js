const express = require('express')
const authController = require('../controller/authController')

const router =express.Router()

router.route('/')
/**
 * @swagger
 * /api/v1/user:
 *  get:
 *     tags:
 *         - User
 *     summary: this api gets all users in the db
 *     produces:
 *          - application/json
 *     responses:
 *          200:
 *              description: Ok
 *              
 *                         
 */

.get(authController.getAllUsers)

/**
 * @swagger
 * /api/v1/user:
 *  post:
 *      tags:
 *          - User
 *      summary: this api adds new user
 *      consumes:
 *          - application/json
 *      parameters:
 *          - in: body
 *            name: user
 *            description: the user to create
 *            schema:
 *              type: object
 *              properties:
 *                 firstname:
 *                      type: string
 *                 lastname:
 *                      type: string
 *                 middlename:
 *                      type: string
 *                 gender:
 *                      type: string
 *                      enum: ['male','female']
 *                 role:
 *                      type: string
 *                 department:
 *                      type: string
 *                 email:
 *                      type: string
 *                      format: email
 *                 phone:
 *                      type: string
 *                 password:
 *                      type: string
 *                      format: password
 *                 confirmpassword:
 *                      type: string
 *      responses:
 *          201:
 *              description: created
 */

.post(authController.createUser)


router.route('/:id')
/**
 * @swagger
 * /api/v1/user/{id}:
 *      get:
 *          tags:
 *              - User
 *          summary: this api fetches a specific user
 *          consumes:
 *             - application/json
 *          produces:
 *             - application/json
 *          parameters:
 *               - in: path
 *                 name: id
 *                 type: String
 *                 require: true
 *          responses:
 *              200:
 *                 description: ok
 */
.get(authController.getUser)

/**
 * @swagger
 * /api/v1/user/{id}:
 *  patch:
 *     tags:
 *       - User
 *     summary: this api updates a specific user information
 *     parameters:
 *       - in: path
 *         name: id
 *         type: string
 *         require: true
 *       - in: body
 *         name: user
 *         description: this is the user update data
 *         require: true
 *         schema:
 *             type: object
 *             properties:
 *                  firstname:
 *                      type: string
 *                  middlename:
 *                      type: string
 *                  lastname:
 *                      type: string
 *                  email:
 *                      type: string
 *                      format: email
 *                  phone:
 *                      type: string
 *                  department:
 *                      type: string
 *                  role:
 *                      type: string
 *                      enum: ['hod','estate','admin']
 * 
 *     responses:
 *          200:
 *              description: OK
 */
.patch(authController.updateUser)
/**
 * @swagger
 * /api/v1/user/{id}:
 *  delete:
 *     tags:
 *       - User
 *     summary: This api deletes a user
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id of user
 *     responses:
 *          200:
 *              description: OK
 */
.delete(authController.deleteUser)

module.exports = router