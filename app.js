const dotenv = require('dotenv')
dotenv.config({path:'config.env'})

const express = require('express')
const mongoose = require('mongoose')
const authRoute = require('./routes/authRoute')
const loginRoute = require('./routes/loginRoute')
const HodRequestRoute = require('./routes/hodRequestRoute')
const HodAuditRoute = require('./routes/hodAuditRoute')
const HodStaffRoute = require('./routes/hodStaffRoute')
const DepartmentRoute = require('./routes/departmentRoute')
const AssetRoute = require('./routes/assetRoute')
const VenueRoute = require('./routes/venuRoute')
const helmet = require('helmet')
const cors = require('cors')
const ratelimit = require('express-rate-limit')
const sanitize = require ('express-mongo-sanitize')
const SwaggerDocs = require('./utils/swagger')
const CustomError = require('./utils/CustomError')
const globalErrorHandler = require('./controller/errorController')

const corsOptions ={
    origin: 'http://localhost:5173',
    optionsSuccessStatus:200.
}

const limiter = ratelimit({
    max:7000,
    windowMs:60*60*1000,
    message:'Too many request try again an hour time'

})

const app = express();
app.use(cors(corsOptions))
app.use(express.json({limit:'25KB'}))
// app.use('/api/v1',limiter)
app.use(sanitize())
app.use(helmet())
app.use('/api/v1/user',authRoute)
app.use('/api/v1/login',loginRoute)
app.use('/api/v1/hod/request', HodRequestRoute)
app.use('/api/v1/hod/audit',HodAuditRoute)
app.use('/api/v1/hod/staff',HodStaffRoute)
app.use('/api/v1/department',DepartmentRoute)
app.use('/api/v1/asset',AssetRoute)
app.use('/api/v1/venue',VenueRoute)
app.use(globalErrorHandler)

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

app.all('*',(req,res,next)=>{
    const err = new CustomError(`can't find ${req.originalUrl} on server`,404)
    next(err)
})