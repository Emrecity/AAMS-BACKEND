const express = require('express')
const loginController = require('../controller/loginController')

const router = express.Router()

router.route('/')
/**
 * @swagger
 * /api/v1/login:
 *  post:
 *      tags:
 *          - Login
 *      summary: This api use to login
 *      parameters:
 *          - in: body
 *            name: user
 *            schema:
 *              type: object
 *              properties:
 *                  email:
 *                      type: string
 *                  password:
 *                      type: string
 *      responses:
 *          200:
 *              description: Ok
 */
.post(loginController.login)

router.route('/forget-password')
/**
 * @swagger
 * /api/v1/login/forget-password:
 *  post:
 *      tags:
 *          - Login
 *      summary: this api gets the user email for reset process
 *      parameters:
 *          - in: body
 *            name: email
 *            required: true
 *            schema:
 *              type: object
 *              properties:
 *                  email:
 *                      type: string
 *                      format: email
 *                      
 *      responses:
 *          200:
 *              description: OK
 */
.post(loginController.forgotPassword)

router.route('/reset-password/:id')
/**
 * @swagger
 * /api/v1/login/reset-password/{id}:
 *  patch:
 *      tags:
 *          - Login
 *      summary: this api gets the user id for reset process
 *      parameters:
 *          - in: header
 *            name: authorization
 *          - in: path
 *            name: id
 *            require: true
 *          - in: body
 *            name: password
 *            required: true
 *            schema:
 *              type: object
 *              properties:
 *                  password:
 *                      type: string
 *                  confirmpassword:
 *                      type: string
 *      responses:
 *          200:
 *              description: OK
 */
.patch(loginController.resetPassword)

module.exports = router