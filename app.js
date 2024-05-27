const dotenv = require('dotenv')
dotenv.config({path:'config.env'})

const express = require('express')
const mongoose = require('mongoose')
const authRoute = require('./routes/authRoute')
const loginRoute = require('./routes/loginRoute')
const HodRequestRoute = require('./routes/hodRequestRoute')
const HodAuditRoute = require('./routes/hodAuditRoute')
const DepartmentRoute = require('./routes/departmentRoute')
const AssetRoute = require('./routes/assetRoute')
const helmet = require('helmet')
const cors = require('cors')
const SwaggerDocs = require('./utils/swagger')

const corsOptions ={
    origin: 'http://localhost:5173',
    optionsSuccessStatus:200.
}

const app = express();
app.use(cors(corsOptions))
app.use(express.json())
app.use(helmet())
app.use('/api/v1/user',authRoute)
app.use('/api/v1/login',loginRoute)
app.use('/api/v1/hod/request', HodRequestRoute)
app.use('/api/v1/hod/audit',HodAuditRoute)
app.use('/api/v1/department',DepartmentRoute)
app.use('/api/v1/asset',AssetRoute)

const Swagger = SwaggerDocs(app)


mongoose.connect('mongodb://localhost/AamsDb').then(()=>{
    console.log('Db connected')
app.listen( 3000,()=>{
    console.log('Server is up and running')
    Swagger
    
})
}).catch((err)=>{
    console.log(err)
})

