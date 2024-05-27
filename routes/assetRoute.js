const express = require('express')
const Controller = require('../controller/auditController')

const router = express.Router()

router.route('/')
/**
 * @swagger
 * /api/v1/asset:
 *  get:
 *      tags:
 *          - Asset
 *      summary: This api fetches all Asset in the db
 *      responses:
 *          200:
 *              description: ok
 */
.get(Controller.getAllAsset)

/**
 * @swagger
 * /api/v1/asset:
 *  post:
 *      tags:
 *         - Asset
 *      summary: This api creates a new asset
 *      parameters:
 *         - in: body
 *           name: data
 *           required: true
 *           schema: 
 *              type: object
 *              properties:
 *                  name:
 *                      type: string
 *                  description:
 *                      type: string
 *                  dateOfPurchase: 
 *                      type: string
 *                  identificationNumber:
 *                      type: string
 *                  department:
 *                      type: string
 *                  quantity:
 *                      type: number
 *      responses:
 *          200:
 *              description: OK
 */
.post(Controller.createAsset)

router.route('/:id')

/**
 * @swagger
 * /api/v1/asset/{id}:
 *  get:
 *      tags:
 *        - Asset
 *      summary: This api fetches an asset
 *      parameters:
 *          - in: path
 *            name: id
 *            description: id of the asset
 *            required: true
 *      responses:
 *          200:
 *             description: Ok
 */
.get(Controller.getOneAsset)

/**
 * @swagger
 * /api/v1/asset/{id}:
 *  put:
 *      tags:
 *         - Asset
 *      summary: This api update an asset
 *      parameters:
 *         - in: path
 *           name: id
 *           description: id of the asset
 *           required: true
 *         - in: body
 *           name: data
 *           required: true
 *           schema: 
 *              type: object
 *              properties:
 *                  name:
 *                      type: string
 *                  description:
 *                      type: string
 *                  dateOfPurchase: 
 *                      type: string
 *                  identificationNumber:
 *                      type: string
 *                  department:
 *                      type: string
 *                  quantity:
 *                      type: number
 *      responses:
 *          200:
 *              description: OK
 */
.put(Controller.updateAsset)

/**
 * @swagger
 * /api/v1/asset/{id}:
 *  delete:
 *      tags:
 *        - Asset
 *      summary: This api deletes an asset
 *      parameters:
 *          - in: path
 *            name: id
 *            description: id of the asset
 *            required: true
 *      responses:
 *          200:
 *             description: Ok
 */
.delete(Controller.deleteAsset)

module.exports = router